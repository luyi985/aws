---
id: saa-analytics-lakeformation-139
title: 集中管理数据湖权限（AWS Lake Formation）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=555
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=556
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=557
dependencies:
- saa-analytics-glue-138
---

# saa-analytics-lakeformation-139: 集中管理数据湖权限（AWS Lake Formation）

## Learning Objective

在“分析人员只能访问获准的数据列”的场景中，能说明集中管理数据湖权限的判断依据，并指出适用限制。

## Scope

- Included: 集中管理数据湖权限的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-analytics-glue-138。

## Knowledge Point

数据湖治理服务围绕集中数据与元数据管理访问规则。

## Logical Path

1. 需求：分析人员只能访问获准的数据列。
2. 授权范围可以细化到数据表等层级，但必须与实际访问引擎及底层权限配合。
3. 结果：数据湖治理关注共享数据的可见范围。

## Key Terms

- AWS Lake Formation：数据湖治理服务围绕集中数据与元数据管理访问规则。

## Example

示意例：分析人员只能访问获准的数据列，说明数据湖治理关注共享数据的可见范围。

## Sources

- [课件 p.555：AWS Lake Formation](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=555)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.556：AWS Lake Formation Data Sources Amazon S3 RDS On-PremisesDatabase (SQL & NoSQL)AWS Lake Formation Source CrawlersETL and Data](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=556)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.557：AWS Lake Formation Centralized Permissions Example Data Sources Amazon S3 RDS AWS Lake Formation Access ControlColumn-level s](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=557)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
