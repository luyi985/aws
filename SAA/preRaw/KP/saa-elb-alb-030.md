---
id: saa-elb-alb-030
title: 应用层请求路由（Application Load Balancer）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=131
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=132
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=134
dependencies:
- saa-elb-healthchecks-029
---

# saa-elb-alb-030: 应用层请求路由（Application Load Balancer）

## Learning Objective

在“/users 请求进入用户服务目标组”的场景中，能说明应用层请求路由的判断依据，并指出适用限制。

## Scope

- Included: 应用层请求路由的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-elb-healthchecks-029。

## Knowledge Point

应用负载均衡器理解 HTTP 请求，可以按路径或主机名把流量分配到不同目标组。

## Logical Path

1. 需求：/users 请求进入用户服务目标组。
2. 路由规则把统一入口与后端应用划分连接起来。
3. 结果：一个入口可以承载多个应用。

## Key Terms

- Application Load Balancer：应用负载均衡器理解 HTTP 请求，可以按路径或主机名把流量分配到不同目标组。

## Example

示意例：/users 请求进入用户服务目标组，/orders 请求进入订单目标组，说明一个入口可以承载多个应用。

## Sources

- [课件 p.131：Application Load Balancer (v2)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=131)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.132：Application Load Balancer (v2)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=132)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.134：Application Load Balancer (v2)Tar get Groups](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=134)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
