---
id: saa-scaling-availability-028
title: 扩展能力与高可用（Scalability and high availability）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=119
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=120
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=121
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=122
dependencies:
- saa-foundations-availabilityzones-002
---

# saa-scaling-availability-028: 扩展能力与高可用（Scalability and high availability）

## Learning Objective

在“把单台服务器升级仍会受单机故障影响”的场景中，能说明扩展能力与高可用的判断依据，并指出适用限制。

## Scope

- Included: 扩展能力与高可用的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-foundations-availabilityzones-002。

## Knowledge Point

纵向扩展改变单个实例规格，横向扩展改变实例数量。

## Logical Path

1. 需求：把单台服务器升级仍会受单机故障影响。
2. 高可用关注组件故障时服务能否继续，扩大容量并不自动消除故障集中风险。
3. 结果：扩展与可用性目标不同。

## Key Terms

- Vertical scaling：改变单个计算节点的规格。
- Horizontal scaling：改变计算节点的数量。
- High availability：发生组件故障时仍能持续提供服务的能力。

## Example

示意例：把单台服务器升级仍会受单机故障影响，而跨可用区部署冗余实例能减少故障影响，说明扩展与可用性目标不同。

## Sources

- [课件 p.119：Scalability & High Availability](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=119)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.120：Ver tical Scalability](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=120)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.121：Horizontal Scalability](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=121)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.122：second building in San Francisco first building in New YorkHigh Availability](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=122)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
