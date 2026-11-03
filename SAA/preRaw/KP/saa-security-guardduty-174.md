---
id: saa-security-guardduty-174
title: 行为与日志中的威胁发现（Amazon GuardDuty）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=691
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=692
dependencies: []
---

# saa-security-guardduty-174: 行为与日志中的威胁发现（Amazon GuardDuty）

## Learning Objective

在“异常 API 活动产生发现项”的场景中，能说明行为与日志中的威胁发现的判断依据，并指出适用限制。

## Scope

- Included: 行为与日志中的威胁发现的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-audit-cloudtrail-156](saa-audit-cloudtrail-156.md)。

## Knowledge Point

威胁检测服务分析受支持的日志和运行信号，发现可疑行为并产生发现项。

## Logical Path

1. 需求：异常 API 活动产生发现项。
2. 发现并不自动代表已阻止攻击，响应流程需要另外连接。
3. 结果：检测结果是响应流程的起点。

## Key Terms

- Amazon GuardDuty：威胁检测服务分析受支持的日志和运行信号，发现可疑行为并产生发现项。

## Example

示意例：异常 API 活动产生发现项，再触发调查通知，说明检测结果是响应流程的起点。

## Sources

- [课件 p.691：Amazon GuardDuty](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=691)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.692：Amazon GuardDuty VPC Flow Logs CloudTrail Logs DNS Logs (AWS DNS)GuardDuty EventBridge SNS Lambda Optional Features EKS Audit](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=692)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
