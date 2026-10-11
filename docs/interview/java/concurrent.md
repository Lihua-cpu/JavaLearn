---
title: 十、并发
description: 十、并发
category: 面试资料
tag:
  - 后端面试 
  - Java基础
head:
  - - meta
    - name: keywords
      content: Java基础面试题、Java面试题
---


## [1、Java 中垃圾回收有什么目的？什么时候进行垃圾回收？](#_1、java-中垃圾回收有什么目的-什么时候进行垃圾回收)
**垃圾回收的目的**：识别并且丢弃应用不再使用的对象来释放和重用资源。

**垃圾回收**：是在内存中存在没有引用的对象或超过作用域的对象时进行的。

## [2、线程之间如何通信及线程之间如何同步？](#_2、线程之间如何通信及线程之间如何同步)
通信：指线程之间如何来交换信息。

**线程之间的通信机制：共享内存和消息传递**

Java 采用的是 **共享内存** 模型，Java 线程之间的通信总是隐式的进行，整个通信机制对程序员完全透明。

## [3、什么是 Java 内存模型？](#_3、什么是-java-内存模型)
**共享内存模型指的就是 Java 内存模型(简称 JMM)**，JMM 决定一个线程对共享变量的写入时, 能对另一个线程可见。从抽象的角度来看，JMM 定义了线程和主内存之间的抽象关系：线程之间的共享变量存储在主内存（main memory）中，每个线程都有一个私有的本地内存（local memory），本地内存中存储了该线程以读/写共享变量的副本。本地内存是 JMM 的一个抽象概念，并不真实存在。它涵盖了缓存，写缓冲区，寄存器以及其他的硬件和编译器优化。

## [4、线程池有几种实现方式？](#_4、线程池有几种实现方式)
线程池的创建方法总共有 7 种，但总体来说可分为 2 类：

1. 通过 ThreadPoolExecutor 创建的线程池；
2. 通过 Executors 创建的线程池。

线程池的创建方式总共包含以下 7 种（其中 6 种是通过 Executors 创建的，1 种是通过 ThreadPoolExecutor 创建的）：

1. Executors.newFixedThreadPool：创建一个固定大小的线程池，可控制并发的线程数，超出的线程会在队列中等待；
2. Executors.newCachedThreadPool：创建一个可缓存的线程池，若线程数超过处理所需，缓存一段时间后会回收，若线程数不够，则新建线程；
3. Executors.newSingleThreadExecutor：创建单个线程数的线程池，它可以保证先进先出的执行顺序；
4. Executors.newScheduledThreadPool：创建一个可以执行延迟任务的线程池；
5. Executors.newSingleThreadScheduledExecutor：创建一个单线程的可以执行延迟任务的线程池；
6. Executors.newWorkStealingPool：创建一个抢占式执行的线程池（任务执行顺序不确定）【JDK 1.8 添加】。
7. ThreadPoolExecutor：最原始的创建线程池的方式，它包含了 7 个参数可供设置，会更加可控。

## [5、自定义线程池的各个参数含义？](#_5、自定义线程池的各个参数含义)
**参数 1：corePoolSize**

核心线程数，线程池中始终存活的线程数。

**参数 2：maximumPoolSize**

最大线程数，线程池中允许的最大线程数，当线程池的任务队列满了之后可以创建的最大线程数。

**参数 3：keepAliveTime**

最大线程数可以存活的时间，当线程中没有任务执行时，最大线程就会销毁一部分，最终保持核心线程数量的线程。

**参数 4：unit**

单位是和参数 3 存活时间配合使用的，合在一起用于设定线程的存活时间 ，参数 keepAliveTime 的时间单位有以下 7 种可选：

+ TimeUnit.DAYS：天
+ TimeUnit.HOURS：小时
+ TimeUnit.MINUTES：分
+ TimeUnit.SECONDS：秒
+ TimeUnit.MILLISECONDS：毫秒
+ TimeUnit.MICROSECONDS：微妙
+ TimeUnit.NANOSECONDS：纳秒

**参数 5：workQueue**

一个阻塞队列，用来存储线程池等待执行的任务，均为线程安全，它包含以下 7 种类型：

+ ArrayBlockingQueue：一个由数组结构组成的有界阻塞队列；
+ LinkedBlockingQueue：一个由链表结构组成的有界阻塞队列；
+ SynchronousQueue：一个不存储元素的阻塞队列，即直接提交给线程不保持它们；
+ PriorityBlockingQueue：一个支持优先级排序的无界阻塞队列；
+ DelayQueue：一个使用优先级队列实现的无界阻塞队列，只有在延迟期满时才能从中提取元素；
+ LinkedTransferQueue：一个由链表结构组成的无界阻塞队列。与 SynchronousQueue 类似，还含有非阻塞方法；
+ LinkedBlockingDeque：一个由链表结构组成的双向阻塞队列。

较常用的是 LinkedBlockingQueue 和 Synchronous，线程池的排队策略与 BlockingQueue 有关。

**参数 6：threadFactory**

线程工厂，主要用来创建线程，默认为正常优先级、非守护线程。

**参数 7：handler**

拒绝策略，拒绝处理任务时的策略，系统提供了 4 种可选：

+ AbortPolicy：拒绝并抛出异常。
+ CallerRunsPolicy：使用当前调用的线程来执行此任务。
+ DiscardOldestPolicy：抛弃队列头部（最旧）的一个任务，并执行当前任务。
+ DiscardPolicy：忽略并抛弃当前任务。

默认策略为 AbortPolicy。

```java
ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(4, 9, 0L, TimeUnit.SECONDS, new LinkedBlockingDeque<>(2));
```

创建了一个 `ThreadPoolExecutor` 对象，并设置了以下参数：

+ `corePoolSize`：线程池的核心线程数为 4，即线程池中始终保持的活动线程数。
+ `maximumPoolSize`：线程池的最大线程数为 9，即线程池中允许的最大线程数，包括核心线程和非核心线程。
+ `keepAliveTime`：空闲线程的存活时间为 0 秒，在空闲时间超过该值时，多余的线程将被终止。
+ `unit`：存活时间的时间单位，这里是秒。
+ `workQueue`：使用了一个容量为 2 的 `LinkedBlockingDeque` 作为等待队列，用于存储等待执行的任务。

这个线程池的特点是：

+ 当有新任务提交时，如果核心线程数小于 `corePoolSize`，则会创建新的核心线程来执行任务。
+ 如果核心线程数已达到 `corePoolSize`，但是等待队列未满，则任务会被添加到等待队列中。
+ 如果等待队列已满，但是当前线程数小于 `maximumPoolSize`，则会创建新的非核心线程来执行任务。
+ 如果当前线程数已达到 `maximumPoolSize`，并且等待队列也已满，则根据线程池的拒绝策略来处理新任务。

可以使用 `threadPoolExecutor` 对象来提交任务并执行。例如，您可以使用 `execute()` 方法提交 `Runnable` 任务或使用 `submit()` 方法提交 `Callable` 任务。请记得在不需要使用线程池时，调用 `shutdown()` 方法来关闭线程池，以释放资源。

## [6、wait vs sleep 的区别](#_6、wait-vs-sleep-的区别)
共同点：wait() ，wait(long) 和 sleep(long) 的效果都是让当前线程暂时放弃 CPU 的使用权，进入阻塞状态

不同点：

| 不同点 | wait | sleep |
| --- | --- | --- |
| 方法归属 | wait()，wait(long) 都是 Object 的成员方法，每个对象都有 | sleep(long) 是 Thread 的静态方法 |
| 醒来时机 | wait(long) 和 wait() 还可以被 notify 唤醒，wait() 如果不唤醒就一直等下去, 它们都可以被打断唤醒 | 执行 sleep(long) 和 wait(long) 的线程都会在等待相应毫秒后醒来, 它们都可以被打断唤醒 |
| 锁特性 | wait 方法的调用必须先获取 wait 对象的锁    wait 方法执行后会释放对象锁，允许其它线程获得该对象锁（我放弃 cpu，但你们还可以用） | 而 sleep 则无此限制    sleep 如果在 synchronized 代码块中执行，并不会释放对象锁（我放弃 cpu，你们也用不了） |


