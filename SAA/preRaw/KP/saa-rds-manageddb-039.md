---
id: saa-rds-manageddb-039
title: 托管数据库的责任边界（Relational Database Service）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=161
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=162
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=163
dependencies: []
---

# saa-rds-manageddb-039: 托管数据库的责任边界（Relational Database Service）

## Learning Objective

在“订单库由 RDS 管理备份”的场景中，能说明托管数据库的责任边界的判断依据，并指出适用限制。

## Scope

- Included: 托管数据库的责任边界的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

RDS 托管数据库基础设施、备份等运维工作，但应用仍需管理数据模型与查询行为。

## Logical Path

1. 需求：订单库由 RDS 管理备份。
2. 存储自动扩展缓解空间增长，并不等于解决所有性能瓶颈。
3. 结果：托管减少运维工作但保留应用责任。

## Key Terms

- Relational Database Service：RDS 托管数据库基础设施、备份等运维工作，但应用仍需管理数据模型与查询行为。

## Example

示意例：订单库由 RDS 管理备份，开发者仍需优化慢查询，说明托管减少运维工作但保留应用责任。

## Sources

- [课件 p.161：Amazon RDS Overview](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=161)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.162：Advantage over using RDS versus deploying DB on EC2](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=162)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.163：RDS – Storage Auto Scaling](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=163)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
