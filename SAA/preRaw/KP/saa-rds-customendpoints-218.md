---
id: saa-rds-customendpoints-218
title: 按副本组分配数据库连接（Aurora custom endpoint）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=175
- https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html
dependencies:
- saa-rds-aurora-042
verified_at: '2026-11-04'
---

# saa-rds-customendpoints-218: 按副本组分配数据库连接（Aurora custom endpoint）

## Learning Objective

区分读端点、实例端点与自定义端点适合的连接范围。

## Scope

- Included: 按副本组分配数据库连接的机制、适用条件、失败或例外边界。
- Excluded: 完整部署步骤、实时价格和未引用的产品功能。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-rds-aurora-042。

## Knowledge Point

自定义端点（custom endpoint）把连接分配到指定的 Aurora 实例子集，适合不同规格或用途的副本。它按连接选择目标，不逐条分析 SQL 自动分类请求。

## Logical Path

1. 先区分写端点、普通读端点与指定实例。
2. 将适合分析的副本组成自定义端点成员组。
3. 应用显式选择端点；保持成员和负载设计一致。

## Key Terms

- Custom endpoint：连接到指定实例子集的端点。
- Connection balancing：建立连接时在目标实例之间选择。

## Example

示意例：报表连接进入高规格分析副本组，普通只读流量进入其他副本，说明端点可隔离连接用途而不是自动识别报表 SQL。

## Sources

- [课件 p.175：Aurora – Custom Endpoints](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=175)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：写、读、实例与自定义端点的连接分配](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html)。用于核验上述具体边界；查阅日期：2026-11-04。
