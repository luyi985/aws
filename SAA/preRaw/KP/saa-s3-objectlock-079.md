---
id: saa-s3-objectlock-079
title: 不可变版本与保留策略（S3 Object Lock）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=330
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=331
dependencies:
- saa-s3-versioning-063
---

# saa-s3-objectlock-079: 不可变版本与保留策略（S3 Object Lock）

## Learning Objective

在“审计文件采用合规保留后不能在保留期内直接删除”的场景中，能说明不可变版本与保留策略的判断依据，并指出适用限制。

## Scope

- Included: 不可变版本与保留策略的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-s3-versioning-063。

## Knowledge Point

对象锁为版本建立一次写入多次读取保护。

## Logical Path

1. 需求：审计文件采用合规保留后不能在保留期内直接删除。
2. 治理模式允许受授权绕过，合规模式提供更严格的保留限制；法律保留与固定保留期也要区分。
3. 结果：不可变性约束的是具体对象版本。

## Key Terms

- S3 Object Lock：对象锁为版本建立一次写入多次读取保护。

## Example

示意例：审计文件采用合规保留后不能在保留期内直接删除，说明不可变性约束的是具体对象版本。

## Sources

- [课件 p.330：S3 Glacier Vault Lock](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=330)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.331：S3 Object Lock (versioning must be enabled)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=331)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
