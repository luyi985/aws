---
id: saa-architecture-hpc-198
title: 计算与网络协同选型（High Performance Computing）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=811
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=813
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=814
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=815
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=816
dependencies:
- saa-ec2-placement-016
- saa-storage-lustre-088
- saa-ec2-spot-013
---

# saa-architecture-hpc-198: 计算与网络协同选型（High Performance Computing）

## Learning Objective

在“紧密耦合计算同时关注集群放置与低延迟通信”的场景中，能说明计算与网络协同选型的判断依据，并指出适用限制。

## Scope

- Included: 计算与网络协同选型的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-ec2-placement-016、saa-storage-lustre-088、saa-ec2-spot-013。

## Knowledge Point

高性能计算同时受到处理器、节点通信和存储访问影响。

## Logical Path

1. 需求：紧密耦合计算同时关注集群放置与低延迟通信。
2. 适用的放置策略、网络适配器与并行文件系统需要按应用瓶颈组合。
3. 结果：只增加处理器数量可能无法提高整体性能。

## Key Terms

- High Performance Computing：高性能计算同时受到处理器、节点通信和存储访问影响。

## Example

示意例：紧密耦合计算同时关注集群放置与低延迟通信，说明只增加处理器数量可能无法提高整体性能。

## Sources

- [课件 p.811：High Performance Computing (HPC)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=811)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.813：Compute and Networking](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=813)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.814：Compute and Networking](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=814)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.815：Storage](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=815)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.816：Automation and Orchestration](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=816)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
