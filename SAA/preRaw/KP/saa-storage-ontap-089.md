---
id: saa-storage-ontap-089
title: 保留多协议存储语义（FSx for NetApp ONTAP）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=363
dependencies: []
---

# saa-storage-ontap-089: 保留多协议存储语义（FSx for NetApp ONTAP）

## Learning Objective

在“同一存储平台需要兼容 NFS 与 SMB 客户端时评估 ONTAP”的场景中，能说明保留多协议存储语义的判断依据，并指出适用限制。

## Scope

- Included: 保留多协议存储语义的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

托管 ONTAP 提供多种文件和块访问协议以及快照、克隆等能力。

## Logical Path

1. 需求：同一存储平台需要兼容 NFS 与 SMB 客户端时评估 ONTAP。
2. 已有 NAS 工作负载可按协议、数据管理需求和迁移成本评估适用性。
3. 结果：服务选择可由协议兼容性驱动。

## Key Terms

- FSx for NetApp ONTAP：托管 ONTAP 提供多种文件和块访问协议以及快照、克隆等能力。

## Example

示意例：同一存储平台需要兼容 NFS 与 SMB 客户端时评估 ONTAP，说明服务选择可由协议兼容性驱动。

## Sources

- [课件 p.363：Amazon FSx for NetApp ONTAP](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=363)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
