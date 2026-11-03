---
id: saa-cost-scheduler-210
title: 按非工作时间减少运行成本（Instance Scheduler）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=847
dependencies: []
---

# saa-cost-scheduler-210: 按非工作时间减少运行成本（Instance Scheduler）

## Learning Objective

在“开发环境夜间停止、上班前启动”的场景中，能说明按非工作时间减少运行成本的判断依据，并指出适用限制。

## Scope

- Included: 按非工作时间减少运行成本的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-cost-explorer-204](saa-cost-explorer-204.md)。

## Knowledge Point

实例调度方案按业务时间启动和停止受支持资源，以减少不需要持续运行的容量。

## Logical Path

1. 需求：开发环境夜间停止、上班前启动。
2. 停止计算不代表所有存储和相关服务费用消失。
3. 结果：优化来自减少非必要运行时长。

## Key Terms

- Instance Scheduler：实例调度方案按业务时间启动和停止受支持资源，以减少不需要持续运行的容量。

## Example

示意例：开发环境夜间停止、上班前启动，说明优化来自减少非必要运行时长。

## Sources

- [课件 p.847：Instance Scheduler on AWS](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=847)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
