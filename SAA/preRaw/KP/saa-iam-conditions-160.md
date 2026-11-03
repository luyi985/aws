---
id: saa-iam-conditions-160
title: 按请求上下文约束授权（IAM condition）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=632
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=633
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=634
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=635
dependencies:
- saa-iam-policies-004
---

# saa-iam-conditions-160: 按请求上下文约束授权（IAM condition）

## Learning Objective

在“只允许带指定项目标签的资源操作”的场景中，能说明按请求上下文约束授权的判断依据，并指出适用限制。

## Scope

- Included: 按请求上下文约束授权的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-iam-policies-004。

## Knowledge Point

条件根据来源地址、区域、标签或组织等请求上下文限定策略生效范围。

## Logical Path

1. 需求：只允许带指定项目标签的资源操作。
2. 需要确认条件键在实际请求中是否存在，并匹配正确操作和资源。
3. 结果：同一 API 权限可进一步受请求上下文限制。

## Key Terms

- IAM condition：条件根据来源地址、区域、标签或组织等请求上下文限定策略生效范围。

## Example

示意例：只允许带指定项目标签的资源操作，说明同一 API 权限可进一步受请求上下文限制。

## Sources

- [课件 p.632：IAM Conditionsaws:SourceIprestrict the client IP from which the API calls are being made aws:RequestedRegionrestrict the regi](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=632)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.633：IAM Conditionsec2:ResourceTagrestrict based on tags aws:MultiFactorAuthPresentto force MFA](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=633)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.634：IAM for S3](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=634)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.635：Resource Policies & aws:PrincipalOrgID](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=635)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
