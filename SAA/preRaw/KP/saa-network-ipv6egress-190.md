---
id: saa-network-ipv6egress-190
title: IPv6 的仅出站入口（Egress-only Internet Gateway）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=757
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=758
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=760
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=761
dependencies:
- saa-network-internet-179
---

# saa-network-ipv6egress-190: IPv6 的仅出站入口（Egress-only Internet Gateway）

## Learning Objective

在“私有工作负载通过 IPv6 下载更新而不接受公网主动连接”的场景中，能说明IPv6 的仅出站入口的判断依据，并指出适用限制。

## Scope

- Included: IPv6 的仅出站入口的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-network-internet-179。

## Knowledge Point

课程中的双栈网络为 IPv6 出站使用仅出站互联网网关，允许内部发起连接并阻止来自外部的主动连接。

## Logical Path

1. 需求：私有工作负载通过 IPv6 下载更新而不接受公网主动连接。
2. IPv4 NAT 路径与 IPv6 路径需分别配置。
3. 结果：仅出站网关保留返回路径但限制连接发起方向。

## Key Terms

- Egress-only Internet Gateway：课程中的双栈网络为 IPv6 出站使用仅出站互联网网关，允许内部发起连接并阻止来自外部的主动连接。

## Example

示意例：私有工作负载通过 IPv6 下载更新而不接受公网主动连接，说明仅出站网关保留返回路径但限制连接发起方向。

## Sources

- [课件 p.757：What is IPv6?](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=757)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.758：IPv6 in VPC](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=758)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.760：Egress-only Internet Gateway](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=760)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.761：Private Subnet(IPv4: 10.0.1.0/24)(IPv6: 2001:db8:1234:1a02::/64) Public Subnet(IPv4: 10.0.0.0/24)(IPv6: 2001:db8:1234:1a00::/](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=761)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
