---
id: saa-edge-cloudfront-081
title: 边缘缓存与回源（Amazon CloudFront）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=336
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=337
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=338
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=339
dependencies: []
---

# saa-edge-cloudfront-081: 边缘缓存与回源（Amazon CloudFront）

## Learning Objective

在“热门图片首次回源后被边缘节点缓存”的场景中，能说明边缘缓存与回源的判断依据，并指出适用限制。

## Scope

- Included: 边缘缓存与回源的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-s3-objects-060](saa-s3-objects-060.md)。

## Knowledge Point

内容分发网络把可缓存响应放到靠近用户的边缘节点，未命中时回源获取。

## Logical Path

1. 需求：热门图片首次回源后被边缘节点缓存。
2. 缓存降低延迟与源站压力，源站权限仍需正确配置。
3. 结果：性能收益来自复用已缓存响应。

## Key Terms

- Amazon CloudFront：内容分发网络把可缓存响应放到靠近用户的边缘节点，未命中时回源获取。

## Example

示意例：热门图片首次回源后被边缘节点缓存，附近用户随后直接命中，说明性能收益来自复用已缓存响应。

## Sources

- [课件 p.336：Amazon CloudFront](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=336)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.337：CloudFront – Origins](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=337)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.338：CloudFront at a high level CloudFront Edge Location Forward Request to your Origin Local Cache S3 HTTPor Origin Client GET /b](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=338)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.339：CloudFront – S3 as an Origin EdgeLos Angeles EdgeMumbai EdgeMelbourne Origin (S3 bucket) Public www Public wwwEdgeSão Paulo O](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=339)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
