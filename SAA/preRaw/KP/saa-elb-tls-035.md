---
id: saa-elb-tls-035
title: HTTPS 证书与域名选择（TLS termination and SNI）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=146
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=147
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=148
dependencies:
- saa-elb-alb-030
---

# saa-elb-tls-035: HTTPS 证书与域名选择（TLS termination and SNI）

## Learning Objective

在“同一负载均衡入口承载两个域名”的场景中，能说明HTTPS 证书与域名选择的判断依据，并指出适用限制。

## Scope

- Included: HTTPS 证书与域名选择的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-elb-alb-030。

## Knowledge Point

HTTPS 监听器使用证书建立加密连接。

## Logical Path

1. 需求：同一负载均衡入口承载两个域名。
2. 服务器名称指示允许客户端在握手中提供目标主机名，从而让同一入口选择匹配的证书。
3. 结果：域名信息参与握手阶段的证书选择。

## Key Terms

- TLS termination and SNI：HTTPS 监听器使用证书建立加密连接。

## Example

示意例：同一负载均衡入口承载两个域名，根据客户端提供的名称选择证书，说明域名信息参与握手阶段的证书选择。

## Sources

- [课件 p.146：SSL/TLS - Basics](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=146)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.147：Load Balancer - SSL Certificates](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=147)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.148：SSL – Server Name Indication (SNI)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=148)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
