---
id: saa-serverless-stepfunctions-125
title: 多步骤工作流的编排（AWS Step Functions）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=490
dependencies: []
---

# saa-serverless-stepfunctions-125: 多步骤工作流的编排（AWS Step Functions）

## Learning Objective

在“付款成功后发货”的场景中，能说明多步骤工作流的编排的判断依据，并指出适用限制。

## Scope

- Included: 多步骤工作流的编排的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-serverless-lambda-111](saa-serverless-lambda-111.md)。

## Knowledge Point

状态机把顺序、并行、分支、超时和重试变成显式工作流。

## Logical Path

1. 需求：付款成功后发货。
2. 每个任务负责局部动作，编排层管理任务之间的控制流与失败路径。
3. 结果：状态机把分支与恢复过程从单个函数中分离。

## Key Terms

- AWS Step Functions：状态机把顺序、并行、分支、超时和重试变成显式工作流。

## Example

示意例：付款成功后发货，失败则进入补偿步骤，说明状态机把分支与恢复过程从单个函数中分离。

## Sources

- [课件 p.490：AWS Step Functions](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=490)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
