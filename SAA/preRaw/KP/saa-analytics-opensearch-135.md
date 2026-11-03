---
id: saa-analytics-opensearch-135
title: 搜索索引与主数据存储（Amazon OpenSearch Service）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=542
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=543
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=544
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=545
dependencies: []
---

# saa-analytics-opensearch-135: 搜索索引与主数据存储（Amazon OpenSearch Service）

## Learning Objective

在“商品数据保存在业务库”的场景中，能说明搜索索引与主数据存储的判断依据，并指出适用限制。

## Scope

- Included: 搜索索引与主数据存储的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

搜索服务为全文和复杂检索建立索引，可作为业务数据库的补充。

## Logical Path

1. 需求：商品数据保存在业务库。
2. 数据从主系统同步到索引时，需要处理延迟与失败。
3. 结果：搜索副本承担不同查询职责。

## Key Terms

- Amazon OpenSearch Service：搜索服务为全文和复杂检索建立索引，可作为业务数据库的补充。

## Example

示意例：商品数据保存在业务库，搜索索引支持按文本模糊匹配，说明搜索副本承担不同查询职责。

## Sources

- [课件 p.542：Amazon OpenSearch Service](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=542)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.543：OpenSearch patternsDynamoDB DynamoDB TableDynamoDB Stream Lambda Function Amazon OpenSearch API to retrieve items API to sear](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=543)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.544：OpenSearch patternsCloudWatch LogsCloudWatch LogsSubscription FilterLambda Function(managed by AWS) Amazon OpenSearch CloudWa](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=544)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.545：OpenSearch patternsKinesis Data Streams & Kinesis Data Firehose Kinesis DataStreams Kinesis DataFirehose(near real time) Amaz](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=545)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
