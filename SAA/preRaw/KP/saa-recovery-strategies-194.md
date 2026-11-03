---
id: saa-recovery-strategies-194
title: 按恢复目标选择灾备策略（Disaster recovery strategy）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=775
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=776
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=777
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=778
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=779
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=780
dependencies:
- saa-recovery-rporto-193
---

# saa-recovery-strategies-194: 按恢复目标选择灾备策略（Disaster recovery strategy）

## Learning Objective

在“保留数据库但应用临时启动属于较小常驻范围”的场景中，能说明按恢复目标选择灾备策略的判断依据，并指出适用限制。

## Scope

- Included: 按恢复目标选择灾备策略的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-recovery-rporto-193。

## Knowledge Point

备份恢复、最小核心常驻、缩小规模待机与多站点运行保留的预运行能力不同。

## Logical Path

1. 需求：保留数据库但应用临时启动属于较小常驻范围。
2. 更快恢复通常需要更多常驻资源，切换前还需验证数据和流量路径。
3. 结果：策略区别在灾前保留多少可用能力。

## Key Terms

- Pilot light：平时只保留恢复所需关键核心运行的灾备模式。
- Warm standby：平时保持缩小规模完整系统运行的灾备模式。

## Example

示意例：保留数据库但应用临时启动属于较小常驻范围，完整缩小环境则可更快扩容，说明策略区别在灾前保留多少可用能力。

## Sources

- [课件 p.775：Disaster Recovery Strategies](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=775)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.776：Backup and Restore (High RPO)Corporate data center AWS Cloud AWS Cloud AWS Storage Gateway Glacier Amazon S3 AWS Snowball EBS](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=776)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.777：Disaster Recovery – Pilot Light](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=777)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.778：Warm Standby](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=778)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.779：Multi Site / Hot Site Approach](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=779)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.780：All AWS Multi RegionAWS Cloud Data Replication Route 53 ELB EC2 Auto Scaling(production) failover activeactiveAWS Cloud EC2 A](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=780)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
