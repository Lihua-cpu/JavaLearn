---
title: 七、MySql 优化
description: Java基础面试题、Java面试题、MySql、MySql面试题
category: MySql面试资料
tag:
  - 后端面试 
  - Java基础
  - Mysql
  - 数据库
head:
  - - meta
    - name: keywords
      content: Java基础面试题、Java面试题、MySql、MySql面试题
---

# MySQL 高频面试题（后端面试必背，含答案，分基础、索引、SQL、架构、锁、事务）
适合 Java 后端面试，重点是**原理 + 实战优化**，大厂常问

## 一、基础概念
### 1. MySQL 存储引擎有哪些？InnoDB 和 MyISAM 区别？
**答案** 常用引擎：InnoDB、MyISAM、Memory、Archive。 InnoDB（MySQL5.5 + 默认）

1. 支持事务、ACID；MyISAM 不支持事务
2. 支持行级锁 + 表级锁；MyISAM 只有表锁
3. 支持外键；MyISAM 不支持
4. 支持崩溃安全恢复；MyISAM 崩溃容易损坏
5. 聚簇索引；MyISAM 是非聚簇索引
6. 读写均衡，适合高并发；MyISAM 读快、写阻塞，适合静态报表

面试加分：现在业务一律用 InnoDB。

### 2. 聚簇索引 vs 非聚簇索引
**答案**

+ **聚簇索引**：索引和数据存在一起，叶子节点就是完整行数据。InnoDB 主键就是聚簇索引。 特点：主键查询快；二级索引叶子节点存主键值，回表查询。
+ **非聚簇索引**：索引和数据分开，叶子节点存数据地址。MyISAM 全部是非聚簇。

考点：InnoDB 必须有主键，没主键自动选唯一索引，没有就内置 rowid。

## 二、索引（最高频！）
### 3. 什么是索引？底层 B + 树为什么不用 B 树 / 红黑树 / 哈希？
**答案** 索引是帮助数据库快速查找数据的数据结构。 InnoDB 索引底层：**B + 树**

1. B + 树：所有数据都在叶子节点，叶子节点链表相连，范围查询强；非叶子节点只存索引键，内存可放更多索引，IO 次数更少。
2. B 树：每个节点都存数据，一页能放索引少，IO 更多。
3. 红黑树：树高度高，大数据下磁盘 IO 多，适合内存，不适合磁盘数据库。
4. Hash 索引：等值查询快，**不支持范围查询、排序、前缀模糊查询**，Hash 冲突，InnoDB 自适应哈希索引 AHI。

### 4. 联合索引最左前缀原则？
**答案** 联合索引 `idx(a,b,c)`，满足最左前缀才能命中索引： ✅ a；a,b；a,b,c ❌ b；b,c；c；a,c（只能用到 a） 原理：索引是按 a 排序，a 相同再按 b 排序，b 相同再 c。跳过前面字段，后面有序性失效。

坑点：函数操作、隐式转换、like % 前缀会导致索引失效。

### 5. 索引失效场景有哪些？（背熟）
1. 联合索引不满足最左前缀
2. 索引列做运算、函数、类型转换：`where SUBSTR(name,1,1)='A'`
3. 隐式类型转换：`where phone=138xxxx`（字段 varchar，常量数字）
4. `like '%关键词'`，前缀 % 不走索引；`like 'key%'`可以
5. or 连接，一侧字段无索引：`where id=1 or name='xx'` name 无索引则全表
6. MySQL 优化器判断全表扫描比索引更快（数据量小，或者索引选择性差）
7. 字段使用！= <> not in（部分场景失效）

### 6. 什么是覆盖索引？好处？
**答案** 查询字段全部在索引里，**不需要回表**。 例：`idx(name,age)`，`select name,age from t where name='xx'` 好处：减少回表 IO，性能大幅提升。

面试一句话：避免回表，减少磁盘 IO。

### 7. 什么是回表？
**答案** 二级索引叶子节点只保存主键，查到主键后，再拿主键去聚簇索引查找完整行数据，这个过程叫回表。

### 8. 什么是索引下推（ICP，Index Condition Pushdown）？
**答案** MySQL5.6 引入。联合索引中，把**索引中包含的 where 条件**，下推到索引层过滤，减少回表次数。 例子：`idx(age,name)`，`where age>18 and name like '李%'` 没有 ICP：先拿 age>18 所有主键，全部回表，再过滤 name； 开启 ICP：在索引节点直接过滤 name，只把满足 name 的主键回表。

