---
id: saa-network-nat-181
title: 私有子网的 IPv4 出口（NAT gateway）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=712
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=715
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=716
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=717
- https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html
dependencies:
- saa-network-internet-179
verified_at: '2026-11-04'
---

# saa-network-nat-181: 私有子网的 IPv4 出口（NAT gateway）

## Learning Objective

区分可用区级和区域级 NAT，并解释私有子网发起的 IPv4 出口路径。

## Scope

- Included: 私有子网的 IPv4 出口的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-network-internet-179。

## Knowledge Point

公网 NAT 为私网发起的 IPv4 连接执行地址转换，不能据此从公网主动连接私网实例。课件讲的是可用区级 NAT；当前区域级 NAT 可按工作负载自动跨可用区扩展，两者部署方式不同。

## Logical Path

1. 可用区级方案在公有子网中部署，私有子网路由指向 NAT，再经互联网网关出网。
2. 可用区级高可用需分别设计各区出口；区域级使用统一 NAT 标识，不要求为其建立承载公有子网。
3. 区域级扩展不是瞬时发生；同时核对出口路由、地址容量和所选模式的限制。

## Key Terms

- Zonal NAT gateway：在一个可用区运行的 NAT 网关。
- Regional NAT gateway：随工作负载跨可用区扩展的区域级公网 NAT 网关。

## Example

示意例：私有服务器经同可用区 NAT 下载更新，但公网不能借此主动连接它，说明出站转换不等于开放入站。

## Sources

- [课件 p.712：NAT Instance (outdated, but still at the exam)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=712)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.715：NAT Gateway](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=715)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.716：NAT Gateway Region VPC Availability Zone Private SubnetPublic Subnet InternetGateway Router RouteTableSecurity Group Public E](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=716)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.717：NAT Gateway with High Availability](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=717)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：区域级与可用区级 NAT 的高可用和部署差异](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html)。用于核验上述具体边界；查阅日期：2026-11-04。
