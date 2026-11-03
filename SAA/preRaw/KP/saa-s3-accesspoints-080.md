---
id: saa-s3-accesspoints-080
title: 按使用方拆分访问入口（S3 Access Point）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=332
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=333
dependencies:
- saa-s3-bucketpolicy-061
---

# saa-s3-accesspoints-080: 按使用方拆分访问入口（S3 Access Point）

## Learning Objective

在“财务入口仅允许访问财务前缀”的场景中，能说明按使用方拆分访问入口的判断依据，并指出适用限制。

## Scope

- Included: 按使用方拆分访问入口的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-s3-bucketpolicy-061。

## Knowledge Point

访问点为同一桶提供各自的名称、策略和可选网络边界，便于按应用或团队管理访问。

## Logical Path

1. 需求：财务入口仅允许访问财务前缀。
2. 访问点策略仍需与桶及身份授权共同匹配。
3. 结果：多个入口可以共享数据而分别管理权限。

## Key Terms

- S3 Access Point：访问点为同一桶提供各自的名称、策略和可选网络边界，便于按应用或团队管理访问。

## Example

示意例：财务入口仅允许访问财务前缀，分析入口提供更广读取范围，说明多个入口可以共享数据而分别管理权限。

## Sources

- [课件 p.332：S3 – Access Points S3 Bucket /finance/… /sales/… Simple BucketPolicy FinanceAccess Point SalesAccess Point AnalyticsAccess Po](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=332)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.333：S3 – Access Points – VPC Origin](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=333)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
