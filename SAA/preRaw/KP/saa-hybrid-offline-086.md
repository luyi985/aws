---
id: saa-hybrid-offline-086
title: 离线迁移的时间预算（Offline data transfer）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=354
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=355
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=797
dependencies: []
---

# saa-hybrid-offline-086: 离线迁移的时间预算（Offline data transfer）

## Learning Objective

在“估算数百 TB 数据经低带宽网络所需时间”的场景中，能说明离线迁移的时间预算的判断依据，并指出适用限制。

## Scope

- Included: 离线迁移的时间预算的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

大规模迁移要把网络传输时间与设备运输、导入及连接准备时间一起比较。

## Logical Path

1. 需求：估算数百 TB 数据经低带宽网络所需时间。
2. 课程中的离线设备是迁移模式示例，实际设备可用性与替代方案需另行核实。
3. 结果：迁移速度要按端到端时间衡量。

## Key Terms

- Offline data transfer：大规模迁移要把网络传输时间与设备运输、导入及连接准备时间一起比较。

## Example

示意例：估算数百 TB 数据经低带宽网络所需时间，再与离线导入总周期比较，说明迁移速度要按端到端时间衡量。

## Sources

- [课件 p.354：AWS Snowball](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=354)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.355：Data Migrations with SnowballTime to Transfer100 Mbps1Gbps10Gbps10 TB12 days30 hours3 hours100 TB124 days12 days30 hours1 PB3](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=355)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.797：Transferring large amount of data into AWS](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=797)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
