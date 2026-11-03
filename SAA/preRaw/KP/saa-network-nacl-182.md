---
id: saa-network-nacl-182
title: 无状态子网过滤（Network ACL）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=719
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=720
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=722
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=723
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=726
dependencies:
- saa-ec2-securitygroups-011
- saa-network-subnets-178
---

# saa-network-nacl-182: 无状态子网过滤（Network ACL）

## Learning Objective

在“允许入站服务端口却阻止返回方向临时端口会导致连接失败”的场景中，能说明无状态子网过滤的判断依据，并指出适用限制。

## Scope

- Included: 无状态子网过滤的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-ec2-securitygroups-011、saa-network-subnets-178。

## Knowledge Point

网络访问控制列表在子网边界按编号规则匹配允许或拒绝，属于无状态过滤。

## Logical Path

1. 需求：允许入站服务端口却阻止返回方向临时端口会导致连接失败。
2. 返回流量也需匹配规则，因此临时端口范围会影响连接是否完整。
3. 结果：无状态规则要覆盖双向路径。

## Key Terms

- Network ACL：网络访问控制列表在子网边界按编号规则匹配允许或拒绝，属于无状态过滤。

## Example

示意例：允许入站服务端口却阻止返回方向临时端口会导致连接失败，说明无状态规则要覆盖双向路径。

## Sources

- [课件 p.719：Subnet Security Groups & NACLs Security Group EC2 Instance NACL NACL InboundRules SG InboundRules Outbound Allowed(Stateful) ](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=719)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.720：Network Access Control List (NACL)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=720)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.722：Default NACL](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=722)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.723：Response Ephemeral Ports](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=723)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.726：Security Group vs. NACLsSecurity GroupNACLOperates at the instance levelOperates at the subnet levelSupports allow rules only](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=726)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