## [7、 lock vs synchronized 的区别](#_7、-lock-vs-synchronized-的区别)
lock 和 synchronized 都是用于实现线程同步的机制，但它们有一些区别：

+ 语法和使用方式：synchronized 是 Java 语言内置的关键字，可以直接在方法或代码块中使用。而 lock 是一个接口，需要通过调用其方法来获取锁和释放锁。
+ 灵活性：lock 提供了更大的灵活性。它可以实现更复杂的同步需求，例如可重入性、公平性、条件变量等。而 synchronized 是基于 Java 语言内置的监视器锁实现的，功能较为简单，只能实现基本的同步。
+ 性能：在低竞争的情况下，synchronized 的性能可能比 lock 更好，因为 synchronized 是由 JVM 底层实现的，经过了优化。但在高竞争的情况下，lock 的性能可能更好，因为它提供了更细粒度的控制和更高的并发性。
+ 异常处理：lock 可以在获取锁时设置超时时间，并在超时后返回，避免线程一直等待。而 synchronized 在获取锁时，如果无法获取到锁，线程会一直阻塞等待。
+ 可中断性：lock 提供了 lockInterruptibly()方法，可以在等待锁的过程中响应中断请求。而 synchronized 无法响应中断请求，一旦获取锁，线程会一直执行，直到释放锁。

## [8、悲观锁 vs 乐观锁的区别](#_8、悲观锁-vs-乐观锁的区别)
+ 悲观锁的代表是 synchronized 和 Lock 锁
    - 其核心思想是【线程只有占有了锁，才能去操作共享变量，每次只有一个线程占锁成功，获取锁失败的线程，都得停下来等待】
    - 线程从运行到阻塞、再从阻塞到唤醒，涉及线程上下文切换，如果频繁发生，影响性能
    - 实际上，线程在获取 synchronized 和 Lock 锁时，如果锁已被占用，都会做几次重试操作，减少阻塞的机会
+ 乐观锁的代表是 AtomicInteger，使用 cas 来保证原子性
    - 其核心思想是【无需加锁，每次只有一个线程能成功修改共享变量，其它失败的线程不需要停止，不断重试直至成功】
    - 由于线程一直运行，不需要阻塞，因此不涉及线程上下文切换
    - 它需要多核 cpu 支持，且线程数不应超过 cpu 核数

## [9、你了解 ThreadLocal 吗？](#_9、你了解-threadlocal-吗)
**作用**

+ ThreadLocal 可以实现【资源对象】的线程隔离，让每个线程各用各的【资源对象】，避免争用引发的线程安全问题
+ ThreadLocal 同时实现了线程内的资源共享

**原理**

每个线程内有一个 ThreadLocalMap 类型的成员变量，用来存储资源对象

+ 调用 set 方法，就是以 ThreadLocal 自己作为 key，资源对象作为 value，放入当前线程的 ThreadLocalMap 集合中
+ 调用 get 方法，就是以 ThreadLocal 自己作为 key，到当前线程中查找关联的资源值
+ 调用 remove 方法，就是以 ThreadLocal 自己作为 key，移除当前线程关联的资源值

ThreadLocalMap 的一些特点

+ key 的 hash 值统一分配
+ 初始容量 16，扩容因子 2/3，扩容容量翻倍
+ key 索引冲突后用开放寻址法解决冲突

**弱引用 key**

ThreadLocalMap 中的 key 被设计为弱引用，原因如下

+ Thread 可能需要长时间运行（如线程池中的线程），如果 key 不再使用，需要在内存不足（GC）时释放其占用的内存

**内存释放时机**

+ 被动 GC 释放 key 
    - 仅是让 key 的内存释放，关联 value 的内存并不会释放
+ 懒惰被动释放 value 
    - get key 时，发现是 null key，则释放其 value 内存
    - set key 时，会使用启发式扫描，清除临近的 null key 的 value 内存，启发次数与元素个数，是否发现 null key 有关
+ 主动 remove 释放 key，value 
    - 会同时释放 key，value 的内存，也会清除临近的 null key 的 value 内存
    - 推荐使用它，因为一般使用 ThreadLocal 时都把它作为静态变量（即强引用），因此无法被动依靠 GC 回收

## [10、start VS run 的区别](#_10、start-vs-run-的区别)
1. **start（）** 方法来启动线程，真正实现了多线程运行。这时无需等待 run 方法体代码执行完毕， 可以直接继续执行下面的代码。
2. 通过调用 Thread 类的 start()方法来启动一个线程， 这时此线程是处于就绪状态， 并没有运行。
3. 方法 run()称为线程体，它包含了要执行的这个线程的内容，线程就进入了运行状态，开始运行 run 函数当中的代码。 Run 方法运行结束， 此线程终止。然后 CPU 再调度其它线程。

## [11、什么是 volatile 关键字？它的作用是什么？](#_11、什么是-volatile-关键字-它的作用是什么)
`volatile` 是 Java 中的关键字，用于修饰变量。它的主要作用是确保多个线程之间对变量的可见性和有序性。当一个变量被声明为

`volatile` 时，它将具备以下特性：

+ 可见性：对一个 `volatile` 变量的写操作会立即被其他线程可见，读操作也会读取最新的值。
+ 有序性：`volatile` 变量的读写操作具备一定的顺序性，不会被重排序。
1. **保证线程间的可见性**

保证了不同线程对这个变量进行操作时的可见性，即一个线程修改了某个变量的值，这新值对其他线程来说是立即可见的, volatile 关键字会强制将修改的值立即写入主存。

```java
// 可见性例子
// -Xint
public class ForeverLoop {
    static boolean stop = false;

    public static void main(String[] args) {
        new Thread(() -> {
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            stop = true;
            System.out.println("modify stop to true...");
        }).start();
        foo();
    }

    static void foo() {
        int i = 0;
        while (!stop) {
            i++;
        }
        System.out.println("stopped... c:"+ i);
    }
}
```

当执行上述代码的时候，发现 foo()方法中的循环是结束不了的，也就说读取不到共享变量的值结束循环。

主要是因为在 JVM 虚拟机中有一个 JIT（即时编辑器）给代码做了优化。

上述代码

```java
while (!stop) {
i++;
}
```

在很短的时间内，这个代码执行的次数太多了，当达到了一个阈值，JIT 就会优化此代码，如下：

```java
while (true) {
i++;
}
```

当把代码优化成这样子以后，及时 `stop` 变量改变为了 `false` 也依然停止不了循环，

有两种解决办法：

+ 在程序运行的时候加入 vm 参数 `-Xint` 表示禁用即时编辑器，不推荐，得不偿失（其他程序还要使用）
+ 在修饰 `stop` 变量的时候加上 `volatile`, 表示当前代码禁用了即时编辑器，问题就可以解决

```java
static volatile boolean stop = false;
```

2. **禁止进行指令重排序**

## [12、volatile 关键字和 synchronized 关键字有什么区别？](#_12、volatile-关键字和-synchronized-关键字有什么区别)
+ `volatile` 关键字用于修饰变量，而 `synchronized` 关键字用于修饰代码块或方法。
+ `volatile` 关键字保证了变量的可见性和有序性，但不提供原子性。而 `synchronized` 关键字不仅保证了可见性和有序性，还提供了原子性。
+ 多个线程访问 `volatile` 变量时，不会阻塞线程，而 `synchronized` 关键字会对代码块或方法进行加锁，可能会阻塞其他线程的访问。

## [13、volatile 关键字如何确保可见性和有序性？](#_13、volatile-关键字如何确保可见性和有序性)
+ `volatile` 关键字通过使用内存屏障和禁止重排序来确保可见性和有序性。
+ 写操作：对一个 `volatile` 变量的写操作会立即刷新到主内存中，并清空本地缓存，使其他线程可见。
+ 读操作：对一个 `volatile` 变量的读操作会从主内存中读取最新的值，并刷新本地缓存。

