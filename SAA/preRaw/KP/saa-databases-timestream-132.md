---
id: saa-databases-timestream-132
title: 时间序列数据的组织（Amazon Timestream）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=531
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=532
dependencies: []
---

# saa-databases-timestream-132: 时间序列数据的组织（Amazon Timestream）

## Learning Objective

在“按分钟汇总设备温度曲线”的场景中，能说明时间序列数据的组织的判断依据，并指出适用限制。

## Scope

- Included: 时间序列数据的组织的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

时间序列数据库围绕带时间戳的测量数据组织存储和查询，并可按数据年龄分层。

## Logical Path

1. 需求：按分钟汇总设备温度曲线。
2. 学习重点是追加测量、按时间窗口聚合及保留需求。
3. 结果：时间维度是数据读取与聚合的主要依据。

## Key Terms

- Amazon Timestream：时间序列数据库围绕带时间戳的测量数据组织存储和查询，并可按数据年龄分层。

## Example

示意例：按分钟汇总设备温度曲线，说明时间维度是数据读取与聚合的主要依据。

## Sources

- [课件 p.531：Amazon Timestream](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=531)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.532：Amazon Timestream – Architecture AmazonTimestream AWS IoT Kinesis DataStreams Lambda Prometheus Amazon MSK Kinesis Data Analy](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=532)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
