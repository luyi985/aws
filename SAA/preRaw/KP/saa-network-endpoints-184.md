---
id: saa-network-endpoints-184
title: 私有访问服务的入口选择（VPC endpoint and PrivateLink）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=731
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=732
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=733
dependencies:
- saa-network-subnets-178
---

# saa-network-endpoints-184: 私有访问服务的入口选择（VPC endpoint and PrivateLink）

## Learning Objective

在“同 VPC 内访问 S3 可评估网关端点”的场景中，能说明私有访问服务的入口选择的判断依据，并指出适用限制。

## Scope

- Included: 私有访问服务的入口选择的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-network-subnets-178。

## Knowledge Point

网关端点通过路由表服务受支持的目标，接口端点在子网内建立网络接口。

## Logical Path

1. 需求：同 VPC 内访问 S3 可评估网关端点。
2. 协议支持、来源网络、DNS、权限和成本决定具体选择。
3. 结果：接入来源影响端点选择。

## Key Terms

- VPC endpoint and PrivateLink：网关端点通过路由表服务受支持的目标，接口端点在子网内建立网络接口。

## Example

示意例：同 VPC 内访问 S3 可评估网关端点，本地网络经私网访问则检查接口端点方案，说明接入来源影响端点选择。

## Sources

- [课件 p.731：VPC Endpoints (AWS PrivateLink)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=731)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.732：Private Subnet Types of Endpoints](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=732)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.733：Gateway or Interface Endpoint for S3?](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=733)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
