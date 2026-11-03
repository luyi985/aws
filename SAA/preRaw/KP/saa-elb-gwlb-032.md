---
id: saa-elb-gwlb-032
title: 透明插入网络检查设备（Gateway Load Balancer）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=140
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=141
dependencies: []
---

# saa-elb-gwlb-032: 透明插入网络检查设备（Gateway Load Balancer）

## Learning Objective

在“出站流量先经过防火墙设备池再离开网络”的场景中，能说明透明插入网络检查设备的判断依据，并指出适用限制。

## Scope

- Included: 透明插入网络检查设备的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

网关负载均衡器把需要检查的数据包分配给第三方虚拟网络设备，再让流量继续到目的地。

## Logical Path

1. 需求：出站流量先经过防火墙设备池再离开网络。
2. 它用于网络检查链路，路由必须把流量导入该路径。
3. 结果：检查设备可以通过托管入口横向扩展。

## Key Terms

- Gateway Load Balancer：网关负载均衡器把需要检查的数据包分配给第三方虚拟网络设备，再让流量继续到目的地。

## Example

示意例：出站流量先经过防火墙设备池再离开网络，说明检查设备可以通过托管入口横向扩展。

## Sources

- [课件 p.140：Gateway Load Balancer](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=140)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.141：Gateway Load Balancer – Tar get Groups](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=141)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
