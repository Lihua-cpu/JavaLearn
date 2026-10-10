// docs/.vuepress/config.ts
import { createRequire } from "node:module";
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";

// docs/.vuepress/theme.ts
import { getText } from "@vuepress/helper";
import { getDirname, path } from "vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";

// docs/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  { text: "Java\u5B66\u4E60\u624B\u518C", icon: "mdi:language-java", link: "/java/" },
  { text: "\u9762\u8BD5\u8D44\u6599", icon: "mdi:book-open-page-variant-outline", link: "/interview/" },
  {
    text: "\u7F51\u7AD9\u76F8\u5173",
    icon: "mdi:information-outline",
    children: [
      {
        text: "\u5173\u4E8E\u4F5C\u8005",
        icon: "mdi:account-edit-outline",
        link: "/about-the-author/"
      },
      {
        text: "\u66F4\u65B0\u5386\u53F2",
        icon: "mdi:history",
        link: "/timeline/"
      }
    ]
  }
]);

// docs/.vuepress/sidebar/index.ts
import { sidebar } from "vuepress-theme-hope";

// docs/.vuepress/sidebar/interview.ts
import { arraySidebar } from "vuepress-theme-hope";

// docs/.vuepress/sidebar/constants.ts
var ICONS = {
  // 基础图标
  STAR: "mdi:star-outline",
  BASIC: "mdi:book-open-page-variant-outline",
  TEST: "mdi:abugida-devanagari",
  CODE: "mdi:code-tags",
  DESIGN: "mdi:palette-swatch-outline",
  ROADMAP: "mdi:map-outline",
  ARTICLE: "mdi:book-open-page-variant-outline",
  // 技术领域
  JAVA: "mdi:language-java",
  COMPUTER: "mdi:desktop-classic",
  // iconify mdi--semantic-web
  DATABASE: "mdi:database-outline",
  NETWORK: "mdi:lan",
  // 框架和工具
  SPRING_BOOT: "mdi:leaf",
  MYBATIS: "mdi:database-cog-outline",
  NETTY: "mdi:server-network-outline",
  SPRING_CLOUD: "mdi:cloud-outline",
  SPRING_MVC: "mdi:leaf",
  // 数据库
  MYSQL: "mdi:database",
  REDIS: "mdi:database-sync-outline",
  ELASTICSEARCH: "mdi:database-search-outline",
  MONGODB: "mdi:database-marker-outline",
  SQL: "mdi:database-search",
  // 开发工具
  TOOL: "mdi:tools",
  MAVEN: "mdi:package-variant-closed",
  GRADLE: "mdi:cog-outline",
  GIT: "mdi:git",
  DOCKER: "mdi:docker",
  IDEA: "mdi:application-brackets-outline",
  // 系统设计
  COMPONENT: "mdi:widgets-outline",
  CONTAINER: "mdi:cube-outline",
  SECURITY: "mdi:shield-lock-outline",
  // 分布式
  DISTRIBUTED: "mdi:transit-connection-variant",
  GATEWAY: "mdi:gate",
  ID: "mdi:identifier",
  LOCK: "mdi:lock-outline",
  TRANSACTION: "mdi:bank-transfer",
  RPC: "mdi:api",
  FRAMEWORK: "mdi:layers-outline",
  // 高性能
  PERFORMANCE: "mdi:speedometer",
  CDN: "mdi:cloud-outline",
  LOAD_BALANCING: "mdi:scale-balance",
  MQ: "mdi:message-processing-outline",
  // 高可用
  HIGH_AVAILABLE: "mdi:check-network-outline",
  // 操作系统
  OS: "mdi:desktop-classic",
  LINUX: "mdi:linux",
  VIRTUAL_MACHINE: "mdi:server",
  // 数据结构与算法
  DATA_STRUCTURE: "mdi:graph-outline",
  ALGORITHM: "mdi:chart-tree",
  // 其他
  FEATURED: "mdi:star-four-points-outline",
  INTERVIEW: "mdi:briefcase-outline",
  EXPERIENCE: "mdi:chart-timeline-variant",
  CHAT: "mdi:comment-text-outline",
  BOOK: "mdi:book-open-page-variant-outline",
  PROJECT: "mdi:projector-screen-outline",
  LIBRARY: "mdi:library-outline",
  MACHINE_LEARNING: "mdi:robot-outline",
  BIG_DATA: "mdi:database-search-outline",
  SEARCH: "mdi:magnify",
  WORK: "mdi:office-building-outline"
};

// docs/.vuepress/sidebar/interview.ts
var interview = arraySidebar([
  {
    text: "\u9762\u8BD5\u51C6\u5907",
    icon: ICONS.BASIC,
    collapsible: true,
    children: [
      {
        text: "1\u3001\u7B80\u5386\u51C6\u5907",
        link: "/interview/resume"
      },
      {
        text: "2\u3001HR\u5FC5\u5907\u95EE\u9898",
        link: "/interview/hr-questions"
      }
    ]
  },
  {
    text: "Java\u57FA\u7840",
    icon: ICONS.JAVA,
    collapsible: true,
    children: [
      {
        text: "\u8BF4\u660E",
        link: "ai-core-concepts"
      },
      {
        text: "\u4E00\u3001Java\u57FA\u7840",
        link: "ai-core-concepts"
      },
      {
        text: "\u4E8C\u3001Java\u9762\u5411\u5BF9\u8C61",
        link: "/"
      },
      {
        text: "\u4E09\u3001Java\u6570\u636E\u7C7B\u578B",
        link: "/"
      },
      {
        text: "\u56DB\u3001Java\u5F02\u5E38",
        link: "/"
      },
      {
        text: "\u4E94\u3001Java\u96C6\u5408\u5BB9\u5668",
        link: "/"
      },
      {
        text: "\u516D\u3001Java IO",
        link: "/"
      },
      {
        text: "\u4E03\u3001Java\u679A\u4E3E & \u6CDB\u578B",
        link: "/"
      },
      {
        text: "\u516B\u3001Java\u5E76\u53D1",
        link: "/"
      },
      {
        text: "\u4E5D\u3001Java\u591A\u7EBF\u7A0B",
        link: "/"
      },
      {
        text: "\u5341\u3001Java\u53CD\u5C04",
        link: "/"
      },
      {
        text: "\u5341\u4E00\u3001JVM",
        link: "/"
      },
      {
        text: "\u5341\u4E8C\u3001Java Web",
        link: "/"
      },
      {
        text: "\u5341\u4E09\u3001\u8BBE\u8BA1\u6A21\u5F0F\uFF08\u53EF\u9009\uFF09",
        link: "/"
      }
    ]
  },
  {
    text: "\u8BA1\u7B97\u673A\u57FA\u7840\u9762\u8BD5\u9898",
    icon: ICONS.COMPONENT,
    collapsible: true,
    children: [
      {
        text: "\u8BA1\u7B97\u673A\u7F51\u7EDC",
        link: "ai-core-concepts"
      },
      {
        text: "Java\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5",
        link: "ai-core-concepts"
      }
    ]
  },
  {
    text: "\u6570\u636E\u5E93\u9762\u8BD5\u9898",
    icon: ICONS.SQL,
    collapsible: true,
    children: [
      {
        text: "MySql\u9762\u8BD5\u9898",
        icon: ICONS.MYSQL,
        collapsible: true,
        link: "/"
      },
      {
        text: "Redis\u9762\u8BD5\u9898",
        icon: ICONS.REDIS,
        collapsible: true,
        link: "/"
      }
    ]
  },
  {
    text: "Java\u6846\u67B6",
    icon: ICONS.SPRING_BOOT,
    collapsible: true,
    children: [
      {
        text: "Spring\u9762\u8BD5\u9898",
        link: "/"
      },
      {
        text: "Srping MVC\u9762\u8BD5\u9898",
        link: "/"
      },
      {
        text: "MyBatis\u9762\u8BD5\u9898",
        link: "/"
      },
      {
        text: "Spring Boot\u9762\u8BD5\u9898",
        link: "/"
      },
      {
        text: "Spring Cloud\u9762\u8BD5\u9898",
        link: "/"
      },
      {
        text: "Spring Cloud Alibaba\u9762\u8BD5\u9898",
        link: "/"
      }
    ]
  },
  {
    text: "Java\u5FAE\u670D\u52A1\u4E2D\u95F4\u4EF6",
    icon: ICONS.CODE,
    collapsible: true,
    children: [
      {
        text: "RabbitMQ\u9762\u8BD5\u9898",
        link: "/"
      },
      {
        text: "Elastic Search\u9762\u8BD5\u9898",
        link: "/"
      },
      {
        text: "MyBatis\u9762\u8BD5\u9898",
        link: "/"
      },
      {
        text: "Spring Boot\u9762\u8BD5\u9898",
        link: "/"
      },
      {
        text: "Spring Cloud\u9762\u8BD5\u9898",
        link: "/"
      },
      {
        text: "Spring Cloud Alibaba\u9762\u8BD5\u9898",
        link: "/"
      }
    ]
  },
  {
    text: "\u6E90\u4EE3\u7801\u89E3\u5256",
    icon: ICONS.CODE,
    collapsible: true,
    children: [
      {
        text: "Java \u4E13\u680F",
        collapsible: true,
        children: [
          {
            text: "ArrayList\u6E90\u7801\u5206\u6790",
            link: "/interview/system-design/framework/rabbitmq/basic-interview.md"
          },
          {
            text: "HashMap\u6E90\u7801\u5206\u6790",
            link: "/interview/system-design/framework/rabbitmq/basic-interview.md"
          }
        ]
      },
      {
        text: "Spring \u4E13\u680F",
        collapsible: true,
        children: [
          {
            text: "Spring Bean\u751F\u547D\u5468\u671F",
            link: "/interview/system-design/framework/rabbitmq/basic-interview.md"
          },
          {
            text: "Spring Refresh\u8FC7\u7A0B",
            link: "/interview/system-design/framework/rabbitmq/basic-interview.md"
          },
          {
            text: "Spring \u4E8B\u52A1\u5B9E\u6548\u7684\u573A\u666F",
            link: "/interview/system-design/framework/rabbitmq/basic-interview.md"
          }
        ]
      }
    ]
  }
]);

// docs/.vuepress/sidebar/index.ts
var sidebar_default = sidebar({
  "/interview/": interview,
  // 必须放在最后面
  "/": [
    {
      text: "Java\u5B66\u4E60\u8DEF\u7EBF",
      icon: ICONS.TEST,
      collapsible: true,
      prefix: "java/start",
      children: [
        {
          text: "\u521D\u5B66\u8005\u7684\u4E00\u5C01\u4FE1",
          link: "/java/start/email"
        },
        {
          text: "Java\u5B66\u4E60\u8DEF\u7EBF",
          link: "/java/start/path"
        }
      ]
    },
    {
      text: "Java\u57FA\u7840\u5FC5\u5907",
      icon: ICONS.INTERVIEW,
      collapsible: true,
      prefix: "interview-preparation/",
      children: [
        {
          text: "Java \u5165\u95E8\u5230\u7CBE\u901A",
          prefix: "basis/",
          collapsible: true,
          children: []
        },
        {
          text: "Java\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5",
          prefix: "basis/",
          collapsible: true,
          children: []
        },
        {
          text: "Java\u65B0\u7279\u6027",
          prefix: "basis/",
          collapsible: true,
          children: []
        }
      ]
    },
    {
      text: "\u6570\u636E\u5E93\u548C\u7F13\u5B58\u6280\u672F",
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
          text: "MySQL\u57FA\u7840",
          prefix: "basis/",
          collapsible: true,
          children: []
        },
        {
          text: "\u6570\u636E\u5E93\u4E2D\u95F4\u4EF6MyCat",
          prefix: "basis/",
          collapsible: true,
          children: []
        },
        {
          text: "Redis",
          collapsible: true,
          children: []
        }
      ]
    },
    {
      text: "Java\u5F00\u53D1\u6846\u67B6",
      icon: ICONS.DATABASE,
      prefix: "database/",
      collapsible: true,
      children: [
        {
          text: "JavaWeb\u6280\u672F",
          collapsible: true,
          children: []
        },
        {
          text: "Srping",
          collapsible: true,
          children: []
        },
        {
          text: "Srping MVC",
          collapsible: true,
          children: []
        },
        {
          text: "Mybatis\u6280\u672F",
          collapsible: true,
          children: []
        },
        {
          text: "Mybatis-Plus\u6280\u672F",
          collapsible: true,
          children: []
        }
      ]
    },
    {
      text: "\u5FAE\u670D\u52A1\u6280\u672F",
      icon: ICONS.TOOL,
      prefix: "tools/",
      collapsible: true,
      children: [
        {
          text: "Spring Boot",
          collapsible: true,
          children: []
        },
        {
          text: "Spring Cloud",
          collapsible: true,
          children: []
        },
        {
          text: "Spring Cloud Alibaba",
          collapsible: true,
          children: []
        }
      ]
    },
    {
      text: "\u5206\u5E03\u5F0F\u6280\u672F",
      prefix: "system-design/framework/",
      icon: ICONS.COMPONENT,
      collapsible: true,
      children: [
        {
          text: "RabbitMQ",
          collapsible: true,
          children: []
        },
        {
          text: "Elastic Search",
          collapsible: true,
          children: []
        },
        {
          text: "Kafka",
          collapsible: true,
          children: []
        },
        {
          text: "Seata",
          collapsible: true,
          children: []
        },
        {
          text: "Sentinel",
          collapsible: true,
          children: []
        }
      ]
    },
    {
      text: "\u5E95\u5C42\u6E90\u4EE3\u7801",
      icon: ICONS.DESIGN,
      prefix: "system-design/",
      collapsible: true,
      children: [
        {
          text: "\u96C6\u5408\u6846\u67B6\u5E95\u5C42\u6E90\u7801\u5206\u6790",
          collapsible: true,
          children: []
        },
        {
          text: "Spring\u5E95\u5C42\u6E90\u7801\u5206\u6790",
          collapsible: true,
          children: []
        },
        {
          text: "Mybatis\u5E95\u5C42\u6E90\u7801\u5206\u6790",
          collapsible: true,
          children: []
        }
      ]
    },
    {
      text: "\u5F00\u53D1\u5DE5\u5177",
      icon: ICONS.DISTRIBUTED,
      prefix: "distributed-system/",
      collapsible: true,
      children: [
        {
          text: "idea",
          collapsible: true,
          children: []
        },
        {
          text: "Git",
          collapsible: true,
          children: []
        },
        {
          text: "Maven",
          collapsible: true,
          children: []
        },
        {
          text: "DBeaver",
          collapsible: true,
          children: []
        }
      ]
    },
    {
      text: "\u6846\u67B6\u7EC4\u4EF6",
      icon: ICONS.PERFORMANCE,
      prefix: "high-performance/",
      collapsible: true,
      children: [
        {
          text: "CAT\u94FE\u8DEF\u8FFD\u8E2A",
          collapsible: true,
          children: []
        },
        {
          text: "HATEOAS REST\u67B6\u6784",
          collapsible: true,
          children: []
        },
        {
          text: "Java\u53EF\u89C6\u5316\u62A5\u8868POI",
          collapsible: true,
          children: []
        },
        {
          text: "\u6D41\u7A0B\u5F15\u64CEActivety7",
          collapsible: true,
          children: []
        }
      ]
    }
  ]
});

