---
id: saa-security-kms-166
title: 密钥管理与使用授权（AWS Key Management Service）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=657
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=658
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=659
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=661
dependencies:
- saa-iam-policies-004
---

# saa-security-kms-166: 密钥管理与使用授权（AWS Key Management Service）

## Learning Objective

在“用户可读取加密对象却不能解密时检查密钥授权”的场景中，能说明密钥管理与使用授权的判断依据，并指出适用限制。

## Scope

- Included: 密钥管理与使用授权的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-iam-policies-004。

## Knowledge Point

密钥管理服务托管加密密钥并控制其使用，密钥策略与相关身份授权共同决定谁能执行加解密。

## Logical Path

1. 需求：用户可读取加密对象却不能解密时检查密钥授权。
2. 拥有数据读取权限不自动代表有密钥使用权限。
3. 结果：数据与密钥存在独立访问控制。

## Key Terms

- AWS Key Management Service：密钥管理服务托管加密密钥并控制其使用，密钥策略与相关身份授权共同决定谁能执行加解密。

## Example

示意例：用户可读取加密对象却不能解密时检查密钥授权，说明数据与密钥存在独立访问控制。

## Sources

- [课件 p.657：AWS KMS (Key Management Service)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=657)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.658：KMS Keys Types](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=658)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.659：AWS KMS (Key Management Service)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=659)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.661：KMS Key Policies](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=661)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
