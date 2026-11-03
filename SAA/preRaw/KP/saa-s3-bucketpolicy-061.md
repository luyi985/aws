---
id: saa-s3-bucketpolicy-061
title: 桶策略与公开访问保护（S3 bucket policy）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=273
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=274
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=278
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=279
dependencies:
- saa-iam-policies-004
- saa-s3-objects-060
---

# saa-s3-bucketpolicy-061: 桶策略与公开访问保护（S3 bucket policy）

## Learning Objective

在“桶策略允许合作账户读取指定前缀”的场景中，能说明桶策略与公开访问保护的判断依据，并指出适用限制。

## Scope

- Included: 桶策略与公开访问保护的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-iam-policies-004、saa-s3-objects-060。

## Knowledge Point

桶策略从资源侧约束访问，可表达主体、动作、对象范围及条件。

## Logical Path

1. 需求：桶策略允许合作账户读取指定前缀。
2. 阻止公开访问设置用于防止意外开放，跨账户访问仍需检查两侧相关授权。
3. 结果：资源侧允许不能代替完整授权判断。

## Key Terms

- S3 bucket policy：桶策略从资源侧约束访问，可表达主体、动作、对象范围及条件。

## Example

示意例：桶策略允许合作账户读取指定前缀，仍检查调用身份权限和显式拒绝，说明资源侧允许不能代替完整授权判断。

## Sources

- [课件 p.273：Amazon S3 – Security](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=273)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.274：S3 Bucket Policies](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=274)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.278：Advanced: Cross-Account Access – Use Bucket Policy S3 Bucket IAM UserOther AWS account S3 Bucket PolicyAllows Cross-Account](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=278)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.279：Bucket settings for Block Public Access](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=279)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
