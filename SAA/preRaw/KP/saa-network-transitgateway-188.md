---
id: saa-network-transitgateway-188
title: 集中式传递路由（Transit Gateway）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=752
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=753
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=754
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=755
dependencies:
- saa-network-subnets-178
---

# saa-network-transitgateway-188: 集中式传递路由（Transit Gateway）

## Learning Objective

在“生产与开发接入同一中转网关却使用不同路由表”的场景中，能说明集中式传递路由的判断依据，并指出适用限制。

## Scope

- Included: 集中式传递路由的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-network-subnets-178。

建议阅读（不阻塞学习）：[saa-network-peering-183](saa-network-peering-183.md)、[saa-network-vpn-186](saa-network-vpn-186.md)。

## Knowledge Point

中转网关用集中路由连接多个 VPC 与本地网络，支持按路由表隔离通信域。

## Logical Path

1. 需求：生产与开发接入同一中转网关却使用不同路由表。
2. 连接接入不等于所有网络互通，仍需明确传播与转发规则。
3. 结果：集中连接仍可保持网络隔离。

## Key Terms

- Transit Gateway：中转网关用集中路由连接多个 VPC 与本地网络，支持按路由表隔离通信域。

## Example

示意例：生产与开发接入同一中转网关却使用不同路由表，说明集中连接仍可保持网络隔离。

## Sources

- [课件 p.752：Transit Gateway](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=752)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.753：Transit Gateway: Site-to-Site VPN ECMP](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=753)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.754：Transit Gateway: throughput with ECMPVPN to virtual private gateway 1x=1xVPC 1x=1.25 Gbps VPN connection(2 tunnels) VPN to tr](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=754)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.755：Transit Gateway – Share Direct Connect between multiple accounts AWS DirectConnect Location Corporatedata center Clients Clie](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=755)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
