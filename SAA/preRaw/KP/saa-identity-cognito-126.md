---
id: saa-identity-cognito-126
title: 应用登录与 AWS 凭证的区别（Cognito User Pool and Identity Pool）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=491
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=492
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=493
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=494
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=495
dependencies: []
---

# saa-identity-cognito-126: 应用登录与 AWS 凭证的区别（Cognito User Pool and Identity Pool）

## Learning Objective

在“用户先登录应用”的场景中，能说明应用登录与 AWS 凭证的区别的判断依据，并指出适用限制。

## Scope

- Included: 应用登录与 AWS 凭证的区别的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-iam-serviceroles-007](saa-iam-serviceroles-007.md)。

## Knowledge Point

用户池管理应用用户登录并签发身份令牌，身份池把受支持身份映射为临时 AWS 凭证。

## Logical Path

1. 需求：用户先登录应用。
2. 应用认证与直接访问 AWS 资源是不同目标。
3. 结果：登录成功不等于自动拥有 AWS 操作权限。

## Key Terms

- Cognito User Pool and Identity Pool：用户池管理应用用户登录并签发身份令牌，身份池把受支持身份映射为临时 AWS 凭证。

## Example

示意例：用户先登录应用，再通过身份池获得限定范围的上传权限，说明登录成功不等于自动拥有 AWS 操作权限。

## Sources

- [课件 p.491：Amazon Cognito](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=491)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.492：Cognito User Pools (CUP) – User Features](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=492)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.493：Cognito User Pools (CUP) - Integrations](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=493)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.494：Cognito Identity Pools (Federated Identities)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=494)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.495：Cognito Identity Pools – Diagram Cognito Identity Pools Web & Mobile Applications Social Identity Provider Login and Get Toke](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=495)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
