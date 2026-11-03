---
id: saa-cost-anomalies-205
title: 识别异常支出模式（Cost Anomaly Detection）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=838
dependencies:
- saa-cost-explorer-204
---

# saa-cost-anomalies-205: 识别异常支出模式（Cost Anomaly Detection）

## Learning Objective

在“平时低费用账户出现异常上升时发出提醒”的场景中，能说明识别异常支出模式的判断依据，并指出适用限制。

## Scope

- Included: 识别异常支出模式的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-cost-explorer-204。

## Knowledge Point

异常检测学习历史使用和费用模式，发现偏离后发送提醒。

## Logical Path

1. 需求：平时低费用账户出现异常上升时发出提醒。
2. 它不同于固定预算阈值，且通知本身不会自动停止资源。
3. 结果：检测比较的是实际模式与历史预期。

## Key Terms

- Cost Anomaly Detection：异常检测学习历史使用和费用模式，发现偏离后发送提醒。

## Example

示意例：平时低费用账户出现异常上升时发出提醒，说明检测比较的是实际模式与历史预期。

## Sources

- [课件 p.838：AWS Cost Anomaly Detection](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=838)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