## [14、什么情况下应该使用 volatile 关键字？](#_14、什么情况下应该使用-volatile-关键字)
+ 当多个线程访问同一个变量时，且其中有一个线程进行写操作，其他线程进行读操作，可以考虑使用 `volatile` 关键字。
+ 当变量的值不依赖于当前值，或者只有单一的写操作，可以考虑使用 `volatile` 关键字。

## [15、volatile 关键字能否替代锁（synchronized）？](#_15、volatile-关键字能否替代锁-synchronized)
`volatile` 关键字不能替代锁（`synchronized`），因为它无法提供原子性的操作。`volatile` 只能保证可见性和有序性，但无法解决多线程并发修改同一变量的问题。

## [16、volatile 关键字是否能够解决线程安全问题？](#_16、volatile-关键字是否能够解决线程安全问题)
`volatile` 关键字不能解决所有的线程安全问题。它只能保证对变量的单个读/写操作具有可见性和有序性。对于复合操作（例如自增、自减等），`volatile` 无法保证原子性。

## [17、volatile 关键字和原子性有什么关系？](#_17、volatile-关键字和原子性有什么关系)
+ `volatile` 关键字不能保证操作的原子性。原子性指的是一个操作是不可中断的，要么全部执行成功，要么全部失败。
+ 如果需要保证操作的原子性，可以使用 `synchronized` 关键字或 `java.util.concurrent.atomic` 包下的原子类。

## [18、volatile 关键字对于单例模式中的双重检查锁定有什么作用？](#_18、volatile-关键字对于单例模式中的双重检查锁定有什么作用)
+ 在双重检查锁定的单例模式中，使用 `volatile` 关键字修饰单例对象的引用，可以确保多线程环境下的正确性。
+ `volatile` 关键字可以防止指令重排序，从而避免在多线程环境下获取到未完全初始化的实例对象。

## [19、你知道 synchronized 关键字的底层原理？](#_19、你知道-synchronized-关键字的底层原理)
Synchronized【对象锁】采用互斥的方式让同一时刻至多只有一个线程能持有【对象锁】，其它线程再想获取这个【对象锁】时就会阻塞住

如下抢票的代码，如果不加锁，就会出现超卖或者一张票卖给多个人

```java
public class TicketDemo {
    static Object lock = new Object();
    int ticketNum = 10;
    public synchronized void getTicket() {
        synchronized (this) {
            if (ticketNum <= 0) {
                return;
            }
            System.out.println(Thread.currentThread().getName() + "抢到一张票,剩余:" + ticketNum);
            // 非原子性操作
            ticketNum--;
        }
    }

    public static void main(String[] args) {
        TicketDemo ticketDemo = new TicketDemo();
        for (int i = 0; i < 20; i++) {
            new Thread(() -> {
                ticketDemo.getTicket();
            }).start();
        }
    }
}
```

**Monitor**

Synchronized 底层其实就是一个 Monitor，Monitor 被翻译为监视器，是由 jvm 提供，c++语言实现

在代码中想要体现 monitor 需要借助 javap 命令查看 clsss 的字节码，比如以下代码：

```java
public class SyncTest {

    static final Object lock = new Object();
    static int counter = 0;
    public static void main(String[] args) {
        synchronized (lock) {
            counter++;
        }
    }
}
```

找到这个类的 class 文件，在 class 文件目录下执行 `javap -v SyncTest.class`，反编译效果如下：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727664835-4941ef52-46f3-4e36-82dc-1b07d9b5c13b.png)

+ monitorenter 上锁开始的地方
+ monitorexit 解锁的地方
+ 其中被 monitorenter 和 monitorexit 包围住的指令就是上锁的代码
+ 有两个 monitorexit 的原因，第二个 monitorexit 是为了防止锁住的代码抛异常后不能及时释放锁

在使用了 synchornized 代码块时需要指定一个对象，所以 synchornized 也被称为对象锁

monitor 主要就是跟这个对象产生关联，如下图

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727664921-00071649-8b28-40be-b3da-f5648224bfa7.png)

Monitor 内部具体的存储结构：

+ Owner：存储当前获取锁的线程的，只能有一个线程可以获取
+ EntryList：关联没有抢到锁的线程，处于 Blocked 状态的线程
+ WaitSet：关联调用了 wait 方法的线程，处于 Waiting 状态的线程

具体的流程：

+ 代码进入 synchorized 代码块，先让 lock（对象锁）关联的 monitor，然后判断 Owner 是否有线程持有
+ 如果没有线程持有，则让当前线程持有，表示该线程获取锁成功
+ 如果有线程持有，则让当前线程进入 entryList 进行阻塞，如果 Owner 持有的线程已经释放了锁，在 EntryList 中的线程去竞争锁的持有权（非公平）
+ 如果代码块中调用了 wait()方法，则会进去 WaitSet 中进行等待

参考回答：

+ Synchronized【对象锁】采用互斥的方式让同一时刻至多只有一个线程能持有【对象锁】
+ 它的底层由 monitor 实现的，monitor 是 jvm 级别的对象（ C++实现），线程获得锁需要使用对象（锁）关联 monitor
+ 在 monitor 内部有三个属性，分别是 owner、entrylist、waitset
+ 其中 owner 是关联的获得锁的线程，并且只能关联一个线程；entrylist 关联的是处于阻塞状态的线程；waitset 关联的是处于 Waiting 状态的线程

## [20、Monitor 实现的锁属于重量级锁，你了解过锁升级吗？](#_20、monitor-实现的锁属于重量级锁-你了解过锁升级吗)
+ Monitor 实现的锁属于重量级锁，里面涉及到了用户态和内核态的切换、进程的上下文切换，成本较高，性能比较低。
+ 在 JDK 1.6 引入了两种新型锁机制：偏向锁和轻量级锁，它们的引入是为了解决在没有多线程竞争或基本没有竞争的场景下因使用传统锁机制带来的性能开销问题。

#### [1、对象的内存结构](#_1、对象的内存结构)
在 HotSpot 虚拟机中，对象在内存中存储的布局可分为 3 块区域：对象头（Header）、实例数据（Instance Data）和对齐填充

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727664958-e67dc55c-5ac7-485b-b730-b4b4daec1754.png)

我们需要重点分析 MarkWord 对象头

#### [2、MarkWord](#_2、markword)
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727664906-f63544c7-c0c5-48c3-b248-6d52cfd0e8c9.png)

+ hashcode：25 位的对象标识 Hash 码
+ age：对象分代年龄占 4 位
+ biased_lock：偏向锁标识，占 1 位 ，0 表示没有开始偏向锁，1 表示开启了偏向锁
+ thread：持有偏向锁的线程 ID，占 23 位
+ epoch：偏向时间戳，占 2 位
+ ptr_to_lock_record：轻量级锁状态下，指向栈中锁记录的指针，占 30 位
+ ptr_to_heavyweight_monitor：重量级锁状态下，指向对象监视器 Monitor 的指针，占 30 位

我们可以通过 lock 的标识，来判断是哪一种锁的等级

+ 后三位是 001 表示无锁
+ 后三位是 101 表示偏向锁
+ 后两位是 00 表示轻量级锁
+ 后两位是 10 表示重量级锁

#### [3、再说 Monitor 重量级锁](#_3、再说-monitor-重量级锁)
每个 Java 对象都可以关联一个 Monitor 对象，如果使用 synchronized 给对象上锁（重量级）之后，**该对象头的 Mark Word 中就被设置指向 Monitor 对象的指针**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727664909-ac90cb20-e336-4405-bd74-69ededfeeb12.png)

简单说就是：每个对象的对象头都可以设置 monoitor 的指针，让对象与 monitor 产生关联

#### [4、轻量级锁](#_4、轻量级锁)
在很多的情况下，在 Java 程序运行时，同步块中的代码都是不存在竞争的，不同的线程交替的执行同步块中的代码。这种情况下，用重量级锁是没必要的。因此 JVM 引入了轻量级锁的概念。

```java
static final Object obj = new Object();

public static void method1() {
    synchronized (obj) {
        // 同步块 A
        method2();
    }
}

public static void method2() {
    synchronized (obj) {
        // 同步块 B
    }
}
```

