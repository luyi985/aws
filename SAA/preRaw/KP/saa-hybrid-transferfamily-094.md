---
id: saa-hybrid-transferfamily-094
title: 托管文件传输端点（AWS Transfer Family）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=372
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=373
dependencies: []
---

# saa-hybrid-transferfamily-094: 托管文件传输端点（AWS Transfer Family）

## Learning Objective

在“合作方按 SFTP 协议投递文件到指定存储位置”的场景中，能说明托管文件传输端点的判断依据，并指出适用限制。

## Scope

- Included: 托管文件传输端点的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

托管传输服务通过 SFTP 等协议把文件送入受支持的 AWS 存储，连接使用方的身份认证。

## Logical Path

1. 需求：合作方按 SFTP 协议投递文件到指定存储位置。
2. 它提供持续运行的文件交换入口，不等于批量同步工具。
3. 结果：托管端点减少维护传输服务器的工作。

## Key Terms

- AWS Transfer Family：托管传输服务通过 SFTP 等协议把文件送入受支持的 AWS 存储，连接使用方的身份认证。

## Example

示意例：合作方按 SFTP 协议投递文件到指定存储位置，说明托管端点减少维护传输服务器的工作。

## Sources

- [课件 p.372：AWS Transfer Family](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=372)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.373：AWS Transfer Family AWS Transfer Family AWS Transfer for SFTP AWS Transfer for FTPS AWS Transfer for FTP(only within VPC) Ama](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=373)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
