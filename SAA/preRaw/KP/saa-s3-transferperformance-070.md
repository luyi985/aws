---
id: saa-s3-transferperformance-070
title: 并行传输如何改善性能（Multipart upload and byte-range fetch）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=304
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=305
dependencies:
- saa-s3-objects-060
---

# saa-s3-transferperformance-070: 并行传输如何改善性能（Multipart upload and byte-range fetch）

## Learning Objective

区分分段上传和范围读取各自减少的传输工作。

## Scope

- Included: 并行传输如何改善性能的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-s3-objects-060。

## Knowledge Point

分段上传（multipart upload）把对象拆成独立上传部分，再由服务完成组合；范围读取（byte-range fetch）只取对象的指定字节范围。二者分别作用于上传和读取，不代替长距离路径优化。

## Logical Path

1. 上传时并行传输各段，失败部分单独重试，再完成组合。
2. 读取时按范围并行获取或只取需要的内容。
3. 对未完成上传设置清理规则；长距离性能另见传输加速 KP-220。

## Key Terms

- Multipart upload：分段上传并显式完成组合的对象上传过程。
- Byte-range fetch：按字节区间读取对象内容。

## Example

示意例：大文件各段独立上传，失败时只重试失败段，说明分段减少单次失败造成的重传工作。

## Sources

- [课件 p.304：S3 Performance](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=304)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.305：S3 Performance – S3 Byte-Range Fetches](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=305)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
