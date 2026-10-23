---
title: 七、Kafka面试题
description: Java基础面试题、Java面试题、中间件、Spring Cloud、Spring Cloud Alibaba、Kafka
category: Java面试资料
tag:
  - 后端面试 
  - Java基础
  - Spring 
  - Spring Cloud
head:
  - - meta
    - name: keywords
      content: Java基础面试题、Java面试题、中间件、Spring Cloud、Spring Cloud Alibaba、Kafka
---

适用：后端开发、Java 开发、大数据开发面试；覆盖基础概念、架构、原理、可靠性、性能、调优、运维、实战问题

## 一、基础概念篇
### 1. 什么是 Kafka？Kafka 的定位？
Kafka 是一款**分布式、高吞吐、可持久化、多副本**的消息中间件（消息队列），由 LinkedIn 开发，现在是 Apache 顶级项目。 核心定位：

1. 消息队列：异步解耦、削峰填谷
2. 流式数据平台：实时日志采集、事件流处理
3. 数据总线：系统之间数据同步

特点：高吞吐、持久化存储、分布式、多副本、支持消息回溯、支持多消费者组。

对比 RabbitMQ：Kafka 面向**海量日志 / 流式事件**；RabbitMQ 面向业务消息，路由能力强。

### 2. Kafka 核心术语：Broker、Topic、Partition、Replica、Offset、Producer、Consumer、ConsumerGroup
+ **Broker**：Kafka 服务节点，一个 Kafka 集群由多个 Broker 组成。
+ **Topic**：消息主题，逻辑概念，消息按 Topic 分类。
+ **Partition（分区）**：Topic 物理分片，**一个 Topic 分成多个 Partition，分布在不同 Broker**。Partition 是 Kafka 并发读写最小单元。
+ **Replica（副本）**：分区副本，分为 Leader 副本和 Follower 副本。所有读写走 Leader，Follower 只做同步，用于故障容灾。
+ **Leader**：分区主副本，处理读写请求。
+ **Follower**：从副本，被动同步 Leader 数据，Leader 宕机时，Follower 可竞选新 Leader。
+ **Offset（偏移量）**：消息在 Partition 内唯一序号，单调递增；消费者靠 offset 记录消费位置。
+ **Producer 生产者**：消息发送方，向 Topic 写消息。
+ **Consumer 消费者**：消息读取方。
+ **Consumer Group 消费者组**：一组消费者，**同一个分区只能被组内一个消费者消费**；组内消费者实现分区负载均衡；不同消费组互相独立，可以消费全量消息。

核心规则：`Partition数量决定消费组最大并发数`

### 3. Partition 分区的作用？
1. **水平扩展**：Topic 可以拆分成多个分区，分散到多个 broker，突破单机 IO 限制。
2. **提高并发**：生产者可以并行写多个分区；消费组内消费者可以并行消费不同分区。
3. **负载均衡**：消息可以按策略路由到不同分区。

缺点：分区越多，集群元数据压力、打开文件句柄、副本同步开销变大。不是分区越多越好。

### 4. 消息有序性，Kafka 能保证消息有序吗？
+ **全局有序：不能**。多个分区之间消息无法保证全局顺序。
+ **分区内有序：可以**。同一个 Partition 内，消息是写入顺序存储，消费也是顺序读取。

如何实现业务全局有序：

+ 业务上把所有相同 key 消息发到**同一个 partition**，牺牲并发换取单 key 有序。

### 5. Offset 保存在哪里？
Kafka 0.9 版本之后，offset 默认保存在 Kafka 内部主题：`__consumer_offsets`，不再存 Zookeeper。

+ `__consumer_offsets`是系统内置 topic，多副本存储。 好处：offset 和消息一起持久化，减少 zk 压力；支持 offset 自动提交。

旧版本 offset 存在 Zookeeper，不推荐。

## 二、架构与 Zookeeper 相关
### 6. Zookeeper 在 Kafka 中的作用？
Kafka 强依赖 ZK，主要作用：

1. **集群元数据管理**：保存 broker 列表、topic、分区、副本分配信息。
2. **Leader 选举**：分区 Leader 副本选举；Controller 节点选举。
3. 早期版本保存 consumer offset（新版移到`__consumer_offsets`）。
4. 注册 broker，broker 上线 / 下线感知。

Kafka 2.8+ 支持 KRaft 模式，**移除 Zookeeper 依赖**，元数据由 Controller 集群管理，解决 ZK 性能瓶颈。面试可以提 KRaft。

### 7. Kafka Controller 是什么？作用？
Controller 是集群中**其中一个 Broker**，由 ZK 选举出来。 职责：

