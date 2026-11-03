---
id: saa-serverless-edgefunctions-114
title: 在边缘修改请求与响应（CloudFront Functions and Lambda at Edge）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=461
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=462
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=463
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=464
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=465
dependencies:
- saa-edge-cloudfront-081
- saa-serverless-lambda-111
---

# saa-serverless-edgefunctions-114: 在边缘修改请求与响应（CloudFront Functions and Lambda at Edge）

## Learning Objective

在“轻量 URL 规范化放在用户请求阶段”的场景中，能说明在边缘修改请求与响应的判断依据，并指出适用限制。

## Scope

- Included: 在边缘修改请求与响应的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-edge-cloudfront-081、saa-serverless-lambda-111。

## Knowledge Point

边缘执行机制在分发链路的不同阶段处理请求或响应，能力与资源限制不同。

## Logical Path

1. 需求：轻量 URL 规范化放在用户请求阶段。
2. 应先确认需要处理用户请求还是回源阶段，再选择执行方式。
3. 结果：执行位置应与需要修改的信息匹配。

## Key Terms

- CloudFront Functions and Lambda at Edge：边缘执行机制在分发链路的不同阶段处理请求或响应，能力与资源限制不同。

## Example

示意例：轻量 URL 规范化放在用户请求阶段，说明执行位置应与需要修改的信息匹配。

## Sources

- [课件 p.461：Customization At The Edge](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=461)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.462：CloudFront Functions & Lambda@Edge Use Cases](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=462)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.463：CloudFront Functions](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=463)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.464：Lambda@Edge](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=464)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.465：CloudFront Functions vs. Lambda@EdgeCloudFront FunctionsLambda@EdgeRuntime SupportJavaScriptNode.js, Python# of RequestsMilli](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=465)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
