---
id: saa-architecture-stateless-058
title: 状态外置与横向扩展（Stateless application）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=229
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=238
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=240
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=250
dependencies: []
---

# saa-architecture-stateless-058: 状态外置与横向扩展（Stateless application）

## Learning Objective

在“购物车保存到共享存储后”的场景中，能说明状态外置与横向扩展的判断依据，并指出适用限制。

## Scope

- Included: 状态外置与横向扩展的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-scaling-asg-037](saa-scaling-asg-037.md)、[saa-cache-elasticache-048](saa-cache-elasticache-048.md)。

## Knowledge Point

无状态应用实例不把必须跨请求保留的状态只放在本机。

## Logical Path

1. 需求：购物车保存到共享存储后。
2. 会话或业务数据由共享后端维护，实例因此可以被替换并接收来自任意用户的请求。
3. 结果：外置状态支持实例替换。

## Key Terms

- Stateless application：无状态应用实例不把必须跨请求保留的状态只放在本机。

## Example

示意例：购物车保存到共享存储后，用户下一次请求落到另一实例仍能继续购物，说明外置状态支持实例替换。

## Sources

- [课件 p.229：Stateless Web App: WhatIsTheTime.com](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=229)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.238：Minimum 2 AZ => Let’s reserve capacity DNS QueryFor api.whatisthetime.comAlias Record Availability zone 1 to 3Availability zo](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=238)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.240：Stateful Web App: MyClothes.com](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=240)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.250：In this lecture we’ve discussed…3-tier architectures for web applications](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=250)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
