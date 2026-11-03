---
id: saa-scaling-policies-038
title: 自动伸缩触发方式（Scaling policy）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=156
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=157
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=158
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=159
dependencies:
- saa-scaling-asg-037
---

# saa-scaling-policies-038: 自动伸缩触发方式（Scaling policy）

## Learning Objective

在“定期活动开始前提前扩容”的场景中，能说明自动伸缩触发方式的判断依据，并指出适用限制。

## Scope

- Included: 自动伸缩触发方式的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-scaling-asg-037。

## Knowledge Point

目标跟踪维持指标目标，分步策略根据告警区间调整容量，计划策略按已知时间变化调整容量。

## Logical Path

1. 需求：定期活动开始前提前扩容。
2. 指标要能反映单实例负担，并考虑启动与预热时间。
3. 结果：已知时间变化与实时负载可以用不同策略处理。

## Key Terms

- Scaling policy：将目标指标、告警或时间计划关联到容量调整的策略。

## Example

示意例：定期活动开始前提前扩容，活动中按每目标请求数调整容量，说明已知时间变化与实时负载可以用不同策略处理。

## Sources

- [课件 p.156：Auto Scaling Groups – Scaling Policies](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=156)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.157：Auto Scaling Groups – Scaling Policies](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=157)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.158：Good metrics to scale on](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=158)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.159：Auto Scaling Groups - Scaling Cooldowns](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=159)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
