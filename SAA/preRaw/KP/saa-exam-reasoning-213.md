---
id: saa-exam-reasoning-213
title: 从场景约束筛选架构（Scenario-based architecture reasoning）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=858
dependencies: []
---

# saa-exam-reasoning-213: 从场景约束筛选架构（Scenario-based architecture reasoning）

## Learning Objective

在“题目要求 UDP 与固定入口时先筛掉只支持 HTTP 路由的方案”的场景中，能说明从场景约束筛选架构的判断依据，并指出适用限制。

## Scope

- Included: 从场景约束筛选架构的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-architecture-wellarchitected-211](saa-architecture-wellarchitected-211.md)。

## Knowledge Point

场景题先明确协议、可用性、性能、运维和成本约束，再排除不满足硬性条件的方案。

## Logical Path

1. 需求：题目要求 UDP 与固定入口时先筛掉只支持 HTTP 路由的方案。
2. 多个方案可行时，应比较最符合题目目标的设计。
3. 结果：协议约束可以优先缩小答案范围。

## Key Terms

- Scenario-based architecture reasoning：场景题先明确协议、可用性、性能、运维和成本约束，再排除不满足硬性条件的方案。

## Example

示意例：题目要求 UDP 与固定入口时先筛掉只支持 HTTP 路由的方案，说明协议约束可以优先缩小答案范围。

## Sources

- [课件 p.858：Proceed by elimination](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=858)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
