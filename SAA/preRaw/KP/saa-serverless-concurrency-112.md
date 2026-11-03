---
id: saa-serverless-concurrency-112
title: 并发容量与限流（Lambda concurrency）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=454
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=455
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=456
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=457
dependencies:
- saa-serverless-lambda-111
---

# saa-serverless-concurrency-112: 并发容量与限流（Lambda concurrency）

## Learning Objective

在“把某函数并发限制在受控范围以保护数据库”的场景中，能说明并发容量与限流的判断依据，并指出适用限制。

## Scope

- Included: 并发容量与限流的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-serverless-lambda-111。

## Knowledge Point

并发表示同时执行的调用数量，保留并发为函数划分并限制可用份额。

## Logical Path

1. 需求：把某函数并发限制在受控范围以保护数据库。
2. 同步与异步调用遇到容量限制时的表现不同，需要结合来源设计重试。
3. 结果：并发控制也用于限制下游压力。

## Key Terms

- Lambda concurrency：并发表示同时执行的调用数量，保留并发为函数划分并限制可用份额。

## Example

示意例：把某函数并发限制在受控范围以保护数据库，说明并发控制也用于限制下游压力。

## Sources

- [课件 p.454：AWS Lambda Limits to Know - per region](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=454)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.455：Lambda Concurrency and Throttling](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=455)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.456：Lambda Concurrency Issue](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=456)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.457：Concurrency and Asynchronous Invocations S3 bucket New file event New file event New file event](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=457)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
