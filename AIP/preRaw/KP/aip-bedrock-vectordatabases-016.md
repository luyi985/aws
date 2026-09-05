---
id: aip-bedrock-vectordatabases-016
title: RAG 向量数据库选型
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — II. Amazon Bedrock Implementation > Retrieval Augmented Generation (RAG) > Vector Databases (OpenSearch Serverless, Aurora, Pinecone, Redis)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 32-34, ‘Choosing a Database for RAG’ and ‘Embeddings are vectors’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 2, ‘Knowledge Bases / Vector DB’s’"
dependencies:
  - aip-foundations-vectortypes-009
---

# aip-bedrock-vectordatabases-016: RAG 向量数据库选型

## Learning Objective

能够用检索、运维和集成约束比较导图列出的向量数据库选项。

## Scope

- Included: OpenSearch Serverless、Aurora、Pinecone、Redis 作为向量存储候选及比较维度。
- Excluded: 实时产品支持、价格、容量上限和部署步骤。

## Source Context

导图在 RAG 分支列出四类 Vector Databases 候选。

## Knowledge Point

向量数据库（vector database）存储嵌入并执行相似度检索。选型不仅看向量搜索，还要评估过滤、扩展、可用性、网络、访问控制、已有技术栈与运维责任。

## PDF Grounding

详细课件指出 RAG 可复用现有数据库，也可选择专门向量数据库，并说明 Bedrock Knowledge Bases 常与向量存储组合。Study Guide 给出 OpenSearch、Aurora、MemoryDB/ElastiCache with Valkey、MongoDB Atlas、Pinecone 与 Redis Enterprise Cloud 等候选，强化“按现有数据与运行约束选型”。

## Logical Path

1. RAG 摄取阶段产生向量及元数据。
2. 查询阶段需要低延迟的相似度检索和过滤。
3. 不同存储在托管程度、查询能力和集成方式上不同。
4. 产品能力随时间变化，最终选型需用官方资料和负载测试确认。

## Key Terms

- 向量数据库（`vector database`）：针对向量存储与相似度检索优化的系统。
- 元数据过滤（`metadata filtering`）：在向量相似度之外按属性限制候选。

## Example

示意示例：多租户知识库不仅要找相似内容，还必须按 tenant ID 过滤；这展示了选型时不能只比较向量距离性能。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“II. Amazon Bedrock Implementation > Retrieval Augmented Generation (RAG) > Vector Databases (OpenSearch Serverless, Aurora, Pinecone, Redis)”支持候选范围。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 32–34 页支持 RAG 数据库选择、嵌入与向量存储的关系。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 2 页“Knowledge Bases / Vector DB’s”支持多种向量存储候选及 Knowledge Bases 依赖。
