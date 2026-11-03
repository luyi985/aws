---
id: saa-ec2-ipaddresses-015
title: 实例地址与固定入口（Elastic IP）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=79
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=81
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=82
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=83
dependencies: []
---

# saa-ec2-ipaddresses-015: 实例地址与固定入口（Elastic IP）

## Learning Objective

说明私有地址、公网地址和弹性 IP 在寻址及故障切换中的不同作用。

## Scope

- Included: 实例地址与固定入口的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

弹性 IP（Elastic IP）是可重新关联的静态公网 IPv4 地址。它与私有地址以及随实例生命周期变化的普通公网地址不同；地址稳定不等于应用或数据已恢复。

## Logical Path

1. 先确定访问来自内部网络还是公网。
2. 固定公网地址可通过重新关联指向替代资源，但还要满足路由和安全规则。
3. 故障切换同时验证应用启动、状态恢复与客户端连接。

## Key Terms

- Private IP：用于私有网络寻址的地址。
- Elastic IP：可由账户管理并重新关联的静态公网 IPv4 地址。

## Example

示意例：将弹性 IP 从故障实例重新关联到备用实例，说明固定地址与后端实例生命周期可以分离。

## Sources

- [课件 p.79：Private vs Public IP (IPv4)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=79)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.81：Private vs Public IP (IPv4)Fundamental Differences](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=81)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.82：Elastic IPs](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=82)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.83：Elastic IP](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=83)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
