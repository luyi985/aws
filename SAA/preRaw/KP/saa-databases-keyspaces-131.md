---
id: saa-databases-keyspaces-131
title: 托管 Cassandra 兼容访问（Amazon Keyspaces）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=530
dependencies: []
---

# saa-databases-keyspaces-131: 托管 Cassandra 兼容访问（Amazon Keyspaces）

## Learning Objective

在“已有应用使用 Cassandra 查询接口时评估兼容托管服务”的场景中，能说明托管 Cassandra 兼容访问的判断依据，并指出适用限制。

## Scope

- Included: 托管 Cassandra 兼容访问的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

该服务提供托管 Cassandra 兼容的数据访问，适合依赖相应查询模型的工作负载。

## Logical Path

1. 需求：已有应用使用 Cassandra 查询接口时评估兼容托管服务。
2. 迁移仍需检查支持范围与容量行为。
3. 结果：接口与模型兼容可以减少重写工作。

## Key Terms

- Amazon Keyspaces：该服务提供托管 Cassandra 兼容的数据访问，适合依赖相应查询模型的工作负载。

## Example

示意例：已有应用使用 Cassandra 查询接口时评估兼容托管服务，说明接口与模型兼容可以减少重写工作。

## Sources

- [课件 p.530：Amazon Keyspaces (for Apache Cassandra)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=530)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
