---
title: 三、Nacos面试题
description: Java基础面试题、Java面试题、中间件、Spring Cloud、Spring Cloud Alibaba、Nacos
category: Java面试资料
tag:
  - 后端面试 
  - Java基础
  - Spring 
  - Spring Cloud
head:
  - - meta
    - name: keywords
      content: Java基础面试题、Java面试题、中间件、Spring Cloud、Spring Cloud Alibaba、Nacos
---

适用：Java 后端 / 微服务面试，SpringCloud Alibaba 体系，覆盖基础概念、核心原理、源码考点、踩坑、对比题

## 一、基础概念篇
### 1. 什么是 Nacos？Nacos 能做什么？
Nacos（Dynamic Naming and Configuration Service）是阿里开源的**动态服务发现、配置管理和服务管理平台**，是 Spring Cloud Alibaba 的核心组件。

两大核心能力：

1. **配置中心（Config）**：动态配置管理，配置热更新，不用重启应用；配置版本管理、灰度发布、权限管理。
2. **服务注册与发现（Naming）**：微服务注册中心，服务实例注册、心跳健康检查、服务列表推送。

附加能力：

+ 动态 DNS 服务
+ 元数据管理
+ 权重路由、负载均衡
+ 集群部署、多环境隔离

一句话总结：**Nacos = 注册中心 + 配置中心**

### 2. Nacos 2.x 和 1.x 最大区别？
1. **通信模型升级**：1.x 基于 HTTP 短轮询；2.x 底层使用 gRPC 长连接，性能大幅提升，推送延迟更低、长连接复用，减少大量 HTTP 请求。
2. **架构分层**：2.x 分离了 SDK 通信层，服务注册、配置订阅都走 gRPC。
3. **内存、吞吐量**：2.x 支持更大集群、更多实例，性能是 1.x 数倍。
4. 注意：**Nacos 2.x 服务端和客户端版本要配套，不兼容跨大版本混用**。

### 3. Nacos 核心概念解释
| 概念 | 说明 |
| --- | --- |
| Namespace（命名空间） | 最外层隔离，一般用来区分**环境**：dev/test/prod。不同 namespace 之间数据完全隔离 |
| Group（分组） | 同一 namespace 下分组，区分业务模块，默认`DEFAULT_GROUP` |
| DataId | 配置文件唯一标识，通常`服务名-环境.yaml`<br/>，一个 DataId 对应一个配置 |
| Cluster（集群） | 服务实例的集群，同机房 / 同区域实例归为一个 cluster，优先同集群调用 |
| Service | 微服务名称，注册中心里服务的唯一标识 |
| Instance | 服务实例，一台启动的微服务节点 |
| Metadata | 实例 / 配置附加元数据，自定义扩展信息 |


层级关系：`Namespace > Group > DataId`（配置）；`Namespace > Service > Cluster > Instance`（服务）

### 4. Namespace、Group 用途区别，怎么选型？
+ **Namespace：环境隔离（dev/test/prod）**，**完全隔离**，生产环境一定要单独 namespace，防止测试配置覆盖生产。
+ **Group：业务模块隔离**，同一个环境下，不同业务线，例如`PAY_GROUP`、`ORDER_GROUP`。

最佳实践：Namespace 管环境，Group 管业务，不要混用。

## 二、Nacos 配置中心（高频重点）
### 5. Nacos 配置中心工作原理
1. 应用启动时，Nacos SDK 连接 Nacos Server，根据 `namespace+group+dataId` 拉取配置。
2. SDK 在本地保存一份配置快照。
3. 客户端订阅该配置，**1.x 采用长轮询；2.x 使用 gRPC 长连接**。
4. 当服务端配置变更，服务端主动推送变更事件给客户端。
5. 客户端收到变更，更新本地配置，并触发 Spring 的 `@RefreshScope` 热更新。

关键点：**配置变更不是客户端定时拉全量，而是订阅变更通知，只拉变更配置**。

### 6. @RefreshScope 原理，为什么加这个注解才能动态刷新？
`@RefreshScope` 是 Spring Cloud 的 Scope，属于**懒加载 Scope**。

1. 被`@RefreshScope`修饰的 Bean，不会在容器启动时直接实例化。
2. 配置刷新事件触发时，会清空该 Scope 里面缓存的 Bean。
3. 下次使用 Bean 时，Spring 重新创建 Bean，读取最新配置。

坑点：

+ `@Value` 配合 `@RefreshScope` 才会刷新；`@ConfigurationProperties` 在新版本也支持自动刷新。
+ 静态变量上的`@Value`永远不会刷新。

### 7. Nacos 配置的加载优先级（面试必背）
SpringBoot 配置加载顺序，优先级从高到低：

1. Nacos 远端配置
2. bootstrap.yml / bootstrap.yaml
3. application.yml / application.yaml

