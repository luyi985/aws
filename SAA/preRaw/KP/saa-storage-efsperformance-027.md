---
id: saa-storage-efsperformance-027
title: 共享文件系统的吞吐与分层（EFS throughput and lifecycle）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=114
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=115
dependencies:
- saa-storage-efs-026
---

# saa-storage-efsperformance-027: 共享文件系统的吞吐与分层（EFS throughput and lifecycle）

## Learning Objective

在“文件访问频率下降后转入低频层”的场景中，能说明共享文件系统的吞吐与分层的判断依据，并指出适用限制。

## Scope

- Included: 共享文件系统的吞吐与分层的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-storage-efs-026。

## Knowledge Point

EFS 的吞吐配置与存储类别解决不同问题：前者匹配访问速率，后者根据访问频率控制存储成本。

## Logical Path

1. 需求：文件访问频率下降后转入低频层。
2. 可用性需求还影响是否采用单可用区存储。
3. 结果：存储分层与性能配置可以独立决策。

## Key Terms

- EFS throughput and lifecycle：EFS 的吞吐配置与存储类别解决不同问题：前者匹配访问速率，后者根据访问频率控制存储成本。

## Example

示意例：文件访问频率下降后转入低频层，同时按活跃请求调整吞吐，说明存储分层与性能配置可以独立决策。

## Sources

- [课件 p.114：EFS – Performance & Storage Classes](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=114)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.115：EFS – Storage Classes](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=115)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
