---
id: saa-s3-cors-075
title: 浏览器跨源访问（Cross-Origin Resource Sharing）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=323
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=324
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=325
- preRaw/code_v2025-10-27/s3/CORS_CONFIG.json#L6
dependencies:
- saa-s3-objects-060
---

# saa-s3-cors-075: 浏览器跨源访问（Cross-Origin Resource Sharing）

## Learning Objective

在“网页域名与图片桶域名不同”的场景中，能说明浏览器跨源访问的判断依据，并指出适用限制。

## Scope

- Included: 浏览器跨源访问的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-s3-objects-060。

## Knowledge Point

跨源资源共享决定浏览器是否允许网页读取其他来源的响应。

## Logical Path

1. 需求：网页域名与图片桶域名不同。
2. 允许来源、方法和头部需要匹配请求，但 CORS 不授予读取对象的 AWS 权限。
3. 结果：浏览器限制与资源授权分别生效。

## Key Terms

- Cross-Origin Resource Sharing：跨源资源共享决定浏览器是否允许网页读取其他来源的响应。

## Example

示意例：网页域名与图片桶域名不同，需要桶返回合适的跨源头，同时对象仍需可授权读取，说明浏览器限制与资源授权分别生效。

## Sources

- [课件 p.323：What is CORS?](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=323)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.324：What is CORS? Web Server(Origin)https://www.example.com Web Server(Cross-Origin)https://www.other.com Web BrowserHTTPS Reques](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=324)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.325：Amazon S3 – CORS](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=325)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [配套代码 CORS_CONFIG.json，L6](../code_v2025-10-27/s3/CORS_CONFIG.json#L6)。示例实现参考，未运行；读取的本地提交为 22ce5d14c5da846c47c3fd9bc1a09c685e09e586。
