---
id: saa-edge-privateorigin-082
title: 让源站保持私有（CloudFront VPC origin）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=341
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=342
dependencies:
- saa-edge-cloudfront-081
---

# saa-edge-privateorigin-082: 让源站保持私有（CloudFront VPC origin）

## Learning Objective

在“用户访问分发域名”的场景中，能说明让源站保持私有的判断依据，并指出适用限制。

## Scope

- Included: 让源站保持私有的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-edge-cloudfront-081。

## Knowledge Point

VPC 源站让分发服务把请求传给私有网络中的受支持资源。

## Logical Path

1. 需求：用户访问分发域名。
2. 使用公开源站则需要独立限制直接访问，入口可访问不代表源站必须公开。
3. 结果：公网入口与源站网络暴露可以分离。

## Key Terms

- CloudFront VPC origin：VPC 源站让分发服务把请求传给私有网络中的受支持资源。

## Example

示意例：用户访问分发域名，而后端负载均衡器位于私有子网，说明公网入口与源站网络暴露可以分离。

## Sources

- [课件 p.341：CloudFront – ALB or EC2 as an originUsing VPC Origins](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=341)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.342：CloudFront – ALB or EC2 as an originUsing Public Networkhttp://d7uri8nf7uskq.cloudfront.net/tools/list-cloudfront-ips Edge Lo](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=342)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
