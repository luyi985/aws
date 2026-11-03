---
id: saa-s3-lifecycle-068
title: 自动转换与过期规则（S3 Lifecycle）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=294
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=295
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=296
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=297
dependencies:
- saa-s3-storageclasses-065
---

# saa-s3-lifecycle-068: 自动转换与过期规则（S3 Lifecycle）

## Learning Objective

在“日志先保留在热层”的场景中，能说明自动转换与过期规则的判断依据，并指出适用限制。

## Scope

- Included: 自动转换与过期规则的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-s3-storageclasses-065。

建议阅读（不阻塞学习）：[saa-s3-versioning-063](saa-s3-versioning-063.md)。

## Knowledge Point

生命周期规则按对象年龄、前缀或标签触发存储转换与过期。

## Logical Path

1. 需求：日志先保留在热层。
2. 当前版本、非当前版本和未完成上传需要分别考虑，规则也是数据删除策略。
3. 结果：生命周期把保留要求变成自动执行的时间规则。

## Key Terms

- S3 Lifecycle：生命周期规则按对象年龄、前缀或标签触发存储转换与过期。

## Example

示意例：日志先保留在热层，再归档并最终过期，说明生命周期把保留要求变成自动执行的时间规则。

## Sources

- [课件 p.294：Amazon S3 – Moving between Storage Classes](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=294)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.295：Amazon S3 – Lifecycle Rules](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=295)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.296：Amazon S3 – Lifecycle Rules (Scenario 1)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=296)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.297：Amazon S3 – Lifecycle Rules (Scenario 2)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=297)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