**加锁的流程**

1.在线程栈中创建一个 Lock Record，将其 obj 字段指向锁对象。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727665599-fde3aa78-01cc-4c4d-9965-a48fac0ee716.png)

2.通过 CAS 指令将 Lock Record 的地址存储在对象头的 mark word 中（数据进行交换），如果对象处于无锁状态则修改成功，代表该线程获得了轻量级锁。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727665545-6f8a610c-3059-41b4-bf16-b555b5819f50.png)

3.如果是当前线程已经持有该锁了，代表这是一次锁重入。设置 Lock Record 第一部分为 null，起到了一个重入计数器的作用。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727665522-cc06e63f-cfaf-43f1-aa51-896377d94388.png)

4.如果 CAS 修改失败，说明发生了竞争，需要膨胀为重量级锁。

**解锁过程**

1.遍历线程栈, 找到所有 obj 字段等于当前锁对象的 Lock Record。

2.如果 Lock Record 的 Mark Word 为 null，代表这是一次重入，将 obj 设置为 null 后 continue。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727665591-d2e1f5c0-1f89-48ee-a70a-d1a7553bfc1d.png)

3.如果 Lock Record 的 Mark Word 不为 null，则利用 CAS 指令将对象头的 mark word 恢复成为无锁状态。如果失败则膨胀为重量级锁。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727665569-961fccaa-47cb-4d86-a8af-2567bbd32b2f.png)

#### [5、偏向锁](#_5、偏向锁)
轻量级锁在没有竞争时（就自己这个线程），每次重入仍然需要执行 CAS 操作。

Java 6 中引入了偏向锁来做进一步优化：只有第一次使用 CAS 将线程 ID 设置到对象的 Mark Word 头，之后发现

这个线程 ID 是自己的就表示没有竞争，不用重新 CAS。以后只要不发生竞争，这个对象就归该线程所有

```java
static final Object obj = new Object();

public static void m1() {
    synchronized (obj) {
        // 同步块 A
        m2();
    }
}

public static void m2() {
    synchronized (obj) {
        // 同步块 B
        m3();
    }
}

public static void m3() {
    synchronized (obj) {

    }
}
```

**加锁的流程**

1.在线程栈中创建一个 Lock Record，将其 obj 字段指向锁对象。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727666101-476181ce-e1d3-4fa0-856f-75db44d8df93.png)

2.通过 CAS 指令将 Lock Record 的 **线程 id** 存储在对象头的 mark word 中，同时也设置偏向锁的标识为 101，如果对象处于无锁状态则修改成功，代表该线程获得了偏向锁。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727666127-5ac10d44-e867-42da-bb4f-33d4b59f380f.png)

3.如果是当前线程已经持有该锁了，代表这是一次锁重入。设置 Lock Record 第一部分为 null，起到了一个重入计数器的作用。与轻量级锁不同的时，这里不会再次进行 cas 操作，只是判断对象头中的线程 id 是否是自己，因为缺少了 cas 操作，性能相对轻量级锁更好一些

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727666180-bf813e69-9023-4f83-9363-e156ebcd3017.png)

解锁流程参考轻量级锁

#### [6、总结](#_6、总结)
Java 中的 synchronized 有偏向锁、轻量级锁、重量级锁三种形式，分别对应了锁只被一个线程持有、不同线程交替持有锁、多线程竞争锁三种情况。

| | **描述** |
| --- | --- |
| 重量级锁 | 底层使用的 Monitor 实现，里面涉及到了用户态和内核态的切换、进程的上下文切换，成本较高，性能比较低。 |
| 轻量级锁 | 线程加锁的时间是错开的（也就是没有竞争），可以使用轻量级锁来优化。轻量级修改了对象头的锁标志，相对重量级锁性能提升很多。每次修改都是 CAS 操作，保证原子性 |
| 偏向锁 | 一段很长的时间内都只被一个线程使用锁，可以使用了偏向锁，在第一次获得锁时，会有一个 CAS 操作，之后该线程再获取锁，只需要判断 mark word 中是否是自己的线程 id 即可，而不是开销相对较大的 CAS 命令 |


**一旦锁发生了竞争，都会升级为重量级锁**

## [21、你知道 JMM（Java 内存模型）吗？](#_21、你知道-jmm-java-内存模型-吗)
JMM(Java Memory Model)Java 内存模型, 是 java 虚拟机规范中所定义的一种内存模型。

Java 内存模型(Java Memory Model)描述了 Java 程序中各种变量(线程共享变量)的访问规则，以及在 JVM 中将变量存储到内存和从内存中读取变量这样的底层细节

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727666178-fcd49af5-1786-4f64-9243-170f1bc2a8eb.png)

特点：

1. 所有的共享变量都存储于主内存(计算机的 RAM)这里所说的变量指的是实例变量和类变量。不包含局部变量，因为局部变量是线程私有的，因此不存在竞争问题。
2. 每一个线程还存在自己的工作内存，线程的工作内存，保留了被线程使用的变量的工作副本。
3. 线程对变量的所有的操作(读，写)都必须在工作内存中完成，而不能直接读写主内存中的变量，不同线程之间也不能直接访问对方工作内存中的变量，线程间变量的值的传递需要通过主内存完成。

## [22、CAS 你知道吗？谈谈你的理解](#_22、cas-你知道吗-谈谈你的理解)
CAS 的全称是： Compare And Swap(比较再交换)，它体现的一种乐观锁的思想，在无锁情况下保证线程操作共享数据的原子性。

在 JUC（ java.util.concurrent ）包下实现的很多类都用到了 CAS 操作

+ AbstractQueuedSynchronizer（AQS 框架）
+ AtomicXXX 类

我们还是基于刚才学习过的 JMM 内存模型进行说明

+ 线程 A 与线程 B 都从主内存中获取变量 int a = 100, 同时放到各个线程的工作内存中

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727666234-a57db025-f808-418d-a12c-9fc71aeda969.png)

一个当前内存值 V、旧的预期值 A、即将更新的值 B，当且仅当旧的预期值 A 和内存值 V 相同时，将内存值修改为 B 并返回 true，否则什么都不做，并返回 false。如果 CAS 操作失败，通过自旋的方式等待并再次尝试，直到成功

+ 线程 1 操作：V：int a = 100，A：int a = 100，B：修改后的值：int a = 101 (a++) 
    - 线程 1 拿 A 的值与主内存 V 的值进行比较，判断是否相等
    - 如果相等，则把 B 的值 101 更新到主内存中

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727666604-757c23da-c815-434a-9dee-26d2e120bc1a.png)

+ 线程 2 操作：V：int a = 100，A：int a = 100，B：修改后的值：int a = 99(a--) 
    - 线程 2 拿 A 的值与主内存 V 的值进行比较，判断是否相等(目前不相等，因为线程 1 已更新 V 的值 99)
    - 不相等，则线程 2 更新失败

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727666686-c620fcd9-a51c-4252-94e9-ac766e424e3a.png)

+ 自旋锁操作
    - 因为没有加锁，所以线程不会陷入阻塞，效率较高
    - 如果竞争激烈，重试频繁发生，效率会受影响

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727666730-b4fe5ffa-60c7-4090-bcaa-cdf11b6eba28.png)

需要不断尝试获取共享内存 V 中最新的值，然后再在新的值的基础上进行更新操作，如果失败就继续尝试获取新的值，直到更新成功

#### [1、CAS 底层实现](#_1、cas-底层实现)
CAS 底层依赖于一个 Unsafe 类来直接调用操作系统底层的 CAS 指令

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727666781-6b210cf9-5368-416e-a7e2-d814f8063569.png)

都是 native 修饰的方法，由系统提供的接口执行，并非 java 代码实现，一般的思路也都是自旋锁实现

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727666848-c184b120-10bd-49f6-aecc-1b7a0bd2da38.png)

在 java 中比较常见使用有很多，比如 ReentrantLock 和 Atomic 开头的线程安全类，都调用了 Unsafe 中的方法

+ ReentrantLock 中的一段 CAS 代码

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727667186-8cc44887-04e2-412c-b971-d207ff91e17f.png)