### 9. 索引设计原则？
1. 选择性高的字段建索引（区分度高，性别这种低选择性不要单独建索引）
2. 联合索引，区分度高的放前面
3. 尽量使用覆盖索引，避免回表
4. 索引不要过多，写操作（insert/update/delete）要维护索引，消耗性能
5. 字符串索引，可以前缀索引，减少索引大小
6. 主键尽量用自增 ID，避免主键随机写入导致 B + 树页分裂

### 10. 前缀索引，优缺点？
**答案** 对长字符串，只取前 N 个字符建立索引：`index (email(10))` 优点：索引体积更小，节省内存。 缺点：无法做覆盖索引，order by/group by 无法使用前缀索引；区分度下降。

## 三、SQL 优化相关
### 11. explain 关键字怎么看？重点字段
**答案**`explain select ...`，看执行计划，核心字段：

1. `id`：查询序号，子查询 id 大优先执行；id 相同从上往下
2. `select_type`：SIMPLE 简单查询、PRIMARY 主查询、SUBQUERY 子查询、DERIVED 派生表
3. `table`：访问哪张表
4. `type`（**最重要**）访问类型：性能从优到差 `system > const > eq_ref > ref > range > index > ALL` 目标：至少 range，尽量 ref，杜绝 ALL 全表扫描
5. `possible_keys`：可能用到索引
6. `key`：实际使用索引，null 没走索引
7. `key_len`：索引使用字节长度，判断联合索引使用多少列
8. `rows`：预估扫描行数，越小越好
9. `Extra` 额外信息：
+ `Using index`：覆盖索引 ✅
+ `Using filesort`：文件排序，没有可用索引，需要排序 ❌ 需要优化
+ `Using temporary`：创建临时表，group by 常见 ❌ 需要优化
+ `Using index condition`：索引下推 ICP ✅

### 12. Using filesort 是什么，怎么优化？
**答案** 无法利用索引排序，MySQL 在内存 / 磁盘上排序。 优化：建立合适联合索引，把 order by 字段放到联合索引后面，满足最左前缀。

### 13. limit 大分页优化：select * from t limit 100000,10
**问题**：offset 很大，数据库扫描 10w 行再丢弃，很慢。 优化方案：

1. 主键过滤：`select * from t where id > 100000 limit 10`（主键有序）
2. 子查询先查主键：`select * from t where id in (select id from t limit 100000,10)`
3. 业务层面：禁止跳页，只支持上一页下一页（移动端常用）

### 14. in 和 exists 的区别？
**答案**

+ in：子查询结果集小，适合外表大、内表小。MySQL8 优化后差别变小。
+ exists：外表小，内表大；exists 是循环外表，每次查询内表，找到匹配就返回。

旧版本：小表驱动大表。MySQL 优化器会自动调整，但是手写 SQL 尽量遵循。

### 15. count (*)、count (1)、count (主键)、count (字段) 区别
**答案** InnoDB 下：

+ count (*)：统计行数，忽略 null，MySQL 优化最好
+ count (1)：和 count (*) 性能几乎一样
+ count (主键 id)：读取主键，统计，略慢
+ count (列)：统计该字段不为 null 的值；字段存在 null，结果会少。

结论：统计总行数推荐 count (*)。

## 四、事务与锁（高频）
### 16. 事务四大特性 ACID
A 原子性、C 一致性、I 隔离性、D 持久性。 原子性 undo log；持久性 redo log；隔离性锁 + MVCC；一致性是最终目标。

### 17. 事务隔离级别，InnoDB 默认级别？
**答案**

1. 读未提交 Read Uncommitted
2. 读已提交 Read Committed（RC）
3. 可重复读 Repeatable Read（RR，InnoDB 默认）
4. 串行化 Serializable

问题：脏读、不可重复读、幻读

+ 脏读：读到其他事务未提交数据
+ 不可重复读：同一事务，两次读同一数据，中间被别的事务修改提交
+ 幻读：同一事务，范围查询，别的事务新增 / 删除，导致前后行数不一样

RR 级别：解决脏读、不可重复读；**通过 MVCC + 间隙锁解决幻读**。

