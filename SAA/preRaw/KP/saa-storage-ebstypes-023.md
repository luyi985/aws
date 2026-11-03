---
id: saa-storage-ebstypes-023
title: 按 IOPS 与吞吐选择卷（EBS volume type）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=104
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=105
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=106
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=107
dependencies:
- saa-storage-ebs-019
---

# saa-storage-ebstypes-023: 按 IOPS 与吞吐选择卷（EBS volume type）

## Learning Objective

在“随机事务数据库关注 IOPS”的场景中，能说明按 IOPS 与吞吐选择卷的判断依据，并指出适用限制。

## Scope

- Included: 按 IOPS 与吞吐选择卷的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-storage-ebs-019。

## Knowledge Point

随机小块访问通常关注每秒输入输出操作数，顺序大块访问更关注吞吐。

## Logical Path

1. 需求：随机事务数据库关注 IOPS。
2. 通用固态盘、预配置性能固态盘和硬盘卷针对不同负载，选型应同时检查容量与性能。
3. 结果：同样的数据量不代表相同的磁盘需求。

## Key Terms

- EBS volume type：随机小块访问通常关注每秒输入输出操作数，顺序大块访问更关注吞吐。

## Example

示意例：随机事务数据库关注 IOPS，顺序日志处理关注吞吐，说明同样的数据量不代表相同的磁盘需求。

## Sources

- [课件 p.104：EBS Volume Types](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=104)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.105：EBS Volume Types Use casesGeneral Purpose SSD](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=105)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.106：EBS Volume Types Use casesProvisioned IOPS (PIOPS) SSD](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=106)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.107：EBS Volume Types Use casesHard Disk Drives (HDD)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=107)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
