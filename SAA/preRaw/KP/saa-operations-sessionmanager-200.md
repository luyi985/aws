---
id: saa-operations-sessionmanager-200
title: 通过代理建立管理会话（SSM Session Manager）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=828
dependencies:
- saa-iam-serviceroles-007
---

# saa-operations-sessionmanager-200: 通过代理建立管理会话（SSM Session Manager）

## Learning Objective

在“无公网入站端口的实例通过会话管理器接受管理操作”的场景中，能说明通过代理建立管理会话的判断依据，并指出适用限制。

## Scope

- Included: 通过代理建立管理会话的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-iam-serviceroles-007。

建议阅读（不阻塞学习）：[saa-network-endpoints-184](saa-network-endpoints-184.md)。

## Knowledge Point

会话管理器通过受管节点代理与服务通道建立管理访问，减少对入站 SSH 和长期主机密钥的依赖。

## Logical Path

1. 需求：无公网入站端口的实例通过会话管理器接受管理操作。
2. 节点权限、代理与网络可达性仍是前提。
3. 结果：管理连接可以由服务通道建立。

## Key Terms

- SSM Session Manager：会话管理器通过受管节点代理与服务通道建立管理访问，减少对入站 SSH 和长期主机密钥的依赖。

## Example

示意例：无公网入站端口的实例通过会话管理器接受管理操作，说明管理连接可以由服务通道建立。

## Sources

- [课件 p.828：Systems Manager – SSM Session Manager](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=828)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
