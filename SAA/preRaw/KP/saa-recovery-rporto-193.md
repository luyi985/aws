---
id: saa-recovery-rporto-193
title: 恢复点与恢复时间目标（Recovery Point Objective and Recovery Time Objective）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=773
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=774
dependencies: []
---

# saa-recovery-rporto-193: 恢复点与恢复时间目标（Recovery Point Objective and Recovery Time Objective）

## Learning Objective

在“允许丢失少量近期数据但要求快速恢复时”的场景中，能说明恢复点与恢复时间目标的判断依据，并指出适用限制。

## Scope

- Included: 恢复点与恢复时间目标的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

恢复点目标限定可接受的数据损失窗口，恢复时间目标限定可接受的服务中断。

## Logical Path

1. 需求：允许丢失少量近期数据但要求快速恢复时。
2. 两个目标分别约束复制或备份频率，以及恢复与切换流程。
3. 结果：数据损失和停机时间是独立要求。

## Key Terms

- Recovery Point Objective and Recovery Time Objective：恢复点目标限定可接受的数据损失窗口，恢复时间目标限定可接受的服务中断。

## Example

示意例：允许丢失少量近期数据但要求快速恢复时，分别设计数据保护周期与启动流程，说明数据损失和停机时间是独立要求。

## Sources

- [课件 p.773：Disaster Recovery Overview](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=773)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.774：RPO and RTO RPO Disaster Data loss RTO Downtime](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=774)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
