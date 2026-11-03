---
id: saa-elb-healthchecks-029
title: 健康检查与流量摘除（Load balancer health check）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=124
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=125
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=127
- https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-health-checks.html
dependencies:
- saa-scaling-availability-028
verified_at: '2026-11-04'
---

# saa-elb-healthchecks-029: 健康检查与流量摘除（Load balancer health check）

## Learning Objective

判断健康检查阈值、目标摘除与全目标不健康时的转发行为。

## Scope

- Included: 健康检查与流量摘除的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-scaling-availability-028。

## Knowledge Point

健康检查（health check）周期性探测目标，并按成功或失败阈值更新健康状态。对 ALB，尚有健康目标时通常避开不健康目标；若所有启用可用区的已注册目标都不健康，则会 fail open，仍向这些目标转发。

## Logical Path

1. 先设定能反映应用就绪状态的检查路径与成功条件。
2. 连续检查达到阈值后才改变健康状态，单次失败不等于立即摘除。
3. 区分局部失败与全体失败：健康检查不是保证拒绝所有不健康流量的安全开关。

## Key Terms

- Unhealthy threshold：把目标判为不健康所需的连续失败次数。
- Fail open：全体目标不健康时仍按负载均衡规则尝试转发。

## Example

示意例：三个目标中一个达到失败阈值时，流量转向另外两个；若三者全部不健康，ALB 仍可能向三者转发。例子说明局部摘除与全体 fail-open 的差别。

## Sources

- [课件 p.124：What is load balancing? Elastic Load Balancer EC2 Instance EC2 Instance EC2 Instance](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=124)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.125：Why use a load balancer?](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=125)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.127：Health Checks](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=127)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：健康检查阈值与全目标不健康时的 fail-open](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-health-checks.html)。用于核验上述具体边界；查阅日期：2026-11-04。
