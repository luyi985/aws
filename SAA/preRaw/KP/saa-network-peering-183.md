---
id: saa-network-peering-183
title: 非传递的私有网络连接（VPC peering）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=727
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=728
dependencies:
- saa-network-subnets-178
---

# saa-network-peering-183: 非传递的私有网络连接（VPC peering）

## Learning Objective

在“三个 VPC 需要两两通信时检查各自连接与路由”的场景中，能说明非传递的私有网络连接的判断依据，并指出适用限制。

## Scope

- Included: 非传递的私有网络连接的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-network-subnets-178。

## Knowledge Point

对等连接为两个地址不重叠的 VPC 建立私有路径，两侧需要配置路由。

## Logical Path

1. 需求：三个 VPC 需要两两通信时检查各自连接与路由。
2. 连接不自动传递，因此 A 连 B、B 连 C 不代表 A 能经 B 到 C。
3. 结果：网络图中的连通不能直接假设可中转。

## Key Terms

- VPC peering：对等连接为两个地址不重叠的 VPC 建立私有路径，两侧需要配置路由。

## Example

示意例：三个 VPC 需要两两通信时检查各自连接与路由，说明网络图中的连通不能直接假设可中转。

## Sources

- [课件 p.727：VPC Peering](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=727)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.728：VPC Peering – Good to know](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=728)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
