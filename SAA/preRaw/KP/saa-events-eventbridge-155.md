---
id: saa-events-eventbridge-155
title: 事件总线与匹配规则（Amazon EventBridge）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=600
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=601
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=602
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=603
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=604
dependencies: []
---

# saa-events-eventbridge-155: 事件总线与匹配规则（Amazon EventBridge）

## Learning Objective

在“匹配根用户登录事件后发出通知”的场景中，能说明事件总线与匹配规则的判断依据，并指出适用限制。

## Scope

- Included: 事件总线与匹配规则的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

事件总线接收事件，规则按事件内容选择目标；定时触发则服务周期任务。

## Logical Path

1. 需求：匹配根用户登录事件后发出通知。
2. 事件描述发生了什么，目标处理还需考虑权限与失败路径。
3. 结果：事件模式把特定活动连接到响应动作。

## Key Terms

- Event bus：接收事件并把匹配事件交给规则目标的通道。

## Example

示意例：匹配根用户登录事件后发出通知，说明事件模式把特定活动连接到响应动作。

## Sources

- [课件 p.600：Amazon EventBridge (formerly CloudWatch Events)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=600)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.601：Amazon EventBridge Rules Example Source EC2 Instance(ex: Start Instance)CodeBuild(ex: failed build) S3 Event(ex: upload objec](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=601)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.602：Amazon EventBridge](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=602)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.603：Amazon EventBridge – Schema Registry](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=603)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.604：Amazon EventBridge – Resource-based Policy](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=604)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
