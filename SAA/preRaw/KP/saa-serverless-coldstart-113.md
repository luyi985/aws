---
id: saa-serverless-coldstart-113
title: 初始化延迟与预热方式（Lambda cold start）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=458
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=459
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=460
dependencies:
- saa-serverless-lambda-111
---

# saa-serverless-coldstart-113: 初始化延迟与预热方式（Lambda cold start）

## Learning Objective

在“对延迟敏感的接口提前准备执行环境”的场景中，能说明初始化延迟与预热方式的判断依据，并指出适用限制。

## Scope

- Included: 初始化延迟与预热方式的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-serverless-lambda-111。

## Knowledge Point

新执行环境需要完成初始化，造成部分调用延迟增加。

## Logical Path

1. 需求：对延迟敏感的接口提前准备执行环境。
2. 预配置并发提前准备环境，快照恢复类机制减少重建开销；选择还受运行时和费用约束。
3. 结果：优化目标是减少请求到达后的初始化工作。

## Key Terms

- Cold start：创建新执行环境时产生的初始化延迟。
- Provisioned concurrency：预先准备函数执行环境的容量配置。

## Example

示意例：对延迟敏感的接口提前准备执行环境，说明优化目标是减少请求到达后的初始化工作。

## Sources

- [课件 p.458：Cold Starts & Provisioned Concurrency](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=458)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.459：Reserved and Provisioned Concurrency https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=459)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.460：Lambda SnapStart](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=460)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
