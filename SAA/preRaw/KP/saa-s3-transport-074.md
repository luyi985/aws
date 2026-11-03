---
id: saa-s3-transport-074
title: 强制加密传输（S3 SecureTransport condition）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=320
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=321
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=322
dependencies:
- saa-s3-bucketpolicy-061
---

# saa-s3-transport-074: 强制加密传输（S3 SecureTransport condition）

## Learning Objective

在“对象已启用静态加密”的场景中，能说明强制加密传输的判断依据，并指出适用限制。

## Scope

- Included: 强制加密传输的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-s3-bucketpolicy-061。

## Knowledge Point

HTTPS 保护网络传输，与对象静态加密是不同层面的控制。

## Logical Path

1. 需求：对象已启用静态加密。
2. 桶策略可显式拒绝非安全传输，而默认对象加密不会自动表达传输要求。
3. 结果：落盘加密与链路加密需要分别约束。

## Key Terms

- S3 SecureTransport condition：HTTPS 保护网络传输，与对象静态加密是不同层面的控制。

## Example

示意例：对象已启用静态加密，仍通过策略拒绝 HTTP 请求，说明落盘加密与链路加密需要分别约束。

## Sources

- [课件 p.320：Amazon S3 – Encryption in transit (SSL/TLS)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=320)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.321：Amazon S3 – Force Encryption in Transitaws:SecureTransport Account B S3 Bucket(my-bucket) Bucket Policy User User http https](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=321)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.322：Amazon S3 – Default Encryption vs. Bucket Policies](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=322)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
