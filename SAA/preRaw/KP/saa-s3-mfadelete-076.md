---
id: saa-s3-mfadelete-076
title: 永久删除版本的附加保护（S3 MFA Delete）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=326
dependencies:
- saa-s3-versioning-063
- saa-iam-mfa-005
---

# saa-s3-mfadelete-076: 永久删除版本的附加保护（S3 MFA Delete）

## Learning Objective

在“普通删除只隐藏对象”的场景中，能说明永久删除版本的附加保护的判断依据，并指出适用限制。

## Scope

- Included: 永久删除版本的附加保护的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-s3-versioning-063、saa-iam-mfa-005。

## Knowledge Point

多因素删除在永久删除对象版本或暂停版本控制时要求额外验证。

## Logical Path

1. 需求：普通删除只隐藏对象。
2. 它依赖版本控制，并且启用管理有特定账户权限要求。
3. 结果：附加保护针对不可逆的版本操作。

## Key Terms

- S3 MFA Delete：多因素删除在永久删除对象版本或暂停版本控制时要求额外验证。

## Example

示意例：普通删除只隐藏对象，而永久删除某版本要求验证第二因素，说明附加保护针对不可逆的版本操作。

## Sources

- [课件 p.326：Amazon S3 – MFA Delete](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=326)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
