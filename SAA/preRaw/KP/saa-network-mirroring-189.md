---
id: saa-network-mirroring-189
title: 复制数据包进行检查（VPC Traffic Mirroring）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=756
dependencies:
- saa-ec2-eni-017
---

# saa-network-mirroring-189: 复制数据包进行检查（VPC Traffic Mirroring）

## Learning Objective

在“把指定接口流量副本发送到分析设备”的场景中，能说明复制数据包进行检查的判断依据，并指出适用限制。

## Scope

- Included: 复制数据包进行检查的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-ec2-eni-017。

## Knowledge Point

流量镜像从受支持接口复制选定数据包送给检查目标，便于深度分析。

## Logical Path

1. 需求：把指定接口流量副本发送到分析设备。
2. 它与只保存连接元数据的流日志不同，资源与隐私边界也需明确。
3. 结果：镜像是旁路复制而非默认阻断。

## Key Terms

- VPC Traffic Mirroring：流量镜像从受支持接口复制选定数据包送给检查目标，便于深度分析。

## Example

示意例：把指定接口流量副本发送到分析设备，而原流量继续到应用，说明镜像是旁路复制而非默认阻断。

## Sources

- [课件 p.756：VPC – Traffic Mirroring](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=756)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