// docs/.vuepress/theme.ts
var __vite_injected_original_import_meta_url = "file:///Users/user/Documents/code/github/JavaLearn-main/docs/.vuepress/theme.ts";
var __dirname = getDirname(__vite_injected_original_import_meta_url);
var docsearchAppId = process.env.DOCSEARCH_APP_ID;
var docsearchApiKey = process.env.DOCSEARCH_API_KEY;
var docsearchIndexName = process.env.DOCSEARCH_INDEX_NAME;
var docsearchOptions = docsearchAppId && docsearchApiKey && docsearchIndexName ? {
  appId: docsearchAppId,
  apiKey: docsearchApiKey,
  indexName: docsearchIndexName,
  locales: {
    "/": {
      placeholder: "\u641C\u7D22 leonLearn"
    }
  }
} : null;
var MIN_META_DESCRIPTION_LENGTH = 150;
var MAX_META_DESCRIPTION_LENGTH = 160;
var segmentDisplayNames = {
  ai: "AI",
  "ai-coding": "AI \u7F16\u7A0B",
  algorithms: "\u7B97\u6CD5",
  basis: "\u57FA\u7840\u77E5\u8BC6",
  books: "\u6280\u672F\u4E66\u7C4D",
  collection: "Java \u96C6\u5408",
  concurrent: "Java \u5E76\u53D1",
  "cs-basics": "\u8BA1\u7B97\u673A\u57FA\u7840",
  "data-structure": "\u6570\u636E\u7ED3\u6784",
  database: "\u6570\u636E\u5E93",
  "distributed-process-coordination": "\u5206\u5E03\u5F0F\u534F\u8C03",
  "distributed-system": "\u5206\u5E03\u5F0F\u7CFB\u7EDF",
  docker: "Docker",
  elasticsearch: "Elasticsearch",
  framework: "\u5F00\u53D1\u6846\u67B6",
  git: "Git",
  gradle: "Gradle",
  "high-availability": "\u9AD8\u53EF\u7528",
  "high-performance": "\u9AD8\u6027\u80FD",
  "interview-preparation": "\u9762\u8BD5\u51C6\u5907",
  io: "Java IO",
  java: "Java",
  leonLearn: "LeonLearn",
  jvm: "JVM",
  "message-queue": "\u6D88\u606F\u961F\u5217",
  mysql: "MySQL",
  network: "\u8BA1\u7B97\u673A\u7F51\u7EDC",
  "new-features": "Java \u65B0\u7279\u6027",
  "open-source-project": "\u5F00\u6E90\u9879\u76EE",
  "operating-system": "\u64CD\u4F5C\u7CFB\u7EDF",
  protocol: "\u5206\u5E03\u5F0F\u534F\u8BAE\u4E0E\u7B97\u6CD5",
  rag: "RAG",
  redis: "Redis",
  rpc: "RPC",
  security: "\u5B89\u5168",
  sql: "SQL",
  "system-design": "\u7CFB\u7EDF\u8BBE\u8BA1",
  tools: "\u5F00\u53D1\u5DE5\u5177",
  zookeeper: "ZooKeeper"
};
var normalizeDescriptionText = (value) => String(value ?? "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim();
var toArray = (value) => {
  if (Array.isArray(value)) return value;
  return value ? [value] : [];
};
var formatPathSegment = (segment) => segmentDisplayNames[segment] ?? decodeURIComponent(segment).replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
var getPathTopic = (page) => page.path.split("/").filter(Boolean).map(formatPathSegment).join(" / ");
var getHeaderTitles = (page) => toArray(page.headers).map(({ title }) => normalizeDescriptionText(title)).filter(Boolean).slice(0, 4);
var getPageText = (page, app) => normalizeDescriptionText(
  getText(
    page.data.excerpt ?? page.contentRendered ?? page.content ?? "",
    app.siteData.base,
    {
      length: 220,
      singleLine: true
    }
  )
);
var trimDescription = (description) => {
  if (description.length <= MAX_META_DESCRIPTION_LENGTH) return description;
  const trimmed = description.slice(0, MAX_META_DESCRIPTION_LENGTH);
  const lastStop = Math.max(
    trimmed.lastIndexOf("\u3002"),
    trimmed.lastIndexOf("\uFF01"),
    trimmed.lastIndexOf("\uFF1F"),
    trimmed.lastIndexOf(";"),
    trimmed.lastIndexOf("\uFF1B")
  );
  if (lastStop >= MIN_META_DESCRIPTION_LENGTH - 5)
    return trimmed.slice(0, lastStop + 1);
  const lastSoftStop = Math.max(
    trimmed.lastIndexOf("\uFF0C"),
    trimmed.lastIndexOf("\u3001"),
    trimmed.lastIndexOf(",")
  );
  if (lastSoftStop >= MIN_META_DESCRIPTION_LENGTH - 5) {
    const base = trimmed.slice(0, lastSoftStop).replace(/[，、,;\s]+$/, "");
    const result = `${base}\u7B49\u6838\u5FC3\u5185\u5BB9\u3002`;
    return result.length <= MAX_META_DESCRIPTION_LENGTH ? result : `${result.slice(0, MAX_META_DESCRIPTION_LENGTH - 1)}\u3002`;
  }
  return `${description.slice(0, MAX_META_DESCRIPTION_LENGTH - 1)}\u3002`;
};
var buildSeoDescription = (page, app) => {
  const existingDescription = normalizeDescriptionText(
    page.frontmatter.description
  );
  if (existingDescription.length >= MIN_META_DESCRIPTION_LENGTH)
    return trimDescription(existingDescription);
  if (page.path === "/")
    return trimDescription(
      "LeonLearn \u540E\u7AEF\u90E8\u5206\u662F\u4E00\u4EFD\u9762\u5411 Java \u540E\u7AEF\u5F00\u53D1\u8005\u548C\u9762\u8BD5\u51C6\u5907\u4EBA\u7FA4\u7684\u5B66\u4E60\u6307\u5357\uFF0C\u7CFB\u7EDF\u8986\u76D6 Java \u57FA\u7840\u3001\u96C6\u5408\u3001\u5E76\u53D1\u3001JVM\u3001MySQL\u3001Redis\u3001\u5206\u5E03\u5F0F\u3001\u9AD8\u5E76\u53D1\u3001\u9AD8\u53EF\u7528\u3001\u7CFB\u7EDF\u8BBE\u8BA1\u3001\u6D88\u606F\u961F\u5217\u3001\u8BA1\u7B97\u673A\u57FA\u7840\u548C AI \u5E94\u7528\u5F00\u53D1\u7B49\u6838\u5FC3\u77E5\u8BC6\uFF0C\u9002\u5408\u6821\u62DB\u793E\u62DB\u590D\u4E60\u3001\u67E5\u7F3A\u8865\u6F0F\u548C\u89C4\u5212\u5B66\u4E60\u8DEF\u7EBF\u3002"
    );
  if (page.path === "/home.html")
    return trimDescription(
      "LeonLearn \u9996\u9875\u805A\u5408 Java\u540E\u7AEF\u5B66\u4E60\u8DEF\u7EBF\u3001\u6838\u5FC3\u77E5\u8BC6\u4F53\u7CFB\u548C\u9AD8\u9891\u9762\u8BD5\u9898\u5165\u53E3\uFF0C\u8986\u76D6 Java \u57FA\u7840\u3001\u5E76\u53D1\u3001JVM\u3001\u6570\u636E\u5E93\u3001Redis\u3001\u5206\u5E03\u5F0F\u3001\u7CFB\u7EDF\u8BBE\u8BA1\u3001\u9AD8\u6027\u80FD\u3001\u9AD8\u53EF\u7528\u3001\u8BA1\u7B97\u673A\u57FA\u7840\u548C AI \u5E94\u7528\u5F00\u53D1\uFF0C\u5E2E\u52A9\u8BFB\u8005\u5FEB\u901F\u5B9A\u4F4D\u91CD\u70B9\u5185\u5BB9\u3002"
    );
  if (page.path === "/404.html")
    return trimDescription(
      "LeonLearn \u9875\u9762\u672A\u627E\u5230\u63D0\u793A\u9875\uFF0C\u5E2E\u52A9\u8BFB\u8005\u8FD4\u56DE Java \u9762\u8BD5\u6307\u5357\u3001\u540E\u7AEF\u901A\u7528\u9762\u8BD5\u77E5\u8BC6\u3001\u8BA1\u7B97\u673A\u57FA\u7840\u3001\u6570\u636E\u5E93\u3001Redis\u3001\u5206\u5E03\u5F0F\u3001\u7CFB\u7EDF\u8BBE\u8BA1\u548C AI \u5E94\u7528\u5F00\u53D1\u7B49\u6838\u5FC3\u5185\u5BB9\u5165\u53E3\uFF0C\u7EE7\u7EED\u5B9A\u4F4D\u5B66\u4E60\u8D44\u6599\u3001\u9762\u8BD5\u9898\u603B\u7ED3\u548C\u5B9E\u8DF5\u6587\u7AE0\u3002"
    );
  const title = normalizeDescriptionText(page.title);
  const category = toArray(page.frontmatter.category).map(normalizeDescriptionText).filter(Boolean);
  const tags = toArray(page.frontmatter.tag ?? page.frontmatter.tags).map(normalizeDescriptionText).filter(Boolean).slice(0, 4);
  const headers = getHeaderTitles(page);
  const focusItems = [...headers, ...tags].filter(Boolean).slice(0, 5);
  const topic = getPathTopic(page) || title || category[0] || "LeonLearn";
  const pageText = getPageText(page, app);
  const parts = [
    existingDescription || (title ? `${title}\uFF1A` : ""),
    focusItems.length ? `\u91CD\u70B9\u56F4\u7ED5 ${focusItems.join("\u3001")} \u7B49\u5185\u5BB9\u5C55\u5F00\u3002` : "",
    `\u7ED3\u5408 LeonLearn \u540E\u7AEF\u90E8\u5206\u7684\u77E5\u8BC6\u4F53\u7CFB\u68B3\u7406 ${topic} \u7684\u6838\u5FC3\u6982\u5FF5\u3001\u5B9E\u8DF5\u65B9\u6CD5\u3001\u5E38\u89C1\u95EE\u9898\u548C\u9AD8\u9891\u9762\u8BD5\u8003\u70B9\uFF0C\u8986\u76D6\u539F\u7406\u5206\u6790\u3001\u4F7F\u7528\u573A\u666F\u3001\u65B9\u6848\u5BF9\u6BD4\u4E0E\u7ECF\u9A8C\u603B\u7ED3\uFF0C\u9002\u5408\u540E\u7AEF\u5F00\u53D1\u8005\u7CFB\u7EDF\u5B66\u4E60\u3001\u9762\u8BD5\u590D\u4E60\u3001\u5FEB\u901F\u5B9A\u4F4D\u91CD\u70B9\u5185\u5BB9\u548C\u67E5\u7F3A\u8865\u6F0F\u3002`,
    pageText && !existingDescription.includes(pageText.slice(0, 24)) ? pageText : ""
  ];
  return trimDescription(
    normalizeDescriptionText(parts.filter(Boolean).join(""))
  );
};
var theme_default = hopeTheme({
  hostname: "https://www.yimengli.cn/",
  logo: "/logo.png",
  favicon: "/favicon.ico",
  author: {
    name: "Leon",
    url: "https://www.yimengli.cn/cms/main/essay"
  },
  repo: "https://github.com/Lihua-cpu",
  docsDir: "docs",
  pure: true,
  focus: false,
  print: false,
  breadcrumb: false,
  navbar: navbar_default,
  sidebar: sidebar_default,
  footer: '<a href="https://beian.miit.gov.cn/" target="_blank">\u7CA4ICP\u5907xxxxxxxx\u53F7-1</a>',
  displayFooter: true,
  pageInfo: ["Author", "Category", "Tag", "Original", "Word", "ReadingTime"],
  blog: {
    intro: "/about-the-author/",
    medias: {
      Zhihu: "https://www.zhihu.com/people/Lihua-cpu",
      Github: "https://github.com/Lihua-cpu",
      Gitee: "https://gitee.com/Lihua-cpu",
      Xiaohongshu: "https://www.xiaohongshu.com/user/profile/65eaf323000000000500eaf4"
    }
  },
  markdown: {
    align: true,
    codeTabs: true,
    mermaid: true,
    gfm: true,
    include: {
      resolvePath: (file, cwd) => {
        if (file.startsWith("@"))
          return path.resolve(
            __dirname,
            "../snippets",
            file.replace("@", "./")
          );
        return path.resolve(cwd, file);
      }
    },
    tasklist: true
  },
  plugins: {
    blog: true,
    seo: {
      canonical: "https://www.yimengli.cn",
      fallBackImage: "https://www.yimengli.cn/prod-api/profile/upload/2026/10/10/330b1c4b-8f35-4d70-88d6-1cb6139644c2.png",
      ogp: (ogp, page, app) => ({
        ...ogp,
        "og:description": buildSeoDescription(page, app)
      }),
      jsonLd: (jsonLD, page, app) => ({
        ...jsonLD,
        description: buildSeoDescription(page, app)
      }),
      customHead: (head, page, app) => {
        page.frontmatter.description = buildSeoDescription(page, app);
        if (page.path === "/")
          head.push([
            "script",
            { type: "application/ld+json" },
            JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "LeonLearn",
              alternateName: "Java \u9762\u8BD5\u6307\u5357",
              // Leon TIP 20261010: 这里的 url 必须是网站首页的绝对地址，否则会导致搜索引擎收录异常
              url: "",
              inLanguage: "zh-CN",
              description: "LeonLearn \u662F\u4E00\u4EFD Java \u9762\u8BD5\u548C\u540E\u7AEF\u901A\u7528\u9762\u8BD5\u6307\u5357\uFF0C\u8986\u76D6 Java\u3001MySQL\u3001Redis\u3001Spring\u3001\u5206\u5E03\u5F0F\u548C\u7CFB\u7EDF\u8BBE\u8BA1\u7B49\u6838\u5FC3\u77E5\u8BC6\u3002",
              publisher: {
                "@type": "Person",
                name: "LeonLearn",
                // Leon TIP 20261010: 这里的 url 必须是网站首页的绝对地址，否则会导致搜索引擎收录异常
                url: ""
              }
            })
          ]);
        if (page.path === "/java")
          head.push([
            "script",
            { type: "application/ld+json" },
            JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Java \u9762\u8BD5\u5185\u5BB9",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Java \u57FA\u7840\u9762\u8BD5\u9898",
                  url: "https://yimengli.cn"
                }
              ]
            })
          ]);
      }
    },
    sitemap: {
      changefreq: "monthly"
    },
    // The upstream copyright plugin can throw during hydration if `#app` is unavailable.
    // Keep it disabled until the plugin adds a null-safe mount path.
    copyright: false,
    feed: {
      atom: true,
      json: true,
      rss: true
    },
    icon: {
      assets: "iconify"
    },
    photoSwipe: false,
    // 申请到 DocSearch key 后配置上面的环境变量；在此之前关闭本地搜索索引。
    ...docsearchOptions ? { docsearch: docsearchOptions } : {},
    search: false
  }
});

