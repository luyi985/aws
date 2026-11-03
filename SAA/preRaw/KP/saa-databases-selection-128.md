---
id: saa-databases-selection-128
title: 按数据模型与查询选择数据库（Database access pattern）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=520
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=521
dependencies:
- saa-rds-manageddb-039
- saa-dynamodb-datamodel-116
---

# saa-databases-selection-128: 按数据模型与查询选择数据库（Database access pattern）

## Learning Objective

在“多表事务与固定主键查找分别评估关系库和键值数据库”的场景中，能说明按数据模型与查询选择数据库的判断依据，并指出适用限制。

## Scope

- Included: 按数据模型与查询选择数据库的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-rds-manageddb-039、saa-dynamodb-datamodel-116。

## Knowledge Point

数据库选型需要同时考虑关系、事务、访问模式、规模与延迟。

## Logical Path

1. 需求：多表事务与固定主键查找分别评估关系库和键值数据库。
2. 服务名称不是答案，应先明确需要执行的读写和一致性约束。
3. 结果：数据模型需与访问模式一起判断。

## Key Terms

- Database access pattern：数据库选型需要同时考虑关系、事务、访问模式、规模与延迟。

## Example

示意例：多表事务与固定主键查找分别评估关系库和键值数据库，说明数据模型需与访问模式一起判断。

## Sources

- [课件 p.520：Choosing the Right Database](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=520)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.521：Database Types](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=521)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
