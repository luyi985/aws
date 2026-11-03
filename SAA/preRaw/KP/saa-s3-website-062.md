---
id: saa-s3-website-062
title: 静态网站托管的边界（S3 static website）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=280
dependencies:
- saa-s3-objects-060
---

# saa-s3-website-062: 静态网站托管的边界（S3 static website）

## Learning Objective

在“HTML 与图片可以作为网站对象返回”的场景中，能说明静态网站托管的边界的判断依据，并指出适用限制。

## Scope

- Included: 静态网站托管的边界的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-s3-objects-060。

## Knowledge Point

静态网站托管直接返回存储的网页资源，不在桶内执行服务器端应用代码。

## Logical Path

1. 需求：HTML 与图片可以作为网站对象返回。
2. 访问失败需要同时检查对象存在性与访问设置。
3. 结果：静态托管只负责静态内容。

## Key Terms

- S3 static website：静态网站托管直接返回存储的网页资源，不在桶内执行服务器端应用代码。

## Example

示意例：HTML 与图片可以作为网站对象返回，动态订单计算需要另外的应用后端，说明静态托管只负责静态内容。

## Sources

- [课件 p.280：Amazon S3 – Static Website Hosting](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=280)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
