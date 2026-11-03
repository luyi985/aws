---
id: saa-architecture-cachinglayers-127
title: 按瓶颈选择缓存位置（Multi-layer caching）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=501
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=502
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=805
dependencies:
- saa-edge-cloudfront-081
- saa-cache-patterns-049
- saa-dynamodb-dax-118
- saa-serverless-apigateway-123
---

# saa-architecture-cachinglayers-127: 按瓶颈选择缓存位置（Multi-layer caching）

## Learning Objective

在“静态图片在边缘缓存”的场景中，能说明按瓶颈选择缓存位置的判断依据，并指出适用限制。

## Scope

- Included: 按瓶颈选择缓存位置的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-edge-cloudfront-081、saa-cache-patterns-049、saa-dynamodb-dax-118、saa-serverless-apigateway-123。

## Knowledge Point

边缘、API 与数据层缓存减少不同位置的重复工作。

## Logical Path

1. 需求：静态图片在边缘缓存。
2. 选择先判断可复用的数据、允许陈旧时间和需要避免的成本，再定义缓存键与失效方式。
3. 结果：同一应用可以按不同瓶颈设置缓存。

## Key Terms

- Multi-layer caching：边缘、API 与数据层缓存减少不同位置的重复工作。

## Example

示意例：静态图片在边缘缓存，数据库热点读取在数据层缓存，说明同一应用可以按不同瓶颈设置缓存。

## Sources

- [课件 p.501：Mobile app: high read throughput, static data Amazon API Gateway Amazon Cognito AWS Lambda DynamoDB Amazon S3 Mobile client S](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=501)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.502：Mobile app: caching at the API Gateway Amazon API Gateway Amazon Cognito AWS Lambda DynamoDB Amazon S3 Mobile client Store/re](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=502)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.805：Caching Strategies API Gateway CloudFront (edge) Redis Memcached DAX S3 CloudFront Caching, TTL, Network, Computation, Cost, ](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=805)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