1. 监听 broker、topic 变更。
2. 负责分区 Leader 切换、副本状态管理。
3. 管理分区重新分配。
4. 集群元数据变更通知给其他 broker。

集群只有 1 个 active Controller；Controller 挂掉，ZK 会快速重新选举新 Controller。

### 8. 副本机制：ISR、OSR、AR 是什么？
+ AR（Assigned Replicas）：分区**全部分配副本集合**（Leader + 所有 Follower）。
+ ISR（In-Sync Replicas）：**与 Leader 保持同步的副本集合**。Follower 落后 Leader 消息不超过阈值，才在 ISR。
+ OSR（Out-of-Sync Replicas）：不在 ISR 的副本，消息滞后太多。

ISR 是 Kafka 可靠性核心。Leader 宕机，**只能从 ISR 集合选举新 Leader**，保证数据不丢失。

什么时候 Follower 会被踢出 ISR：

1. Follower 长时间没有向 Leader 发送 fetch 请求。
2. Follower 同步消息落后超过 `replica.lag.time.max.ms`。

### 9. 副本同步原理？
1. Leader 收到 producer 消息，写入本地日志。
2. Follower 主动拉取（fetch）Leader 消息。
3. Follower 写入本地日志，发送 ack 给 Leader。
4. Leader 维护 ISR 列表。
5. Producer 发送 ack 策略由`acks`参数控制。

Follower 是主动拉取，不是 Leader 推送。

## 三、生产者 Producer 原理
### 10. Producer 发送消息流程
1. 生产者构造消息，指定 topic、key、value。
2. 序列化器（Serializer）序列化 key 和 value。
3. 分区器（Partitioner）：根据 key 计算 hash 选择 partition；key 为 null 则轮询。
4. 消息先写入**本地缓冲区（RecordAccumulator）**，不是直接发网络。
5. Sender 线程后台从缓冲区拉取消息，批量打包发送到对应 broker。
6. Broker 收到写入分区日志，返回 ack。
7. 收到 ack 成功；失败根据重试策略重试。

核心：**批量发送、缓冲区、异步发送**提升吞吐。

### 11. acks 参数详解（高频！）
acks 控制生产者消息投递可靠性，3 个取值：

+ `acks=0`：生产者发出去就认为成功，不等 Broker 响应。吞吐最高，**最容易丢消息**。
+ `acks=1`（默认）：Leader 副本写入成功返回 ack，不需要等 Follower 同步。Leader 宕机，Follower 还没同步，消息丢失。折中方案。
+ `acks=-1 / acks=all`：Leader 写入成功，并且**所有 ISR 内副本全部同步完成**才返回 ack。可靠性最高，吞吐下降。

生产高可靠场景：acks=all，配合 min.insync.replicas ≥2。

### 12. 消息重试、幂等性、事务
1. **重试 retries**：发送失败（网络抖动、临时 leader 切换）生产者自动重试。 问题：重试会导致**消息重复**，所以需要幂等。
2. **生产者幂等（idempotent producer）**：Kafka 0.11 + 支持。开启`enable.idempotence=true`。 原理：每个生产者分配 PID，消息带序列号。Broker 收到重复消息，根据 PID+seq 判断，去重。 限制：单分区、单会话内幂等。
3. **Kafka 事务（Transaction）**：支持跨分区、跨 topic 原子写入。要么全部成功，要么全部失败。 适用：消费 - 生产场景（流处理），`transactional.id`。

面试一句话：幂等解决单分区重复；事务解决跨分区原子性。

### 13. 分区器 Partitioner
+ key 不为 null：`hash(key) % partitionNum`，相同 key 固定到同一个分区。
+ key=null：轮询策略，消息均匀分散到各个 partition。 可以自定义分区器。

## 四、消费者 Consumer 原理
### 14. Consumer 消费消息流程
1. 消费者启动，向 Coordinator 发送请求，加入消费组。
2. Coordinator 负责消费组成员管理、分区分配。
3. 消费者发送`FetchRequest`拉取分区消息（消费者主动拉，不是 broker 推送）。
4. 消息经过反序列化。
5. 业务处理消息。
6. 提交 offset（自动提交 / 手动提交）。

Kafka 消费者是**拉模式（pull）**；RabbitMQ 是推模式 (push)。 优点：消费者自己控制拉取速率，防止压垮消费者。缺点：空轮询。

### 15. Consumer Coordinator 作用
每个消费组对应一个 Coordinator（某一台 broker）：

1. 消费组成员管理，心跳检测，判断消费者是否宕机。
2. 执行分区分配策略。
3. 管理 offset 提交，读写`__consumer_offsets`。

### 16. 消费者 Rebalance（重平衡）【超级高频】
#### 什么是 Rebalance？
消费组内消费者数量变化，触发**分区重新分配**，把分区重新分配给组内消费者。

