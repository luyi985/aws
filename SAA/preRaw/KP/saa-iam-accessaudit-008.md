---
id: saa-iam-accessaudit-008
title: 凭证与权限使用审计（Credential report and Access Advisor）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=38
- preRaw/IAM_Security_Tools.md#L7
dependencies:
- saa-iam-policies-004
---

# saa-iam-accessaudit-008: 凭证与权限使用审计（Credential report and Access Advisor）

## Learning Objective

在“先从凭证报告发现旧访问密钥”的场景中，能说明凭证与权限使用审计的判断依据，并指出适用限制。

## Scope

- Included: 凭证与权限使用审计的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-iam-policies-004。

## Knowledge Point

凭证报告从账户层面展示用户凭证状态，访问顾问展示已授予服务权限的最近访问情况。

## Logical Path

1. 需求：先从凭证报告发现旧访问密钥。
2. 前者帮助检查凭证，后者为缩减权限提供依据。
3. 结果：两种工具提供不同维度的审计证据。

## Key Terms

- Credential report：账户层面的用户凭证状态报告。
- Access Advisor：提供已授予服务权限的最近访问线索的工具。

## Example

示意例：先从凭证报告发现旧访问密钥，再从访问顾问确认某服务长期未用，说明两种工具提供不同维度的审计证据。

## Sources

- [课件 p.38：IAM Security T ools](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=38)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [本地笔记 IAM_Security_Tools.md，L7](../IAM_Security_Tools.md#L7)。补充课程定义或场景；笔记中的口号、绝对化说法不替代官方限制。
