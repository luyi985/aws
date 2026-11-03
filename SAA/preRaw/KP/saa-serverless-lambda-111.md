---
id: saa-serverless-lambda-111
title: 事件驱动函数的执行模型（AWS Lambda）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=447
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=448
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=450
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=451
dependencies: []
---

# saa-serverless-lambda-111: 事件驱动函数的执行模型（AWS Lambda）

## Learning Objective

在“图片上传触发函数生成缩略图”的场景中，能说明事件驱动函数的执行模型的判断依据，并指出适用限制。

## Scope

- Included: 事件驱动函数的执行模型的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

函数按事件调用执行，由平台管理执行环境与伸缩。

## Logical Path

1. 需求：图片上传触发函数生成缩略图。
2. 函数适合有边界的执行任务，仍需设计输入、输出、权限和重复调用时的行为。
3. 结果：事件把存储变化连接到按需计算。

## Key Terms

- AWS Lambda：函数按事件调用执行，由平台管理执行环境与伸缩。

## Example

示意例：图片上传触发函数生成缩略图，说明事件把存储变化连接到按需计算。

## Sources

- [课件 p.447：Why AWS Lambda](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=447)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.448：Benefits of AWS Lambda](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=448)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.450：AWS Lambda IntegrationsMain ones CloudWatch LogsSNS CognitoSQS S3KinesisAPI GatewayDynamoDB CloudFront CloudWatch EventsEvent](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=450)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.451：Example: Serverless Thumbnail creation New image in S3AWS Lambda FunctionCreates a Thumbnail trigger pushNew thumbnail in S3 ](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=451)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