#### [2、乐观锁和悲观锁](#_2、乐观锁和悲观锁)
+ CAS 是基于乐观锁的思想：最乐观的估计，不怕别的线程来修改共享变量，就算改了也没关系，我吃亏点再重试呗。
+ synchronized 是基于悲观锁的思想：最悲观的估计，得防着其它线程来修改共享变量，我上了锁你们都别想改，我改完了解开锁，你们才有机会。

## [23、什么是 AQS？](#_23、什么是-aqs)
全称是 AbstractQueuedSynchronizer，是阻塞式锁和相关的同步器工具的框架，它是构建锁或者其他同步组件的基础框架.

是多线程中的队列同步器，是一种锁机制，

**AQS 与 Synchronized 的区别**

| **synchronized** | **AQS** |
| --- | --- |
| 关键字，c++ 语言实现 | java 语言实现 |
| 悲观锁，自动释放锁 | 悲观锁，手动开启和关闭 |
| 锁竞争激烈都是重量级锁，性能差 | 锁竞争激烈的情况下，提供了多种解决方案 |


AQS 常见的实现类

+ ReentrantLock 阻塞式锁
+ Semaphore 信号量
+ CountDownLatch 倒计时锁

**工作机制**:

+ 在 AQS 中维护了一个使用了 volatile 修饰的 state 属性来表示资源的状态，0 表示无锁，1 表示有锁
+ 提供了基于 FIFO 的等待队列，类似于 Monitor 的 EntryList
+ 条件变量来实现等待、唤醒机制，支持多个条件变量，类似于 Monitor 的 WaitSet

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727667188-77bbb91b-917f-4131-a00a-3844e6db5d94.png)

+ 线程 0 来了以后，去尝试修改 state 属性，如果发现 state 属性是 0，就修改 state 状态为 1，表示线程 0 抢锁成功
+ 线程 1 和线程 2 也会先尝试修改 state 属性，发现 state 的值已经是 1 了，有其他线程持有锁，它们都会到 FIFO 队列中进行等待，
+ FIFO 是一个双向队列，head 属性表示头结点，tail 表示尾结点

**如果多个线程共同去抢这个资源是如何保证原子性的呢？**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727667274-207f30be-3bca-424b-bcb2-9515c5c27cd5.png)

在去修改 state 状态的时候，使用的 cas 自旋锁来保证原子性，确保只能有一个线程修改成功，修改失败的线程将会进入 FIFO 队列中等待

**AQS 是公平锁吗，还是非公平锁？**

+ 新的线程与队列中的线程共同来抢资源，是非公平锁
+ 新的线程到队列中等待，只让队列中的 head 线程获取锁，是公平锁

比较典型的 AQS 实现类 ReentrantLock，它默认就是非公平锁，新的线程与队列中的线程共同来抢资源

## [24、ReentrantLock 的实现原理，你知道嘛?](#_24、reentrantlock-的实现原理-你知道嘛)
ReentrantLock 意思为可重入锁，指的是一个线程能够对一个临界资源重复加锁。

与 synchronized 相比

| | ReentrantLock | Synchronized |
| --- | --- | --- |
| 锁机制 | 依赖 AQS | 监视器模式 |
| 灵活性 | 支持响应中断，超时，尝试获取锁 | 不灵活 |
| 释放形式 | unlock()方法释放锁 | 自动释放监视器 |
| 锁类型 | 公平锁&非公平锁 | 非公平锁 |
| 条件队列 | 可关联多个队列 | 关联一个队列 |
| 可重入性 | 可重入 | 可重入 |


代码实现：

```java
// **************************Synchronized的使用方式**************************
// 1.用于代码块
synchronized (this) {}
// 2.用于对象
synchronized (object) {}
// 3.用于方法
public synchronized void test () {}
// 4.可重入
for (int i = 0; i < 100; i++) {
	synchronized (this) {}
}

// **************************ReentrantLock的使用方式**************************
public void test () throw Exception {
	// 1.初始化选择公平锁、非公平锁 传递参数则是公平 不传则是非公平
	ReentrantLock lock = new ReentrantLock(true);
	// 2.可用于代码块
	lock.lock();
	try {
		try {
			// 3.支持多种加锁方式，比较灵活; 具有可重入特性
			if(lock.tryLock(100, TimeUnit.MILLISECONDS)){ }
		} finally {
			// 4.手动释放锁
			lock.unlock()
		}
	} finally {
		lock.unlock();
	}
}
```

**实现原理**

ReentrantLock 主要利用 CAS+AQS 队列来实现。它支持公平锁和非公平锁，两者的实现类似

构造方法接受一个可选的公平参数（默认非公平锁），当设置为 true 时，表示公平锁，否则为非公平锁。公平锁的效率往往没有非公平锁的效率高，在许多线程访问的情况下，公平锁表现出较低的吞吐量。

查看 ReentrantLock 源码中的构造方法：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727667301-efac4519-dd26-418c-8846-f10c539b0ed1.png)

提供了两个构造方法，不带参数的默认为非公平，如果使用带参数的构造函数，并且传的值为 true，则是公平锁

其中 NonfairSync 和 FairSync 这两个类父类都是 Sync

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727667344-6b433e7d-8656-487d-a760-fc28092225af.png)

而 Sync 的父类是 AQS，所以可以得出 ReentrantLock 底层主要实现就是基于 AQS 来实现的

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727667722-cb6a27be-f944-44f0-86a4-5be532a22c15.png)

**工作流程**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727667713-c8833b53-005a-4273-8a73-cc96c7f24230.png)

+ 线程来抢锁后使用 cas 的方式修改 state 状态，修改状态成功为 1，则让 exclusiveOwnerThread 属性指向当前线程，获取锁成功
+ 假如修改状态失败，则会进入双向队列中等待，head 指向双向队列头部，tail 指向双向队列尾部
+ 当 exclusiveOwnerThread 为 null 的时候，则会唤醒在双向队列中等待的线程
+ 公平锁则体现在按照先后顺序获取锁，非公平体现在不在排队的线程也可以抢锁

## [25、synchronized 和 Lock 有什么区别 ?](#_25、synchronized-和-lock-有什么区别)
+ 语法层面 
    - synchronized 是关键字，源码在 jvm 中，用 c++ 语言实现
    - Lock 是接口，源码由 jdk 提供，用 java 语言实现
    - 使用 synchronized 时，退出同步代码块锁会自动释放，而使用 Lock 时，需要手动调用 unlock 方法释放锁
+ 功能层面 
    - 二者均属于悲观锁、都具备基本的互斥、同步、锁重入功能
    - Lock 提供了许多 synchronized 不具备的功能，例如获取等待状态、公平锁、可打断、可超时、多条件变量
    - Lock 有适合不同场景的实现，如 ReentrantLock， ReentrantReadWriteLock
+ 性能层面 
    - 在没有竞争时，synchronized 做了很多优化，如偏向锁、轻量级锁，性能不赖
    - 在竞争激烈时，Lock 的实现通常会提供更好的性能

## [26、说一下线程池的核心参数（线程池的执行原理知道嘛）](#_26、说一下线程池的核心参数-线程池的执行原理知道嘛)
线程池核心参数主要参考 ThreadPoolExecutor 这个类的 7 个参数的构造函数

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727667799-4c844fb9-c06d-46bb-bf4d-ca3abb7b5225.png)

+ corePoolSize 核心线程数目
+ maximumPoolSize 最大线程数目 = (核心线程+救急线程的最大数目)
+ keepAliveTime 生存时间 - 救急线程的生存时间，生存时间内没有新任务，此线程资源会释放
+ unit 时间单位 - 救急线程的生存时间单位，如秒、毫秒等
+ workQueue - 当没有空闲核心线程时，新来任务会加入到此队列排队，队列满会创建救急线程执行任务
+ threadFactory 线程工厂 - 可以定制线程对象的创建，例如设置线程名字、是否是守护线程等
+ handler 拒绝策略 - 当所有线程都在繁忙，workQueue 也放满时，会触发拒绝策略

