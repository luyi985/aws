---
id: saa-ec2-placement-016
title: 放置策略的性能与隔离取舍（Placement group）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=85
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=86
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=87
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=88
dependencies:
- saa-foundations-availabilityzones-002
---

# saa-ec2-placement-016: 放置策略的性能与隔离取舍（Placement group）

## Learning Objective

在“紧密通信的并行计算选择集群放置”的场景中，能说明放置策略的性能与隔离取舍的判断依据，并指出适用限制。

## Scope

- Included: 放置策略的性能与隔离取舍的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-foundations-availabilityzones-002。

## Knowledge Point

集群放置使实例靠近以改善通信，分散放置把实例分布到不同硬件，分区放置按机架组隔离。

## Logical Path

1. 需求：紧密通信的并行计算选择集群放置。
2. 选择时要在通信性能与故障隔离之间匹配应用需求。
3. 结果：不同策略解决不同约束。

## Key Terms

- Placement group：集群放置使实例靠近以改善通信，分散放置把实例分布到不同硬件，分区放置按机架组隔离。

## Example

示意例：紧密通信的并行计算选择集群放置，分布式数据节点关注分区隔离，说明不同策略解决不同约束。

## Sources

- [课件 p.85：Placement Groups](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=85)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.86：Same AZ Placement GroupsCluster](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=86)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.87：Us-east-1a Hardware 1 Placement GroupsSpread](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=87)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.88：Placements GroupsPartition](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=88)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
