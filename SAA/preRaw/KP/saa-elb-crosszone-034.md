---
id: saa-elb-crosszone-034
title: 跨可用区分配流量（Cross-zone load balancing）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=144
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=145
dependencies:
- saa-elb-healthchecks-029
---

# saa-elb-crosszone-034: 跨可用区分配流量（Cross-zone load balancing）

## Learning Objective

在“一侧有两台实例”的场景中，能说明跨可用区分配流量的判断依据，并指出适用限制。

## Scope

- Included: 跨可用区分配流量的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-elb-healthchecks-029。

## Knowledge Point

跨可用区负载均衡决定入口节点能否向其他可用区的目标分配请求。

## Logical Path

1. 需求：一侧有两台实例。
2. 各区实例数量不均时，该设置会影响每个目标承受的请求量。
3. 结果：入口均分不等于实例均分。

## Key Terms

- Cross-zone load balancing：跨可用区负载均衡决定入口节点能否向其他可用区的目标分配请求。

## Example

示意例：一侧有两台实例，另一侧有八台，允许跨区分配可让目标间的负载更均匀，说明入口均分不等于实例均分。

## Sources

- [课件 p.144：Cross-Zone Load Balancing Availability Zone 1 Availability Zone 2 10 10 10101010 10101010 Availability Zone 1 Availability Zo](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=144)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.145：Cross-Zone Load Balancing](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=145)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
