---
id: saa-architecture-multitier-232
title: 分层网络与共享状态（Multi-tier architecture）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=260
dependencies:
- saa-ec2-securitygroups-011
- saa-scaling-asg-037
- saa-rds-manageddb-039
- saa-architecture-stateless-058
---

# saa-architecture-multitier-232: 分层网络与共享状态（Multi-tier architecture）

## Learning Objective

沿请求路径解释入口、应用和数据层的网络与状态边界。

## Scope

- Included: 分层网络与共享状态的机制、适用条件、失败或例外边界。
- Excluded: 完整部署步骤、实时价格和未引用的产品功能。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-ec2-securitygroups-011、saa-scaling-asg-037、saa-rds-manageddb-039、saa-architecture-stateless-058。

## Knowledge Point

多层架构（multi-tier architecture）让入口、业务处理和数据存储承担不同职责。跨可用区冗余、受限的数据层访问与状态外置需要共同设计，单个组件高可用不能代表整个链路高可用。

## Logical Path

1. 请求进入负载均衡层后转发给应用层，数据库仅接受授权应用来源。
2. 应用实例替换时，必要会话和业务数据由共享后端保留。
3. 逐层检查路由、权限和故障依赖，避免把同一单点放在多台前端之后。

## Key Terms

- Tier：承担一组架构职责、可单独配置和扩展的层。

## Example

示意例：两区应用实例共用多区数据库，数据库只开放应用安全组；实例替换后继续读取共享会话。例子说明分层、隔离与状态管理共同支撑可用性。

## Sources

- [课件 p.260：Web App 3-tier architecture](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=260)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
