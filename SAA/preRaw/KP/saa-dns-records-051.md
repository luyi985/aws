---
id: saa-dns-records-051
title: 记录与托管区域（Route 53 record and hosted zone）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=198
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=199
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=200
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=201
dependencies:
- saa-dns-resolution-050
---

# saa-dns-records-051: 记录与托管区域（Route 53 record and hosted zone）

## Learning Objective

在“内部数据库名称放在私有区域”的场景中，能说明记录与托管区域的判断依据，并指出适用限制。

## Scope

- Included: 记录与托管区域的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-dns-resolution-050。

## Knowledge Point

托管区域保存某个域名的解析记录。

## Logical Path

1. 需求：内部数据库名称放在私有区域。
2. 公开区域服务公网域名，私有区域服务关联网络内的名称；记录类型决定返回地址、别名或权威服务器等信息。
3. 结果：相同解析机制可服务不同可见范围。

## Key Terms

- Route 53 record and hosted zone：托管区域保存某个域名的解析记录。

## Example

示意例：内部数据库名称放在私有区域，公共网站名称放在公开区域，说明相同解析机制可服务不同可见范围。

## Sources

- [课件 p.198：Route 53 – Records](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=198)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.199：Route 53 – Record Types](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=199)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.200：Route 53 – Hosted Zones](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=200)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.201：Route 53 – Public vs. Private Hosted Zones VPC EC2 Instance(Public IP)ApplicationLoad Balancer Public Hosted ZoneClient S3 Bu](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=201)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
