---
id: saa-messaging-mq-104
title: 兼容现有消息协议（Amazon MQ）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=415
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=416
dependencies: []
---

# saa-messaging-mq-104: 兼容现有消息协议（Amazon MQ）

## Learning Objective

在“已有应用依赖 AMQP 代理时评估托管兼容代理”的场景中，能说明兼容现有消息协议的判断依据，并指出适用限制。

## Scope

- Included: 兼容现有消息协议的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

托管消息代理适合迁移依赖现有开放协议的应用，减少重写客户端的工作。

## Logical Path

1. 需求：已有应用依赖 AMQP 代理时评估托管兼容代理。
2. 协议兼容、代理拓扑与故障恢复要求应一起检查。
3. 结果：保留协议语义可能比改用云原生接口更重要。

## Key Terms

- Amazon MQ：托管消息代理适合迁移依赖现有开放协议的应用，减少重写客户端的工作。

## Example

示意例：已有应用依赖 AMQP 代理时评估托管兼容代理，说明保留协议语义可能比改用云原生接口更重要。

## Sources

- [课件 p.415：Amazon MQ](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=415)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.416：Amazon MQ – High Availability Region(us-east-1)Availability Zone(us-east-1a) Availability Zone(us-east-1b) ACTIVE STANDBY Ama](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=416)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