#### 触发场景
1. 新消费者加入消费组
2. 消费者宕机 / 退出（心跳超时）
3. Topic 分区数量增加
4. 消费者主动离开组

#### Rebalance 问题
1. Rebalance 期间**整个消费组暂停消费**，不可用。
2. 如果频繁 rebalance 会导致消费卡顿、重复消费。

#### 如何减少 Rebalance？
1. 调大`session.timeout.ms`，合理心跳`heartbeat.interval.ms`（心跳时间一般是 session 超时 1/3）。
2. 避免长时间阻塞消息处理（不要在消费逻辑做耗时 IO）。
3. 不要频繁启停消费者。
4. 控制 max.poll.records，单次拉取消息不要太多，保证业务处理速度。

### 17. Offset 提交：自动提交 vs 手动提交
+ **自动提交 enable.auto.commit=true** 每隔`auto.commit.interval.ms`自动提交。 风险：消息已经拉取，业务还没处理完，offset 提交成功，程序 crash，**消息丢失**。
+ **手动提交 enable.auto.commit=false（生产推荐）** 业务处理成功之后再提交 offset。 两种：
    1. commitSync：同步提交，阻塞，失败抛异常。
    2. commitAsync：异步提交，不阻塞，可以加回调。

手动提交可能出现：业务处理成功，offset 提交失败 → **消息重复消费**。业务需要幂等。

### 18. 消费消息丢失 / 重复场景
1. **消息丢失**
    - 自动提交：消息拉取，offset 提交，业务异常宕机。
    - 生产者 acks 设置不当，acks=0/1，leader 宕机。
2. **消息重复消费（最常见）**
    - 业务处理完成，offset 提交失败；下次重启，从旧 offset 重新消费。
    - Rebalance 发生，分区被分配给其他消费者，offset 未提交。

结论：Kafka**不保证消息只消费一次，保证至少一次（At-Least-Once）**。业务层必须实现幂等。

消息投递语义：

+ At-Most-Once：最多一次，可能丢消息（offset 先提交）
+ At-Least-Once：至少一次，可能重复（消息处理完再提交 offset，生产常用）
+ Exactly-Once：精确一次。Kafka 通过幂等生产者 + 事务实现端到端精确一次。

## 五、存储机制
### 19. Kafka 存储结构，日志分段 LogSegment
Partition 不是单个文件，拆分为多个**LogSegment 日志段**。 每个 Segment 包含：

1. `.log`：消息数据文件
2. `.index`：偏移量索引文件（稀疏索引）
3. `.timeindex`：时间索引文件

每个 segment 有 baseOffset，代表该段第一条消息 offset。 当 segment 达到大小阈值（`log.segment.bytes`）或者时间到期，新建 segment。

### 20. 日志删除策略（消息保留）
消息不会消费完立刻删除，持久化保存，两种策略：

1. **基于时间（默认）**：`log.retention.hours`，默认 168 小时 7 天。过期 segment 删除。
2. **基于大小**：`log.retention.bytes`，partition 总大小上限，超过删除旧 segment。

注意：**消费 offset 和日志删除完全独立**。就算消息被消费，只要没到保留时间，消息还在磁盘。消费者可以重置 offset 回溯历史消息。

### 21. 稀疏索引原理
index 索引文件不会保存每条消息索引，**稀疏索引**，每隔若干条消息记录一次 offset 和文件物理位置。 查找消息：先定位 segment，查索引找到近似位置，再顺序扫描 log 文件找到目标消息。 优点：索引文件很小，内存占用低。

## 六、高可用、可靠性、丢失重复专项
### 22. 什么情况会丢消息？怎么防止消息丢失？
生产者侧丢失：

1. acks=0/1，Leader 宕机，Follower 未同步。
2. 消息发送到缓冲区，还没发送，进程 crash。 生产者解决方案：acks=all，min.insync.replicas >=2；开启生产者幂等；捕获异常重试。

Broker 侧丢失：

1. 副本数 1，broker 宕机磁盘损坏。 解决方案：副本数设置≥3；合理 ISR 机制。

消费者侧丢失： 自动提交 offset，业务未处理完成就提交 offset。 解决方案：关闭自动提交，**业务处理成功后手动提交 offset**。

### 23. 什么是消息积压？如何排查、处理？
消息积压：生产者写入速度 > 消费者消费速度，partition 消息持续堆积。

排查：

1. 监控每个 partition offset：`logEndOffset`（最新消息） - `consumerOffset` = 堆积条数。

原因：

1. 消费者业务处理慢（数据库慢、IO 阻塞）
2. 消费能力不足，消费者数量少
3. Rebalance 频繁，消费暂停
4. 生产者突增流量

