import { sidebar } from "vuepress-theme-hope";

import { interview } from "./interview.js";
import {
  ICONS,
  createImportantSection,
  createSourceCodeSection,
} from "./constants.js";

export default sidebar({
  "/interview/": interview,
  // 必须放在最后面
  "/": [
    {
      text: "Java学习路线",
      icon: ICONS.TEST,
      collapsible: true,
      prefix: "java/start",
      children: [
        {
          text: "初学者的一封信",
          link: "/java/start/email",
        },
        {
          text: "Java学习路线",
          link: "/java/start/path",
        }
      ],
    },
    {
      text: "Java基础必备",
      icon: ICONS.INTERVIEW,
      collapsible: true,
      prefix: "interview-preparation/",
      children: [
        {
          text: "一、Java 入门到精通",
          prefix: "basis/",
          collapsible: true,
          children: [
            {
              text: "1、Java概述",
              link: "/java/basis/java-overview",
            },
            {
              text: "2、变量与数据类型",
              link: "/java/basis/variables-and-data-types",
            },
            {
              text: "3、运算符与表达式",
              link: "/java/basis/operators-and-expressions",
            },
            {
              text: "4、流程控制语句",
              link: "/java/basis/flow-control-statements",
            },
            {
              text: "5、数组与字符串",
              link: "/java/basis/arrays-and-strings",
            },
            {
              text: "6、方法与参数传递",
              link: "/java/basis/methods-and-parameters",
            },
            {
              text: "7、面向对象编程",
              link: "/java/basis/object-oriented-programming",
            },
            {
              text: "8、异常处理",
              link: "/java/basis/exception-handling",
            },
            {
              text: "9、Java集合框架",
              link: "/java/basis/java-collection-framework",
            },
            {
              text: "10、Java多线程编程",
              link: "/java/basis/java-multithreading-programming",
            },
            {
              text: "11、Java I/O流",
              link: "/java/basis/java-i-o-streams",
            },
            {
              text: "12、Java网络编程",
              link: "/java/basis/java-network-programming",
            }
          ],
        },
        {
            text: "二、Java数据结构与算法",
            prefix: "basic/",
            collapsible: true,
            children: [
              {
                text: "1、数据结构概述",
                link: "/java/basic/data-structures-overview",
              },
              {
                text: "2、数组与链表",
                link: "/java/basic/arrays-and-linked-lists",
              },
              {
                text: "3、栈与队列",
                link: "/java/basic/stacks-and-queues",
              },
              {
                text: "4、哈希表",
                link: "/java/basic/hash-table",
              },
              {
                text: "5、树与二叉树",
                link: "/java/basic/trees-and-binary-trees",
              },
              {
                text: "6、分治算法",
                link: "/java/basic/divide-and-conquer-algorithms",
              },
              {
                text: "7、排序算法",
                link: "/java/basic/sorting-algorithms",
              },
              {
                text: "8、贪心算法",
                link: "/java/basic/greedy-algorithms",
              },
              {
                text: "9、动态规划",
                link: "/java/basic/dynamic-programming",
              },
              {
                text: "10、图与图算法",
                link: "/java/basic/graphs-and-graph-algorithms",
              },
              {
                text: "11、搜索算法",
                link: "/java/basic/searching-algorithms",
              },
            ],
          },
          {
            text: "三、Java新特性",
            prefix: "newFeatures/",
            collapsible: true,
            children: [
              {
                text: "Java8 核心新特性",
                link: "/java/newFeatures/java8-core-features",
              },
              {
                text: "Java11 核心新特性",
                link: "/java/newFeatures/java11-core-features",
              },
              {
                text: "Java17 核心新特性",
                link: "/java/newFeatures/java17-core-features",
              },
              {
                text: "Java21 核心新特性",
                link: "/java/newFeatures/java21-core-features",
              },
            ],
          },
      ],
    },
    {
      text: "数据库和缓存技术",
      icon: ICONS.JAVA,
      collapsible: true,
      prefix: "java/",
      children: [
        // {
        //   text: "基础",
        //   prefix: "basis/",
        //   icon: ICONS.BASIC,
        //   children: [
        //     "java-basic-questions-01",
        //     "java-basic-questions-02",
        //     "java-basic-questions-03",
        //     createImportantSection([
        //       "why-there-only-value-passing-in-java",
        //       "serialization",
        //       "generics-and-wildcards",
        //       "reflection",
        //       "proxy",
        //       "bigdecimal",
        //       {
        //         text: "Java 金额类型选择",
        //         link: "money-long-vs-bigdecimal",
        //       },
        //       "unsafe",
        //       "spi",
        //       "syntactic-sugar",
        //     ]),
        //   ],
        // },
        {
            text: "MySQL",
            prefix: "basis/",
            collapsible: true,
            children: [
              {
                text: "MySql入门",
                link: "/java/mysql/mysql-introduction",
              },
              {
                text: "Mysql实战",
                link: "/java/mysql/mysql-practice",
              },
              {
                text: "数据库中间件MyCat",
                link: "/java/mysql/mysql-middleware-mycat",
              },
            ],
          },
          {
          text: "Redis",
          collapsible: true,
          children: [
            {
                text: "Redis入门",
                link: "/java/redis/redis-introduction",
              },
              {
                text: "Redis实战",
                link: "/java/redis/redis-practice",
              },
          ],
        },
      ],
    },
    {
      text: "Java开发框架",
      icon: ICONS.DATABASE,
      prefix: "database/",
      collapsible: true,
      children: [
        {
          text: "JavaWeb技术",
          collapsible: true,
          children: [
          ]
        },
        {
          text: "Srping",
          collapsible: true,
          children: [
          ],
        },
        {
          text: "Srping MVC",
          collapsible: true,
          children: [
          ],
        },
        {
          text: "Mybatis技术",
          collapsible: true,
          children: [
          ],
        },
        {
          text: "Mybatis-Plus技术",
          collapsible: true,
          children: [
          ],
        },
        
      ],
    },
    {
      text: "微服务技术",
      icon: ICONS.TOOL,
      prefix: "tools/",
      collapsible: true,
      children: [
        {
          text: "Spring Boot",
          collapsible: true,
          children: [
          ],
        },
        {
          text: "Spring Cloud",
          collapsible: true,
          children: [
          ],
        },
        {
          text: "Spring Cloud Alibaba",
          collapsible: true,
          children: [
          ],
        },
      ],
    },
    {
      text: "分布式技术",
      prefix: "system-design/framework/",
      icon: ICONS.COMPONENT,
      collapsible: true,
      children: [
        {
          text: "RabbitMQ",
          collapsible: true,
          children: [
          ],
        },
        {
          text: "Elastic Search",
          collapsible: true,
          children: [
          ],
        },
        {
          text: "Kafka",
          collapsible: true,
          children: [
          ],
        },
        {
          text: "Seata",
          collapsible: true,
          children: [
          ],
        },
        {
          text: "Sentinel",
          collapsible: true,
          children: [
          ],
        },
      ],
    },
    {
      text: "底层源代码",
      icon: ICONS.DESIGN,
      prefix: "system-design/",
      collapsible: true,
      children: [
       {
          text: "集合框架底层源码分析",
          collapsible: true,
          children: [
          ],
        },
        {
          text: "Spring底层源码分析",
          collapsible: true,
          children: [
          ],
        },
        {
          text: "Mybatis底层源码分析",
          collapsible: true,
          children: [
          ],
        },
      ],
    },
    {
      text: "开发工具",
      icon: ICONS.DISTRIBUTED,
      prefix: "distributed-system/",
      collapsible: true,
      children: [
       {
          text: "idea",
          link: "/java/idea/idea-introduction",
        },
        {
          text: "Git",
          link: "/java/git/git-introduction",
        },
        {
          text: "Maven",
          link: "/java/maven/maven-introduction",
        },
        {
          text: "DBeaver",
          link: "/java/dbeaver/dbeaver-introduction",
        },
      ],
    },
    {
      text: "框架组件",
      icon: ICONS.PERFORMANCE,
      prefix: "high-performance/",
      collapsible: true,
      children: [
       {
          text: "CAT链路追踪",
          collapsible: true,
          children: [
          ],
        },
        {
          text: "HATEOAS REST架构",
          collapsible: true,
          children: [
          ],
        },
        {
          text: "Java可视化报表POI",
          collapsible: true,
          children: [
          ],
        },
        {
          text: "流程引擎Activety7",
          collapsible: true,
          children: [
          ],
        },
      ],
    },
    
  ],
});
