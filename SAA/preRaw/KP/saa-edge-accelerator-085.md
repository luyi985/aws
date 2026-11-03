---
id: saa-edge-accelerator-085
title: 全球网络入口与缓存的区别（AWS Global Accelerator）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=350
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=351
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=352
dependencies: []
---

# saa-edge-accelerator-085: 全球网络入口与缓存的区别（AWS Global Accelerator）

## Learning Objective

在“全球 UDP 游戏流量经加速器进入健康区域”的场景中，能说明全球网络入口与缓存的区别的判断依据，并指出适用限制。

## Scope

- Included: 全球网络入口与缓存的区别的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-elb-nlb-031](saa-elb-nlb-031.md)。

## Knowledge Point

全球加速器通过稳定的全球入口把流量送到区域应用端点，利用 AWS 网络改善路径。

## Logical Path

1. 需求：全球 UDP 游戏流量经加速器进入健康区域。
2. 它着重连接路由与端点健康，不承担对象缓存职责。
3. 结果：网络加速可以服务不适合内容缓存的协议。

## Key Terms

- AWS Global Accelerator：全球加速器通过稳定的全球入口把流量送到区域应用端点，利用 AWS 网络改善路径。

## Example

示意例：全球 UDP 游戏流量经加速器进入健康区域，说明网络加速可以服务不适合内容缓存的协议。

## Sources

- [课件 p.350：AWS Global Accelerator](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=350)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.351：AWS Global Accelerator](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=351)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.352：AWS Global Accelerator vs CloudFront](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=352)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
