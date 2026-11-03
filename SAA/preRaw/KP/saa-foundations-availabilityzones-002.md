---
id: saa-foundations-availabilityzones-002
title: 可用区与故障隔离（Availability Zone）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=21
dependencies: []
---

# saa-foundations-availabilityzones-002: 可用区与故障隔离（Availability Zone）

## Learning Objective

在“两台应用服务器分别部署在两个可用区”的场景中，能说明可用区与故障隔离的判断依据，并指出适用限制。

## Scope

- Included: 可用区与故障隔离的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

一个区域包含多个相互隔离的可用区，可用区之间通过低延迟网络连接。

## Logical Path

1. 需求：两台应用服务器分别部署在两个可用区。
2. 把冗余组件分布到多个可用区可以降低单个机房故障的影响。
3. 结果：跨可用区部署建立了故障隔离边界。

## Key Terms

- Availability Zone：一个区域包含多个相互隔离的可用区，可用区之间通过低延迟网络连接。

## Example

示意例：两台应用服务器分别部署在两个可用区，一处故障时另一处仍可服务，说明跨可用区部署建立了故障隔离边界。

## Sources

- [课件 p.21：AWS Availability Zones](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=21)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
