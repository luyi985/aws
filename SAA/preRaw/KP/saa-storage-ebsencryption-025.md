---
id: saa-storage-ebsencryption-025
title: 加密卷与快照的继承关系（EBS encryption）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=110
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=111
dependencies:
- saa-storage-snapshots-020
---

# saa-storage-ebsencryption-025: 加密卷与快照的继承关系（EBS encryption）

## Learning Objective

在“先复制未加密快照并启用加密”的场景中，能说明加密卷与快照的继承关系的判断依据，并指出适用限制。

## Scope

- Included: 加密卷与快照的继承关系的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-storage-snapshots-020。

## Knowledge Point

EBS 透明处理卷及其快照的加密。

## Logical Path

1. 需求：先复制未加密快照并启用加密。
2. 对已有未加密卷，课程给出的路径是复制并加密快照，再从加密快照创建替代卷。
3. 结果：加密迁移涉及创建替代存储。

## Key Terms

- EBS encryption：EBS 透明处理卷及其快照的加密。

## Example

示意例：先复制未加密快照并启用加密，再恢复新卷，说明加密迁移涉及创建替代存储。

## Sources

- [课件 p.110：EBS Encryption](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=110)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.111：Encryption: encrypt an unencrypted EBS volume](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=111)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
