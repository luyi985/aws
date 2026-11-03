---
id: saa-analytics-athena-133
title: 在对象存储上执行 SQL（Amazon Athena）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=534
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=535
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=536
dependencies:
- saa-s3-objects-060
---

# saa-analytics-athena-133: 在对象存储上执行 SQL（Amazon Athena）

## Learning Objective

在“按日期分区的日志只查询某一天”的场景中，能说明在对象存储上执行 SQL的判断依据，并指出适用限制。

## Scope

- Included: 在对象存储上执行 SQL的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-s3-objects-060。

## Knowledge Point

无服务器查询服务直接分析受支持格式的数据。

## Logical Path

1. 需求：按日期分区的日志只查询某一天。
2. 分区、压缩和列式格式可减少扫描量，因此数据布局会影响查询成本与性能。
3. 结果：合理布局能避免扫描无关文件。

## Key Terms

- Amazon Athena：无服务器查询服务直接分析受支持格式的数据。

## Example

示意例：按日期分区的日志只查询某一天，说明合理布局能避免扫描无关文件。

## Sources

- [课件 p.534：Amazon Athena](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=534)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.535：Amazon Athena – Performance Improvement](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=535)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.536：Amazon Athena – Federated Query](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=536)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
