---
id: saa-rds-readreplicas-040
title: 异步副本与读扩展（Read replica）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=164
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=165
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=166
dependencies:
- saa-rds-manageddb-039
---

# saa-rds-readreplicas-040: 异步副本与读扩展（Read replica）

## Learning Objective

在“报表查询使用只读副本”的场景中，能说明异步副本与读扩展的判断依据，并指出适用限制。

## Scope

- Included: 异步副本与读扩展的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-rds-manageddb-039。

## Knowledge Point

只读副本异步复制主库数据，为可容忍复制延迟的读取分担压力。

## Logical Path

1. 需求：报表查询使用只读副本。
2. 应用需要把读取发送到副本，不能假设写入后立即在副本看到结果。
3. 结果：读扩展需要配合一致性要求。

## Key Terms

- Read replica：只读副本异步复制主库数据，为可容忍复制延迟的读取分担压力。

## Example

示意例：报表查询使用只读副本，支付后立即确认订单仍读主库，说明读扩展需要配合一致性要求。

## Sources

- [课件 p.164：RDS Read Replicas for read scalability RDS DB instanceRDS DB instance read replica RDS DB instance read replica Application w](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=164)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.165：RDS Read Replicas – Use Cases](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=165)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.166：RDS Read Replicas – Network Cost RDS DB instanceRDS DB instance read replica ASYNC ReplicationCross-Region$$$ Region/AZus-eas](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=166)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