### 18. MVCC 原理（非常高频）
**答案** 多版本并发控制。InnoDB RC/RR 实现，不加锁实现读，提升并发。 核心：隐藏列（DB_TRX_ID、DB_ROLL_PTR）+ undo log + read view。

+ DB_TRX_ID：最后修改这条记录事务 ID
+ DB_ROLL_PTR：指向 undo log 旧版本数据
+ undo log：保存数据历史版本，形成版本链
+ read view：RR 事务开启时生成，RC 每次查询生成。用来判断版本可见性。

快照读：普通 select，走 MVCC 不加锁；当前读：select ... for update /update/delete，加行锁。

### 19. InnoDB 锁：行锁、表锁、意向锁、间隙锁、临键锁
1. 行锁（Record Lock）：锁定索引记录。**InnoDB 行锁是基于索引！没有索引会降级表锁**
2. 意向锁：意向共享 IS、意向排他 IX，表级锁，配合行锁使用，避免全表扫描判断行锁。
3. 间隙锁 Gap Lock：RR 级别才有，锁定索引之间间隙，防止插入，解决幻读。
4. 临键锁 Next-Key Lock：行锁 + 间隙锁，InnoDB RR 默认锁算法。

## 五、架构 & 慢查询优化
### 20. 慢查询是什么，怎么开启？
**答案** 慢查询日志：记录执行时间超过阈值 long_query_time 的 SQL。 开启：`slow_query_log=ON`，设置阈值，记录慢 SQL，定位优化目标。 工具：mysqldumpslow 分析慢日志。

### 21. MySQL 优化整体思路（面试总结话术）
1. 先抓慢 SQL，慢查询日志、show processlist、performance_schema
2. explain 看执行计划，定位索引问题
3. 优化索引，避免索引失效，建立联合索引、覆盖索引
4. 优化 SQL 写法：避免大分页、避免 select *、减少 join 大表、少用子查询
5. 架构层面：读写分离（主写从读），分库分表（水平 / 垂直拆分）
6. 缓存：Redis 减少 DB 查询压力
7. 参数调优：buffer pool，调整连接数等

### 22. 读写分离原理，怎么实现？
主库写，从库读；binlog 同步主库数据到从库。 实现：程序层硬编码；中间件 MyCat、ShardingSphere-JDBC。 问题：主从延迟。

### 23. 主从复制原理，主从延迟原因？
主库 binlog 记录变更；从库 IO 线程拉取 binlog，存入 relay log；SQL 线程重放 relay log。 延迟原因：

1. 主库写入压力大，binlog 生成快
2. 从库 SQL 线程单线程重放（5.7 后并行复制）
3. 网络带宽
4. 从库机器性能差

### 24. 分库分表，垂直拆分 vs 水平拆分
垂直分：按字段拆分，大表拆多张表，比如用户基础信息、用户扩展信息； 水平分：按行拆分，id 取模、range 范围，把大量数据分到多个表。 问题：分布式 ID、跨表 join、分页、事务、扩容。

## 六、坑点 & 场景题（面试官喜欢现场问）
### 25. select * 为什么不推荐？
1. 读取不需要字段，增加 IO，无法走覆盖索引
2. 更多数据传输，网络开销大
3. 表结构变更，业务容易出问题

### 26. varchar 和 char 区别？
char 固定长度，varchar 变长。char 查询快，浪费空间；varchar 节省空间，需要记录长度。

现在字符串优先 varchar；长度固定短字符串（手机号）可用 char。

### 27. MySQL 大事务有什么问题？
1. 锁持有时间长，容易锁等待、死锁
2. undo log 占用大，MVCC 版本链长，查询性能下降
3. binlog 大，主从延迟变大
4. 回滚成本高

---

# 附加：面试口述精简版（自我介绍 / 项目中 MySQL 优化话术）
项目中做 MySQL 优化，首先打开慢查询日志捕获慢 SQL，用 explain 分析执行计划。优先优化索引，遵循最左前缀，尽量使用覆盖索引减少回表，规避索引失效场景。优化 SQL 写法，禁止 select *，优化大分页。热点数据放 Redis 减轻数据库压力。大数据量场景做读写分离；数据量持续增长，做分库分表。同时注意事务控制，避免长事务，减少锁冲突。

