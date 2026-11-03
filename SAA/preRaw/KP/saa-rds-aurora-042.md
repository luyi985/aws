---
id: saa-rds-aurora-042
title: 共享存储与数据库端点（Amazon Aurora）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=170
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=171
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=172
- https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html
- https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Endpoints.Reader.html
dependencies:
- saa-rds-manageddb-039
verified_at: '2026-11-04'
---

# saa-rds-aurora-042: 共享存储与数据库端点（Amazon Aurora）

## Learning Objective

为写操作、普通读取与指定实例诊断选择 Aurora 端点。

## Scope

- Included: 共享存储与数据库端点的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-rds-manageddb-039。

## Knowledge Point

Aurora 将计算实例与分布式存储分离。集群写端点连接当前主实例，读取端点通常在只读副本之间分配连接；连接平衡不是逐条 SQL 的负载均衡。

## Logical Path

1. 先区分需要写入还是只读。
2. 读端点在建立连接时选择实例，长期连接仍由选定实例处理。
3. 无只读副本时，读端点可连接主实例；不能仅凭端点名称推断连接必为只读。

## Key Terms

- Cluster endpoint：用于连接当前主实例的端点。
- Reader endpoint：在副本之间进行连接分配的端点，并非 SQL 代理。

## Example

示意例：写请求连接写端点，查询连接读端点，说明共享存储架构中仍需区分写入者与读取者。

## Sources

- [课件 p.170：Amazon Aurora](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=170)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.171：Aurora High Availability and Read Scaling](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=171)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.172：Aurora replica Auto Scaling and endpoints](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=172)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：写、读、实例与自定义端点的连接分配](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html)。用于核验上述具体边界；查阅日期：2026-11-04。
- [AWS 官方：按连接均衡，以及无副本时连接主实例的例外](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Endpoints.Reader.html)。用于核验上述具体边界；查阅日期：2026-11-04。
