---
id: saa-migration-dms-195
title: 全量迁移与持续复制（Database Migration Service）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=782
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=783
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=784
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=785
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=786
dependencies:
- saa-rds-manageddb-039
---

# saa-migration-dms-195: 全量迁移与持续复制（Database Migration Service）

## Learning Objective

在“先迁移历史记录”的场景中，能说明全量迁移与持续复制的判断依据，并指出适用限制。

## Scope

- Included: 全量迁移与持续复制的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-rds-manageddb-039。

## Knowledge Point

数据库迁移可结合初始装载和持续变更复制减少停机窗口。

## Logical Path

1. 需求：先迁移历史记录。
2. 异构迁移还需要模式转换与兼容性检查，复制数据不会自动转换所有数据库特性。
3. 结果：迁移过程需要协调全量数据与增量变化。

## Key Terms

- Database Migration Service：数据库迁移可结合初始装载和持续变更复制减少停机窗口。

## Example

示意例：先迁移历史记录，再持续追平新增写入后切换，说明迁移过程需要协调全量数据与增量变化。

## Sources

- [课件 p.782：DMS – Database Migration Service](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=782)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.783：DMS Sources and TargetsSOURCES:](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=783)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.784：AWS Schema Conversion Tool (SCT)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=784)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.785：DMS - Continuous ReplicationCorporate data center Oracle DB(source) VPC Region Public Subnet AWS DMS Replication Instance Pri](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=785)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.786：AWS DMS – Multi-AZ DeploymentAWS RegionAvailability Zone - A DMS ReplicationInstance Availability Zone - B DMS ReplicationIns](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=786)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
