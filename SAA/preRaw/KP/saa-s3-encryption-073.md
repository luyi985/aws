---
id: saa-s3-encryption-073
title: 对象加密的责任边界（S3 server-side and client-side encryption）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=314
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=315
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=316
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=318
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=319
dependencies:
- saa-s3-objects-060
---

# saa-s3-encryption-073: 对象加密的责任边界（S3 server-side and client-side encryption）

## Learning Objective

在“需要单独审计密钥使用时评估 SSE-KMS”的场景中，能说明对象加密的责任边界的判断依据，并指出适用限制。

## Scope

- Included: 对象加密的责任边界的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-s3-objects-060。

## Knowledge Point

服务端加密由 S3 完成加解密，具体模式决定密钥由服务、KMS 或客户提供；客户端加密则在上传前完成。

## Logical Path

1. 需求：需要单独审计密钥使用时评估 SSE-KMS。
2. 选择应依据密钥控制、审计和客户端责任。
3. 结果：模式决定控制边界。

## Key Terms

- S3 server-side and client-side encryption：服务端加密由 S3 完成加解密，具体模式决定密钥由服务、KMS 或客户提供；客户端加密则在上传前完成。

## Example

示意例：需要单独审计密钥使用时评估 SSE-KMS，需要云端只见密文时评估客户端加密，说明模式决定控制边界。

## Sources

- [课件 p.314：Amazon S3 – Object Encryption](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=314)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.315：Amazon S3 Encryption – SSE-S3](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=315)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.316：Amazon S3 Encryption – SSE-KMS](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=316)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.318：Amazon S3 Encryption – SSE-C](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=318)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.319：Amazon S3 Encryption – Client-Side Encryption Amazon S3 S3 Bucket](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=319)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
