---
id: saa-rds-dbbackup-045
title: 时间点恢复与快照（Database backup and restore）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=180
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=181
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=182
dependencies:
- saa-rds-manageddb-039
---

# saa-rds-dbbackup-045: 时间点恢复与快照（Database backup and restore）

## Learning Objective

在“误删数据后恢复到删除前的时间点”的场景中，能说明时间点恢复与快照的判断依据，并指出适用限制。

## Scope

- Included: 时间点恢复与快照的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-rds-manageddb-039。

## Knowledge Point

自动备份支持保留窗口内的时间点恢复，手动快照适合主动保留某个状态。

## Logical Path

1. 需求：误删数据后恢复到删除前的时间点。
2. 恢复通常创建新的数据库资源，应用还需处理连接切换。
3. 结果：恢复不是原地撤销一条 SQL。

## Key Terms

- Database backup and restore：自动备份支持保留窗口内的时间点恢复，手动快照适合主动保留某个状态。

## Example

示意例：误删数据后恢复到删除前的时间点，并验证新库后切换应用，说明恢复不是原地撤销一条 SQL。

## Sources

- [课件 p.180：RDS Backups](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=180)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.181：Aurora Backups](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=181)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.182：RDS & Aurora Restore options](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=182)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
