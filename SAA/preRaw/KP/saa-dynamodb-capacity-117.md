---
id: saa-dynamodb-capacity-117
title: 预配置与按需容量（DynamoDB capacity mode）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=475
dependencies:
- saa-dynamodb-datamodel-116
---

# saa-dynamodb-capacity-117: 预配置与按需容量（DynamoDB capacity mode）

## Learning Objective

在“稳定流量评估预配置容量”的场景中，能说明预配置与按需容量的判断依据，并指出适用限制。

## Scope

- Included: 预配置与按需容量的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-dynamodb-datamodel-116。

## Knowledge Point

预配置模式显式管理吞吐容量，按需模式按请求使用适应负载。

## Logical Path

1. 需求：稳定流量评估预配置容量。
2. 选择需要比较流量可预测性、容量管理方式与成本，而不是认为按需没有任何边界。
3. 结果：负载形态影响容量管理选择。

## Key Terms

- DynamoDB capacity mode：预配置模式显式管理吞吐容量，按需模式按请求使用适应负载。

## Example

示意例：稳定流量评估预配置容量，难预测的突发请求评估按需，说明负载形态影响容量管理选择。

## Sources

- [课件 p.475：DynamoDB – Read/Write Capacity Modes](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=475)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
