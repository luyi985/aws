---
id: aip-bedrock-knowledgebases-014
title: Bedrock Knowledge Bases 自动化 RAG
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — II. Amazon Bedrock Implementation > Retrieval Augmented Generation (RAG) > Bedrock Knowledge Bases (Automated RAG)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 36-38, ‘RAG in Bedrock: Knowledge Bases’ and ‘Using Knowledge Bases’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 2, ‘Knowledge Bases / Vector DB’s’"
dependencies:
  - aip-foundations-semanticsearch-007
  - aip-foundations-vectortypes-009
---

# aip-bedrock-knowledgebases-014: Bedrock Knowledge Bases 自动化 RAG

## Learning Objective

能够描述 Bedrock Knowledge Bases 自动化 RAG 的摄取、检索与生成链路。

## Scope

- Included: 知识库、文档摄取、检索、上下文增强和生成。
- Excluded: 控制台配置、支持数据源清单和生产级权限设计。

## Source Context

导图把 Bedrock Knowledge Bases 标注为 Automated RAG。

## Knowledge Point

检索增强生成（retrieval-augmented generation, RAG）先从受控知识源检索相关内容，再把内容作为上下文交给模型生成答案。Bedrock Knowledge Bases 管理这条链路中的多项摄取与检索工作。

## PDF Grounding

详细课件说明 Knowledge Bases 可从 S3 文档或结构化数据建立嵌入并连接向量存储，提供自动 RAG 的 retrieve-and-generate 路径。Study Guide 扩展数据源到 web crawler、Confluence、Salesforce 与 SharePoint，并强调还需选择 embedding model 和 vector store。

## Logical Path

1. 文档被解析、切分、嵌入并写入检索存储。
2. 用户查询被转换为可检索表示。
3. 相关片段进入模型上下文后生成答案。
4. 自动化减少集成工作，但不会消除数据质量与权限责任。

## Key Terms

- 检索增强生成（`retrieval-augmented generation`）：用检索内容约束生成的模式。
- 知识库（`knowledge base`）：组织并检索受控资料的系统。

## Example

示意示例：员工询问报销上限，系统先检索最新政策段落再回答；这展示了外部知识如何进入生成上下文。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“II. Amazon Bedrock Implementation > Retrieval Augmented Generation (RAG) > Bedrock Knowledge Bases (Automated RAG)”支持自动化 RAG 主题。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 36–38 页支持 S3 摄取、嵌入、向量存储与自动 RAG 链路。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 2 页“Knowledge Bases / Vector DB’s”支持更多数据源及 embedding model、vector store 依赖。
