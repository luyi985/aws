---
id: saa-s3-acceleration-220
title: 优化到 S3 的长距离传输（S3 Transfer Acceleration）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=304
- https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html
dependencies:
- saa-s3-objects-060
verified_at: '2026-11-04'
---

# saa-s3-acceleration-220: 优化到 S3 的长距离传输（S3 Transfer Acceleration）

## Learning Objective

区分传输加速、分段上传与 CloudFront 内容缓存。

## Scope

- Included: 优化到 S3 的长距离传输的机制、适用条件、失败或例外边界。
- Excluded: 完整部署步骤、实时价格和未引用的产品功能。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-s3-objects-060。

## Knowledge Point

传输加速使客户端通过边缘位置进入优化网络路径，再把数据传至 S3 桶。它优化长距离传输路径；分段上传优化传输并行度，二者可以配合。

## Logical Path

1. 确认上传跨地域且网络路径是瓶颈。
2. 启用符合要求的桶并使用加速端点，而不是普通端点。
3. 比较实际加速收益与附加费用，不将其视为桶对象复制或下载缓存。

## Key Terms

- Accelerate endpoint：进入 S3 传输加速路径的端点。

## Example

示意例：欧洲客户端把大文件分段上传到远端桶，同时使用加速端点。例子说明并行分段与路径优化解决两个不同瓶颈。

## Sources

- [课件 p.304：S3 Performance](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=304)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：边缘接入优化到 S3 的长距离传输](https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html)。用于核验上述具体边界；查阅日期：2026-11-04。
