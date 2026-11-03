---
id: saa-s3-presigned-078
title: 有时限的委托对象访问（S3 presigned URL）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=329
dependencies:
- saa-s3-bucketpolicy-061
---

# saa-s3-presigned-078: 有时限的委托对象访问（S3 presigned URL）

## Learning Objective

在“用户获得限定对象的临时下载链接”的场景中，能说明有时限的委托对象访问的判断依据，并指出适用限制。

## Scope

- Included: 有时限的委托对象访问的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-s3-bucketpolicy-061。

## Knowledge Point

预签名链接把特定操作与签名者权限、凭证有效性和失效时间绑定。

## Logical Path

1. 需求：用户获得限定对象的临时下载链接。
2. 链接使用者无需持有签名者密钥，但链接不能提供签名者本来没有的权限。
3. 结果：委托访问受到时间和权限双重约束。

## Key Terms

- S3 presigned URL：预签名链接把特定操作与签名者权限、凭证有效性和失效时间绑定。

## Example

示意例：用户获得限定对象的临时下载链接，过期或签名凭证失效后不能继续使用，说明委托访问受到时间和权限双重约束。

## Sources

- [课件 p.329：Amazon S3 – Pre-Signed URLs](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=329)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
