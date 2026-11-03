---
id: saa-network-internet-179
title: 公网连通的必要条件（Internet Gateway and route table）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=708
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=709
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=710
dependencies:
- saa-network-subnets-178
- saa-ec2-ipaddresses-015
---

# saa-network-internet-179: 公网连通的必要条件（Internet Gateway and route table）

## Learning Objective

在“实例有公网地址但路由表缺少互联网出口时仍不能正常出网”的场景中，能说明公网连通的必要条件的判断依据，并指出适用限制。

## Scope

- Included: 公网连通的必要条件的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-network-subnets-178、saa-ec2-ipaddresses-015。

## Knowledge Point

公网路径需要互联网网关、正确路由、适用的地址和允许流量的安全控制共同配合。

## Logical Path

1. 需求：实例有公网地址但路由表缺少互联网出口时仍不能正常出网。
2. 只附加网关不会让所有子网自动变成公网可达。
3. 结果：连通需要完整路径。

## Key Terms

- Internet Gateway and route table：公网路径需要互联网网关、正确路由、适用的地址和允许流量的安全控制共同配合。

## Example

示意例：实例有公网地址但路由表缺少互联网出口时仍不能正常出网，说明连通需要完整路径。

## Sources

- [课件 p.708：Internet Gateway (IGW)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=708)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.709：Adding Internet Gateway Region VPC Availability Zone Private SubnetPublic Subnet InternetGateway](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=709)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.710：Editing Route Tables Region VPC Availability Zone Private SubnetPublic Subnet InternetGateway Router RouteTableSecurity Group](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=710)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
