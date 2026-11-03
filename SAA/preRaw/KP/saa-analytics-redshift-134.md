---
id: saa-analytics-redshift-134
title: 分析仓库与事务数据库（Amazon Redshift）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=537
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=538
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=539
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=541
dependencies: []
---

# saa-analytics-redshift-134: 分析仓库与事务数据库（Amazon Redshift）

## Learning Objective

在“汇总多年销售数据使用分析仓库”的场景中，能说明分析仓库与事务数据库的判断依据，并指出适用限制。

## Scope

- Included: 分析仓库与事务数据库的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

分析仓库面向聚合大量数据的分析查询，与逐笔交易型访问不同。

## Logical Path

1. 需求：汇总多年销售数据使用分析仓库。
2. 列式存储及并行执行适合大范围统计，也可连接外部数据。
3. 结果：不同访问模式需要不同优化方向。

## Key Terms

- Amazon Redshift：分析仓库面向聚合大量数据的分析查询，与逐笔交易型访问不同。

## Example

示意例：汇总多年销售数据使用分析仓库，而在线订单写入保留事务后端，说明不同访问模式需要不同优化方向。

## Sources

- [课件 p.537：Redshift Overview](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=537)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.538：Redshift Cluster](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=538)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.539：Redshift – Snapshots & DR](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=539)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.541：Redshift Spectrum](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=541)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
