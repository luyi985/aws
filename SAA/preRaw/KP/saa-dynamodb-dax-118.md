---
id: saa-dynamodb-dax-118
title: 面向数据库 API 的读缓存（DynamoDB Accelerator）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=476
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=477
dependencies:
- saa-dynamodb-datamodel-116
---

# saa-dynamodb-dax-118: 面向数据库 API 的读缓存（DynamoDB Accelerator）

## Learning Objective

在“大量重复商品读取通过专用缓存加速”的场景中，能说明面向数据库 API 的读缓存的判断依据，并指出适用限制。

## Scope

- Included: 面向数据库 API 的读缓存的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-dynamodb-datamodel-116。

建议阅读（不阻塞学习）：[saa-cache-elasticache-048](saa-cache-elasticache-048.md)。

## Knowledge Point

加速器为 DynamoDB 提供专用读缓存，减少重复读取带来的延迟与负载。

## Logical Path

1. 需求：大量重复商品读取通过专用缓存加速。
2. 它与用于任意应用数据的通用缓存不同，需要理解缓存一致性边界。
3. 结果：缓存选择取决于数据访问形态。

## Key Terms

- DynamoDB Accelerator：加速器为 DynamoDB 提供专用读缓存，减少重复读取带来的延迟与负载。

## Example

示意例：大量重复商品读取通过专用缓存加速，而复杂报表结果仍由应用缓存管理，说明缓存选择取决于数据访问形态。

## Sources

- [课件 p.476：DynamoDB Accelerator (DAX)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=476)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.477：DynamoDB Accelerator (DAX) vs. ElastiCache DynamoDB Accelerator (DAX)AmazonDynamoDB AmazonElastiCache - Individual objects ca](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=477)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
