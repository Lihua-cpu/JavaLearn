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
          text: "Java 入门到精通",
          prefix: "basis/",
          collapsible: true,
          children: [
            
          ],
        },
        {
            text: "Java数据结构与算法",
            prefix: "basis/",
            collapsible: true,
            children: [
              
            ],
          },
          {
            text: "Java新特性",
            prefix: "basis/",
            collapsible: true,
            children: [
              
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
            text: "MySQL基础",
            prefix: "basis/",
            collapsible: true,
            children: [
              
            ],
          },
          {
            text: "数据库中间件MyCat",
            prefix: "basis/",
            collapsible: true,
            children: [
            ],
          },
          {
          text: "Redis",
          collapsible: true,
          children: [
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
          collapsible: true,
          children: [
          ],
        },
        {
          text: "Git",
          collapsible: true,
          children: [
          ],
        },
        {
          text: "Maven",
          collapsible: true,
          children: [
          ],
        },
        {
          text: "DBeaver",
          collapsible: true,
          children: [
          ],
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
