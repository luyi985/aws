---
id: saa-security-secretsmanager-169
title: 凭证存储与轮换（AWS Secrets Manager）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=673
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=674
dependencies:
- saa-security-kms-166
---

# saa-security-secretsmanager-169: 凭证存储与轮换（AWS Secrets Manager）

## Learning Objective

在“数据库密码轮换后应用从服务读取新值”的场景中，能说明凭证存储与轮换的判断依据，并指出适用限制。

## Scope

- Included: 凭证存储与轮换的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-security-kms-166。

## Knowledge Point

密钥管理器围绕敏感凭证保存、读取与轮换组织工作。

## Logical Path

1. 需求：数据库密码轮换后应用从服务读取新值。
2. 轮换需要把新值与实际后端凭证同步，消费者也要能重新读取有效凭证。
3. 结果：轮换是协调后端和消费者的过程。

## Key Terms

- AWS Secrets Manager：密钥管理器围绕敏感凭证保存、读取与轮换组织工作。

## Example

示意例：数据库密码轮换后应用从服务读取新值，说明轮换是协调后端和消费者的过程。

## Sources

- [课件 p.673：AWS Secrets Manager](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=673)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.674：AWS Secrets Manager – Multi-Region Secrets](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=674)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
