---
id: saa-scaling-asg-037
title: 期望容量与实例替换（Auto Scaling Group）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=151
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=152
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=154
dependencies:
- saa-scaling-availability-028
---

# saa-scaling-asg-037: 期望容量与实例替换（Auto Scaling Group）

## Learning Objective

在“期望容量为三”的场景中，能说明期望容量与实例替换的判断依据，并指出适用限制。

## Scope

- Included: 期望容量与实例替换的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-scaling-availability-028。

## Knowledge Point

自动伸缩组根据最小、最大与期望容量维护实例集合，并可替换不健康实例。

## Logical Path

1. 需求：期望容量为三。
2. 它与负载均衡器配合，让新实例进入可服务集合。
3. 结果：维护目标容量与应对流量增长是两类行为。

## Key Terms

- Auto Scaling Group：自动伸缩组根据最小、最大与期望容量维护实例集合，并可替换不健康实例。

## Example

示意例：期望容量为三，一台实例故障后自动补建一台，说明维护目标容量与应对流量增长是两类行为。

## Sources

- [课件 p.151：What’s an Auto Scaling Group?](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=151)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.152：Auto Scaling Group in AWS EC2Instance EC2Instance EC2Instance EC2Instance EC2InstanceEC2InstanceEC2Instance Auto Scaling Grou](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=152)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.154：Auto Scaling Group Attributes](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=154)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
