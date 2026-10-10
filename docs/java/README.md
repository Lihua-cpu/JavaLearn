---
icon: "mdi:head-lightbulb-outline"
title: Java学习手册
description: LeonLearn 后端部分以Java 为主，系统整理 Java 八股文和后端面试题，覆盖 Java 基础、集合、并发、JVM、Spring、MySQL、Redis、系统设计与分布式，适用于校招和社招复习。
sitemap:
  changefreq: weekly
  priority: 1
head:
  - - meta
    - name: keywords
      content: Java面试,Java面试指南,Java八股文,Java面试题,Java基础面试,JVM面试,并发面试,线程池面试,Spring面试,MySQL面试,Redis面试,系统设计面试,分布式面试,后端面试
---

<!-- @include: @small-advertisement.snippet.md -->

<!-- markdownlint-disable MD024 -->

<!-- 首页 Hero 横幅 -->
<div class="home-hero">
  <h1 class="home-hero-title">Java 全栈知识图谱</h1>
  <p class="home-hero-subtitle">从 0 到 1 的架构师进阶之路，构建你的技术护城河 🛡️</p>
</div>

<!-- 核心知识清单 -->
<div class="home-card">
  <h2 class="home-card-title">核心知识清单</h2>
  <div class="knowledge-grid">
    <div class="knowledge-item">
      <span class="knowledge-tag">Java 基础</span>
      <span class="knowledge-desc">掌握 Java 概述、基本语法、面向对象、集合、IO、异常处理</span>
    </div>
    <div class="knowledge-item">
      <span class="knowledge-tag">Java 高级</span>
      <span class="knowledge-desc">深入学习新特性、多线程与并发、JVM、设计模式</span>
    </div>
    <div class="knowledge-item">
      <span class="knowledge-tag">数据库</span>
      <span class="knowledge-desc">MySQL 核心知识点、Redis 缓存、数据库中间件</span>
    </div>
    <div class="knowledge-item">
      <span class="knowledge-tag">开发框架</span>
      <span class="knowledge-desc">JavaWeb、Spring 全家桶（Spring/MVC/MyBatis/Plus）</span>
    </div>
    <div class="knowledge-item">
      <span class="knowledge-tag">微服务</span>
      <span class="knowledge-desc">Spring Boot、Spring Cloud、Spring Cloud Alibaba</span>
    </div>
    <div class="knowledge-item">
      <span class="knowledge-tag">分布式</span>
      <span class="knowledge-desc">Docker、Zookeeper、RabbitMQ、Elasticsearch</span>
    </div>
    <div class="knowledge-item">
      <span class="knowledge-tag">底层源码</span>
      <span class="knowledge-desc">HashMap 等核心源码深度解析</span>
    </div>
    <div class="knowledge-item">
      <span class="knowledge-tag">开发工具</span>
      <span class="knowledge-desc">Git、IDEA、Linux、Maven 等必备工具</span>
    </div>
    <div class="knowledge-item">
      <span class="knowledge-tag">实用组件</span>
      <span class="knowledge-desc">Activity 7、CAT、HATEOAS、Report 报表</span>
    </div>
  </div>
</div>

<!-- 学习路线图入口 -->
<a class="home-link-card" href="./interview-preparation/java-roadmap.md">
  <div class="home-link-card-left">
    <span>🗺️</span>
    <span class="home-link-card-text">查看完整学习路线图</span>
  </div>
  <span class="home-link-card-arrow">→</span>
</a>

<!-- 知识体系网格 -->
<div class="knowledge-system">
  <div class="ks-card">
    <div class="ks-header">
      <span class="ks-icon">🌱</span>
      <h3 class="ks-title">Java 筑基</h3>
    </div>
    <div class="ks-tags">
      <span class="ks-tag">Java 基础</span>
      <span class="ks-tag">数据结构与算法</span>
      <span class="ks-tag">新特性</span>
      <span class="ks-tag">设计模式</span>
      <span class="ks-tag">HashMap 源码</span>
    </div>
  </div>

  <div class="ks-card">
    <div class="ks-header">
      <span class="ks-icon">🚀</span>
      <h3 class="ks-title">开发框架</h3>
    </div>
    <div class="ks-tags">
      <span class="ks-tag">JavaWeb 技术</span>
      <span class="ks-tag">Spring</span>
      <span class="ks-tag">Spring MVC</span>
      <span class="ks-tag">MyBatis</span>
      <span class="ks-tag">MyBatis Plus</span>
    </div>
  </div>

  <div class="ks-card">
    <div class="ks-header">
      <span class="ks-icon">☁️</span>
      <h3 class="ks-title">微服务技术</h3>
    </div>
    <div class="ks-tags">
      <span class="ks-tag ks-tag-primary">Spring Boot 2</span>
      <span class="ks-tag ks-tag-primary">Spring Cloud</span>
      <span class="ks-tag">Cloud Alibaba</span>
    </div>
  </div>

  <div class="ks-card">
    <div class="ks-header">
      <span class="ks-icon">🌐</span>
      <h3 class="ks-title">分布式技术</h3>
    </div>
    <div class="ks-tags">
      <span class="ks-tag">Docker</span>
      <span class="ks-tag">RabbitMQ</span>
      <span class="ks-tag">Elasticsearch</span>
      <span class="ks-tag">Seata</span>
      <span class="ks-tag">Kafka</span>
      <span class="ks-tag">Sentinel</span>
    </div>
  </div>

  <div class="ks-card">
    <div class="ks-header">
      <span class="ks-icon">💾</span>
      <h3 class="ks-title">数据库与缓存</h3>
    </div>
    <div class="ks-tags">
      <span class="ks-tag ks-tag-primary">MySQL</span>
      <span class="ks-tag">MyCat 中间件</span>
      <span class="ks-tag ks-tag-primary">Redis</span>
    </div>
  </div>

  <div class="ks-card">
    <div class="ks-header">
      <span class="ks-icon">🛠️</span>
      <h3 class="ks-title">工具与组件</h3>
    </div>
    <div class="ks-tags">
      <span class="ks-tag">Git</span>
      <span class="ks-tag">IDEA</span>
      <span class="ks-tag">Linux</span>
      <span class="ks-tag">Maven</span>
      <span class="ks-tag">Activity 7</span>
      <span class="ks-tag">CAT</span>
      <span class="ks-tag">HATEOAS</span>
      <span class="ks-tag">Report</span>
    </div>
  </div>
</div>

<!-- 学习建议 -->
<div class="learning-tip">
  <span>💡</span>
  <span><span class="learning-tip-label">学习建议：</span>建议按照 Java 基础 → 数据库 → 框架 → 微服务 → 分布式的顺序循序渐进。</span>
</div>

