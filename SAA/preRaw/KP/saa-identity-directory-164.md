---
id: saa-identity-directory-164
title: 目录托管与本地代理（AWS Directory Service）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=648
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=649
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=650
dependencies: []
---

# saa-identity-directory-164: 目录托管与本地代理（AWS Directory Service）

## Learning Objective

在“希望继续由本地目录验证员工身份时评估代理方案”的场景中，能说明目录托管与本地代理的判断依据，并指出适用限制。

## Scope

- Included: 目录托管与本地代理的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

托管 Microsoft AD 在云端提供目录，AD Connector 把认证请求代理到已有本地目录。

## Logical Path

1. 需求：希望继续由本地目录验证员工身份时评估代理方案。
2. 选择取决于是否需要新的托管目录或保留现有身份源。
3. 结果：身份源放置位置影响目录服务选择。

## Key Terms

- AWS Directory Service：托管 Microsoft AD 在云端提供目录，AD Connector 把认证请求代理到已有本地目录。

## Example

示意例：希望继续由本地目录验证员工身份时评估代理方案，说明身份源放置位置影响目录服务选择。

## Sources

- [课件 p.648：What is Microsoft Active Directory (AD)?](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=648)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.649：AWS Directory Services](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=649)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.650：IAM Identity Center – Active Directory Setup](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=650)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
