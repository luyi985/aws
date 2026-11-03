---
id: saa-containers-eks-109
title: 托管控制平面与工作节点（Elastic Kubernetes Service）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=437
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=438
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=439
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=440
dependencies:
- saa-containers-fundamentals-235
---

# saa-containers-eks-109: 托管控制平面与工作节点（Elastic Kubernetes Service）

## Learning Objective

在“采用托管控制平面仍需为有状态任务配置持久卷”的场景中，能说明托管控制平面与工作节点的判断依据，并指出适用限制。

## Scope

- Included: 托管控制平面与工作节点的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-containers-fundamentals-235。

建议阅读（不阻塞学习）：[saa-containers-ecs-105](saa-containers-ecs-105.md)。

## Knowledge Point

托管 Kubernetes 服务管理控制平面，工作负载仍需节点计算、网络、存储和权限配置。

## Logical Path

1. 需求：采用托管控制平面仍需为有状态任务配置持久卷。
2. 托管节点、自管节点与无服务器计算承担不同运维责任。
3. 结果：托管编排平台不会自动设计应用状态存储。

## Key Terms

- Elastic Kubernetes Service：托管 Kubernetes 服务管理控制平面，工作负载仍需节点计算、网络、存储和权限配置。

## Example

示意例：采用托管控制平面仍需为有状态任务配置持久卷，说明托管编排平台不会自动设计应用状态存储。

## Sources

- [课件 p.437：Amazon EKS Overview](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=437)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.438：EKS multi-AZ deployment diagram](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=438)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.439：Amazon EKS – Node Types](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=439)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.440：Amazon EKS – Data Volumes](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=440)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
