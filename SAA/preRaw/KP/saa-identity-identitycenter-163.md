---
id: saa-identity-identitycenter-163
title: 员工跨账户单点登录（IAM Identity Center）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=643
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=644
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=645
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=646
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=647
dependencies:
- saa-governance-organizations-158
- saa-iam-serviceroles-007
---

# saa-identity-identitycenter-163: 员工跨账户单点登录（IAM Identity Center）

## Learning Objective

在“员工登录一次后只能选择获分配的开发账户角色”的场景中，能说明员工跨账户单点登录的判断依据，并指出适用限制。

## Scope

- Included: 员工跨账户单点登录的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-governance-organizations-158、saa-iam-serviceroles-007。

## Knowledge Point

身份中心把员工身份与账户权限集连接起来，提供集中登录和临时角色访问。

## Logical Path

1. 需求：员工登录一次后只能选择获分配的开发账户角色。
2. 权限集映射到具体账户访问，身份源与授权分配是不同配置。
3. 结果：统一认证不等于所有账户均可访问。

## Key Terms

- IAM Identity Center：身份中心把员工身份与账户权限集连接起来，提供集中登录和临时角色访问。

## Example

示意例：员工登录一次后只能选择获分配的开发账户角色，说明统一认证不等于所有账户均可访问。

## Sources

- [课件 p.643：AWS IAM Identity Center(successor to AWS Single Sign-On)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=643)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.644：AWS IAM Identity Center – Login Flow AWS IAM Identity Center](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=644)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.645：AWS IAM Identity Center AWS Organization Business Cloud Apps Custom SAML2.0-enabled Apps AWS IAM Identity Center Permission S](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=645)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.646：IAM Identity CenterAWS Organization Management Account OU (Development) Dev Account A Dev Account B OU (Production) Prod Acco](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=646)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.647：AWS IAM Identity CenterFine-grained Permissions and Assignments](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=647)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