处理方案：

1. 短期：增加消费者实例（最多等于 partition 数量）扩容消费组。
2. 优化消费代码，减少阻塞，异步处理。
3. 如果 partition 不够：增加 topic 分区（注意：分区增加会打乱 key 路由）。
4. 紧急：临时扩容消费，消费完成后缩容。
5. 消息过期时间调大，防止堆积太久消息被删除。

坑：消费者数量超过 partition 数量，多余消费者空闲，不能提升消费速度。

## 七、性能、调优
### 24. Kafka 高吞吐原理
1. 顺序写磁盘：日志文件追加写，磁盘顺序写性能接近内存。
2. PageCache 页缓存：操作系统缓存，读写走 pagecache，减少磁盘 IO。
3. 批量：生产者批量发送、日志批量刷盘。
4. 零拷贝 ZeroCopy：Broker 发送消息给消费者，使用 sendFile，内核态直接传输，减少用户态内核态拷贝。
5. 分区并行：多 partition 分散 IO 压力。

### 25. 刷盘机制 flush
Kafka 默认**不实时刷盘**，消息写入 PageCache 就返回成功。由操作系统异步刷入磁盘。 两个参数控制刷盘： `log.flush.interval.messages`：写多少条消息强制刷盘 `log.flush.interval.ms`：最长多久强制刷盘

不建议调低这两个参数频繁刷盘，严重降低吞吐。可靠性靠多副本，不是靠刷盘。

### 26. 常见调优参数
生产者：

+ batch.size：批量大小
+ linger.ms：等待时间，攒一批消息再发送
+ buffer.memory：生产者缓冲区大小
+ acks、retries、enable.idempotence

Broker：

+ num.network.threads：网络线程
+ num.io.threads：IO 线程
+ log.segment.bytes：日志段大小
+ default.replication.factor 默认副本数
+ min.insync.replicas

消费者：

+ max.poll.records：单次拉取消息数量
+ fetch.min.bytes、fetch.max.wait.ms
+ session.timeout.ms、heartbeat.interval.ms

## 八、面试综合题
### 27. Kafka 和 RocketMQ、RabbitMQ 对比
表格

| 中间件 | 特点 | 适用场景 |
| --- | --- | --- |
| Kafka | 高吞吐，日志流，分区，顺序分区内保证，事务较弱 | 日志采集、大数据、事件总线 |
| RocketMQ | 阿里，消息可靠性强，支持事务消息、死信、延迟消息 | 业务消息、金融业务 |
| RabbitMQ | 路由丰富，交换机，可靠性好，吞吐低 | 复杂业务路由，小型系统 |


### 28. 死信队列（DLQ）Kafka 怎么实现？
Kafka 原生没有死信队列。 业务自己实现：消费失败（多次重试仍然失败），把消息转发到死信 topic，人工排查。

RocketMQ/RabbitMQ 原生支持 DLQ。

### 29. Kafka 延迟消息？
Kafka**没有原生延迟消息**。 方案：

1. 业务轮询（不推荐）
2. 单独定时服务扫描 topic
3. 分 topic 按延迟等级存储（RocketMQ 原生支持延迟消息）

### 30. KRaft 模式，Kafka 移除 ZK 的原理？
传统 Kafka：ZK 保存元数据，ZK 瓶颈限制集群规模。 KRaft：

1. 元数据由一组 Controller 节点（Quorum）管理，Raft 协议选举。
2. 元数据日志持久化在 Kafka 本身。
3. Broker 不再依赖 ZK。 优点：更快的元数据操作，支持更大集群，降低运维复杂度。 缺点：新版本，部分老特性兼容问题。

## 九、面试场景题
### 场景 1：业务出现大量重复消费，怎么排查？
1. 确认是否开启自动提交，是否处理完才提交 offset。
2. 查看消费组是否频繁 rebalance，检查心跳、max.poll 阻塞。
3. 查看是否有消费者宕机重启，分区重新分配。
4. 解决方案：业务幂等（唯一键去重）；优化消费逻辑减少 rebalance。

### 场景 2：消息积压几十万条，怎么处理？
1. 先看分区堆积分布，定位是否某几个分区慢。
2. 检查消费代码有没有慢 SQL / 阻塞。
3. 增加消费者实例，上限等于分区数。
4. 临时扩容，消费完成后缩减。
5. 评估是否需要增加分区（注意 key 哈希路由变化）。

### 场景 3：如何保证消息不丢且不重复？
+ 不丢：生产者 acks=all，min.insync.replicas≥2；副本≥3；手动提交 offset。
+ 不重复：Kafka 只能做到 At-Least-Once；**业务幂等**是必须；开启生产者幂等，事务做端到端精确一次。
