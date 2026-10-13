import { arraySidebar } from "vuepress-theme-hope";
import { ICONS } from "./constants.js";

export const interview = arraySidebar([
  {
    text: "面试准备",
    icon: ICONS.BASIC,
    collapsible: true,
    children: [
      { 
        text: "1、简历准备", 
        link: "/interview/preparation/resume" 
      },
      { 
        text: "2、HR必备问题", 
        link: "/interview/preparation/hr-questions" 
      }
    ],
  },
  {
    text: "Java基础",
    icon: ICONS.JAVA,
    collapsible: true,
    children: [
      { 
        text: "说明", 
        link: "/interview/java/intro" 
      },
      { 
        text: "一、Java基础", 
        link: "/interview/java/basic" 
      },
      { 
        text: "二、Java面向对象", 
        link: "/interview/java/oop" 
      },
      { 
        text: "三、Java数据类型", 
        link: "/interview/java/data-types" 
      },
      { 
        text: "四、Java异常", 
        link: "/interview/java/exceptions" 
      },
      { 
        text: "五、Java集合容器", 
        link: "/interview/java/collections" 
      },
      { 
        text: "六、Java IO", 
        link: "/interview/java/io" 
      },
      { 
        text: "七、Java枚举 & 泛型", 
        link: "/interview/java/enums-generics" 
      },
      
    ],
  },
  {
    text:"Java高级",
    icon: ICONS.JAVA,
    collapsible: true,
    children: [
      { 
        text: "八、反射", 
        link: "/interview/java/reflection" 
      },
      { 
        text: "九、JVM", 
        link: "/interview/java/jvm" 
      },
      { 
        text: "十、Java并发编程", 
        link: "/interview/java/concurrent" 
      },
      { 
        text: "十一、Java多线程", 
        link: "/interview/java/multithreading" 
      },
      { 
        text: "十二、Java web开发", 
        link: "/interview/java/web" 
      },
      { 
        text: "十三、Java设计模式（可选）", 
        link: "/interview/java/design-patterns" 
      },
    ], 
  },
  {
    text: "计算机基础面试题",
    icon: ICONS.COMPONENT,
    collapsible: true,
    children: [
      { 
        text: "计算机网络", 
        link: "/interview/computer/network" 
      },
      { 
        text: "Java数据结构与算法", 
        link: "/interview/computer/data-structures-algorithms" 
      },
    ],
  },
  {
    text: "数据库面试题",
    icon: ICONS.SQL,
    collapsible: true,
    children: [
      { 
        text: "MySql面试题", 
        icon: ICONS.MYSQL,
        collapsible: true,
        children: [
          { 
            text: "一、MySql面试题说明", 
            link: "/interview/database/mysql/intro" 
          },
          { 
            text: "二、MySql基础面试题", 
            link: "/interview/database/mysql/basic" 
          },
          { 
            text: "三、MySql索引", 
            link: "/interview/database/mysql/index" 
          },
          { 
            text: "四、MySql内部技术原理", 
            link: "/interview/database/mysql/internal" 
          },
          { 
            text: "五、MySql事务", 
            link: "/interview/database/mysql/transaction" 
          },
          { 
            text: "六、MySql锁机制", 
            link: "/interview/database/mysql/lock" 
          },
          { 
            text: "七、MySql优化", 
            link: "/interview/database/mysql/optimization" 
          },
          { 
            text: "八、MySql其它", 
            link: "/interview/database/mysql/other" 
          },
        ],
      },
      { 
        text: "Redis面试题", 
        icon: ICONS.REDIS,
        collapsible: true,
        children: [
          { 
            text: "一、Redis 面试题说明", 
            link: "/interview/database/redis/intro" 
          },
          { 
            text: "二、Redis 面试题", 
            link: "/interview/database/redis/basic" 
          },
        ]
      },
    ],
  },
  {
    text: "Java框架",
    icon: ICONS.SPRING_BOOT,
    collapsible: true,
    children: [
      { 
        text: "Spring 面试题说明", 
        link: "/interview/spring/intro" 
      },
      { 
        text: "Spring 面试题", 
        link: "/interview/spring/spring" 
      },
      { 
        text: "Srping MVC 面试题", 
        link: "/interview/spring/spring-mvc" 
      },
      { 
        text: "MyBatis 面试题", 
        link: "/interview/spring/mybatis" 
      },
      { 
        text: "Spring Boot 面试题", 
        link: "/interview/spring/spring-boot" 
      },
      { 
        text: "Spring Cloud 面试题", 
        link: "/interview/spring/spring-cloud" 
      },
      { 
        text: "Spring Cloud Alibaba面试题", 
        link: "/interview/spring/spring-cloud-alibaba" 
      },
    ],
  },
  {
    text: "Java微服务中间件",
    icon: ICONS.CODE,
    collapsible: true,
    children: [
      { 
        text: "RabbitMQ面试题", 
        link: "/interview/component/rabbitmq" 
      },
      { 
        text: "Elastic Search面试题", 
        link: "/interview/component/elastic-search" 
      },
      { 
        text: "Zookeeper面试题", 
        link: "/interview/component/zookeeper" 
      },
      { 
        text: "Seata面试题", 
        link: "/interview/component/seata" 
      },
      { 
        text: "Nacos面试题", 
        link: "/interview/component/nacos" 
      },
      { 
        text: "Kafka面试题", 
        link: "/interview/component/kafka" 
      },
      { 
        text: "Sentinel面试题", 
        link: "/interview/component/sentinel" 
      },
    ],
  },
  {
    text: "源代码解剖",
    icon: ICONS.CODE,
    collapsible: true,
    children: [
      { 
        text: "Java 专栏", 
        collapsible: true,
        children: [
          {
            text: "ArrayList源码分析",
            link: "/interview/code-analysis/java/arraylist-source-code.md",
          },
          {
            text: "HashMap源码分析",
            link: "/interview/code-analysis/java/hashmap-source-code.md",
          }
        ],
      },
      { 
        text: "Spring 专栏", 
        collapsible: true,
        children: [
          {
            text: "Spring Bean生命周期",
            link: "/interview/code-analysis/spring/bean-lifecycle.md",
          },
          {
            text: "Spring Refresh过程",
            link: "/interview/code-analysis/spring/refresh-process.md",
          },
          {
            text: "Spring 事务实效的场景",
            link: "/interview/code-analysis/spring/transaction-failure-scenarios.md",
          }
        ],
      },
    ],
  },
]);
