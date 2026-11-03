---
id: saa-storage-lustre-088
title: 并行文件系统与 S3 数据（FSx for Lustre）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=361
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=362
dependencies: []
---

# saa-storage-lustre-088: 并行文件系统与 S3 数据（FSx for Lustre）

## Learning Objective

在“计算任务从共享文件系统并行读取训练数据”的场景中，能说明并行文件系统与 S3 数据的判断依据，并指出适用限制。

## Scope

- Included: 并行文件系统与 S3 数据的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

并行文件系统适合高性能计算等需要高吞吐共享文件访问的任务，并可与 S3 数据集成。

## Logical Path

1. 需求：计算任务从共享文件系统并行读取训练数据。
2. 临时与持久部署在故障恢复和生命周期上不同。
3. 结果：并行文件访问与持久对象保存可以配合。

## Key Terms

- FSx for Lustre：并行文件系统适合高性能计算等需要高吞吐共享文件访问的任务，并可与 S3 数据集成。

## Example

示意例：计算任务从共享文件系统并行读取训练数据，再把结果写回对象存储，说明并行文件访问与持久对象保存可以配合。

## Sources

- [课件 p.361：Amazon FSx for Lustre](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=361)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.362：FSx Lustre - File System Deployment Options](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=362)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
