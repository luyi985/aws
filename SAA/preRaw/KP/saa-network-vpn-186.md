---
id: saa-network-vpn-186
title: 本地网络到云的加密隧道（Site-to-Site VPN）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=741
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=742
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=743
dependencies:
- saa-network-subnets-178
---

# saa-network-vpn-186: 本地网络到云的加密隧道（Site-to-Site VPN）

## Learning Objective

在“办公室通过隧道访问私有数据库”的场景中，能说明本地网络到云的加密隧道的判断依据，并指出适用限制。

## Scope

- Included: 本地网络到云的加密隧道的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-network-subnets-178。

## Knowledge Point

站点到站点 VPN 通过客户网关与 AWS 侧网关连接两个网络，常以加密隧道跨公网传输。

## Logical Path

1. 需求：办公室通过隧道访问私有数据库。
2. 连通需要配置路由和隧道可用性，不只创建连接对象。
3. 结果：VPN 把已有网络纳入可路由的私有访问路径。

## Key Terms

- Site-to-Site VPN：站点到站点 VPN 通过客户网关与 AWS 侧网关连接两个网络，常以加密隧道跨公网传输。

## Example

示意例：办公室通过隧道访问私有数据库，说明 VPN 把已有网络纳入可路由的私有访问路径。

## Sources

- [课件 p.741：AWS Site-to-Site VPN](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=741)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.742：Private SubnetSite-to-Site VPN Connections](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=742)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.743：AWS VPN CloudHub](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=743)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
