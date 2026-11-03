---
id: saa-observability-logs-153
title: 日志组与订阅处理（CloudWatch Logs）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=584
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=586
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=588
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=589
dependencies:
- saa-observability-metrics-152
---

# saa-observability-logs-153: 日志组与订阅处理（CloudWatch Logs）

## Learning Objective

在“错误日志通过订阅进入实时处理”的场景中，能说明日志组与订阅处理的判断依据，并指出适用限制。

## Scope

- Included: 日志组与订阅处理的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-observability-metrics-152。

## Knowledge Point

日志按日志组与日志流组织，并可查询、保留或通过订阅发送到处理目标。

## Logical Path

1. 需求：错误日志通过订阅进入实时处理。
2. 批量导出与实时订阅在延迟和用途上不同。
3. 结果：不同交付方式服务不同时间要求。

## Key Terms

- Log group：应用或用途层面的日志组织与保留单元。
- Log stream：某一来源持续产生的日志记录序列。

## Example

示意例：错误日志通过订阅进入实时处理，而历史日志按需导出，说明不同交付方式服务不同时间要求。

## Sources

- [课件 p.584：CloudWatch Logs](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=584)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.586：CloudWatch Logs Insights https://mng.workshop.aws/operations-2022/detect/cwlogs.html](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=586)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.588：CloudWatch Logs – S3 Export](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=588)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.589：CloudWatch Logs Subscriptions](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=589)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