// docs/.vuepress/config.ts
var __vite_injected_original_import_meta_url2 = "file:///Users/user/Documents/code/github/JavaLearn-main/docs/.vuepress/config.ts";
var require2 = createRequire(__vite_injected_original_import_meta_url2);
var mermaidComponentPath = require2.resolve(
  "@vuepress/plugin-markdown-chart/client/components/Mermaid.js"
);
var config_default = defineUserConfig({
  dest: "./dist",
  title: "LeonLearn Java",
  description: "LeonLearn \u662F\u4E00\u4EFD\u9762\u5411\u540E\u7AEF\u5F00\u53D1/\u540E\u7AEF\u9762\u8BD5\u7684\u5B66\u4E60\u4E0E\u590D\u4E60\u6307\u5357\uFF0C\u8986\u76D6 Java\u3001\u6570\u636E\u5E93/MySQL\u3001Redis\u3001\u5206\u5E03\u5F0F\u3001\u9AD8\u5E76\u53D1\u3001\u9AD8\u53EF\u7528\u3001\u7CFB\u7EDF\u8BBE\u8BA1\u7B49\u6838\u5FC3\u77E5\u8BC6\u3002",
  lang: "zh-CN",
  head: [
    // meta
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "Leon" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    // 添加百度统计 - 异步加载避免阻塞渲染
    [
      "script",
      { defer: true },
      `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?5dd2e8c97962d57b7b8fea1737c01743";
          hm.async = true;
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`
    ]
  ],
  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          "@vuepress/plugin-markdown-chart/client/components/Mermaid.js": mermaidComponentPath
        }
      },
      css: {
        preprocessorOptions: {
          scss: {
            silenceDeprecations: ["if-function"]
          }
        }
      }
    }
  }),
  theme: theme_default,
  pagePatterns: [
    "**/*.md",
    "!**/*.snippet.md",
    "!**/TODO.md",
    "!.vuepress",
    "!node_modules"
  ],
  shouldPrefetch: false,
  shouldPreload: false
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL3RoZW1lLnRzIiwgImRvY3MvLnZ1ZXByZXNzL25hdmJhci50cyIsICJkb2NzLy52dWVwcmVzcy9zaWRlYmFyL2luZGV4LnRzIiwgImRvY3MvLnZ1ZXByZXNzL3NpZGViYXIvaW50ZXJ2aWV3LnRzIiwgImRvY3MvLnZ1ZXByZXNzL3NpZGViYXIvY29uc3RhbnRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3VzZXIvRG9jdW1lbnRzL2NvZGUvZ2l0aHViL0phdmFMZWFybi1tYWluL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdXNlci9Eb2N1bWVudHMvY29kZS9naXRodWIvSmF2YUxlYXJuLW1haW4vZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy91c2VyL0RvY3VtZW50cy9jb2RlL2dpdGh1Yi9KYXZhTGVhcm4tbWFpbi9kb2NzLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBjcmVhdGVSZXF1aXJlIH0gZnJvbSBcIm5vZGU6bW9kdWxlXCI7XG5pbXBvcnQgeyB2aXRlQnVuZGxlciB9IGZyb20gXCJAdnVlcHJlc3MvYnVuZGxlci12aXRlXCI7XG5pbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcblxuY29uc3QgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUoaW1wb3J0Lm1ldGEudXJsKTtcbmNvbnN0IG1lcm1haWRDb21wb25lbnRQYXRoID0gcmVxdWlyZS5yZXNvbHZlKFxuICBcIkB2dWVwcmVzcy9wbHVnaW4tbWFya2Rvd24tY2hhcnQvY2xpZW50L2NvbXBvbmVudHMvTWVybWFpZC5qc1wiLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIGRlc3Q6IFwiLi9kaXN0XCIsXG5cbiAgdGl0bGU6IFwiTGVvbkxlYXJuIEphdmFcIixcbiAgZGVzY3JpcHRpb246XG4gICAgXCJMZW9uTGVhcm4gXHU2NjJGXHU0RTAwXHU0RUZEXHU5NzYyXHU1NDExXHU1NDBFXHU3QUVGXHU1RjAwXHU1M0QxL1x1NTQwRVx1N0FFRlx1OTc2Mlx1OEJENVx1NzY4NFx1NUI2Nlx1NEU2MFx1NEUwRVx1NTkwRFx1NEU2MFx1NjMwN1x1NTM1N1x1RkYwQ1x1ODk4Nlx1NzZENiBKYXZhXHUzMDAxXHU2NTcwXHU2MzZFXHU1RTkzL015U1FMXHUzMDAxUmVkaXNcdTMwMDFcdTUyMDZcdTVFMDNcdTVGMEZcdTMwMDFcdTlBRDhcdTVFNzZcdTUzRDFcdTMwMDFcdTlBRDhcdTUzRUZcdTc1MjhcdTMwMDFcdTdDRkJcdTdFREZcdThCQkVcdThCQTFcdTdCNDlcdTY4MzhcdTVGQzNcdTc3RTVcdThCQzZcdTMwMDJcIixcbiAgbGFuZzogXCJ6aC1DTlwiLFxuXG4gIGhlYWQ6IFtcbiAgICAvLyBtZXRhXG4gICAgW1wibWV0YVwiLCB7IG5hbWU6IFwicm9ib3RzXCIsIGNvbnRlbnQ6IFwiYWxsXCIgfV0sXG4gICAgW1wibWV0YVwiLCB7IG5hbWU6IFwiYXV0aG9yXCIsIGNvbnRlbnQ6IFwiTGVvblwiIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiwgY29udGVudDogXCJ5ZXNcIiB9XSxcbiAgICAvLyBcdTZERkJcdTUyQTBcdTc2N0VcdTVFQTZcdTdFREZcdThCQTEgLSBcdTVGMDJcdTZCNjVcdTUyQTBcdThGN0RcdTkwN0ZcdTUxNERcdTk2M0JcdTU4NUVcdTZFMzJcdTY3RDNcbiAgICBbXG4gICAgICBcInNjcmlwdFwiLFxuICAgICAgeyBkZWZlcjogdHJ1ZSB9LFxuICAgICAgYHZhciBfaG10ID0gX2htdCB8fCBbXTtcbiAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBobSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgaG0uc3JjID0gXCJodHRwczovL2htLmJhaWR1LmNvbS9obS5qcz81ZGQyZThjOTc5NjJkNTdiN2I4ZmVhMTczN2MwMTc0M1wiO1xuICAgICAgICAgIGhtLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgICB2YXIgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdOyBcbiAgICAgICAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGhtLCBzKTtcbiAgICAgICAgfSkoKTtgLFxuICAgIF0sXG4gIF0sXG5cbiAgYnVuZGxlcjogdml0ZUJ1bmRsZXIoe1xuICAgIHZpdGVPcHRpb25zOiB7XG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgXCJAdnVlcHJlc3MvcGx1Z2luLW1hcmtkb3duLWNoYXJ0L2NsaWVudC9jb21wb25lbnRzL01lcm1haWQuanNcIjpcbiAgICAgICAgICAgIG1lcm1haWRDb21wb25lbnRQYXRoLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNzczoge1xuICAgICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgICAgc2Nzczoge1xuICAgICAgICAgICAgc2lsZW5jZURlcHJlY2F0aW9uczogW1wiaWYtZnVuY3Rpb25cIl0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG5cbiAgdGhlbWUsXG5cbiAgcGFnZVBhdHRlcm5zOiBbXG4gICAgXCIqKi8qLm1kXCIsXG4gICAgXCIhKiovKi5zbmlwcGV0Lm1kXCIsXG4gICAgXCIhKiovVE9ETy5tZFwiLFxuICAgIFwiIS52dWVwcmVzc1wiLFxuICAgIFwiIW5vZGVfbW9kdWxlc1wiLFxuICBdLFxuXG4gIHNob3VsZFByZWZldGNoOiBmYWxzZSxcbiAgc2hvdWxkUHJlbG9hZDogZmFsc2UsXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3VzZXIvRG9jdW1lbnRzL2NvZGUvZ2l0aHViL0phdmFMZWFybi1tYWluL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdXNlci9Eb2N1bWVudHMvY29kZS9naXRodWIvSmF2YUxlYXJuLW1haW4vZG9jcy8udnVlcHJlc3MvdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3VzZXIvRG9jdW1lbnRzL2NvZGUvZ2l0aHViL0phdmFMZWFybi1tYWluL2RvY3MvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7aW1wb3J0IHsgZ2V0VGV4dCB9IGZyb20gXCJAdnVlcHJlc3MvaGVscGVyXCI7XG5pbXBvcnQgeyBnZXREaXJuYW1lLCBwYXRoIH0gZnJvbSBcInZ1ZXByZXNzL3V0aWxzXCI7XG5pbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuL25hdmJhci5qc1wiO1xuaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4vc2lkZWJhci9pbmRleC5qc1wiO1xuXG5jb25zdCBfX2Rpcm5hbWUgPSBnZXREaXJuYW1lKGltcG9ydC5tZXRhLnVybCk7XG5jb25zdCBkb2NzZWFyY2hBcHBJZCA9IHByb2Nlc3MuZW52LkRPQ1NFQVJDSF9BUFBfSUQ7XG5jb25zdCBkb2NzZWFyY2hBcGlLZXkgPSBwcm9jZXNzLmVudi5ET0NTRUFSQ0hfQVBJX0tFWTtcbmNvbnN0IGRvY3NlYXJjaEluZGV4TmFtZSA9IHByb2Nlc3MuZW52LkRPQ1NFQVJDSF9JTkRFWF9OQU1FO1xuY29uc3QgZG9jc2VhcmNoT3B0aW9ucyA9XG4gIGRvY3NlYXJjaEFwcElkICYmIGRvY3NlYXJjaEFwaUtleSAmJiBkb2NzZWFyY2hJbmRleE5hbWVcbiAgICA/IHtcbiAgICAgICAgYXBwSWQ6IGRvY3NlYXJjaEFwcElkLFxuICAgICAgICBhcGlLZXk6IGRvY3NlYXJjaEFwaUtleSxcbiAgICAgICAgaW5kZXhOYW1lOiBkb2NzZWFyY2hJbmRleE5hbWUsXG4gICAgICAgIGxvY2FsZXM6IHtcbiAgICAgICAgICBcIi9cIjoge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXHU2NDFDXHU3RDIyIGxlb25MZWFyblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgOiBudWxsO1xuY29uc3QgTUlOX01FVEFfREVTQ1JJUFRJT05fTEVOR1RIID0gMTUwO1xuY29uc3QgTUFYX01FVEFfREVTQ1JJUFRJT05fTEVOR1RIID0gMTYwO1xuXG5jb25zdCBzZWdtZW50RGlzcGxheU5hbWVzID0ge1xuICBhaTogXCJBSVwiLFxuICBcImFpLWNvZGluZ1wiOiBcIkFJIFx1N0YxNlx1N0EwQlwiLFxuICBhbGdvcml0aG1zOiBcIlx1N0I5N1x1NkNENVwiLFxuICBiYXNpczogXCJcdTU3RkFcdTc4NDBcdTc3RTVcdThCQzZcIixcbiAgYm9va3M6IFwiXHU2MjgwXHU2NzJGXHU0RTY2XHU3QzREXCIsXG4gIGNvbGxlY3Rpb246IFwiSmF2YSBcdTk2QzZcdTU0MDhcIixcbiAgY29uY3VycmVudDogXCJKYXZhIFx1NUU3Nlx1NTNEMVwiLFxuICBcImNzLWJhc2ljc1wiOiBcIlx1OEJBMVx1N0I5N1x1NjczQVx1NTdGQVx1Nzg0MFwiLFxuICBcImRhdGEtc3RydWN0dXJlXCI6IFwiXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XCIsXG4gIGRhdGFiYXNlOiBcIlx1NjU3MFx1NjM2RVx1NUU5M1wiLFxuICBcImRpc3RyaWJ1dGVkLXByb2Nlc3MtY29vcmRpbmF0aW9uXCI6IFwiXHU1MjA2XHU1RTAzXHU1RjBGXHU1MzRGXHU4QzAzXCIsXG4gIFwiZGlzdHJpYnV0ZWQtc3lzdGVtXCI6IFwiXHU1MjA2XHU1RTAzXHU1RjBGXHU3Q0ZCXHU3RURGXCIsXG4gIGRvY2tlcjogXCJEb2NrZXJcIixcbiAgZWxhc3RpY3NlYXJjaDogXCJFbGFzdGljc2VhcmNoXCIsXG4gIGZyYW1ld29yazogXCJcdTVGMDBcdTUzRDFcdTY4NDZcdTY3QjZcIixcbiAgZ2l0OiBcIkdpdFwiLFxuICBncmFkbGU6IFwiR3JhZGxlXCIsXG4gIFwiaGlnaC1hdmFpbGFiaWxpdHlcIjogXCJcdTlBRDhcdTUzRUZcdTc1MjhcIixcbiAgXCJoaWdoLXBlcmZvcm1hbmNlXCI6IFwiXHU5QUQ4XHU2MDI3XHU4MEZEXCIsXG4gIFwiaW50ZXJ2aWV3LXByZXBhcmF0aW9uXCI6IFwiXHU5NzYyXHU4QkQ1XHU1MUM2XHU1OTA3XCIsXG4gIGlvOiBcIkphdmEgSU9cIixcbiAgamF2YTogXCJKYXZhXCIsXG4gIGxlb25MZWFybjogXCJMZW9uTGVhcm5cIixcbiAganZtOiBcIkpWTVwiLFxuICBcIm1lc3NhZ2UtcXVldWVcIjogXCJcdTZEODhcdTYwNkZcdTk2MUZcdTUyMTdcIixcbiAgbXlzcWw6IFwiTXlTUUxcIixcbiAgbmV0d29yazogXCJcdThCQTFcdTdCOTdcdTY3M0FcdTdGNTFcdTdFRENcIixcbiAgXCJuZXctZmVhdHVyZXNcIjogXCJKYXZhIFx1NjVCMFx1NzI3OVx1NjAyN1wiLFxuICBcIm9wZW4tc291cmNlLXByb2plY3RcIjogXCJcdTVGMDBcdTZFOTBcdTk4NzlcdTc2RUVcIixcbiAgXCJvcGVyYXRpbmctc3lzdGVtXCI6IFwiXHU2NENEXHU0RjVDXHU3Q0ZCXHU3RURGXCIsXG4gIHByb3RvY29sOiBcIlx1NTIwNlx1NUUwM1x1NUYwRlx1NTM0Rlx1OEJBRVx1NEUwRVx1N0I5N1x1NkNENVwiLFxuICByYWc6IFwiUkFHXCIsXG4gIHJlZGlzOiBcIlJlZGlzXCIsXG4gIHJwYzogXCJSUENcIixcbiAgc2VjdXJpdHk6IFwiXHU1Qjg5XHU1MTY4XCIsXG4gIHNxbDogXCJTUUxcIixcbiAgXCJzeXN0ZW0tZGVzaWduXCI6IFwiXHU3Q0ZCXHU3RURGXHU4QkJFXHU4QkExXCIsXG4gIHRvb2xzOiBcIlx1NUYwMFx1NTNEMVx1NURFNVx1NTE3N1wiLFxuICB6b29rZWVwZXI6IFwiWm9vS2VlcGVyXCIsXG59O1xuXG5jb25zdCBub3JtYWxpemVEZXNjcmlwdGlvblRleHQgPSAodmFsdWUpID0+XG4gIFN0cmluZyh2YWx1ZSA/PyBcIlwiKVxuICAgIC5yZXBsYWNlKC88W14+XSs+L2csIFwiIFwiKVxuICAgIC5yZXBsYWNlKC8mbmJzcDsvZywgXCIgXCIpXG4gICAgLnJlcGxhY2UoLyZhbXA7L2csIFwiJlwiKVxuICAgIC5yZXBsYWNlKC8mbHQ7L2csIFwiPFwiKVxuICAgIC5yZXBsYWNlKC8mZ3Q7L2csIFwiPlwiKVxuICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJylcbiAgICAucmVwbGFjZSgvJiMzOTsvZywgXCInXCIpXG4gICAgLnJlcGxhY2UoL1xccysvZywgXCIgXCIpXG4gICAgLnRyaW0oKTtcblxuY29uc3QgdG9BcnJheSA9ICh2YWx1ZSkgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlID8gW3ZhbHVlXSA6IFtdO1xufTtcblxuY29uc3QgZm9ybWF0UGF0aFNlZ21lbnQgPSAoc2VnbWVudCkgPT5cbiAgc2VnbWVudERpc3BsYXlOYW1lc1tzZWdtZW50XSA/P1xuICBkZWNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAucmVwbGFjZSgvLS9nLCBcIiBcIilcbiAgICAucmVwbGFjZSgvXFxiXFx3L2csIChjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xuXG5jb25zdCBnZXRQYXRoVG9waWMgPSAocGFnZSkgPT5cbiAgcGFnZS5wYXRoLnNwbGl0KFwiL1wiKS5maWx0ZXIoQm9vbGVhbikubWFwKGZvcm1hdFBhdGhTZWdtZW50KS5qb2luKFwiIC8gXCIpO1xuXG5jb25zdCBnZXRIZWFkZXJUaXRsZXMgPSAocGFnZSkgPT5cbiAgdG9BcnJheShwYWdlLmhlYWRlcnMpXG4gICAgLm1hcCgoeyB0aXRsZSB9KSA9PiBub3JtYWxpemVEZXNjcmlwdGlvblRleHQodGl0bGUpKVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAuc2xpY2UoMCwgNCk7XG5cbmNvbnN0IGdldFBhZ2VUZXh0ID0gKHBhZ2UsIGFwcCkgPT5cbiAgbm9ybWFsaXplRGVzY3JpcHRpb25UZXh0KFxuICAgIGdldFRleHQoXG4gICAgICBwYWdlLmRhdGEuZXhjZXJwdCA/PyBwYWdlLmNvbnRlbnRSZW5kZXJlZCA/PyBwYWdlLmNvbnRlbnQgPz8gXCJcIixcbiAgICAgIGFwcC5zaXRlRGF0YS5iYXNlLFxuICAgICAge1xuICAgICAgICBsZW5ndGg6IDIyMCxcbiAgICAgICAgc2luZ2xlTGluZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgKSxcbiAgKTtcblxuY29uc3QgdHJpbURlc2NyaXB0aW9uID0gKGRlc2NyaXB0aW9uKSA9PiB7XG4gIGlmIChkZXNjcmlwdGlvbi5sZW5ndGggPD0gTUFYX01FVEFfREVTQ1JJUFRJT05fTEVOR1RIKSByZXR1cm4gZGVzY3JpcHRpb247XG5cbiAgY29uc3QgdHJpbW1lZCA9IGRlc2NyaXB0aW9uLnNsaWNlKDAsIE1BWF9NRVRBX0RFU0NSSVBUSU9OX0xFTkdUSCk7XG4gIGNvbnN0IGxhc3RTdG9wID0gTWF0aC5tYXgoXG4gICAgdHJpbW1lZC5sYXN0SW5kZXhPZihcIlx1MzAwMlwiKSxcbiAgICB0cmltbWVkLmxhc3RJbmRleE9mKFwiXHVGRjAxXCIpLFxuICAgIHRyaW1tZWQubGFzdEluZGV4T2YoXCJcdUZGMUZcIiksXG4gICAgdHJpbW1lZC5sYXN0SW5kZXhPZihcIjtcIiksXG4gICAgdHJpbW1lZC5sYXN0SW5kZXhPZihcIlx1RkYxQlwiKSxcbiAgKTtcblxuICBpZiAobGFzdFN0b3AgPj0gTUlOX01FVEFfREVTQ1JJUFRJT05fTEVOR1RIIC0gNSlcbiAgICByZXR1cm4gdHJpbW1lZC5zbGljZSgwLCBsYXN0U3RvcCArIDEpO1xuXG4gIGNvbnN0IGxhc3RTb2Z0U3RvcCA9IE1hdGgubWF4KFxuICAgIHRyaW1tZWQubGFzdEluZGV4T2YoXCJcdUZGMENcIiksXG4gICAgdHJpbW1lZC5sYXN0SW5kZXhPZihcIlx1MzAwMVwiKSxcbiAgICB0cmltbWVkLmxhc3RJbmRleE9mKFwiLFwiKSxcbiAgKTtcblxuICBpZiAobGFzdFNvZnRTdG9wID49IE1JTl9NRVRBX0RFU0NSSVBUSU9OX0xFTkdUSCAtIDUpIHtcbiAgICBjb25zdCBiYXNlID0gdHJpbW1lZC5zbGljZSgwLCBsYXN0U29mdFN0b3ApLnJlcGxhY2UoL1tcdUZGMENcdTMwMDEsO1xcc10rJC8sIFwiXCIpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGAke2Jhc2V9XHU3QjQ5XHU2ODM4XHU1RkMzXHU1MTg1XHU1QkI5XHUzMDAyYDtcblxuICAgIHJldHVybiByZXN1bHQubGVuZ3RoIDw9IE1BWF9NRVRBX0RFU0NSSVBUSU9OX0xFTkdUSFxuICAgICAgPyByZXN1bHRcbiAgICAgIDogYCR7cmVzdWx0LnNsaWNlKDAsIE1BWF9NRVRBX0RFU0NSSVBUSU9OX0xFTkdUSCAtIDEpfVx1MzAwMmA7XG4gIH1cblxuICByZXR1cm4gYCR7ZGVzY3JpcHRpb24uc2xpY2UoMCwgTUFYX01FVEFfREVTQ1JJUFRJT05fTEVOR1RIIC0gMSl9XHUzMDAyYDtcbn07XG5cbmNvbnN0IGJ1aWxkU2VvRGVzY3JpcHRpb24gPSAocGFnZSwgYXBwKSA9PiB7XG4gIGNvbnN0IGV4aXN0aW5nRGVzY3JpcHRpb24gPSBub3JtYWxpemVEZXNjcmlwdGlvblRleHQoXG4gICAgcGFnZS5mcm9udG1hdHRlci5kZXNjcmlwdGlvbixcbiAgKTtcblxuICBpZiAoZXhpc3RpbmdEZXNjcmlwdGlvbi5sZW5ndGggPj0gTUlOX01FVEFfREVTQ1JJUFRJT05fTEVOR1RIKVxuICAgIHJldHVybiB0cmltRGVzY3JpcHRpb24oZXhpc3RpbmdEZXNjcmlwdGlvbik7XG5cbiAgaWYgKHBhZ2UucGF0aCA9PT0gXCIvXCIpXG4gICAgcmV0dXJuIHRyaW1EZXNjcmlwdGlvbihcbiAgICAgIFwiTGVvbkxlYXJuIFx1NTQwRVx1N0FFRlx1OTBFOFx1NTIwNlx1NjYyRlx1NEUwMFx1NEVGRFx1OTc2Mlx1NTQxMSBKYXZhIFx1NTQwRVx1N0FFRlx1NUYwMFx1NTNEMVx1ODAwNVx1NTQ4Q1x1OTc2Mlx1OEJENVx1NTFDNlx1NTkwN1x1NEVCQVx1N0ZBNFx1NzY4NFx1NUI2Nlx1NEU2MFx1NjMwN1x1NTM1N1x1RkYwQ1x1N0NGQlx1N0VERlx1ODk4Nlx1NzZENiBKYXZhIFx1NTdGQVx1Nzg0MFx1MzAwMVx1OTZDNlx1NTQwOFx1MzAwMVx1NUU3Nlx1NTNEMVx1MzAwMUpWTVx1MzAwMU15U1FMXHUzMDAxUmVkaXNcdTMwMDFcdTUyMDZcdTVFMDNcdTVGMEZcdTMwMDFcdTlBRDhcdTVFNzZcdTUzRDFcdTMwMDFcdTlBRDhcdTUzRUZcdTc1MjhcdTMwMDFcdTdDRkJcdTdFREZcdThCQkVcdThCQTFcdTMwMDFcdTZEODhcdTYwNkZcdTk2MUZcdTUyMTdcdTMwMDFcdThCQTFcdTdCOTdcdTY3M0FcdTU3RkFcdTc4NDBcdTU0OEMgQUkgXHU1RTk0XHU3NTI4XHU1RjAwXHU1M0QxXHU3QjQ5XHU2ODM4XHU1RkMzXHU3N0U1XHU4QkM2XHVGRjBDXHU5MDAyXHU1NDA4XHU2ODIxXHU2MkRCXHU3OTNFXHU2MkRCXHU1OTBEXHU0RTYwXHUzMDAxXHU2N0U1XHU3RjNBXHU4ODY1XHU2RjBGXHU1NDhDXHU4OUM0XHU1MjEyXHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGXHUzMDAyXCIsXG4gICAgKTtcblxuICBpZiAocGFnZS5wYXRoID09PSBcIi9ob21lLmh0bWxcIilcbiAgICByZXR1cm4gdHJpbURlc2NyaXB0aW9uKFxuICAgICAgXCJMZW9uTGVhcm4gXHU5OTk2XHU5ODc1XHU4MDVBXHU1NDA4IEphdmFcdTU0MEVcdTdBRUZcdTVCNjZcdTRFNjBcdThERUZcdTdFQkZcdTMwMDFcdTY4MzhcdTVGQzNcdTc3RTVcdThCQzZcdTRGNTNcdTdDRkJcdTU0OENcdTlBRDhcdTk4OTFcdTk3NjJcdThCRDVcdTk4OThcdTUxNjVcdTUzRTNcdUZGMENcdTg5ODZcdTc2RDYgSmF2YSBcdTU3RkFcdTc4NDBcdTMwMDFcdTVFNzZcdTUzRDFcdTMwMDFKVk1cdTMwMDFcdTY1NzBcdTYzNkVcdTVFOTNcdTMwMDFSZWRpc1x1MzAwMVx1NTIwNlx1NUUwM1x1NUYwRlx1MzAwMVx1N0NGQlx1N0VERlx1OEJCRVx1OEJBMVx1MzAwMVx1OUFEOFx1NjAyN1x1ODBGRFx1MzAwMVx1OUFEOFx1NTNFRlx1NzUyOFx1MzAwMVx1OEJBMVx1N0I5N1x1NjczQVx1NTdGQVx1Nzg0MFx1NTQ4QyBBSSBcdTVFOTRcdTc1MjhcdTVGMDBcdTUzRDFcdUZGMENcdTVFMkVcdTUyQTlcdThCRkJcdTgwMDVcdTVGRUJcdTkwMUZcdTVCOUFcdTRGNERcdTkxQ0RcdTcwQjlcdTUxODVcdTVCQjlcdTMwMDJcIlxuICAgICk7XG5cbiAgaWYgKHBhZ2UucGF0aCA9PT0gXCIvNDA0Lmh0bWxcIilcbiAgICByZXR1cm4gdHJpbURlc2NyaXB0aW9uKFxuICAgICAgXCJMZW9uTGVhcm4gXHU5ODc1XHU5NzYyXHU2NzJBXHU2MjdFXHU1MjMwXHU2M0QwXHU3OTNBXHU5ODc1XHVGRjBDXHU1RTJFXHU1MkE5XHU4QkZCXHU4MDA1XHU4RkQ0XHU1NkRFIEphdmEgXHU5NzYyXHU4QkQ1XHU2MzA3XHU1MzU3XHUzMDAxXHU1NDBFXHU3QUVGXHU5MDFBXHU3NTI4XHU5NzYyXHU4QkQ1XHU3N0U1XHU4QkM2XHUzMDAxXHU4QkExXHU3Qjk3XHU2NzNBXHU1N0ZBXHU3ODQwXHUzMDAxXHU2NTcwXHU2MzZFXHU1RTkzXHUzMDAxUmVkaXNcdTMwMDFcdTUyMDZcdTVFMDNcdTVGMEZcdTMwMDFcdTdDRkJcdTdFREZcdThCQkVcdThCQTFcdTU0OEMgQUkgXHU1RTk0XHU3NTI4XHU1RjAwXHU1M0QxXHU3QjQ5XHU2ODM4XHU1RkMzXHU1MTg1XHU1QkI5XHU1MTY1XHU1M0UzXHVGRjBDXHU3RUU3XHU3RUVEXHU1QjlBXHU0RjREXHU1QjY2XHU0RTYwXHU4RDQ0XHU2NTk5XHUzMDAxXHU5NzYyXHU4QkQ1XHU5ODk4XHU2MDNCXHU3RUQzXHU1NDhDXHU1QjlFXHU4REY1XHU2NTg3XHU3QUUwXHUzMDAyXCIsXG4gICAgKTtcblxuICBjb25zdCB0aXRsZSA9IG5vcm1hbGl6ZURlc2NyaXB0aW9uVGV4dChwYWdlLnRpdGxlKTtcbiAgY29uc3QgY2F0ZWdvcnkgPSB0b0FycmF5KHBhZ2UuZnJvbnRtYXR0ZXIuY2F0ZWdvcnkpXG4gICAgLm1hcChub3JtYWxpemVEZXNjcmlwdGlvblRleHQpXG4gICAgLmZpbHRlcihCb29sZWFuKTtcbiAgY29uc3QgdGFncyA9IHRvQXJyYXkocGFnZS5mcm9udG1hdHRlci50YWcgPz8gcGFnZS5mcm9udG1hdHRlci50YWdzKVxuICAgIC5tYXAobm9ybWFsaXplRGVzY3JpcHRpb25UZXh0KVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAuc2xpY2UoMCwgNCk7XG4gIGNvbnN0IGhlYWRlcnMgPSBnZXRIZWFkZXJUaXRsZXMocGFnZSk7XG4gIGNvbnN0IGZvY3VzSXRlbXMgPSBbLi4uaGVhZGVycywgLi4udGFnc10uZmlsdGVyKEJvb2xlYW4pLnNsaWNlKDAsIDUpO1xuICBjb25zdCB0b3BpYyA9IGdldFBhdGhUb3BpYyhwYWdlKSB8fCB0aXRsZSB8fCBjYXRlZ29yeVswXSB8fCBcIkxlb25MZWFyblwiO1xuICBjb25zdCBwYWdlVGV4dCA9IGdldFBhZ2VUZXh0KHBhZ2UsIGFwcCk7XG4gIGNvbnN0IHBhcnRzID0gW1xuICAgIGV4aXN0aW5nRGVzY3JpcHRpb24gfHwgKHRpdGxlID8gYCR7dGl0bGV9XHVGRjFBYCA6IFwiXCIpLFxuICAgIGZvY3VzSXRlbXMubGVuZ3RoID8gYFx1OTFDRFx1NzBCOVx1NTZGNFx1N0VENSAke2ZvY3VzSXRlbXMuam9pbihcIlx1MzAwMVwiKX0gXHU3QjQ5XHU1MTg1XHU1QkI5XHU1QzU1XHU1RjAwXHUzMDAyYCA6IFwiXCIsXG4gICAgYFx1N0VEM1x1NTQwOCBMZW9uTGVhcm4gXHU1NDBFXHU3QUVGXHU5MEU4XHU1MjA2XHU3Njg0XHU3N0U1XHU4QkM2XHU0RjUzXHU3Q0ZCXHU2OEIzXHU3NDA2ICR7dG9waWN9IFx1NzY4NFx1NjgzOFx1NUZDM1x1Njk4Mlx1NUZGNVx1MzAwMVx1NUI5RVx1OERGNVx1NjVCOVx1NkNENVx1MzAwMVx1NUUzOFx1ODlDMVx1OTVFRVx1OTg5OFx1NTQ4Q1x1OUFEOFx1OTg5MVx1OTc2Mlx1OEJENVx1ODAwM1x1NzBCOVx1RkYwQ1x1ODk4Nlx1NzZENlx1NTM5Rlx1NzQwNlx1NTIwNlx1Njc5MFx1MzAwMVx1NEY3Rlx1NzUyOFx1NTczQVx1NjY2Rlx1MzAwMVx1NjVCOVx1Njg0OFx1NUJGOVx1NkJENFx1NEUwRVx1N0VDRlx1OUE4Q1x1NjAzQlx1N0VEM1x1RkYwQ1x1OTAwMlx1NTQwOFx1NTQwRVx1N0FFRlx1NUYwMFx1NTNEMVx1ODAwNVx1N0NGQlx1N0VERlx1NUI2Nlx1NEU2MFx1MzAwMVx1OTc2Mlx1OEJENVx1NTkwRFx1NEU2MFx1MzAwMVx1NUZFQlx1OTAxRlx1NUI5QVx1NEY0RFx1OTFDRFx1NzBCOVx1NTE4NVx1NUJCOVx1NTQ4Q1x1NjdFNVx1N0YzQVx1ODg2NVx1NkYwRlx1MzAwMmAsXG4gICAgcGFnZVRleHQgJiYgIWV4aXN0aW5nRGVzY3JpcHRpb24uaW5jbHVkZXMocGFnZVRleHQuc2xpY2UoMCwgMjQpKVxuICAgICAgPyBwYWdlVGV4dFxuICAgICAgOiBcIlwiLFxuICBdO1xuXG4gIHJldHVybiB0cmltRGVzY3JpcHRpb24oXG4gICAgbm9ybWFsaXplRGVzY3JpcHRpb25UZXh0KHBhcnRzLmZpbHRlcihCb29sZWFuKS5qb2luKFwiXCIpKSxcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhvcGVUaGVtZSh7XG4gIGhvc3RuYW1lOiBcImh0dHBzOi8vd3d3LnlpbWVuZ2xpLmNuL1wiLFxuICBsb2dvOiBcIi9sb2dvLnBuZ1wiLFxuICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxuXG4gIGF1dGhvcjoge1xuICAgIG5hbWU6IFwiTGVvblwiLFxuICAgIHVybDogXCJodHRwczovL3d3dy55aW1lbmdsaS5jbi9jbXMvbWFpbi9lc3NheVwiLFxuICB9LFxuICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9MaWh1YS1jcHVcIixcbiAgZG9jc0RpcjogXCJkb2NzXCIsXG4gIHB1cmU6IHRydWUsXG4gIGZvY3VzOiBmYWxzZSxcbiAgcHJpbnQ6IGZhbHNlLFxuICBicmVhZGNydW1iOiBmYWxzZSxcbiAgbmF2YmFyLFxuICBzaWRlYmFyLFxuICBmb290ZXI6XG4gICAgJzxhIGhyZWY9XCJodHRwczovL2JlaWFuLm1paXQuZ292LmNuL1wiIHRhcmdldD1cIl9ibGFua1wiPlx1N0NBNElDUFx1NTkwN3h4eHh4eHh4XHU1M0Y3LTE8L2E+JyxcbiAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcblxuICBwYWdlSW5mbzogW1wiQXV0aG9yXCIsIFwiQ2F0ZWdvcnlcIiwgXCJUYWdcIiwgXCJPcmlnaW5hbFwiLCBcIldvcmRcIiwgXCJSZWFkaW5nVGltZVwiXSxcblxuICBibG9nOiB7XG4gICAgaW50cm86IFwiL2Fib3V0LXRoZS1hdXRob3IvXCIsXG4gICAgbWVkaWFzOiB7XG4gICAgICBaaGlodTogXCJodHRwczovL3d3dy56aGlodS5jb20vcGVvcGxlL0xpaHVhLWNwdVwiLFxuICAgICAgR2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9MaWh1YS1jcHVcIixcbiAgICAgIEdpdGVlOiBcImh0dHBzOi8vZ2l0ZWUuY29tL0xpaHVhLWNwdVwiLFxuICAgICAgWGlhb2hvbmdzaHU6IFwiaHR0cHM6Ly93d3cueGlhb2hvbmdzaHUuY29tL3VzZXIvcHJvZmlsZS82NWVhZjMyMzAwMDAwMDAwMDUwMGVhZjRcIlxuICAgIH0sXG4gIH0sXG5cbiAgbWFya2Rvd246IHtcbiAgICBhbGlnbjogdHJ1ZSxcbiAgICBjb2RlVGFiczogdHJ1ZSxcbiAgICBtZXJtYWlkOiB0cnVlLFxuICAgIGdmbTogdHJ1ZSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICByZXNvbHZlUGF0aDogKGZpbGUsIGN3ZCkgPT4ge1xuICAgICAgICBpZiAoZmlsZS5zdGFydHNXaXRoKFwiQFwiKSlcbiAgICAgICAgICByZXR1cm4gcGF0aC5yZXNvbHZlKFxuICAgICAgICAgICAgX19kaXJuYW1lLFxuICAgICAgICAgICAgXCIuLi9zbmlwcGV0c1wiLFxuICAgICAgICAgICAgZmlsZS5yZXBsYWNlKFwiQFwiLCBcIi4vXCIpLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHBhdGgucmVzb2x2ZShjd2QsIGZpbGUpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHRhc2tsaXN0OiB0cnVlLFxuICB9LFxuXG4gIHBsdWdpbnM6IHtcbiAgICBibG9nOiB0cnVlLFxuICAgIHNlbzoge1xuICAgICAgY2Fub25pY2FsOiBcImh0dHBzOi8vd3d3LnlpbWVuZ2xpLmNuXCIsXG4gICAgICBmYWxsQmFja0ltYWdlOiBcImh0dHBzOi8vd3d3LnlpbWVuZ2xpLmNuL3Byb2QtYXBpL3Byb2ZpbGUvdXBsb2FkLzIwMjYvMTAvMTAvMzMwYjFjNGItOGYzNS00ZDcwLTg4ZDYtMWNiNjEzOTY0NGMyLnBuZ1wiLFxuICAgICAgb2dwOiAob2dwLCBwYWdlLCBhcHApID0+ICh7XG4gICAgICAgIC4uLm9ncCxcbiAgICAgICAgXCJvZzpkZXNjcmlwdGlvblwiOiBidWlsZFNlb0Rlc2NyaXB0aW9uKHBhZ2UsIGFwcCksXG4gICAgICB9KSxcbiAgICAgIGpzb25MZDogKGpzb25MRCwgcGFnZSwgYXBwKSA9PiAoe1xuICAgICAgICAuLi5qc29uTEQsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBidWlsZFNlb0Rlc2NyaXB0aW9uKHBhZ2UsIGFwcCksXG4gICAgICB9KSxcbiAgICAgIGN1c3RvbUhlYWQ6IChoZWFkLCBwYWdlLCBhcHApID0+IHtcbiAgICAgICAgcGFnZS5mcm9udG1hdHRlci5kZXNjcmlwdGlvbiA9IGJ1aWxkU2VvRGVzY3JpcHRpb24ocGFnZSwgYXBwKTtcblxuICAgICAgICBpZiAocGFnZS5wYXRoID09PSBcIi9cIilcbiAgICAgICAgICBoZWFkLnB1c2goW1xuICAgICAgICAgICAgXCJzY3JpcHRcIixcbiAgICAgICAgICAgIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIgfSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiV2ViU2l0ZVwiLFxuICAgICAgICAgICAgICBuYW1lOiBcIkxlb25MZWFyblwiLFxuICAgICAgICAgICAgICBhbHRlcm5hdGVOYW1lOiBcIkphdmEgXHU5NzYyXHU4QkQ1XHU2MzA3XHU1MzU3XCIsXG4gICAgICAgICAgICAgIC8vIExlb24gVElQIDIwMjYxMDEwOiBcdThGRDlcdTkxQ0NcdTc2ODQgdXJsIFx1NUZDNVx1OTg3Qlx1NjYyRlx1N0Y1MVx1N0FEOVx1OTk5Nlx1OTg3NVx1NzY4NFx1N0VERFx1NUJGOVx1NTczMFx1NTc0MFx1RkYwQ1x1NTQyNlx1NTIxOVx1NEYxQVx1NUJGQ1x1ODFGNFx1NjQxQ1x1N0QyMlx1NUYxNVx1NjRDRVx1NjUzNlx1NUY1NVx1NUYwMlx1NUUzOFxuICAgICAgICAgICAgICB1cmw6IFwiXCIsXG4gICAgICAgICAgICAgIGluTGFuZ3VhZ2U6IFwiemgtQ05cIixcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgXCJMZW9uTGVhcm4gXHU2NjJGXHU0RTAwXHU0RUZEIEphdmEgXHU5NzYyXHU4QkQ1XHU1NDhDXHU1NDBFXHU3QUVGXHU5MDFBXHU3NTI4XHU5NzYyXHU4QkQ1XHU2MzA3XHU1MzU3XHVGRjBDXHU4OTg2XHU3NkQ2IEphdmFcdTMwMDFNeVNRTFx1MzAwMVJlZGlzXHUzMDAxU3ByaW5nXHUzMDAxXHU1MjA2XHU1RTAzXHU1RjBGXHU1NDhDXHU3Q0ZCXHU3RURGXHU4QkJFXHU4QkExXHU3QjQ5XHU2ODM4XHU1RkMzXHU3N0U1XHU4QkM2XHUzMDAyXCIsXG4gICAgICAgICAgICAgIHB1Ymxpc2hlcjoge1xuICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkxlb25MZWFyblwiLFxuICAgICAgICAgICAgICAgIC8vIExlb24gVElQIDIwMjYxMDEwOiBcdThGRDlcdTkxQ0NcdTc2ODQgdXJsIFx1NUZDNVx1OTg3Qlx1NjYyRlx1N0Y1MVx1N0FEOVx1OTk5Nlx1OTg3NVx1NzY4NFx1N0VERFx1NUJGOVx1NTczMFx1NTc0MFx1RkYwQ1x1NTQyNlx1NTIxOVx1NEYxQVx1NUJGQ1x1ODFGNFx1NjQxQ1x1N0QyMlx1NUYxNVx1NjRDRVx1NjUzNlx1NUY1NVx1NUYwMlx1NUUzOFxuICAgICAgICAgICAgICAgIHVybDogXCJcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0pO1xuXG4gICAgICAgIGlmIChwYWdlLnBhdGggPT09IFwiL2phdmFcIilcbiAgICAgICAgICBoZWFkLnB1c2goW1xuICAgICAgICAgICAgXCJzY3JpcHRcIixcbiAgICAgICAgICAgIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIgfSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgXCJAY29udGV4dFwiOiBcImh0dHBzOi8vc2NoZW1hLm9yZ1wiLFxuICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiSXRlbUxpc3RcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJKYXZhIFx1OTc2Mlx1OEJENVx1NTE4NVx1NUJCOVwiLFxuICAgICAgICAgICAgICBpdGVtTGlzdEVsZW1lbnQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiTGlzdEl0ZW1cIixcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAxLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJKYXZhIFx1NTdGQVx1Nzg0MFx1OTc2Mlx1OEJENVx1OTg5OFwiLFxuICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8veWltZW5nbGkuY25cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSk7XG5cbiAgICAgIH0sXG4gICAgfSxcbiAgICBzaXRlbWFwOiB7XG4gICAgICBjaGFuZ2VmcmVxOiBcIm1vbnRobHlcIixcbiAgICB9LFxuXG4gICAgLy8gVGhlIHVwc3RyZWFtIGNvcHlyaWdodCBwbHVnaW4gY2FuIHRocm93IGR1cmluZyBoeWRyYXRpb24gaWYgYCNhcHBgIGlzIHVuYXZhaWxhYmxlLlxuICAgIC8vIEtlZXAgaXQgZGlzYWJsZWQgdW50aWwgdGhlIHBsdWdpbiBhZGRzIGEgbnVsbC1zYWZlIG1vdW50IHBhdGguXG4gICAgY29weXJpZ2h0OiBmYWxzZSxcblxuICAgIGZlZWQ6IHtcbiAgICAgIGF0b206IHRydWUsXG4gICAgICBqc29uOiB0cnVlLFxuICAgICAgcnNzOiB0cnVlLFxuICAgIH0sXG5cbiAgICBpY29uOiB7XG4gICAgICBhc3NldHM6IFwiaWNvbmlmeVwiLFxuICAgIH0sXG5cbiAgICBwaG90b1N3aXBlOiBmYWxzZSxcblxuICAgIC8vIFx1NzUzM1x1OEJGN1x1NTIzMCBEb2NTZWFyY2gga2V5IFx1NTQwRVx1OTE0RFx1N0Y2RVx1NEUwQVx1OTc2Mlx1NzY4NFx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlx1RkYxQlx1NTcyOFx1NkI2NFx1NEU0Qlx1NTI0RFx1NTE3M1x1OTVFRFx1NjcyQ1x1NTczMFx1NjQxQ1x1N0QyMlx1N0QyMlx1NUYxNVx1MzAwMlxuICAgIC4uLihkb2NzZWFyY2hPcHRpb25zID8geyBkb2NzZWFyY2g6IGRvY3NlYXJjaE9wdGlvbnMgfSA6IHt9KSxcbiAgICBzZWFyY2g6IGZhbHNlLFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy91c2VyL0RvY3VtZW50cy9jb2RlL2dpdGh1Yi9KYXZhTGVhcm4tbWFpbi9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3VzZXIvRG9jdW1lbnRzL2NvZGUvZ2l0aHViL0phdmFMZWFybi1tYWluL2RvY3MvLnZ1ZXByZXNzL25hdmJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvdXNlci9Eb2N1bWVudHMvY29kZS9naXRodWIvSmF2YUxlYXJuLW1haW4vZG9jcy8udnVlcHJlc3MvbmF2YmFyLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyKFtcbiAgeyB0ZXh0OiBcIkphdmFcdTVCNjZcdTRFNjBcdTYyNEJcdTUxOENcIiwgaWNvbjogXCJtZGk6bGFuZ3VhZ2UtamF2YVwiLCBsaW5rOiBcIi9qYXZhL1wiIH0sXG4gIHsgdGV4dDogXCJcdTk3NjJcdThCRDVcdThENDRcdTY1OTlcIiwgaWNvbjogXCJtZGk6Ym9vay1vcGVuLXBhZ2UtdmFyaWFudC1vdXRsaW5lXCIsIGxpbms6IFwiL2ludGVydmlldy9cIiB9LFxuICB7XG4gICAgdGV4dDogXCJcdTdGNTFcdTdBRDlcdTc2RjhcdTUxNzNcIixcbiAgICBpY29uOiBcIm1kaTppbmZvcm1hdGlvbi1vdXRsaW5lXCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTUxNzNcdTRFOEVcdTRGNUNcdTgwMDVcIixcbiAgICAgICAgaWNvbjogXCJtZGk6YWNjb3VudC1lZGl0LW91dGxpbmVcIixcbiAgICAgICAgbGluazogXCIvYWJvdXQtdGhlLWF1dGhvci9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU2NkY0XHU2NUIwXHU1Mzg2XHU1M0YyXCIsXG4gICAgICAgIGljb246IFwibWRpOmhpc3RvcnlcIixcbiAgICAgICAgbGluazogXCIvdGltZWxpbmUvXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3VzZXIvRG9jdW1lbnRzL2NvZGUvZ2l0aHViL0phdmFMZWFybi1tYWluL2RvY3MvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy91c2VyL0RvY3VtZW50cy9jb2RlL2dpdGh1Yi9KYXZhTGVhcm4tbWFpbi9kb2NzLy52dWVwcmVzcy9zaWRlYmFyL2luZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy91c2VyL0RvY3VtZW50cy9jb2RlL2dpdGh1Yi9KYXZhTGVhcm4tbWFpbi9kb2NzLy52dWVwcmVzcy9zaWRlYmFyL2luZGV4LnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmltcG9ydCB7IGludGVydmlldyB9IGZyb20gXCIuL2ludGVydmlldy5qc1wiO1xuaW1wb3J0IHtcbiAgSUNPTlMsXG4gIGNyZWF0ZUltcG9ydGFudFNlY3Rpb24sXG4gIGNyZWF0ZVNvdXJjZUNvZGVTZWN0aW9uLFxufSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcih7XG4gIFwiL2ludGVydmlldy9cIjogaW50ZXJ2aWV3LFxuICAvLyBcdTVGQzVcdTk4N0JcdTY1M0VcdTU3MjhcdTY3MDBcdTU0MEVcdTk3NjJcbiAgXCIvXCI6IFtcbiAgICB7XG4gICAgICB0ZXh0OiBcIkphdmFcdTVCNjZcdTRFNjBcdThERUZcdTdFQkZcIixcbiAgICAgIGljb246IElDT05TLlRFU1QsXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgIHByZWZpeDogXCJqYXZhL3N0YXJ0XCIsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJcdTUyMURcdTVCNjZcdTgwMDVcdTc2ODRcdTRFMDBcdTVDMDFcdTRGRTFcIixcbiAgICAgICAgICBsaW5rOiBcIi9qYXZhL3N0YXJ0L2VtYWlsXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkphdmFcdTVCNjZcdTRFNjBcdThERUZcdTdFQkZcIixcbiAgICAgICAgICBsaW5rOiBcIi9qYXZhL3N0YXJ0L3BhdGhcIixcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiSmF2YVx1NTdGQVx1Nzg0MFx1NUZDNVx1NTkwN1wiLFxuICAgICAgaWNvbjogSUNPTlMuSU5URVJWSUVXLFxuICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICBwcmVmaXg6IFwiaW50ZXJ2aWV3LXByZXBhcmF0aW9uL1wiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiSmF2YSBcdTUxNjVcdTk1RThcdTUyMzBcdTdDQkVcdTkwMUFcIixcbiAgICAgICAgICBwcmVmaXg6IFwiYmFzaXMvXCIsXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiSmF2YVx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFx1NEUwRVx1N0I5N1x1NkNENVwiLFxuICAgICAgICAgICAgcHJlZml4OiBcImJhc2lzL1wiLFxuICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkphdmFcdTY1QjBcdTcyNzlcdTYwMjdcIixcbiAgICAgICAgICAgIHByZWZpeDogXCJiYXNpcy9cIixcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJcdTY1NzBcdTYzNkVcdTVFOTNcdTU0OENcdTdGMTNcdTVCNThcdTYyODBcdTY3MkZcIixcbiAgICAgIGljb246IElDT05TLkpBVkEsXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgIHByZWZpeDogXCJqYXZhL1wiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIHRleHQ6IFwiXHU1N0ZBXHU3ODQwXCIsXG4gICAgICAgIC8vICAgcHJlZml4OiBcImJhc2lzL1wiLFxuICAgICAgICAvLyAgIGljb246IElDT05TLkJBU0lDLFxuICAgICAgICAvLyAgIGNoaWxkcmVuOiBbXG4gICAgICAgIC8vICAgICBcImphdmEtYmFzaWMtcXVlc3Rpb25zLTAxXCIsXG4gICAgICAgIC8vICAgICBcImphdmEtYmFzaWMtcXVlc3Rpb25zLTAyXCIsXG4gICAgICAgIC8vICAgICBcImphdmEtYmFzaWMtcXVlc3Rpb25zLTAzXCIsXG4gICAgICAgIC8vICAgICBjcmVhdGVJbXBvcnRhbnRTZWN0aW9uKFtcbiAgICAgICAgLy8gICAgICAgXCJ3aHktdGhlcmUtb25seS12YWx1ZS1wYXNzaW5nLWluLWphdmFcIixcbiAgICAgICAgLy8gICAgICAgXCJzZXJpYWxpemF0aW9uXCIsXG4gICAgICAgIC8vICAgICAgIFwiZ2VuZXJpY3MtYW5kLXdpbGRjYXJkc1wiLFxuICAgICAgICAvLyAgICAgICBcInJlZmxlY3Rpb25cIixcbiAgICAgICAgLy8gICAgICAgXCJwcm94eVwiLFxuICAgICAgICAvLyAgICAgICBcImJpZ2RlY2ltYWxcIixcbiAgICAgICAgLy8gICAgICAge1xuICAgICAgICAvLyAgICAgICAgIHRleHQ6IFwiSmF2YSBcdTkxRDFcdTk4OURcdTdDN0JcdTU3OEJcdTkwMDlcdTYyRTlcIixcbiAgICAgICAgLy8gICAgICAgICBsaW5rOiBcIm1vbmV5LWxvbmctdnMtYmlnZGVjaW1hbFwiLFxuICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAvLyAgICAgICBcInVuc2FmZVwiLFxuICAgICAgICAvLyAgICAgICBcInNwaVwiLFxuICAgICAgICAvLyAgICAgICBcInN5bnRhY3RpYy1zdWdhclwiLFxuICAgICAgICAvLyAgICAgXSksXG4gICAgICAgIC8vICAgXSxcbiAgICAgICAgLy8gfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJNeVNRTFx1NTdGQVx1Nzg0MFwiLFxuICAgICAgICAgICAgcHJlZml4OiBcImJhc2lzL1wiLFxuICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIlx1NjU3MFx1NjM2RVx1NUU5M1x1NEUyRFx1OTVGNFx1NEVGNk15Q2F0XCIsXG4gICAgICAgICAgICBwcmVmaXg6IFwiYmFzaXMvXCIsXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiUmVkaXNcIixcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJKYXZhXHU1RjAwXHU1M0QxXHU2ODQ2XHU2N0I2XCIsXG4gICAgICBpY29uOiBJQ09OUy5EQVRBQkFTRSxcbiAgICAgIHByZWZpeDogXCJkYXRhYmFzZS9cIixcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiSmF2YVdlYlx1NjI4MFx1NjcyRlwiLFxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJTcnBpbmdcIixcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlNycGluZyBNVkNcIixcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIk15YmF0aXNcdTYyODBcdTY3MkZcIixcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIk15YmF0aXMtUGx1c1x1NjI4MFx1NjcyRlwiLFxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJcdTVGQUVcdTY3MERcdTUyQTFcdTYyODBcdTY3MkZcIixcbiAgICAgIGljb246IElDT05TLlRPT0wsXG4gICAgICBwcmVmaXg6IFwidG9vbHMvXCIsXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlNwcmluZyBCb290XCIsXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJTcHJpbmcgQ2xvdWRcIixcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlNwcmluZyBDbG91ZCBBbGliYWJhXCIsXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU1MjA2XHU1RTAzXHU1RjBGXHU2MjgwXHU2NzJGXCIsXG4gICAgICBwcmVmaXg6IFwic3lzdGVtLWRlc2lnbi9mcmFtZXdvcmsvXCIsXG4gICAgICBpY29uOiBJQ09OUy5DT01QT05FTlQsXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlJhYmJpdE1RXCIsXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJFbGFzdGljIFNlYXJjaFwiLFxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiS2Fma2FcIixcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlNlYXRhXCIsXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJTZW50aW5lbFwiLFxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1NUU5NVx1NUM0Mlx1NkU5MFx1NEVFM1x1NzgwMVwiLFxuICAgICAgaWNvbjogSUNPTlMuREVTSUdOLFxuICAgICAgcHJlZml4OiBcInN5c3RlbS1kZXNpZ24vXCIsXG4gICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiXHU5NkM2XHU1NDA4XHU2ODQ2XHU2N0I2XHU1RTk1XHU1QzQyXHU2RTkwXHU3ODAxXHU1MjA2XHU2NzkwXCIsXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJTcHJpbmdcdTVFOTVcdTVDNDJcdTZFOTBcdTc4MDFcdTUyMDZcdTY3OTBcIixcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIk15YmF0aXNcdTVFOTVcdTVDNDJcdTZFOTBcdTc4MDFcdTUyMDZcdTY3OTBcIixcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJcdTVGMDBcdTUzRDFcdTVERTVcdTUxNzdcIixcbiAgICAgIGljb246IElDT05TLkRJU1RSSUJVVEVELFxuICAgICAgcHJlZml4OiBcImRpc3RyaWJ1dGVkLXN5c3RlbS9cIixcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJpZGVhXCIsXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJHaXRcIixcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIk1hdmVuXCIsXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJEQmVhdmVyXCIsXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU2ODQ2XHU2N0I2XHU3RUM0XHU0RUY2XCIsXG4gICAgICBpY29uOiBJQ09OUy5QRVJGT1JNQU5DRSxcbiAgICAgIHByZWZpeDogXCJoaWdoLXBlcmZvcm1hbmNlL1wiLFxuICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkNBVFx1OTRGRVx1OERFRlx1OEZGRFx1OEUyQVwiLFxuICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiSEFURU9BUyBSRVNUXHU2N0I2XHU2Nzg0XCIsXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJKYXZhXHU1M0VGXHU4OUM2XHU1MzE2XHU2MkE1XHU4ODY4UE9JXCIsXG4gICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJcdTZENDFcdTdBMEJcdTVGMTVcdTY0Q0VBY3RpdmV0eTdcIixcbiAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgXG4gIF0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3VzZXIvRG9jdW1lbnRzL2NvZGUvZ2l0aHViL0phdmFMZWFybi1tYWluL2RvY3MvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy91c2VyL0RvY3VtZW50cy9jb2RlL2dpdGh1Yi9KYXZhTGVhcm4tbWFpbi9kb2NzLy52dWVwcmVzcy9zaWRlYmFyL2ludGVydmlldy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvdXNlci9Eb2N1bWVudHMvY29kZS9naXRodWIvSmF2YUxlYXJuLW1haW4vZG9jcy8udnVlcHJlc3Mvc2lkZWJhci9pbnRlcnZpZXcudHNcIjtpbXBvcnQgeyBhcnJheVNpZGViYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuaW1wb3J0IHsgSUNPTlMgfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuZXhwb3J0IGNvbnN0IGludGVydmlldyA9IGFycmF5U2lkZWJhcihbXG4gIHtcbiAgICB0ZXh0OiBcIlx1OTc2Mlx1OEJENVx1NTFDNlx1NTkwN1wiLFxuICAgIGljb246IElDT05TLkJBU0lDLFxuICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiBcIjFcdTMwMDFcdTdCODBcdTUzODZcdTUxQzZcdTU5MDdcIiwgXG4gICAgICAgIGxpbms6IFwiL2ludGVydmlldy9yZXN1bWVcIiBcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiBcIjJcdTMwMDFIUlx1NUZDNVx1NTkwN1x1OTVFRVx1OTg5OFwiLCBcbiAgICAgICAgbGluazogXCIvaW50ZXJ2aWV3L2hyLXF1ZXN0aW9uc1wiIFxuICAgICAgfVxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIkphdmFcdTU3RkFcdTc4NDBcIixcbiAgICBpY29uOiBJQ09OUy5KQVZBLFxuICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiBcIlx1OEJGNFx1NjYwRVwiLCBcbiAgICAgICAgbGluazogXCJhaS1jb3JlLWNvbmNlcHRzXCIgXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogXCJcdTRFMDBcdTMwMDFKYXZhXHU1N0ZBXHU3ODQwXCIsIFxuICAgICAgICBsaW5rOiBcImFpLWNvcmUtY29uY2VwdHNcIiBcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiBcIlx1NEU4Q1x1MzAwMUphdmFcdTk3NjJcdTU0MTFcdTVCRjlcdThDNjFcIiwgXG4gICAgICAgIGxpbms6IFwiL1wiIFxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6IFwiXHU0RTA5XHUzMDAxSmF2YVx1NjU3MFx1NjM2RVx1N0M3Qlx1NTc4QlwiLCBcbiAgICAgICAgbGluazogXCIvXCIgXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogXCJcdTU2REJcdTMwMDFKYXZhXHU1RjAyXHU1RTM4XCIsIFxuICAgICAgICBsaW5rOiBcIi9cIiBcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiBcIlx1NEU5NFx1MzAwMUphdmFcdTk2QzZcdTU0MDhcdTVCQjlcdTU2NjhcIiwgXG4gICAgICAgIGxpbms6IFwiL1wiIFxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6IFwiXHU1MTZEXHUzMDAxSmF2YSBJT1wiLCBcbiAgICAgICAgbGluazogXCIvXCIgXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogXCJcdTRFMDNcdTMwMDFKYXZhXHU2NzlBXHU0RTNFICYgXHU2Q0RCXHU1NzhCXCIsIFxuICAgICAgICBsaW5rOiBcIi9cIiBcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiBcIlx1NTE2Qlx1MzAwMUphdmFcdTVFNzZcdTUzRDFcIiwgXG4gICAgICAgIGxpbms6IFwiL1wiIFxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6IFwiXHU0RTVEXHUzMDAxSmF2YVx1NTkxQVx1N0VCRlx1N0EwQlwiLCBcbiAgICAgICAgbGluazogXCIvXCIgXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogXCJcdTUzNDFcdTMwMDFKYXZhXHU1M0NEXHU1QzA0XCIsIFxuICAgICAgICBsaW5rOiBcIi9cIiBcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiBcIlx1NTM0MVx1NEUwMFx1MzAwMUpWTVwiLCBcbiAgICAgICAgbGluazogXCIvXCIgXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogXCJcdTUzNDFcdTRFOENcdTMwMDFKYXZhIFdlYlwiLCBcbiAgICAgICAgbGluazogXCIvXCIgXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogXCJcdTUzNDFcdTRFMDlcdTMwMDFcdThCQkVcdThCQTFcdTZBMjFcdTVGMEZcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDlcIiwgXG4gICAgICAgIGxpbms6IFwiL1wiIFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJcdThCQTFcdTdCOTdcdTY3M0FcdTU3RkFcdTc4NDBcdTk3NjJcdThCRDVcdTk4OThcIixcbiAgICBpY29uOiBJQ09OUy5DT01QT05FTlQsXG4gICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6IFwiXHU4QkExXHU3Qjk3XHU2NzNBXHU3RjUxXHU3RURDXCIsIFxuICAgICAgICBsaW5rOiBcImFpLWNvcmUtY29uY2VwdHNcIiBcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiBcIkphdmFcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcdTRFMEVcdTdCOTdcdTZDRDVcIiwgXG4gICAgICAgIGxpbms6IFwiYWktY29yZS1jb25jZXB0c1wiIFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJcdTY1NzBcdTYzNkVcdTVFOTNcdTk3NjJcdThCRDVcdTk4OThcIixcbiAgICBpY29uOiBJQ09OUy5TUUwsXG4gICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6IFwiTXlTcWxcdTk3NjJcdThCRDVcdTk4OThcIiwgXG4gICAgICAgIGljb246IElDT05TLk1ZU1FMLFxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgbGluazogXCIvXCIgXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogXCJSZWRpc1x1OTc2Mlx1OEJENVx1OTg5OFwiLCBcbiAgICAgICAgaWNvbjogSUNPTlMuUkVESVMsXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgICBsaW5rOiBcIi9cIiBcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiSmF2YVx1Njg0Nlx1NjdCNlwiLFxuICAgIGljb246IElDT05TLlNQUklOR19CT09ULFxuICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiBcIlNwcmluZ1x1OTc2Mlx1OEJENVx1OTg5OFwiLCBcbiAgICAgICAgbGluazogXCIvXCIgXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogXCJTcnBpbmcgTVZDXHU5NzYyXHU4QkQ1XHU5ODk4XCIsIFxuICAgICAgICBsaW5rOiBcIi9cIiBcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiBcIk15QmF0aXNcdTk3NjJcdThCRDVcdTk4OThcIiwgXG4gICAgICAgIGxpbms6IFwiL1wiIFxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6IFwiU3ByaW5nIEJvb3RcdTk3NjJcdThCRDVcdTk4OThcIiwgXG4gICAgICAgIGxpbms6IFwiL1wiIFxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6IFwiU3ByaW5nIENsb3VkXHU5NzYyXHU4QkQ1XHU5ODk4XCIsIFxuICAgICAgICBsaW5rOiBcIi9cIiBcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiBcIlNwcmluZyBDbG91ZCBBbGliYWJhXHU5NzYyXHU4QkQ1XHU5ODk4XCIsIFxuICAgICAgICBsaW5rOiBcIi9cIiBcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiSmF2YVx1NUZBRVx1NjcwRFx1NTJBMVx1NEUyRFx1OTVGNFx1NEVGNlwiLFxuICAgIGljb246IElDT05TLkNPREUsXG4gICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6IFwiUmFiYml0TVFcdTk3NjJcdThCRDVcdTk4OThcIiwgXG4gICAgICAgIGxpbms6IFwiL1wiIFxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6IFwiRWxhc3RpYyBTZWFyY2hcdTk3NjJcdThCRDVcdTk4OThcIiwgXG4gICAgICAgIGxpbms6IFwiL1wiIFxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6IFwiTXlCYXRpc1x1OTc2Mlx1OEJENVx1OTg5OFwiLCBcbiAgICAgICAgbGluazogXCIvXCIgXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogXCJTcHJpbmcgQm9vdFx1OTc2Mlx1OEJENVx1OTg5OFwiLCBcbiAgICAgICAgbGluazogXCIvXCIgXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogXCJTcHJpbmcgQ2xvdWRcdTk3NjJcdThCRDVcdTk4OThcIiwgXG4gICAgICAgIGxpbms6IFwiL1wiIFxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6IFwiU3ByaW5nIENsb3VkIEFsaWJhYmFcdTk3NjJcdThCRDVcdTk4OThcIiwgXG4gICAgICAgIGxpbms6IFwiL1wiIFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJcdTZFOTBcdTRFRTNcdTc4MDFcdTg5RTNcdTUyNTZcIixcbiAgICBpY29uOiBJQ09OUy5DT0RFLFxuICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiBcIkphdmEgXHU0RTEzXHU2ODBGXCIsIFxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkFycmF5TGlzdFx1NkU5MFx1NzgwMVx1NTIwNlx1Njc5MFwiLFxuICAgICAgICAgICAgbGluazogXCIvaW50ZXJ2aWV3L3N5c3RlbS1kZXNpZ24vZnJhbWV3b3JrL3JhYmJpdG1xL2Jhc2ljLWludGVydmlldy5tZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJIYXNoTWFwXHU2RTkwXHU3ODAxXHU1MjA2XHU2NzkwXCIsXG4gICAgICAgICAgICBsaW5rOiBcIi9pbnRlcnZpZXcvc3lzdGVtLWRlc2lnbi9mcmFtZXdvcmsvcmFiYml0bXEvYmFzaWMtaW50ZXJ2aWV3Lm1kXCIsXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIHRleHQ6IFwiU3ByaW5nIFx1NEUxM1x1NjgwRlwiLCBcbiAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJTcHJpbmcgQmVhblx1NzUxRlx1NTQ3RFx1NTQ2OFx1NjcxRlwiLFxuICAgICAgICAgICAgbGluazogXCIvaW50ZXJ2aWV3L3N5c3RlbS1kZXNpZ24vZnJhbWV3b3JrL3JhYmJpdG1xL2Jhc2ljLWludGVydmlldy5tZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJTcHJpbmcgUmVmcmVzaFx1OEZDN1x1N0EwQlwiLFxuICAgICAgICAgICAgbGluazogXCIvaW50ZXJ2aWV3L3N5c3RlbS1kZXNpZ24vZnJhbWV3b3JrL3JhYmJpdG1xL2Jhc2ljLWludGVydmlldy5tZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJTcHJpbmcgXHU0RThCXHU1MkExXHU1QjlFXHU2NTQ4XHU3Njg0XHU1NzNBXHU2NjZGXCIsXG4gICAgICAgICAgICBsaW5rOiBcIi9pbnRlcnZpZXcvc3lzdGVtLWRlc2lnbi9mcmFtZXdvcmsvcmFiYml0bXEvYmFzaWMtaW50ZXJ2aWV3Lm1kXCIsXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy91c2VyL0RvY3VtZW50cy9jb2RlL2dpdGh1Yi9KYXZhTGVhcm4tbWFpbi9kb2NzLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdXNlci9Eb2N1bWVudHMvY29kZS9naXRodWIvSmF2YUxlYXJuLW1haW4vZG9jcy8udnVlcHJlc3Mvc2lkZWJhci9jb25zdGFudHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3VzZXIvRG9jdW1lbnRzL2NvZGUvZ2l0aHViL0phdmFMZWFybi1tYWluL2RvY3MvLnZ1ZXByZXNzL3NpZGViYXIvY29uc3RhbnRzLnRzXCI7LyoqXG4gKiBcdTRGQTdcdThGQjlcdTY4MEZcdTU2RkVcdTY4MDdcdTVFMzhcdTkxQ0ZcbiAqIFx1N0VERlx1NEUwMFx1N0JBMVx1NzQwNlx1NjI0MFx1NjcwOVx1NEZBN1x1OEZCOVx1NjgwRlx1OTE0RFx1N0Y2RVx1NEUyRFx1NEY3Rlx1NzUyOFx1NzY4NFx1NTZGRVx1NjgwN1xuICovXG5leHBvcnQgY29uc3QgSUNPTlMgPSB7XG4gIC8vIFx1NTdGQVx1Nzg0MFx1NTZGRVx1NjgwN1xuICBTVEFSOiBcIm1kaTpzdGFyLW91dGxpbmVcIixcbiAgQkFTSUM6IFwibWRpOmJvb2stb3Blbi1wYWdlLXZhcmlhbnQtb3V0bGluZVwiLFxuICBURVNUOiBcIm1kaTphYnVnaWRhLWRldmFuYWdhcmlcIixcbiAgQ09ERTogXCJtZGk6Y29kZS10YWdzXCIsXG4gIERFU0lHTjogXCJtZGk6cGFsZXR0ZS1zd2F0Y2gtb3V0bGluZVwiLFxuICBST0FETUFQOiBcIm1kaTptYXAtb3V0bGluZVwiLFxuICBBUlRJQ0xFOiBcIm1kaTpib29rLW9wZW4tcGFnZS12YXJpYW50LW91dGxpbmVcIiwgXG4gIFxuICAvLyBcdTYyODBcdTY3MkZcdTk4ODZcdTU3REZcbiAgSkFWQTogXCJtZGk6bGFuZ3VhZ2UtamF2YVwiLFxuICBDT01QVVRFUjogXCJtZGk6ZGVza3RvcC1jbGFzc2ljXCIsICAvLyBpY29uaWZ5IG1kaS0tc2VtYW50aWMtd2ViXG4gIERBVEFCQVNFOiBcIm1kaTpkYXRhYmFzZS1vdXRsaW5lXCIsXG4gIE5FVFdPUks6IFwibWRpOmxhblwiLFxuXG4gIC8vIFx1Njg0Nlx1NjdCNlx1NTQ4Q1x1NURFNVx1NTE3N1xuICBTUFJJTkdfQk9PVDogXCJtZGk6bGVhZlwiLFxuICBNWUJBVElTOiBcIm1kaTpkYXRhYmFzZS1jb2ctb3V0bGluZVwiLFxuICBORVRUWTogXCJtZGk6c2VydmVyLW5ldHdvcmstb3V0bGluZVwiLFxuICBTUFJJTkdfQ0xPVUQ6IFwibWRpOmNsb3VkLW91dGxpbmVcIixcbiAgU1BSSU5HX01WQzogXCJtZGk6bGVhZlwiLFxuXG4gIC8vIFx1NjU3MFx1NjM2RVx1NUU5M1xuICBNWVNRTDogXCJtZGk6ZGF0YWJhc2VcIixcbiAgUkVESVM6IFwibWRpOmRhdGFiYXNlLXN5bmMtb3V0bGluZVwiLFxuICBFTEFTVElDU0VBUkNIOiBcIm1kaTpkYXRhYmFzZS1zZWFyY2gtb3V0bGluZVwiLFxuICBNT05HT0RCOiBcIm1kaTpkYXRhYmFzZS1tYXJrZXItb3V0bGluZVwiLFxuICBTUUw6IFwibWRpOmRhdGFiYXNlLXNlYXJjaFwiLFxuXG4gIC8vIFx1NUYwMFx1NTNEMVx1NURFNVx1NTE3N1xuICBUT09MOiBcIm1kaTp0b29sc1wiLFxuICBNQVZFTjogXCJtZGk6cGFja2FnZS12YXJpYW50LWNsb3NlZFwiLFxuICBHUkFETEU6IFwibWRpOmNvZy1vdXRsaW5lXCIsXG4gIEdJVDogXCJtZGk6Z2l0XCIsXG4gIERPQ0tFUjogXCJtZGk6ZG9ja2VyXCIsXG4gIElERUE6IFwibWRpOmFwcGxpY2F0aW9uLWJyYWNrZXRzLW91dGxpbmVcIixcblxuICAvLyBcdTdDRkJcdTdFREZcdThCQkVcdThCQTFcbiAgQ09NUE9ORU5UOiBcIm1kaTp3aWRnZXRzLW91dGxpbmVcIixcbiAgQ09OVEFJTkVSOiBcIm1kaTpjdWJlLW91dGxpbmVcIixcbiAgU0VDVVJJVFk6IFwibWRpOnNoaWVsZC1sb2NrLW91dGxpbmVcIixcblxuICAvLyBcdTUyMDZcdTVFMDNcdTVGMEZcbiAgRElTVFJJQlVURUQ6IFwibWRpOnRyYW5zaXQtY29ubmVjdGlvbi12YXJpYW50XCIsXG4gIEdBVEVXQVk6IFwibWRpOmdhdGVcIixcbiAgSUQ6IFwibWRpOmlkZW50aWZpZXJcIixcbiAgTE9DSzogXCJtZGk6bG9jay1vdXRsaW5lXCIsXG4gIFRSQU5TQUNUSU9OOiBcIm1kaTpiYW5rLXRyYW5zZmVyXCIsXG4gIFJQQzogXCJtZGk6YXBpXCIsXG4gIEZSQU1FV09SSzogXCJtZGk6bGF5ZXJzLW91dGxpbmVcIixcblxuICAvLyBcdTlBRDhcdTYwMjdcdTgwRkRcbiAgUEVSRk9STUFOQ0U6IFwibWRpOnNwZWVkb21ldGVyXCIsXG4gIENETjogXCJtZGk6Y2xvdWQtb3V0bGluZVwiLFxuICBMT0FEX0JBTEFOQ0lORzogXCJtZGk6c2NhbGUtYmFsYW5jZVwiLFxuICBNUTogXCJtZGk6bWVzc2FnZS1wcm9jZXNzaW5nLW91dGxpbmVcIixcblxuICAvLyBcdTlBRDhcdTUzRUZcdTc1MjhcbiAgSElHSF9BVkFJTEFCTEU6IFwibWRpOmNoZWNrLW5ldHdvcmstb3V0bGluZVwiLFxuXG4gIC8vIFx1NjRDRFx1NEY1Q1x1N0NGQlx1N0VERlxuICBPUzogXCJtZGk6ZGVza3RvcC1jbGFzc2ljXCIsXG4gIExJTlVYOiBcIm1kaTpsaW51eFwiLFxuICBWSVJUVUFMX01BQ0hJTkU6IFwibWRpOnNlcnZlclwiLFxuXG4gIC8vIFx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFx1NEUwRVx1N0I5N1x1NkNENVxuICBEQVRBX1NUUlVDVFVSRTogXCJtZGk6Z3JhcGgtb3V0bGluZVwiLFxuICBBTEdPUklUSE06IFwibWRpOmNoYXJ0LXRyZWVcIixcblxuICAvLyBcdTUxNzZcdTRFRDZcbiAgRkVBVFVSRUQ6IFwibWRpOnN0YXItZm91ci1wb2ludHMtb3V0bGluZVwiLFxuICBJTlRFUlZJRVc6IFwibWRpOmJyaWVmY2FzZS1vdXRsaW5lXCIsXG4gIEVYUEVSSUVOQ0U6IFwibWRpOmNoYXJ0LXRpbWVsaW5lLXZhcmlhbnRcIixcbiAgQ0hBVDogXCJtZGk6Y29tbWVudC10ZXh0LW91dGxpbmVcIixcbiAgQk9PSzogXCJtZGk6Ym9vay1vcGVuLXBhZ2UtdmFyaWFudC1vdXRsaW5lXCIsXG4gIFBST0pFQ1Q6IFwibWRpOnByb2plY3Rvci1zY3JlZW4tb3V0bGluZVwiLFxuICBMSUJSQVJZOiBcIm1kaTpsaWJyYXJ5LW91dGxpbmVcIixcbiAgTUFDSElORV9MRUFSTklORzogXCJtZGk6cm9ib3Qtb3V0bGluZVwiLFxuICBCSUdfREFUQTogXCJtZGk6ZGF0YWJhc2Utc2VhcmNoLW91dGxpbmVcIixcbiAgU0VBUkNIOiBcIm1kaTptYWduaWZ5XCIsXG4gIFdPUks6IFwibWRpOm9mZmljZS1idWlsZGluZy1vdXRsaW5lXCIsXG59IGFzIGNvbnN0O1xuXG4vKipcbiAqIFx1NUUzOFx1NzUyOFx1NjU4N1x1NjcyQ1x1NUUzOFx1OTFDRlxuICovXG5leHBvcnQgY29uc3QgQ09NTU9OX1RFWFQgPSB7XG4gIElNUE9SVEFOVF9QT0lOVFM6IFwiXHU5MUNEXHU4OTgxXHU3N0U1XHU4QkM2XHU3MEI5XCIsXG4gIFNPVVJDRV9DT0RFX0FOQUxZU0lTOiBcIlx1NkU5MFx1NzgwMVx1NTIwNlx1Njc5MFwiLFxufSBhcyBjb25zdDtcblxuLyoqXG4gKiBcdThGODVcdTUyQTlcdTUxRkRcdTY1NzBcdUZGMUFcdTUyMUJcdTVFRkFcdTkxQ0RcdTg5ODFcdTc3RTVcdThCQzZcdTcwQjlcdTUyMDZcdTdFQzRcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUltcG9ydGFudFNlY3Rpb24gPSAoY2hpbGRyZW46IGFueVtdKSA9PiAoe1xuICB0ZXh0OiBDT01NT05fVEVYVC5JTVBPUlRBTlRfUE9JTlRTLFxuICBpY29uOiBJQ09OUy5TVEFSLFxuICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgY2hpbGRyZW4sXG59KTtcblxuLyoqXG4gKiBcdThGODVcdTUyQTlcdTUxRkRcdTY1NzBcdUZGMUFcdTUyMUJcdTVFRkFcdTZFOTBcdTc4MDFcdTUyMDZcdTY3OTBcdTUyMDZcdTdFQzRcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVNvdXJjZUNvZGVTZWN0aW9uID0gKGNoaWxkcmVuOiBhbnlbXSkgPT4gKHtcbiAgdGV4dDogQ09NTU9OX1RFWFQuU09VUkNFX0NPREVfQU5BTFlTSVMsXG4gIGljb246IElDT05TLlNUQVIsXG4gIGNvbGxhcHNpYmxlOiB0cnVlLFxuICBjaGlsZHJlbixcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxVyxTQUFTLHFCQUFxQjtBQUNuWSxTQUFTLG1CQUFtQjtBQUM1QixTQUFTLHdCQUF3Qjs7O0FDRmtVLFNBQVMsZUFBZTtBQUMzWCxTQUFTLFlBQVksWUFBWTtBQUNqQyxTQUFTLGlCQUFpQjs7O0FDRjJVLFNBQVMsY0FBYztBQUU1WCxJQUFPLGlCQUFRLE9BQU87QUFBQSxFQUNwQixFQUFFLE1BQU0sZ0NBQVksTUFBTSxxQkFBcUIsTUFBTSxTQUFTO0FBQUEsRUFDOUQsRUFBRSxNQUFNLDRCQUFRLE1BQU0sc0NBQXNDLE1BQU0sY0FBYztBQUFBLEVBQ2hGO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEs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TTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTSxNQUFNO0FBQUEsSUFDWixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTSxNQUFNO0FBQUEsSUFDWixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTSxNQUFNO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU0sTUFBTTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU0sTUFBTTtBQUFBLElBQ1osYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTSxNQUFNO0FBQUEsSUFDWixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNLE1BQU07QUFBQSxJQUNaLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixVQUFVO0FBQUEsVUFDUjtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOzs7QURoTkQsSUFBTyxrQkFBUSxRQUFRO0FBQUEsRUFDckIsZUFBZTtBQUFBO0FBQUEsRUFFZixLQUFLO0FBQUEsSUFDSDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTSxNQUFNO0FBQUEsTUFDWixhQUFhO0FBQUEsTUFDYixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTSxNQUFNO0FBQUEsTUFDWixhQUFhO0FBQUEsTUFDYixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsYUFBYTtBQUFBLFVBQ2IsVUFBVSxDQUVWO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNJLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLGFBQWE7QUFBQSxVQUNiLFVBQVUsQ0FFVjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixhQUFhO0FBQUEsVUFDYixVQUFVLENBRVY7QUFBQSxRQUNGO0FBQUEsTUFDSjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNLE1BQU07QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBMEJSO0FBQUEsVUFDSSxNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixhQUFhO0FBQUEsVUFDYixVQUFVLENBRVY7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsYUFBYTtBQUFBLFVBQ2IsVUFBVSxDQUNWO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNBLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVUsQ0FDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU0sTUFBTTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVUsQ0FDVjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVLENBQ1Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVSxDQUNWO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVUsQ0FDVjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVLENBQ1Y7QUFBQSxRQUNGO0FBQUEsTUFFRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNLE1BQU07QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVLENBQ1Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVSxDQUNWO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVUsQ0FDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU0sTUFBTTtBQUFBLE1BQ1osYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVUsQ0FDVjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVLENBQ1Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVSxDQUNWO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVUsQ0FDVjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVLENBQ1Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNLE1BQU07QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNUO0FBQUEsVUFDRyxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVLENBQ1Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVSxDQUNWO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVUsQ0FDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU0sTUFBTTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxVQUNHLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVUsQ0FDVjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVLENBQ1Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVSxDQUNWO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVUsQ0FDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU0sTUFBTTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxVQUNHLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVUsQ0FDVjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixhQUFhO0FB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QSxXQUFXO0FBQUEsSUFFWCxNQUFNO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsSUFDUDtBQUFBLElBRUEsTUFBTTtBQUFBLE1BQ0osUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUVBLFlBQVk7QUFBQTtBQUFBLElBR1osR0FBSSxtQkFBbUIsRUFBRSxXQUFXLGlCQUFpQixJQUFJLENBQUM7QUFBQSxJQUMxRCxRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7OztBRDdVZ08sSUFBTUEsNENBQTJDO0FBS2xSLElBQU1DLFdBQVUsY0FBY0QseUNBQWU7QUFDN0MsSUFBTSx1QkFBdUJDLFNBQVE7QUFBQSxFQUNuQztBQUNGO0FBRUEsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsRUFDUCxhQUNFO0FBQUEsRUFDRixNQUFNO0FBQUEsRUFFTixNQUFNO0FBQUE7QUFBQSxJQUVKLENBQUMsUUFBUSxFQUFFLE1BQU0sVUFBVSxTQUFTLE1BQU0sQ0FBQztBQUFBLElBQzNDLENBQUMsUUFBUSxFQUFFLE1BQU0sVUFBVSxTQUFTLE9BQU8sQ0FBQztBQUFBLElBQzVDLENBQUMsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLFNBQVMsTUFBTSxDQUFDO0FBQUE7QUFBQSxJQUVqRTtBQUFBLE1BQ0U7QUFBQSxNQUNBLEVBQUUsT0FBTyxLQUFLO0FBQUEsTUFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFRRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFNBQVMsWUFBWTtBQUFBLElBQ25CLGFBQWE7QUFBQSxNQUNYLFNBQVM7QUFBQSxRQUNQLE9BQU87QUFBQSxVQUNMLGdFQUNFO0FBQUEsUUFDSjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxRQUNILHFCQUFxQjtBQUFBLFVBQ25CLE1BQU07QUFBQSxZQUNKLHFCQUFxQixDQUFDLGFBQWE7QUFBQSxVQUNyQztBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUFBLEVBRUQ7QUFBQSxFQUVBLGNBQWM7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUVBLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFDakIsQ0FBQzsiLAogICJuYW1lcyI6IFsiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCIsICJyZXF1aXJlIl0KfQo=
