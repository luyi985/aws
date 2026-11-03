---
id: saa-elb-draining-036
title: 下线时完成在途请求（Deregistration delay）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=150
dependencies:
- saa-elb-healthchecks-029
---

# saa-elb-draining-036: 下线时完成在途请求（Deregistration delay）

## Learning Objective

在“实例发布前先摘除目标并等待现有上传结束”的场景中，能说明下线时完成在途请求的判断依据，并指出适用限制。

## Scope

- Included: 下线时完成在途请求的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-elb-healthchecks-029。

## Knowledge Point

取消注册延迟为正在处理的连接留出完成时间，并停止向下线目标发送新请求。

## Logical Path

1. 需求：实例发布前先摘除目标并等待现有上传结束。
2. 延迟应与请求持续时间和发布过程相匹配。
3. 结果：优雅下线需要给在途工作留出窗口。

## Key Terms

- Deregistration delay：取消注册延迟为正在处理的连接留出完成时间，并停止向下线目标发送新请求。

## Example

示意例：实例发布前先摘除目标并等待现有上传结束，说明优雅下线需要给在途工作留出窗口。

## Sources

- [课件 p.150：Connection Draining](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=150)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
