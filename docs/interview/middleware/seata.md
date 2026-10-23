---
title: 六、Seata面试题
description: Java基础面试题、Java面试题、中间件、Spring Cloud、Spring Cloud Alibaba、Seata
category: Java面试资料
tag:
  - 后端面试 
  - Java基础
  - Spring 
  - Spring Cloud
head:
  - - meta
    - name: keywords
      content: Java基础面试题、Java面试题、中间件、Spring Cloud、Spring Cloud Alibaba、Seata
---

适用：Java 后端、微服务、分布式事务面试，覆盖原理、AT/TCC/SAGA/XA、源码、踩坑、生产问题

## 一、基础概念（必问）
### 1. 什么是分布式事务？
分布式事务：一次业务操作，跨多个数据库 / 微服务，**要么全部成功，要么全部回滚**。 单机事务依靠 ACID；分布式场景下网络、服务随时可能失败，无法直接用本地事务。

CAP：分布式系统不能同时满足一致性、可用性、分区容错。分区容错必然存在，只能在 C 和 A 之间取舍。 BASE：基本可用、柔性状态、最终一致性。Seata 属于**最终一致性方案**。

### 2. Seata 是什么？
Seata（Simple Extensible Autonomous Transaction Architecture）阿里开源分布式事务框架。 核心目标：**对业务低侵入**，让微服务分布式事务像本地事务一样简单。 组件：

+ **TC (Transaction Coordinator)**：事务协调器，全局事务管理器（独立服务）
+ **TM (Transaction Manager)**：事务管理器，开启 / 提交 / 回滚全局事务（嵌入业务应用）
+ **RM (Resource Manager)**：资源管理器，管理分支事务，上报分支状态（嵌入业务应用）

**调用流程一句话**：TM 向 TC 申请全局事务 → RM 注册分支事务 → TC 协调所有分支统一提交 / 回滚。

### 3. Seata 四种模式对比（高频简答题）
表格

| 模式 | 原理 | 侵入性 | 性能 | 适用场景 |
| --- | --- | --- | --- | --- |
| AT | 无锁，基于 undo_log，一阶段提交 + 补偿回滚 | 极低 | 好 | 绝大多数 Java 微服务，最常用 |
| TCC | Try-Confirm-Cancel，业务写补偿接口 | 高 | 很好 | 核心资金、强隔离场景 |
| SAGA | 长事务，状态机驱动，正向 + 补偿接口 | 中 | 一般 | 长流程事务（订单履约、供应链） |
| XA | 数据库原生 XA 两阶段，锁资源 | 低 | 差 | 数据库支持 XA，并发低场景 |


面试重点：**AT 是面试问最多的**。

## 二、AT 模式（重中之重，90% 面试会深挖）
### 4. AT 模式工作原理，2PC 阶段
AT 是**无侵入的 2PC**，基于本地事务 + undo_log 日志。

前提：数据库支持本地事务（MySQL）

#### 一阶段（业务执行）
1. 执行业务 SQL 前，RM 解析 SQL，生成**before 镜像（修改前数据）**
2. 执行业务 update/insert/delete
3. 生成**after 镜像（修改后数据）**
4. 在**同一个本地事务**写入 undo_log 日志
5. 提交本地事务，释放数据库锁！！（关键点：一阶段就释放锁，区别传统 XA）
6. RM 上报分支事务状态给 TC。

✅ 重点：一阶段**本地事务提交，释放行锁**，性能优于 XA。undo_log 和业务 sql 在同一个本地事务，保证原子性。

#### 二阶段
+ **二阶段提交**：TC 收到所有分支成功，通知 RM 提交。RM 直接删除 undo_log，不需要做数据修复。
+ **二阶段回滚**：TC 收到失败信号，通知 RM 回滚。RM 读取 undo_log，对比数据镜像，生成补偿 SQL 执行回滚；回滚完成删除 undo_log。

### 5. undo_log 表结构
AT 模式必须在业务库建 undo_log 表。核心字段：

+ `id`：主键
+ `branch_id`：分支事务 ID
+ `xid`：全局事务 ID
+ `rollback_info`：镜像数据，json 存储 before/after
+ `log_status`：状态（0 待回滚，1 已提交）
+ `log_created` 创建时间
+ `log_modified` 修改时间

注意：undo_log 是业务数据库内的表，不是 TC 库。

