---
id: saa-elb-nlb-031
title: 传输层入口与固定地址（Network Load Balancer）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=137
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=138
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=139
dependencies:
- saa-elb-healthchecks-029
---

# saa-elb-nlb-031: 传输层入口与固定地址（Network Load Balancer）

## Learning Objective

在“客户端需要把 UDP 服务地址加入允许列表时评估 NLB”的场景中，能说明传输层入口与固定地址的判断依据，并指出适用限制。

## Scope

- Included: 传输层入口与固定地址的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-elb-healthchecks-029。

## Knowledge Point

网络负载均衡器处理传输层流量，适合 TCP 或 UDP 服务以及固定入口地址等需求。

## Logical Path

1. 需求：客户端需要把 UDP 服务地址加入允许列表时评估 NLB。
2. 选择依据是协议和入口约束，而不只是应用实例数量。
3. 结果：非 HTTP 协议与固定地址会影响入口选择。

## Key Terms

- Network Load Balancer：网络负载均衡器处理传输层流量，适合 TCP 或 UDP 服务以及固定入口地址等需求。

## Example

示意例：客户端需要把 UDP 服务地址加入允许列表时评估 NLB，说明非 HTTP 协议与固定地址会影响入口选择。

## Sources

- [课件 p.137：Network Load Balancer (v2)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=137)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.138：Network Load Balancer (v2)TCP (Layer 4) Based Traffic Target Group for Users applicationExternal Network Load Balancer (v2) T](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=138)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.139：Network Load Balancer – Tar get Groups](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=139)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
