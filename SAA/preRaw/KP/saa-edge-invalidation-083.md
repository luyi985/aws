---
id: saa-edge-invalidation-083
title: 更新内容与缓存失效（CloudFront invalidation）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=347
dependencies:
- saa-edge-cloudfront-081
---

# saa-edge-invalidation-083: 更新内容与缓存失效（CloudFront invalidation）

## Learning Objective

在“替换主页后对主页路径发起失效”的场景中，能说明更新内容与缓存失效的判断依据，并指出适用限制。

## Scope

- Included: 更新内容与缓存失效的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-edge-cloudfront-081。

## Knowledge Point

源站更新不会立即清除边缘缓存。

## Logical Path

1. 需求：替换主页后对主页路径发起失效。
2. 可等待缓存有效期结束，也可对指定路径发起失效；版本化文件名是组织更新时可考虑的设计。
3. 结果：刷新源站与刷新分发缓存是两个动作。

## Key Terms

- CloudFront invalidation：源站更新不会立即清除边缘缓存。

## Example

示意例：替换主页后对主页路径发起失效，说明刷新源站与刷新分发缓存是两个动作。

## Sources

- [课件 p.347：CloudFront – Cache Invalidations](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=347)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
