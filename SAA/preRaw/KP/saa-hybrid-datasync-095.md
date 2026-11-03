---
id: saa-hybrid-datasync-095
title: 文件数据的批量同步（AWS DataSync）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=374
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=375
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=376
dependencies: []
---

# saa-hybrid-datasync-095: 文件数据的批量同步（AWS DataSync）

## Learning Objective

在“按计划把本地共享目录复制到云端文件系统并保留相关元数据”的场景中，能说明文件数据的批量同步的判断依据，并指出适用限制。

## Scope

- Included: 文件数据的批量同步的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

数据同步服务负责在受支持的位置之间复制文件或对象，并处理任务调度与元数据。

## Logical Path

1. 需求：按计划把本地共享目录复制到云端文件系统并保留相关元数据。
2. 是否需要代理取决于源目标类型，必须区分同步任务与交互式文件访问。
3. 结果：同步服务面向数据迁移与持续复制。

## Key Terms

- AWS DataSync：数据同步服务负责在受支持的位置之间复制文件或对象，并处理任务调度与元数据。

## Example

示意例：按计划把本地共享目录复制到云端文件系统并保留相关元数据，说明同步服务面向数据迁移与持续复制。

## Sources

- [课件 p.374：AWS DataSync](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=374)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.375：AWS DataSyncNFS / SMB to AWS (S3, EFS, FSx…) On-Premises NFS or SMBServerAWS DataSyncAgent NFS or SMB Region AWSDataSync AWS ](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=375)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.376：AWS DataSyncTransfer between AWS storage ser vices AWS DataSynccopy data and metadatabetween AWS Storage Services Amazon FSx ](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=376)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
