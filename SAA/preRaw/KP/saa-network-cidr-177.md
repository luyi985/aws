---
id: saa-network-cidr-177
title: 地址范围与前缀长度（Classless Inter-Domain Routing）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=698
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=699
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=700
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=701
dependencies: []
---

# saa-network-cidr-177: 地址范围与前缀长度（Classless Inter-Domain Routing）

## Learning Objective

在“/24 表示包含 256 个地址的范围”的场景中，能说明地址范围与前缀长度的判断依据，并指出适用限制。

## Scope

- Included: 地址范围与前缀长度的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

CIDR 用地址和前缀长度表示连续范围，前缀越长包含的地址越少。

## Logical Path

1. 需求：/24 表示包含 256 个地址的范围。
2. 规划网络时需要同时考虑地址数量、子网划分和范围重叠。
3. 结果：前缀长度决定匹配范围。

## Key Terms

- Classless Inter-Domain Routing：CIDR 用地址和前缀长度表示连续范围，前缀越长包含的地址越少。

## Example

示意例：/24 表示包含 256 个地址的范围，/32 表示单个地址，说明前缀长度决定匹配范围。

## Sources

- [课件 p.698：Understanding CIDR – IPv4](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=698)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.699：Understanding CIDR – IPv4](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=699)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.700：Understanding CIDR – Subnet Mask](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=700)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.701：Understanding CIDR – Little Exercise](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=701)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
