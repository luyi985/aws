---
id: saa-containers-ecs-105
title: 容器任务与计算容量（Elastic Container Service）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=424
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=425
dependencies:
- saa-containers-fundamentals-235
---

# saa-containers-ecs-105: 容器任务与计算容量（Elastic Container Service）

## Learning Objective

在“同一容器工作负载采用 Fargate 后无需维护实例池”的场景中，能说明容器任务与计算容量的判断依据，并指出适用限制。

## Scope

- Included: 容器任务与计算容量的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-containers-fundamentals-235。

建议阅读（不阻塞学习）：[saa-iam-serviceroles-007](saa-iam-serviceroles-007.md)。

## Knowledge Point

容器编排服务负责运行任务，EC2 模式由使用方管理主机容量，Fargate 则托管底层计算。

## Logical Path

1. 需求：同一容器工作负载采用 Fargate 后无需维护实例池。
2. 任务定义描述运行要求，启动模式决定主机管理责任。
3. 结果：容器定义与计算管理责任可以分开选择。

## Key Terms

- ECS task：按任务定义运行的一组容器。
- Fargate：由平台管理底层计算的容器运行方式。

## Example

示意例：同一容器工作负载采用 Fargate 后无需维护实例池，说明容器定义与计算管理责任可以分开选择。

## Sources

- [课件 p.424：Amazon ECS - EC2 Launch Type](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=424)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.425：Amazon ECS – Fargate Launch Type](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=425)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
