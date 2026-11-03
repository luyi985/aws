---
id: saa-network-networkfirewall-192
title: 托管网络流量检查（AWS Network Firewall）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=769
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=770
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=771
dependencies:
- saa-network-subnets-178
---

# saa-network-networkfirewall-192: 托管网络流量检查（AWS Network Firewall）

## Learning Objective

在“应用出站流量经防火墙检查后再到互联网”的场景中，能说明托管网络流量检查的判断依据，并指出适用限制。

## Scope

- Included: 托管网络流量检查的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-network-subnets-178。

建议阅读（不阻塞学习）：[saa-network-nacl-182](saa-network-nacl-182.md)。

## Knowledge Point

托管网络防火墙对经过指定路径的流量执行网络和应用协议规则。

## Logical Path

1. 需求：应用出站流量经防火墙检查后再到互联网。
2. 必须设计路由让所需流量经过检查点，部署服务本身不自动覆盖所有路径。
3. 结果：检查能力依赖正确的流量导向。

## Key Terms

- AWS Network Firewall：托管网络防火墙对经过指定路径的流量执行网络和应用协议规则。

## Example

示意例：应用出站流量经防火墙检查后再到互联网，说明检查能力依赖正确的流量导向。

## Sources

- [课件 p.769：Network Protection on AWS](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=769)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.770：AWS Network Firewall](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=770)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.771：Network Firewall – Fine Grained Controls](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=771)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
