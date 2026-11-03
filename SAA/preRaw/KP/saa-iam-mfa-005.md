---
id: saa-iam-mfa-005
title: 多因素认证的保护边界（Multi-Factor Authentication）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=29
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=30
dependencies: []
---

# saa-iam-mfa-005: 多因素认证的保护边界（Multi-Factor Authentication）

## Learning Objective

在“攻击者获得密码但缺少用户的第二因素”的场景中，能说明多因素认证的保护边界的判断依据，并指出适用限制。

## Scope

- Included: 多因素认证的保护边界的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

多因素认证要求使用密码以外的验证因素，降低仅凭被盗密码登录的风险。

## Logical Path

1. 需求：攻击者获得密码但缺少用户的第二因素。
2. 密码策略约束密码强度，但不能代替额外的认证因素。
3. 结果：多因素认证保护身份验证环节。

## Key Terms

- Multi-Factor Authentication：多因素认证要求使用密码以外的验证因素，降低仅凭被盗密码登录的风险。

## Example

示意例：攻击者获得密码但缺少用户的第二因素，无法按通常流程完成登录，说明多因素认证保护身份验证环节。

## Sources

- [课件 p.29：IAM – Password Policy](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=29)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.30：Multi Factor Authentication - MFA](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=30)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
