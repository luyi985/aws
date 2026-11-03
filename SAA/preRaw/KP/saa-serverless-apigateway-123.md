---
id: saa-serverless-apigateway-123
title: 托管 API 入口与集成（Amazon API Gateway）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=484
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=485
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=486
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=487
dependencies: []
---

# saa-serverless-apigateway-123: 托管 API 入口与集成（Amazon API Gateway）

## Learning Objective

在“客户端请求经网关调用函数后访问数据库”的场景中，能说明托管 API 入口与集成的判断依据，并指出适用限制。

## Scope

- Included: 托管 API 入口与集成的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-serverless-lambda-111](saa-serverless-lambda-111.md)。

## Knowledge Point

API 网关处理外部请求并将其连接到函数、HTTP 后端或受支持服务，同时提供鉴权和流量管理能力。

## Logical Path

1. 需求：客户端请求经网关调用函数后访问数据库。
2. 不同 API 产品和集成方式的能力需分别检查。
3. 结果：API 入口把外部协议与后端执行分开。

## Key Terms

- Amazon API Gateway：API 网关处理外部请求并将其连接到函数、HTTP 后端或受支持服务，同时提供鉴权和流量管理能力。

## Example

示意例：客户端请求经网关调用函数后访问数据库，说明 API 入口把外部协议与后端执行分开。

## Sources

- [课件 p.484：Example: Building a Serverless API REST APIPROXY REQUESTSCRUD API GatewayClient Lambda DynamoDB](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=484)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.485：AWS API Gateway](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=485)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.486：API Gateway – Integrations High Level](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=486)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.487：API Gateway – AWS Service IntegrationKinesis Data Streams example API GatewayKinesis DataStreamsKinesis DataFirehoseAmazon S3](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=487)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