**执行原理**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727667799-9d9909b8-201d-46ea-910b-18442f54a930.png)

1. 任务在提交的时候，首先判断核心线程数是否已满，如果没有满则直接添加到工作线程执行
2. 如果核心线程数满了，则判断阻塞队列是否已满，如果没有满，当前任务存入阻塞队列
3. 如果阻塞队列也满了，则判断线程数是否小于最大线程数，如果满足条件，则使用临时线程执行任务，如果核心或临时线程执行完成任务后会检查阻塞队列中是否有需要执行的线程，如果有，则使用非核心线程执行任务
4. 如果所有线程都在忙着（核心线程+临时线程），则走拒绝策略 
    - AbortPolicy：直接抛出异常，默认策略；
    - CallerRunsPolicy：用调用者所在的线程来执行任务；
    - DiscardOldestPolicy：丢弃阻塞队列中靠最前的任务，并执行当前任务；
    - DiscardPolicy：直接丢弃任务；

可参考下面这段执行案例

```java
public class TestThreadPoolExecutor {

    static class MyTask implements Runnable {
        private final String name;
        private final long duration;

        public MyTask(String name) {
            this(name, 0);
        }

        public MyTask(String name, long duration) {
            this.name = name;
            this.duration = duration;
        }

        @Override
        public void run() {
            try {
                LoggerUtils.get("myThread").debug("running..." + this);
                Thread.sleep(duration);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        @Override
        public String toString() {
            return "MyTask(" + name + ")";
        }
    }

    public static void main(String[] args) throws InterruptedException {
        AtomicInteger c = new AtomicInteger(1);
        ArrayBlockingQueue<Runnable> queue = new ArrayBlockingQueue<>(2);
        ThreadPoolExecutor threadPool = new ThreadPoolExecutor(
                2,
                3,
                0,
                TimeUnit.MILLISECONDS,
                queue,
                r -> new Thread(r, "myThread" + c.getAndIncrement()),
                new ThreadPoolExecutor.AbortPolicy());
        showState(queue, threadPool);
        threadPool.submit(new MyTask("1", 3600000));
        showState(queue, threadPool);
        threadPool.submit(new MyTask("2", 3600000));
        showState(queue, threadPool);
        threadPool.submit(new MyTask("3"));
        showState(queue, threadPool);
        threadPool.submit(new MyTask("4"));
        showState(queue, threadPool);
        threadPool.submit(new MyTask("5",3600000));
        showState(queue, threadPool);
        threadPool.submit(new MyTask("6"));
        showState(queue, threadPool);
    }

    private static void showState(ArrayBlockingQueue<Runnable> queue, ThreadPoolExecutor threadPool) {
        try {
            Thread.sleep(300);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        List<Object> tasks = new ArrayList<>();
        for (Runnable runnable : queue) {
            try {
                Field callable = FutureTask.class.getDeclaredField("callable");
                callable.setAccessible(true);
                Object adapter = callable.get(runnable);
                Class<?> clazz = Class.forName("java.util.concurrent.Executors$RunnableAdapter");
                Field task = clazz.getDeclaredField("task");
                task.setAccessible(true);
                Object o = task.get(adapter);
                tasks.add(o);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        LoggerUtils.main.debug("pool size: {}, queue: {}", threadPool.getPoolSize(), tasks);
    }

}
```

## [27、线程池中有哪些常见的阻塞队列？](#_27、线程池中有哪些常见的阻塞队列)
workQueue - 当没有空闲核心线程时，新来任务会加入到此队列排队，队列满会创建救急线程执行任务

比较常见的有 4 个，用的最多是 ArrayBlockingQueue 和 LinkedBlockingQueue

+ ArrayBlockingQueue：基于数组结构的有界阻塞队列，FIFO。
+ LinkedBlockingQueue：基于链表结构的有界阻塞队列，FIFO。
+ DelayedWorkQueue ：是一个优先级队列，它可以保证每次出队的任务都是当前队列中执行时间最靠前的
+ SynchronousQueue：不存储元素的阻塞队列，每个插入操作都必须等待一个移出操作。

**ArrayBlockingQueue的LinkedBlockingQueue区别**

| **LinkedBlockingQueue** | **ArrayBlockingQueue** |
| --- | --- |
| 默认无界，支持有界 | 强制有界 |
| 底层是链表 | 底层是数组 |
| 是懒惰的，创建节点的时候添加数据 | 提前初始化 Node 数组 |
| 入队会生成新 Node | Node需要是提前创建好的 |
| 两把锁（头尾） | 一把锁 |


左边是LinkedBlockingQueue加锁的方式，右边是ArrayBlockingQueue加锁的方式

+ LinkedBlockingQueue读和写各有一把锁，性能相对较好
+ ArrayBlockingQueue只有一把锁，读和写公用，性能相对于LinkedBlockingQueue差一些

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727667862-6f2ac080-3b52-477e-85a5-ba80a6ed35d2.png)

## [28、如何确定线程池的核心线程数？](#_28、如何确定线程池的核心线程数)
在设置核心线程数之前，需要先熟悉一些执行线程池执行任务的类型

+ IO密集型任务

一般来说：文件读写、DB读写、网络请求等

推荐：核心线程数大小设置为2N+1 （N为计算机的CPU核数）

+ CPU密集型任务

一般来说：计算型代码、Bitmap转换、Gson转换等

推荐：核心线程数大小设置为N+1 （N为计算机的CPU核数）

java代码查看CPU核数

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727668206-68915fd5-3ce8-4075-85a1-868bcf2dcd60.png)

**参考回答：**

① 高并发、任务执行时间短 -->（ CPU核数+1 ），减少线程上下文的切换

② 并发不高、任务执行时间长

+ IO密集型的任务 --> (CPU核数 * 2 + 1)
+ 计算密集型任务 --> （ CPU核数+1 ）

③ 并发高、业务执行时间长，解决这种类型任务的关键不在于线程池而在于整体架构的设计，看看这些业务里面某些数据是否能做缓存是第一步，增加服务器是第二步，至于线程池的设置，

## [29、线程池的种类有哪些？](#_29、线程池的种类有哪些)
在java.util.concurrent.Executors类中提供了大量创建连接池的静态方法，常见就有四种

1. 创建使用固定线程数的线程池

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727668263-0c52e11c-152f-4788-b171-0a6c67786311.png)

    - 核心线程数与最大线程数一样，没有救急线程
    - 阻塞队列是LinkedBlockingQueue，最大容量为Integer.MAX_VALUE
    - 适用场景：适用于任务量已知，相对耗时的任务
    - 案例：

```java
public class FixedThreadPoolCase {

    static class FixedThreadDemo implements Runnable{
        @Override
        public void run() {
            String name = Thread.currentThread().getName();
            for (int i = 0; i < 2; i++) {
                System.out.println(name + ":" + i);
            }
        }
    }

    public static void main(String[] args) throws InterruptedException {
        //创建一个固定大小的线程池，核心线程数和最大线程数都是3
        ExecutorService executorService = Executors.newFixedThreadPool(3);

        for (int i = 0; i < 5; i++) {
            executorService.submit(new FixedThreadDemo());
            Thread.sleep(10);
        }

        executorService.shutdown();
    }

}
```

2. 单线程化的线程池，它只会用唯一的工作线程来执行任 务，保证所有任务按照指定顺序(FIFO)执行

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727668407-d4c93544-131d-477b-bffa-1cc329bebc4d.png)

    - 核心线程数和最大线程数都是1
    - 阻塞队列是LinkedBlockingQueue，最大容量为Integer.MAX_VALUE
    - 适用场景：适用于按照顺序执行的任务
    - 案例：

```java
public class NewSingleThreadCase {

    static int count = 0;

    static class Demo implements Runnable {
        @Override
        public void run() {
            count++;
            System.out.println(Thread.currentThread().getName() + ":" + count);
        }
    }

    public static void main(String[] args) throws InterruptedException {
        //单个线程池，核心线程数和最大线程数都是1
        ExecutorService exec = Executors.newSingleThreadExecutor();

        for (int i = 0; i < 10; i++) {
            exec.execute(new Demo());
            Thread.sleep(5);
        }
        exec.shutdown();
    }

}
```

