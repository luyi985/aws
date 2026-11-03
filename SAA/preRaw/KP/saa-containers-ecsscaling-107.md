---
id: saa-containers-ecsscaling-107
title: 任务扩展与主机扩展（ECS service scaling）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=429
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=430
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=431
dependencies:
- saa-containers-ecs-105
- saa-scaling-asg-037
---

# saa-containers-ecsscaling-107: 任务扩展与主机扩展（ECS service scaling）

## Learning Objective

在“任务数增加但实例池已满时扩展主机”的场景中，能说明任务扩展与主机扩展的判断依据，并指出适用限制。

## Scope

- Included: 任务扩展与主机扩展的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-containers-ecs-105、saa-scaling-asg-037。

## Knowledge Point

服务伸缩调整期望任务数量，EC2 容量伸缩提供放置这些任务所需的主机资源。

## Logical Path

1. 需求：任务数增加但实例池已满时扩展主机。
2. 两者需要协调，否则增加任务也可能没有可用容量。
3. 结果：容器副本容量与承载容量是两个层次。

## Key Terms

- Service scaling：调整服务期望任务数量的过程。
- Capacity provider：为任务提供并管理承载容量的机制。

## Example

示意例：任务数增加但实例池已满时扩展主机，说明容器副本容量与承载容量是两个层次。

## Sources

- [课件 p.429：ECS Service Auto Scaling](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=429)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.430：EC2 Launch Type – Auto Scaling EC2 Instances](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=430)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.431：ECS Scaling – Service CPU Usage Example Service A Auto Scaling Group Scale ECS Capacity Providers(optional) Auto Scaling Task](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=431)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
