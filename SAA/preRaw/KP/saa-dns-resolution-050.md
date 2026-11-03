---
id: saa-dns-resolution-050
title: 域名解析的查询链路（Domain Name System）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=194
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=195
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=196
dependencies: []
---

# saa-dns-resolution-050: 域名解析的查询链路（Domain Name System）

## Learning Objective

在“浏览器先得到 example.com 的地址再发送 HTTP 请求”的场景中，能说明域名解析的查询链路的判断依据，并指出适用限制。

## Scope

- Included: 域名解析的查询链路的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

域名系统把主机名解析为地址等记录，递归解析器沿层级查找权威答案并缓存。

## Logical Path

1. 需求：浏览器先得到 example.com 的地址再发送 HTTP 请求。
2. 域名注册、权威解析和应用接收请求是不同职责。
3. 结果：域名解析先于应用访问。

## Key Terms

- Domain Name System：域名系统把主机名解析为地址等记录，递归解析器沿层级查找权威答案并缓存。

## Example

示意例：浏览器先得到 example.com 的地址再发送 HTTP 请求，说明域名解析先于应用访问。

## Sources

- [课件 p.194：What is DNS?](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=194)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.195：DNS Terminologies http://api.www.example.com.](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=195)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.196：How DNS Works Web BrowserLocal DNS ServerYou want to access example.comAssigned and Managed by your company or assigned by yo](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=196)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