### 6. XID 是什么，传递机制
**XID = 全局事务 ID**，由 TC 生成。

+ TM 开启全局事务时，TC 返回 XID
+ XID 通过**RPC 上下文传递**（Dubbo Filter / Spring MVC Interceptor），微服务调用链透传
+ RM 拿到 XID，自动注册分支事务到 TC

考点：跨服务调用必须传递 XID；如果 XID 丢失，Seata 不会生效，变成本地事务。

### 7. AT 模式 存在什么问题？【高频坑点】
1. **读隔离问题（脏读）** AT 一阶段提交释放锁，其他事务可以读到未提交的业务数据。Seata AT 默认**读未提交**。 解决：`SELECT ... FOR UPDATE` 悲观锁；或者使用 Seata 的`@GlobalLock`（全局锁）实现**读隔离**。
2. **写隔离问题（脏写）**

场景：全局事务 A 修改数据还没二阶段，事务 B 修改同一条记录。 AT 通过**全局锁**机制防止脏写： 分支修改数据时，会在 TC 注册全局锁；如果另一个事务修改同一行，拿不到全局锁，阻塞 / 抛出异常。 全局锁和数据库行锁不一样：全局锁保存在 TC。

3. 幂等问题 二阶段提交 / 回滚请求可能重复投递。RM 收到重复请求，通过`branch_id`判断，保证**幂等**，不会重复执行。
4. 空回滚 分支事务一阶段没有执行成功，本地事务没提交；TC 通知回滚。RM 识别为空回滚，记录标记，不报错。
5. 悬挂（非常高频！）

悬挂：二阶段回滚请求先到达 RM，之后一阶段业务 SQL 才执行。会导致回滚失效，脏数据。 原因：网络延迟，TC 回滚消息先到。 Seata 解决方案：**一阶段执行业务 SQL 前，先注册分支事务**。 如果回滚请求先到，RM 发现分支已注册但没有 undo_log，判定悬挂，拒绝执行业务 SQL。

面试背诵：脏读、脏写、幂等、空回滚、悬挂。5 大问题。

### 8. @GlobalTransactional 注解原理
`@GlobalTransactional` 是 TM 入口，基于 AOP 拦截。 执行流程：

1. AOP 拦截方法
2. TM 向 TC 申请全局事务，获取 XID，绑定到上下文
3. 执行业务方法，内部 RPC 调用传递 XID
4. 方法正常结束：TM 通知 TC 全局提交
5. 抛出异常：TM 通知 TC 全局回滚

注意：**方法内部 try-catch 吃掉异常，Seata 不会回滚！**

```plain
@GlobalTransactional
public void test(){
    try{
        // 远程调用
    }catch (Exception e){
        // 捕获异常不抛出，Seata感知不到异常，不会回滚！
    }
}
```

## 三、TCC 模式面试题
### 9. TCC 是什么？Try Confirm Cancel
TCC：Try（预留资源）、Confirm（确认执行业务）、Cancel（取消，释放资源），业务代码自己写补偿逻辑。

+ Try：检查资源，预留资源（冻结金额、锁定库存）
+ Confirm：确认执行业务，**必须幂等**，只有所有 Try 成功才执行
+ Cancel：释放预留资源，必须幂等，任一 Try 失败就执行

注意：TCC 没有 undo_log，完全业务层实现。

### 10. TCC 特点和缺点
优点：无数据库锁，性能高；灵活，可实现强隔离。 缺点：**业务侵入极高**，每个分布式接口都要写 3 套代码；需要自己处理幂等、防悬挂。 适用场景：金融、资金扣减。

### 11. TCC 和 AT 的区别
+ AT：框架自动生成 undo_log，业务无侵入；底层数据库层面补偿；存在脏读。
+ TCC：业务手写三个接口；应用层资源预留；隔离性更好。

## 四、SAGA & XA
### 12. SAGA 模式
长事务解决方案，状态机编排。两种实现：

1. 基于状态机：json 定义流程，正向服务 + 补偿服务
2. 编排模式：代码链式调用 原理：每一步成功继续；失败调用对应补偿接口，反向回滚。 缺点：没有锁，补偿逻辑需要自己写，无法隔离。适合长流程（如订单、物流）。

### 13. XA 模式
XA 是数据库标准两阶段协议。数据库提供 XA 事务接口。

