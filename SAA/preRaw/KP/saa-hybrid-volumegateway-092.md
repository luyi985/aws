---
id: saa-hybrid-volumegateway-092
title: 本地块设备的缓存与备份（Volume Gateway）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=369
dependencies: []
---

# saa-hybrid-volumegateway-092: 本地块设备的缓存与备份（Volume Gateway）

## Learning Objective

在“主要数据留在本地且定期生成云端快照”的场景中，能说明本地块设备的缓存与备份的判断依据，并指出适用限制。

## Scope

- Included: 本地块设备的缓存与备份的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

卷网关向本地应用提供 iSCSI 块设备。

## Logical Path

1. 需求：主要数据留在本地且定期生成云端快照。
2. 缓存卷与存储卷在主要数据放置位置上不同，并可使用快照支持恢复。
3. 结果：混合块存储可以把本地性能与云端备份结合。

## Key Terms

- Volume Gateway：卷网关向本地应用提供 iSCSI 块设备。

## Example

示意例：主要数据留在本地且定期生成云端快照，说明混合块存储可以把本地性能与云端备份结合。

## Sources

- [课件 p.369：Volume Gateway](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=369)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
