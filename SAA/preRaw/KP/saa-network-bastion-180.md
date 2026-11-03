---
id: saa-network-bastion-180
title: 通过跳板访问私有实例（Bastion host）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=711
dependencies:
- saa-network-internet-179
- saa-ec2-securitygroups-011
---

# saa-network-bastion-180: 通过跳板访问私有实例（Bastion host）

## Learning Objective

在“管理员仅从公司地址连接跳板”的场景中，能说明通过跳板访问私有实例的判断依据，并指出适用限制。

## Scope

- Included: 通过跳板访问私有实例的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-network-internet-179、saa-ec2-securitygroups-011。

## Knowledge Point

跳板机在可访问的入口网络接收管理连接，再连接私有实例。

## Logical Path

1. 需求：管理员仅从公司地址连接跳板。
2. 管理来源与内部访问范围需要分别限制，跳板机本身也要维护。
3. 结果：管理链路通过受控中转点建立。

## Key Terms

- Bastion host：跳板机在可访问的入口网络接收管理连接，再连接私有实例。

## Example

示意例：管理员仅从公司地址连接跳板，再访问私有服务器，说明管理链路通过受控中转点建立。

## Sources

- [课件 p.711：Bastion Hosts](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=711)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
