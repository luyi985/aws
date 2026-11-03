---
id: saa-dns-failover-055
title: 基于健康状态的主备解析（DNS health check and failover）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=210
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=211
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=213
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=214
dependencies:
- saa-dns-ttl-052
---

# saa-dns-failover-055: 基于健康状态的主备解析（DNS health check and failover）

## Learning Objective

在“主站点检查失败后解析返回备用地址”的场景中，能说明基于健康状态的主备解析的判断依据，并指出适用限制。

## Scope

- Included: 基于健康状态的主备解析的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-dns-ttl-052。

## Knowledge Point

健康检查与故障转移记录共同决定是否返回备用目标。

## Logical Path

1. 需求：主站点检查失败后解析返回备用地址。
2. 私有资源可能需要通过指标告警间接表达健康状态；切换速度还受缓存影响。
3. 结果：检测与客户端切换是两个阶段。

## Key Terms

- DNS health check and failover：健康检查与故障转移记录共同决定是否返回备用目标。

## Example

示意例：主站点检查失败后解析返回备用地址，部分客户端仍暂时使用旧缓存，说明检测与客户端切换是两个阶段。

## Sources

- [课件 p.210：Route 53 – Health Checks](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=210)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.211：eu-west-1 Health Checker(us-east-1) Health Checks – Monitor an Endpoint](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=211)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.213：Private subnet Health Checks – Private Hosted Zones](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=213)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.214：Routing Policies – Failover (Active-Passive)EC2 Instance(Primary)Health Check(mandatory)Failover Client AmazonRoute 53 EC2 In](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=214)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
