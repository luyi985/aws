---
id: saa-rds-multiaz-041
title: 备用实例与自动故障转移（Multi-AZ DB instance）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=167
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=168
dependencies:
- saa-rds-manageddb-039
- saa-foundations-availabilityzones-002
---

# saa-rds-multiaz-041: 备用实例与自动故障转移（Multi-AZ DB instance）

## Learning Objective

在“主实例故障后客户端重新连接同一端点”的场景中，能说明备用实例与自动故障转移的判断依据，并指出适用限制。

## Scope

- Included: 备用实例与自动故障转移的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-rds-manageddb-039、saa-foundations-availabilityzones-002。

## Knowledge Point

课程中的传统 Multi-AZ 实例部署通过同步备用实例提高可用性，故障时切换并维持统一连接端点。

## Logical Path

1. 需求：主实例故障后客户端重新连接同一端点。
2. 这里的备用实例不用于分担读取；其他部署形态需单独判断。
3. 结果：高可用备用的目标是恢复服务而非报表扩展。

## Key Terms

- Multi-AZ DB instance：课程中的传统 Multi-AZ 实例部署通过同步备用实例提高可用性，故障时切换并维持统一连接端点。

## Example

示意例：主实例故障后客户端重新连接同一端点，说明高可用备用的目标是恢复服务而非报表扩展。

## Sources

- [课件 p.167：RDS Multi AZ (Disaster Recovery) RDS Master DB instance (AZ A) Application writesreads SYNCreplication](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=167)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.168：RDS – From Single-AZ to Multi-AZ](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=168)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
