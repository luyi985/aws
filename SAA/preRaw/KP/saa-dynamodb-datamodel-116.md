---
id: saa-dynamodb-datamodel-116
title: 按访问模式设计主键（DynamoDB primary key）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=472
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=473
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=474
dependencies: []
---

# saa-dynamodb-datamodel-116: 按访问模式设计主键（DynamoDB primary key）

## Learning Objective

在“以用户标识为分区键、订单时间为排序键保存订单”的场景中，能说明按访问模式设计主键的判断依据，并指出适用限制。

## Scope

- Included: 按访问模式设计主键的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

表以主键定位项目，主键可包含分区键及排序键。

## Logical Path

1. 需求：以用户标识为分区键、订单时间为排序键保存订单。
2. 设计先从查询模式出发，项目属性灵活不代表可以忽略主键访问路径。
3. 结果：主键结构能支持按用户查询时间序列。

## Key Terms

- Partition key：决定项目分区访问路径的主键组成。
- Sort key：同一分区键下区分和排序项目的主键组成。

## Example

示意例：以用户标识为分区键、订单时间为排序键保存订单，说明主键结构能支持按用户查询时间序列。

## Sources

- [课件 p.472：Amazon DynamoDB](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=472)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.473：DynamoDB - Basics](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=473)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.474：DynamoDB – Table example User_IDGame_IDScoreResultPartition Key 7791a3d6-…873e0634-…873e0634-… Primary Key 442192 Win 452177 ](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=474)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
