---
id: saa-s3-requesterpays-221
title: 共享数据集的费用归属（S3 Requester Pays）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=299
- https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html
dependencies:
- saa-s3-objects-060
verified_at: '2026-11-04'
---

# saa-s3-requesterpays-221: 共享数据集的费用归属（S3 Requester Pays）

## Learning Objective

判断请求、下载和存储费用分别由谁承担。

## Scope

- Included: 共享数据集的费用归属的机制、适用条件、失败或例外边界。
- Excluded: 完整部署步骤、实时价格和未引用的产品功能。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-s3-objects-060。

## Knowledge Point

请求方付费（Requester Pays）改变受支持请求及下载数据的费用归属，桶所有者仍承担存储费用。请求必须认证并声明接受收费，不能匿名读取。

## Logical Path

1. 所有者保留数据与访问控制责任。
2. 已获授权的请求方通过请求参数或头确认承担费用。
3. 认证和费用确认不替代对象读取权限。

## Key Terms

- Requester Pays：让请求方承担适用请求及数据下载费用的桶配置。

## Example

示意例：合作方下载共享数据集并承担请求和下载费用，数据持有者继续支付存储费用。例子说明配置改变费用分担而不是数据所有权。

## Sources

- [课件 p.299：S3 – Requester Pays](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=299)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：请求方与桶所有者的费用分担及认证要求](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html)。用于核验上述具体边界；查阅日期：2026-11-04。
