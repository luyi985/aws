---
id: saa-audit-cloudtrail-156
title: 谁通过 API 做了什么（AWS CloudTrail）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=610
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=611
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=612
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=614
dependencies: []
---

# saa-audit-cloudtrail-156: 谁通过 API 做了什么（AWS CloudTrail）

## Learning Objective

在“排查安全组被修改时查找修改 API 与调用身份”的场景中，能说明谁通过 API 做了什么的判断依据，并指出适用限制。

## Scope

- Included: 谁通过 API 做了什么的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

审计记录连接身份、API 动作、时间与请求上下文。

## Logical Path

1. 需求：排查安全组被修改时查找修改 API 与调用身份。
2. 管理事件、数据事件及长期保存配置有不同范围，默认事件历史不等于完整长期审计。
3. 结果：操作审计回答谁改变了资源。

## Key Terms

- AWS CloudTrail：审计记录连接身份、API 动作、时间与请求上下文。

## Example

示意例：排查安全组被修改时查找修改 API 与调用身份，说明操作审计回答谁改变了资源。

## Sources

- [课件 p.610：AWS CloudTrail](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=610)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.611：CloudTrail Diagram SDK CLI Console CloudTrail Console Inspect & Audit CloudWatch Logs S3 Bucket IAM Users &IAM Roles](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=611)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.612：CloudTrail Events](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=612)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.614：CloudTrail Events Retention](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=614)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