3. 可缓存线程池

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727668416-5bb33496-9ec8-44ee-b916-52c0242c91b9.png)

    - 核心线程数为0
    - 最大线程数是Integer.MAX_VALUE
    - 阻塞队列为SynchronousQueue:不存储元素的阻塞队列，每个插入操作都必须等待一个移出操作。
    - 适用场景：适合任务数比较密集，但每个任务执行时间较短的情况
    - 案例：

```java
public class CachedThreadPoolCase {

    static class Demo implements Runnable {
        @Override
        public void run() {
            String name = Thread.currentThread().getName();
            try {
                //修改睡眠时间，模拟线程执行需要花费的时间
                Thread.sleep(100);

                System.out.println(name + "执行完了");
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) throws InterruptedException {
        //创建一个缓存的线程，没有核心线程数，最大线程数为Integer.MAX_VALUE
        ExecutorService exec = Executors.newCachedThreadPool();
        for (int i = 0; i < 10; i++) {
            exec.execute(new Demo());
            Thread.sleep(1);
        }
        exec.shutdown();
    }

}
```

4. 提供了“延迟”和“周期执行”功能的ThreadPoolExecutor。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727668514-90d3783e-e12c-43c5-b3d4-553f324b0137.png)

    - 适用场景：有定时和延迟执行的任务
    - 案例：

```java
public class ScheduledThreadPoolCase {

    static class Task implements Runnable {
        @Override
        public void run() {
            try {
                String name = Thread.currentThread().getName();

                System.out.println(name + ", 开始：" + new Date());
                Thread.sleep(1000);
                System.out.println(name + ", 结束：" + new Date());

            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) throws InterruptedException {
        //按照周期执行的线程池，核心线程数为2，最大线程数为Integer.MAX_VALUE
        ScheduledExecutorService scheduledThreadPool = Executors.newScheduledThreadPool(2);
        System.out.println("程序开始：" + new Date());

        /**
         * schedule 提交任务到线程池中
         * 第一个参数：提交的任务
         * 第二个参数：任务执行的延迟时间
         * 第三个参数：时间单位
         */
        scheduledThreadPool.schedule(new Task(), 0, TimeUnit.SECONDS);
        scheduledThreadPool.schedule(new Task(), 1, TimeUnit.SECONDS);
        scheduledThreadPool.schedule(new Task(), 5, TimeUnit.SECONDS);

        Thread.sleep(5000);

        // 关闭线程池
        scheduledThreadPool.shutdown();

    }

}
```

## [30、为什么不建议用Executors创建线程池？](#_30、为什么不建议用executors创建线程池)
## [31、线程池的使用场景？](#_31、线程池的使用场景)
#### [CountDownLatch](#countdownlatch)
CountDownLatch（闭锁/倒计时锁）用来进行线程同步协作，等待所有线程完成倒计时（一个或者多个线程，等待其他多个线程完成某件事情之后才能执行）

+ 其中构造参数用来初始化等待计数值
+ await() 用来等待计数归零
+ countDown() 用来让计数减一

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727668811-5f7cfba4-5814-4058-bcef-65dc8f3c776d.png)

案例代码：

```java
public class CountDownLatchDemo {

    public static void main(String[] args) throws InterruptedException {
        //初始化了一个倒计时锁 参数为 3
        CountDownLatch latch = new CountDownLatch(3);

        new Thread(() -> {
            System.out.println(Thread.currentThread().getName()+"-begin...");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            //count--
            latch.countDown();
            System.out.println(Thread.currentThread().getName()+"-end..." +latch.getCount());
        }).start();
        new Thread(() -> {
            System.out.println(Thread.currentThread().getName()+"-begin...");
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            //count--
            latch.countDown();
            System.out.println(Thread.currentThread().getName()+"-end..." +latch.getCount());
        }).start();
        new Thread(() -> {
            System.out.println(Thread.currentThread().getName()+"-begin...");
            try {
                Thread.sleep(1500);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            //count--
            latch.countDown();
            System.out.println(Thread.currentThread().getName()+"-end..." +latch.getCount());
        }).start();
        String name = Thread.currentThread().getName();
        System.out.println(name + "-waiting...");
        //等待其他线程完成
        latch.await();
        System.out.println(name + "-wait end...");
    }
    
}
```

#### [1、案例一（es数据批量导入）](#_1、案例一-es数据批量导入)
在我们项目上线之前，我们需要把数据库中的数据一次性的同步到es索引库中，但是当时的数据好像是1000万左右，一次性读取数据肯定不行（oom异常），当时我就想到可以使用线程池的方式导入，利用CountDownLatch来控制，就能避免一次性加载过多，防止内存溢出

整体流程就是通过CountDownLatch+线程池配合去执行

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727669021-e54d4a1c-0ee1-4dea-aa78-f979a9530be4.png)

详细实现流程：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727669104-074ccc5c-b2cc-4e5b-a4cc-c129cf826214.png)

代码实现：

```java
@Service
@Transactional
@Slf4j
public class ApArticleServiceImpl implements ApArticleService {

    @Autowired
    private ApArticleMapper apArticleMapper;

    @Autowired
    private RestHighLevelClient client;

    @Autowired
    private ExecutorService executorService;

    private static final String ARTICLE_ES_INDEX = "app_info_article";

    private static final int PAGE_SIZE = 2000;

    /**
     * 批量导入
     */
    @SneakyThrows
    @Override
    public void importAll() {

        //总条数
        int count = apArticleMapper.selectCount();
        //总页数
        int totalPageSize = count % PAGE_SIZE == 0 ? count / PAGE_SIZE : count / PAGE_SIZE + 1;
        //开始执行时间
        long startTime = System.currentTimeMillis();
        //一共有多少页，就创建多少个CountDownLatch的计数
        CountDownLatch countDownLatch = new CountDownLatch(totalPageSize);

        int fromIndex;
        List<SearchArticleVo> articleList = null;

        for (int i = 0; i < totalPageSize; i++) {
            //起始分页条数
            fromIndex = i * PAGE_SIZE;
            //查询文章
            articleList = apArticleMapper.loadArticleList(fromIndex, PAGE_SIZE);
            //创建线程，做批量插入es数据操作
            TaskThread taskThread = new TaskThread(articleList, countDownLatch);
            //执行线程
            executorService.execute(taskThread);
        }

        //调用await()方法,用来等待计数归零
        countDownLatch.await();

        long endTime = System.currentTimeMillis();
        log.info("es索引数据批量导入共:{}条,共消耗时间:{}秒", count, (endTime - startTime) / 1000);
    }

    class TaskThread implements Runnable {

        List<SearchArticleVo> articleList;
        CountDownLatch cdl;

        public TaskThread(List<SearchArticleVo> articleList, CountDownLatch cdl) {
            this.articleList = articleList;
            this.cdl = cdl;
        }

        @SneakyThrows
        @Override
        public void run() {
            //批量导入
            BulkRequest bulkRequest = new BulkRequest(ARTICLE_ES_INDEX);

            for (SearchArticleVo searchArticleVo : articleList) {
                bulkRequest.add(new IndexRequest().id(searchArticleVo.getId().toString())
                        .source(JSON.toJSONString(searchArticleVo), XContentType.JSON));
            }
            //发送请求，批量添加数据到es索引库中
            client.bulk(bulkRequest, RequestOptions.DEFAULT);

            //让计数减一
            cdl.countDown();
        }
    }
}
```

#### [2、案例二（数据汇总）](#_2、案例二-数据汇总)
在一个电商网站中，用户下单之后，需要查询数据，数据包含了三部分：订单信息、包含的商品、物流信息；这三块信息都在不同的微服务中进行实现的，我们如何完成这个业务呢？

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727669152-708fabd4-87e2-4e9f-9e39-99a8108723ac.png)

案例代码如下：

