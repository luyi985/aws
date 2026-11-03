---
id: saa-rds-auroraserverless-043
title: 按使用量调整数据库计算（Aurora Serverless）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=176
dependencies:
- saa-rds-aurora-042
---

# saa-rds-auroraserverless-043: 按使用量调整数据库计算（Aurora Serverless）

## Learning Objective

在“使用量昼夜波动的内部系统评估弹性数据库容量”的场景中，能说明按使用量调整数据库计算的判断依据，并指出适用限制。

## Scope

- Included: 按使用量调整数据库计算的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-rds-aurora-042。

## Knowledge Point

Aurora Serverless 按实际工作负载调整数据库计算容量，减少手动选择固定实例容量的工作。

## Logical Path

1. 需求：使用量昼夜波动的内部系统评估弹性数据库容量。
2. 适用性取决于负载波动与响应要求，不能直接推断任何负载都更便宜。
3. 结果：负载变化是选择自动容量管理的重要依据。

## Key Terms

- Aurora Serverless：Aurora Serverless 按实际工作负载调整数据库计算容量，减少手动选择固定实例容量的工作。

## Example

示意例：使用量昼夜波动的内部系统评估弹性数据库容量，说明负载变化是选择自动容量管理的重要依据。

## Sources

- [课件 p.176：Aurora Serverless Shared storage Volume Proxy Fleet(managed by Aurora) Client](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=176)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
