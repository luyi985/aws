---
id: saa-observability-alarms-154
title: 从指标条件到行动（CloudWatch alarm）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=595
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=596
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=597
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=598
dependencies:
- saa-observability-metrics-152
---

# saa-observability-alarms-154: 从指标条件到行动（CloudWatch alarm）

## Learning Objective

在“持续多次高 CPU 才告警”的场景中，能说明从指标条件到行动的判断依据，并指出适用限制。

## Scope

- Included: 从指标条件到行动的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-observability-metrics-152。

## Knowledge Point

告警评估时间窗口中的指标并转换状态，再触发通知或自动操作。

## Logical Path

1. 需求：持续多次高 CPU 才告警。
2. 采样周期、缺失数据与组合条件影响是否误报或漏报。
3. 结果：告警需要把持续时间纳入判断。

## Key Terms

- CloudWatch alarm：告警评估时间窗口中的指标并转换状态，再触发通知或自动操作。

## Example

示意例：持续多次高 CPU 才告警，而不是一次尖峰立即扩容，说明告警需要把持续时间纳入判断。

## Sources

- [课件 p.595：CloudWatch Alarms](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=595)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.596：CloudWatch Alarm Targets](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=596)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.597：CloudWatch Alarms – Composite Alarms](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=597)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.598：EC2 Instance Recovery CloudWatch AlarmStatusCheckFailed_System](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=598)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
