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
        link: "/interview/resume" 
      },
      { 
        text: "2、HR必备问题", 
        link: "/interview/hr-questions" 
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
        link: "ai-core-concepts" 
      },
      { 
        text: "一、Java基础", 
        link: "ai-core-concepts" 
      },
      { 
        text: "二、Java面向对象", 
        link: "/" 
      },
      { 
        text: "三、Java数据类型", 
        link: "/" 
      },
      { 
        text: "四、Java异常", 
        link: "/" 
      },
      { 
        text: "五、Java集合容器", 
        link: "/" 
      },
      { 
        text: "六、Java IO", 
        link: "/" 
      },
      { 
        text: "七、Java枚举 & 泛型", 
        link: "/" 
      },
      { 
        text: "八、Java并发", 
        link: "/" 
      },
      { 
        text: "九、Java多线程", 
        link: "/" 
      },
      { 
        text: "十、Java反射", 
        link: "/" 
      },
      { 
        text: "十一、JVM", 
        link: "/" 
      },
      { 
        text: "十二、Java Web", 
        link: "/" 
      },
      { 
        text: "十三、设计模式（可选）", 
        link: "/" 
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
        link: "ai-core-concepts" 
      },
      { 
        text: "Java数据结构与算法", 
        link: "ai-core-concepts" 
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
        link: "/" 
      },
      { 
        text: "Redis面试题", 
        icon: ICONS.REDIS,
        collapsible: true,
        link: "/" 
      },
    ],
  },
  {
    text: "Java框架",
    icon: ICONS.SPRING_BOOT,
    collapsible: true,
    children: [
      { 
        text: "Spring面试题", 
        link: "/" 
      },
      { 
        text: "Srping MVC面试题", 
        link: "/" 
      },
      { 
        text: "MyBatis面试题", 
        link: "/" 
      },
      { 
        text: "Spring Boot面试题", 
        link: "/" 
      },
      { 
        text: "Spring Cloud面试题", 
        link: "/" 
      },
      { 
        text: "Spring Cloud Alibaba面试题", 
        link: "/" 
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
        link: "/" 
      },
      { 
        text: "Elastic Search面试题", 
        link: "/" 
      },
      { 
        text: "MyBatis面试题", 
        link: "/" 
      },
      { 
        text: "Spring Boot面试题", 
        link: "/" 
      },
      { 
        text: "Spring Cloud面试题", 
        link: "/" 
      },
      { 
        text: "Spring Cloud Alibaba面试题", 
        link: "/" 
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
            link: "/interview/system-design/framework/rabbitmq/basic-interview.md",
          },
          {
            text: "HashMap源码分析",
            link: "/interview/system-design/framework/rabbitmq/basic-interview.md",
          }
        ],
      },
      { 
        text: "Spring 专栏", 
        collapsible: true,
        children: [
          {
            text: "Spring Bean生命周期",
            link: "/interview/system-design/framework/rabbitmq/basic-interview.md",
          },
          {
            text: "Spring Refresh过程",
            link: "/interview/system-design/framework/rabbitmq/basic-interview.md",
          },
          {
            text: "Spring 事务实效的场景",
            link: "/interview/system-design/framework/rabbitmq/basic-interview.md",
          }
        ],
      },
    ],
  },
]);
