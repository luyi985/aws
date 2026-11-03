---
id: saa-elb-stickiness-033
title: 会话粘滞与负载倾斜（Session affinity）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=142
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=143
dependencies:
- saa-elb-alb-030
---

# saa-elb-stickiness-033: 会话粘滞与负载倾斜（Session affinity）

## Learning Objective

在“某用户连续请求被送到同一实例”的场景中，能说明会话粘滞与负载倾斜的判断依据，并指出适用限制。

## Scope

- Included: 会话粘滞与负载倾斜的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-elb-alb-030。

## Knowledge Point

会话粘滞让同一客户端倾向于访问同一后端，有助于依赖实例本地状态的应用。

## Logical Path

1. 需求：某用户连续请求被送到同一实例。
2. 它可能造成流量不均，且不能替代会话状态持久化。
3. 结果：粘滞提供路由关联而非状态复制。

## Key Terms

- Session affinity：会话粘滞让同一客户端倾向于访问同一后端，有助于依赖实例本地状态的应用。

## Example

示意例：某用户连续请求被送到同一实例，但实例故障仍会丢失本地会话，说明粘滞提供路由关联而非状态复制。

## Sources

- [课件 p.142：Sticky Sessions (Session Affinity)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=142)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.143：Sticky Sessions – Cookie Names](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=143)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