+ 一阶段：准备（prepare），数据库锁资源
+ 二阶段：commit/rollback 缺点：**一阶段持有数据库锁**，长时间占用，并发差；数据库必须支持 XA。生产很少用。

## 五、Seata 架构、部署、注册配置
### 14. TC 支持哪些存储模式？
TC 全局事务会话存储：

1. **file**：文件存储，单机测试，不可集群。
2. **db**：数据库存储，推荐生产，支持 TC 集群。
3. redis：新版本支持。

生产 TC 必须 db 存储，集群部署保证高可用。

### 15. Seata 注册中心 & 配置中心支持哪些？
Nacos、Eureka、Consul、Redis、ZK。企业最常用：**Nacos**。 TC 注册到 Nacos，微服务 RM/TM 通过 Nacos 发现 TC 地址。

### 16. Seata 版本选型
+ 1.4.x：经典稳定版本，很多老项目在用
+ 1.5+：支持 Nacos2，优化 db 存储
+ 1.6+：支持 raft，TC 集群不需要依赖数据库存储（raft 集群）

## 六、生产踩坑 & 高频实战题（面试官最爱问）
### 17. Seata AT 什么时候失效？
1. 没有加 `@GlobalTransactional`
2. 异常被 try-catch 捕获，没有抛出
3. 跨服务调用 XID 丢失（filter 拦截失效）
4. 没有创建 undo_log 表
5. 不是同一个数据库连接（多数据源未配置 Seata 数据源代理）

重点：**必须代理数据源 DataSource**，否则 RM 无法拦截 SQL 生成 undo_log！

```plain
// 正确：Seata代理数据源
@Bean
public DataSource dataSource(DataSource originDataSource){
    return new DataSourceProxy(originDataSource);
}
```

### 18. 大事务问题
AT 一阶段 undo_log 会记录镜像，如果一次性更新大量数据，undo_log 体积巨大：

+ 数据库压力变大
+ 回滚慢 **建议：避免长事务，不要在全局事务写大量数据，不要全局事务包含 MQ、远程大查询。**

### 19. TC 宕机怎么办？
TC 协调中心，如果 TC 宕机：

+ 已经一阶段提交完成，等待二阶段：TC 恢复后，会**重试二阶段提交 / 回滚**（TC 持久化事务状态）
+ TC 集群部署，通过 Nacos+DB/RAFT 保证高可用。

注意：TC 不是单点故障，生产必须集群。事务状态持久化，重启不丢失。

### 20. Seata 和 MQ 事务消息怎么选择？
+ Seata：适合**强一致性**，跨微服务数据库操作。代价：有性能损耗。
+ MQ 事务消息（RocketMQ）：适合**最终一致性**，异步场景；适合通知、消息推送，不适合多 DB 强事务。 两者可以搭配使用。

### 21. 什么场景不建议使用 Seata AT？
1. 超高并发，不能容忍 undo_log 写入开销
2. 大量批量更新 SQL（undo_log 过大）
3. 多表复杂 DDL 语句（AT 只支持 DML：insert/update/delete）

AT 不支持 DDL 事务回滚。

## 七、源码相关面试题（进阶，中高级）
### 22. AT 模式核心类
+ `GlobalTransactionalInterceptor`：AOP 拦截器
+ `DataSourceProxy`：数据源代理
+ `UndoLogManager`：undo_log 读写
+ `TransactionCoordination`：分支事务协调

### 23. undo_log 回滚校验机制
回滚前，RM 会校验数据库当前数据和 undo_log after 镜像。 如果数据已经被其他业务修改，说明脏写，回滚失败，抛出异常。

防止数据被外部修改后，补偿 SQL 覆盖业务数据。

## 八、面试简答背诵版（可直接口述）
1. Seata 三大组件：TC 协调器、TM 事务管理器、RM 资源管理器。
2. AT 模式：一阶段执行业务 + 写 undo_log，本地事务提交释放锁；二阶段删日志或者回滚镜像。
3. AT 四大问题：脏读、脏写、空回滚、悬挂。
4. 脏读：一阶段提交释放锁，其他事务读到未提交数据；用 GlobalLock 解决。
5. 悬挂：二阶段回滚请求先到，一阶段业务后执行；解决方案先注册分支事务。
6. AT 必须代理数据源，否则无法拦截 SQL 生成 undo_log。
7. @GlobalTransactional 捕获异常不抛出，不会触发回滚。