注意：SpringBoot 2.4+ 默认不再加载 bootstrap，需要引入 `spring-cloud-starter-bootstrap` 依赖才能启用 bootstrap 配置。

### 8. Nacos 配置热更新流程
1. 在 Nacos 控制台修改配置，发布。
2. Nacos Server 记录版本号变化，通知所有订阅该 DataId 的客户端。
3. 客户端收到变更通知，从服务端拉取最新配置。
4. 客户端更新本地缓存，发布 `RefreshEvent` 事件。
5. Spring Cloud 监听到事件，触发`@RefreshScope` bean 销毁重建，完成配置刷新。

### 9. Nacos 配置持久化？存储在哪？
+ Nacos 元数据、配置信息、服务实例数据存储在 **MySQL**。
+ 单机模式默认内置 derby；生产环境必须切换 MySQL。
+ Nacos Server 内存会缓存配置和服务列表，提升读取性能。

集群模式下所有节点共享同一个 MySQL，保证数据一致性。

### 10. Nacos 配置灰度发布（Beta）原理
灰度：先给指定 IP / 机器发布新配置，验证没问题再全量发布。

1. 发布 Beta 配置，服务端标记该版本为灰度，绑定指定客户端 IP。
2. 只有指定 IP 的客户端拉取到新版本；其他客户端依旧使用旧配置。
3. 验证通过后，点击 “全量发布”，所有客户端收到新配置。

## 三、Nacos 服务注册发现（高频）
### 11. Nacos 服务注册、心跳、健康检查机制
Nacos 支持**两种健康检查模式**：

1. **AP 模式（临时实例，默认）：客户端心跳上报**
    - 服务启动向 Nacos 注册实例，标记为临时实例。
    - 客户端定时向 Server 发送心跳（默认 5s）。
    - Server 如果超过 15s 没收到心跳 → 实例不健康；超过 30s 没收到 → 删除实例。
    - 属于 AP，**最终一致性**，适合微服务业务实例。
2. **CP 模式（持久实例）：服务端主动探测**
    - 实例标记为持久实例，客户端**不发心跳**。
    - Nacos 服务端主动通过 TCP/HTTP 探测实例健康状态。
    - CP 模式，强一致性，适合数据库、中间件这类静态服务。

核心区分：临时实例 = 客户端心跳；持久实例 = 服务端探活。微服务一般用**临时实例**。

### 12. Nacos 临时实例 vs 持久实例对比
| | 临时实例（默认） | 持久实例 |
| --- | --- | --- |
| 一致性 | AP，最终一致 | CP，强一致 |
| 心跳 | 客户端上报心跳 | 无客户端心跳，服务端主动探测 |
| 宕机 | 30s 没心跳自动删除 | 宕机只标记不健康，不会删除 |
| 使用场景 | 微服务业务应用 | 数据库、MQ、静态服务 |


### 13. Nacos 服务发现流程
1. 微服务启动，向 Nacos 注册实例信息（IP、端口、权重、集群等）。
2. 消费者服务启动，订阅目标服务，拉取服务实例列表，缓存在本地。
3. 服务实例发生变化（上下线、健康状态变更），Nacos 主动推送变更列表给消费者。
4. 消费者本地负载均衡，调用目标实例。

消费者本地缓存实例列表，**不会每次调用都请求 Nacos**，提升性能。

### 14. Nacos 负载均衡策略
Nacos 自带负载均衡：

1. **权重负载均衡**：实例配置权重，权重越高流量越大；权重 = 0 不接收流量（优雅下线）。
2. **优先同集群调用**：优先调用本集群内实例，跨集群调用作为降级。
3. 配合 Ribbon / SpringCloud LoadBalancer 使用。

权重 0 常用于灰度、优雅下线，不直接 kill 进程。

### 15. Nacos 优雅下线怎么做？
1. 修改实例权重为 0，Nacos 立刻不再分发流量到该实例。
2. 等待存量请求处理完毕。
3. 关闭应用。
4. Nacos 在心跳超时后自动删除临时实例。

推荐方案：权重置 0，而不是直接 kill 服务。

## 四、Nacos 集群 & CAP 原理（难点，必问）
### 16. Nacos 同时支持 AP 和 CP，怎么切换？
Nacos 核心设计：**服务发现可以切换 AP/CP，配置中心固定 CP**。

+ 配置中心：**CP**，保证配置数据强一致，不能容忍配置不一致。
+ 服务注册发现：默认**AP（临时实例）**；当使用持久实例时，自动切换为 CP 模式。

AP：高可用优先，分区容忍，允许短暂数据不一致。 CP：一致性优先，网络分区时可能不可用。

### 17. Nacos 集群选举机制（Raft）
Nacos 使用简化版 Raft 协议（Distro 协议 + Raft）

1. **Distro 协议（AP 模式）**：AP 模式下，每个节点独立处理写请求，异步同步数据到其他节点，最终一致性。**服务临时实例使用 Distro**。
2. **Raft 协议（CP 模式）**：CP 模式，集群选举 leader，写请求必须经过 leader，过半节点写入成功才算提交，保证强一致。**配置中心、持久实例使用 Raft**。