```java
@SneakyThrows
@GetMapping("/get/detail_new/{id}")
public Map<String, Object> getOrderDetailNew() {

    long startTime = System.currentTimeMillis();

    Future<Map<String, Object>> f1 = executorService.submit(() -> {
        Map<String, Object> r =
                restTemplate.getForObject("http://localhost:9991/order/get/{id}", Map.class, 1);
        return r;
    });
    Future<Map<String, Object>> f2 = executorService.submit(() -> {
        Map<String, Object> r =
                restTemplate.getForObject("http://localhost:9991/product/get/{id}", Map.class, 1);
        return r;
    });

    Future<Map<String, Object>> f3 = executorService.submit(() -> {
        Map<String, Object> r =
                restTemplate.getForObject("http://localhost:9991/logistics/get/{id}", Map.class, 1);
        return r;
    });


    Map<String, Object> resultMap = new HashMap<>();
    resultMap.put("order", f1.get());
    resultMap.put("product", f2.get());
    resultMap.put("logistics", f3.get());

    long endTime = System.currentTimeMillis();

    log.info("接口调用共耗时:{}毫秒",endTime-startTime);
    return resultMap;
}

@SneakyThrows
@GetMapping("/get/detail/{id}")
public Map<String, Object> getOrderDetail() {

    long startTime = System.currentTimeMillis();

    Map<String, Object> order = restTemplate.getForObject("http://localhost:9991/order/get/{id}", Map.class, 1);

    Map<String, Object> product = restTemplate.getForObject("http://localhost:9991/product/get/{id}", Map.class, 1);

    Map<String, Object> logistics = restTemplate.getForObject("http://localhost:9991/logistics/get/{id}", Map.class, 1);

    long endTime = System.currentTimeMillis();



    Map<String, Object> resultMap = new HashMap<>();
    resultMap.put("order", order);
    resultMap.put("product", product);
    resultMap.put("logistics", logistics);

    log.info("接口调用共耗时:{}毫秒",endTime-startTime);
    return resultMap;
}
```

+ 在实际开发的过程中，难免需要调用多个接口来汇总数据，如果所有接口（或部分接口）的没有依赖关系，就可以使用线程池+future来提升性能
+ 报表汇总

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727669222-1cbc38d3-a566-4a1b-b687-dab554a9aaf6.png)

#### [3、案例二（异步调用）](#_3、案例二-异步调用)
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727669508-edc5a37b-5d0d-4683-ae5f-bd50eabd00f3.png)

在进行搜索的时候，需要保存用户的搜索记录，而搜索记录不能影响用户的正常搜索，我们通常会开启一个线程去执行历史记录的保存，在新开启的线程在执行的过程中，可以利用线程提交任务

案例代码：

```java
@Service
@Slf4j
public class ArticleSearchServiceImpl implements ArticleSearchService {

    @Autowired
    private RestHighLevelClient client;

    private static final String ARTICLE_ES_INDEX = "app_info_article";

    private int userId = 1102;

    @Autowired
    private ApUserSearchService apUserSearchService;

    /**
     * 文章搜索
     * @return
     */
    @Override
    public List<Map> search(String keyword) {

        try {
            SearchRequest request = new SearchRequest(ARTICLE_ES_INDEX);

            //设置查询条件
            BoolQueryBuilder boolQuery = QueryBuilders.boolQuery();
            //第一个条件
            if(null == keyword || "".equals(keyword)){
                request.source().query(QueryBuilders.matchAllQuery());
            }else {
                request.source().query(QueryBuilders.queryStringQuery(keyword).field("title").defaultOperator(Operator.OR));
                //保存搜索历史
                apUserSearchService.insert(userId,keyword);
            }
            //分页
            request.source().from(0);
            request.source().size(20);

            //按照时间倒序排序
            request.source().sort("publishTime", SortOrder.DESC);
            //搜索
            SearchResponse response = client.search(request, RequestOptions.DEFAULT);

            //解析结果
            SearchHits searchHits = response.getHits();
            //获取具体文档数据
            SearchHit[] hits = searchHits.getHits();
            List<Map> resultList = new ArrayList<>();
            for (SearchHit hit : hits) {
                //文档数据
                Map map = JSON.parseObject(hit.getSourceAsString(), Map.class);
                resultList.add(map);
            }
            return resultList;

        } catch (IOException e) {
            throw new RuntimeException("搜索失败");
        }

    }
}


------------------------------------Spring boot 开启异步调用------------------------------------
/**
 * 保存搜索历史记录
 * @param userId
 * @param keyword
 */
@Async("taskExecutor")
@Override
public void insert(Integer userId, String keyword) {

    //保存用户记录  mongodb或mysql
    //执行业务

    log.info("用户搜索记录保存成功,用户id:{},关键字:{}",userId,keyword);

}
```

## [32、谈谈你对ThreadLocal的理解？](#_32、谈谈你对threadlocal的理解)
#### [1、概述](#_1、概述)
ThreadLocal是多线程中对于解决线程安全的一个操作类，它会为每个线程都分配一个独立的线程副本从而解决了变量并发访问冲突的问题。ThreadLocal 同时实现了线程内的资源共享

案例：使用JDBC操作数据库时，会将每一个线程的Connection放入各自的ThreadLocal中，从而保证每个线程都在各自的 Connection 上进行数据库的操作，避免A线程关闭了B线程的连接。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727669823-190cc527-2d6a-41d1-b2d5-855a2147d57c.png)

#### [2、ThreadLocal基本使用](#_2、threadlocal基本使用)
三个主要方法：

+ set(value) 设置值
+ get() 获取值
+ remove() 清除值

```java
public class ThreadLocalTest {
    static ThreadLocal<String> threadLocal = new ThreadLocal<>();

    public static void main(String[] args) {
        new Thread(() -> {
            String name = Thread.currentThread().getName();
            threadLocal.set("itcast");
            print(name);
            System.out.println(name + "-after remove : " + threadLocal.get());
        }, "t1").start();
        new Thread(() -> {
            String name = Thread.currentThread().getName();
            threadLocal.set("itheima");
            print(name);
            System.out.println(name + "-after remove : " + threadLocal.get());
        }, "t2").start();
    }

    static void print(String str) {
        //打印当前线程中本地内存中本地变量的值
        System.out.println(str + " :" + threadLocal.get());
        //清除本地内存中的本地变量
        threadLocal.remove();
    }

}
```

#### [3、ThreadLocal的实现原理&源码解析](#_3、threadlocal的实现原理-源码解析)
ThreadLocal本质来说就是一个线程内部存储类，从而让多个线程只操作自己内部的值，从而实现线程数据隔离

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727669790-a462e6f1-b47b-4607-bb57-3723ffa683c9.png)

在ThreadLocal中有一个内部类叫做ThreadLocalMap，类似于HashMap

ThreadLocalMap中有一个属性table数组，这个是真正存储数据的位置

**set方法**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727669963-106b54b8-f956-4386-b4d8-fa9825ddff1e.png)

**get方法/remove方法**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727669986-16daa06b-4c1e-4a06-b6f8-0491bea2fa5d.png)

#### [4、ThreadLocal-内存泄露问题](#_4、threadlocal-内存泄露问题)
Java对象中的四种引用类型：强引用、软引用、弱引用、虚引用

+ 强引用：最为普通的引用方式，表示一个对象处于有用且必须的状态，如果一个对象具有强引用，则GC并不会回收它。即便堆中内存不足了，宁可出现OOM，也不会对其进行回收

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727670295-a99417b8-744c-4624-a559-ded788bd7c60.png)

+ 弱引用：表示一个对象处于可能有用且非必须的状态。在GC线程扫描内存区域时，一旦发现弱引用，就会回收到弱引用相关联的对象。对于弱引用的回收，无关内存区域是否足够，一旦发现则会被回收

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727670476-2756a31d-52ad-48d1-928e-b77744130a4d.png)

每一个Thread维护一个ThreadLocalMap，在ThreadLocalMap中的Entry对象继承了WeakReference。其中key为使用弱引用的ThreadLocal实例，value为线程变量的副本

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/33699215/1791727670556-fe9073c1-5786-4b42-beff-a6924e051038.png)

在使用ThreadLocal的时候，强烈建议：**务必手动remove**



