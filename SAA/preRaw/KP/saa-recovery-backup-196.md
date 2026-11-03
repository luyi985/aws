---
id: saa-recovery-backup-196
title: 集中备份计划与不可变保留（AWS Backup）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=790
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=791
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=792
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=793
dependencies: []
---

# saa-recovery-backup-196: 集中备份计划与不可变保留（AWS Backup）

## Learning Objective

从备份计划追踪到恢复点，并区分保留保护与实际恢复能力。

## Scope

- Included: 集中备份计划与不可变保留的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-recovery-strategies-194](saa-recovery-strategies-194.md)。

## Knowledge Point

AWS Backup 按计划、标签或资源选择创建恢复点，集中管理保留与副本。保险库锁（Vault Lock）用于加强保留保护；它与备份任务成功、数据可恢复是不同控制。

## Logical Path

1. 定义资源范围、频率、保留和副本位置。
2. 检查备份成功及访问权限；不可变保留保护不自动验证应用可恢复。
3. 定期恢复到隔离环境并验证数据与连接切换，以恢复结果而非计划存在性验收。

## Key Terms

- Backup plan：定义备份调度及保留等规则的计划。
- Recovery point：可用于恢复的备份数据及其元信息。

## Example

示意例：按标签把生产资源纳入备份计划并定期恢复演练，说明统一策略与恢复验证需要共同落实。

## Sources

- [课件 p.790：AWS Backup](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=790)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.791：AWS Backup](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=791)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.792：AWS Backup AWS Backup Create Backup Plan(frequency, retention policy) Assign AWS Resources EC2EBS DynamoDBRDS EFS Aurora FSxS](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=792)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.793：AWS Backup Vault Lock](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=793)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