重点区分：Distro 用于 AP 临时实例；Raft 用于 CP 场景。很多面试这里容易混淆。

### 18. Nacos 集群最少几个节点？
+ CP 场景（Raft）：至少 **3 节点**（可以容忍 1 个节点宕机）。
+ AP 场景（Distro）：2 节点也能跑，但生产推荐 3 节点。

生产建议：3 节点集群，MySQL 独立部署。

### 19. Distro 协议简单解释
Distro 是阿里自研 AP 协议：

1. 每个 Nacos 节点负责一部分实例数据分片。
2. 客户端可以任意节点写入实例，接收节点把数据转发给负责分片的节点。
3. 节点之间异步同步数据。
4. 读取时，本地没有的数据，去其他节点拉取。 优点：高可用、扩容简单；缺点：数据最终一致。

## 五、常见踩坑 & 问题排查（面试高频场景题）
### 20. Nacos 配置不刷新，排查思路
1. 确认依赖是否完整，SpringBoot 版本和 Cloud Alibaba 版本匹配。
2. 是否添加 `@RefreshScope`；静态变量不能刷新。
3. 核对 `namespace/group/dataId` 和控制台完全一致。
4. 查看客户端日志，是否成功订阅配置，有没有拉取到最新版本。
5. 2.4+ SpringBoot 是否缺少 bootstrap 依赖。
6. 检查配置是否有语法错误（yaml 缩进）。

### 21. Nacos 服务注册不上？排查
1. 服务地址：客户端能否连通 Nacos 服务端端口（8848）；2.x 还要开放 9848 (gRPC) 端口。
2. 实例 IP 识别问题：多网卡机器，需要手动指定`spring.cloud.nacos.discovery.ip`。
3. namespace、group 是否和控制台一致。
4. 版本匹配问题：客户端和服务端大版本不兼容。
5. 防火墙 / 安全组拦截。

### 22. Nacos 脑裂问题？
CP 模式（Raft）存在脑裂风险；AP 模式 Distro 不存在脑裂。

+ Raft 脑裂：网络分区，集群分裂成两个子集群，各自选出 leader。
+ Raft 机制：写请求需要过半节点确认，脑裂后，只有一个分区满足过半，另一个分区无法写入，防止数据冲突。

### 23. Nacos 雪崩问题怎么防止？
1. 客户端本地缓存配置和服务列表，服务端宕机不影响存量业务。
2. 心跳、订阅有重试退避策略，防止大量实例同时重试打满服务端。
3. Nacos 集群部署，不要单机。
4. 限流保护，Nacos 服务端自带限流。
5. 配置降级兜底，本地预留兜底配置。

## 六、对比类面试题（高频）
### 24. Nacos vs Eureka
1. Eureka：AP，只做注册中心，2.x 闭源停止维护。
2. Nacos：AP/CP 可切换，注册中心 + 配置中心，持续维护。
3. Eureka 自我保护机制；Nacos 使用心跳 + 健康检查。

结论：SpringCloud Alibaba 微服务优先 Nacos。

### 25. Nacos vs Consul
1. Consul：CP，注册 + 配置，自带 DNS，部署复杂。
2. Nacos：AP/CP 切换，中文友好，控制台强大，国内生态好。
3. Consul 强一致；Nacos 服务发现默认 AP 可用性更高。

### 26. Nacos vs Apollo
+ Apollo：携程配置中心，**只做配置**，不做注册中心；灰度、权限、审计能力很强。
+ Nacos：配置 + 注册一体，轻量，部署简单；配置精细化灰度弱于 Apollo。 选型：微服务整套体系选 Nacos；复杂配置灰度、多维度发布选 Apollo。

### 27. Nacos vs Spring Cloud Config
Spring Cloud Config：Git 作为存储，无主动推送，需要 Bus 消息总线刷新；功能弱。 Nacos：内置控制台，主动推送，无需消息总线，集成更简单。

## 七、源码 & 深挖面试题（进阶）
### 28. Nacos 客户端长轮询（1.x）原理
客户端发起 http 请求，服务端不会立刻返回。

+ 如果配置没变化，请求 hold 住，超时（默认 30s）返回空，客户端立刻发起下一轮请求。
+ 如果期间配置发生变更，立刻返回变更信息。 本质：**伪长连接，减少轮询频率**。2.x 替换成 gRPC 真实长连接。

### 29. Nacos 数据模型：配置版本机制
每次发布配置生成新 version；客户端订阅时携带版本号。服务端对比版本号，如果版本更新才返回新配置。支持回滚到历史版本。

### 30. Nacos 权限控制
支持 RBAC 权限模型，用户、角色、权限；可以控制命名空间、配置、服务的读写权限。生产环境一定要开启鉴权，不要默认账号密码。

