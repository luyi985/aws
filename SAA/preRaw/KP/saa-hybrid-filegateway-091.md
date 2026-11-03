---
id: saa-hybrid-filegateway-091
title: 本地文件协议连接对象存储（S3 File Gateway）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=367
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=368
dependencies: []
---

# saa-hybrid-filegateway-091: 本地文件协议连接对象存储（S3 File Gateway）

## Learning Objective

在“办公室应用继续写共享目录”的场景中，能说明本地文件协议连接对象存储的判断依据，并指出适用限制。

## Scope

- Included: 本地文件协议连接对象存储的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

文件网关让本地应用通过 NFS 或 SMB 使用以 S3 为后端的数据，并以本地缓存加速近期访问。

## Logical Path

1. 需求：办公室应用继续写共享目录。
2. 文件访问接口与对象后端之间存在转换边界。
3. 结果：混合存储可以保留应用使用的文件协议。

## Key Terms

- S3 File Gateway：文件网关让本地应用通过 NFS 或 SMB 使用以 S3 为后端的数据，并以本地缓存加速近期访问。

## Example

示意例：办公室应用继续写共享目录，由网关把文件保存到 S3，说明混合存储可以保留应用使用的文件协议。

## Sources

- [课件 p.367：AWS Storage Gateway](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=367)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.368：Amazon S3 File Gateway](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=368)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
