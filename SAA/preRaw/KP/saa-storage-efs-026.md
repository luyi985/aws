---
id: saa-storage-efs-026
title: 跨实例共享文件系统（Elastic File System）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=112
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=113
dependencies:
- saa-foundations-availabilityzones-002
---

# saa-storage-efs-026: 跨实例共享文件系统（Elastic File System）

## Learning Objective

在“两个可用区的 Web 实例读取同一组上传文件”的场景中，能说明跨实例共享文件系统的判断依据，并指出适用限制。

## Scope

- Included: 跨实例共享文件系统的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-foundations-availabilityzones-002。

## Knowledge Point

EFS 提供托管网络文件系统，让多个实例共享同一组文件。

## Logical Path

1. 需求：两个可用区的 Web 实例读取同一组上传文件。
2. 客户端通过挂载目标与网络权限访问，适合需要共享文件语义的应用。
3. 结果：共享文件系统避免各实例维护独立副本。

## Key Terms

- Elastic File System：EFS 提供托管网络文件系统，让多个实例共享同一组文件。

## Example

示意例：两个可用区的 Web 实例读取同一组上传文件，说明共享文件系统避免各实例维护独立副本。

## Sources

- [课件 p.112：Amazon EFS – Elastic File System](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=112)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.113：Amazon EFS – Elastic File System](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=113)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
