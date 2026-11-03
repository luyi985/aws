---
id: saa-storage-fsxwindows-087
title: Windows 共享文件服务（FSx for Windows File Server）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=360
dependencies: []
---

# saa-storage-fsxwindows-087: Windows 共享文件服务（FSx for Windows File Server）

## Learning Objective

在“依赖 SMB 与域身份的部门共享盘迁移到托管 Windows 文件服务”的场景中，能说明Windows 共享文件服务的判断依据，并指出适用限制。

## Scope

- Included: Windows 共享文件服务的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

该服务提供托管 SMB 文件系统，并支持 Windows 文件权限与目录服务集成。

## Logical Path

1. 需求：依赖 SMB 与域身份的部门共享盘迁移到托管 Windows 文件服务。
2. 协议、身份体系及高可用部署要求决定它是否适合现有应用。
3. 结果：保留文件协议有助于减少应用改造。

## Key Terms

- FSx for Windows File Server：该服务提供托管 SMB 文件系统，并支持 Windows 文件权限与目录服务集成。

## Example

示意例：依赖 SMB 与域身份的部门共享盘迁移到托管 Windows 文件服务，说明保留文件协议有助于减少应用改造。

## Sources

- [课件 p.360：Amazon FSx for Windows (File Server)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=360)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
