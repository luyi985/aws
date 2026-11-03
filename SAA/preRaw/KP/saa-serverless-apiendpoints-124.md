---
id: saa-serverless-apiendpoints-124
title: 公开与私有 API 的入口（API Gateway endpoint type）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=488
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=489
dependencies:
- saa-serverless-apigateway-123
---

# saa-serverless-apiendpoints-124: 公开与私有 API 的入口（API Gateway endpoint type）

## Learning Objective

在“只供内部网络使用的受支持 API 采用私有端点并配置授权”的场景中，能说明公开与私有 API 的入口的判断依据，并指出适用限制。

## Scope

- Included: 公开与私有 API 的入口的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-serverless-apigateway-123。

## Knowledge Point

边缘优化、区域与私有端点具有不同接入范围和链路。

## Logical Path

1. 需求：只供内部网络使用的受支持 API 采用私有端点并配置授权。
2. 端点选择解决网络入口问题，身份验证则需另外配置。
3. 结果：网络私有并不代替身份检查。

## Key Terms

- API Gateway endpoint type：边缘优化、区域与私有端点具有不同接入范围和链路。

## Example

示意例：只供内部网络使用的受支持 API 采用私有端点并配置授权，说明网络私有并不代替身份检查。

## Sources

- [课件 p.488：API Gateway - Endpoint Types](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=488)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.489：API Gateway – Security](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=489)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
