---
id: aip-data-glue-034
title: AWS Glue 数据管道基础
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — IV. Data Engineering for GenAI > Data Pipelines > AWS Glue (ETL, Crawlers, Data Catalog)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 102-108, ‘AWS Glue’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 3, ‘II. Managing Data for Generative AI > Data Structuring’"
dependencies: []
---

# aip-data-glue-034: AWS Glue 数据管道基础

## Learning Objective

能够说明 Glue 的 ETL、Crawlers 与 Data Catalog 如何协同准备 GenAI 数据。

## Scope

- Included: ETL、crawler、Data Catalog 及三者的数据发现和转换关系。
- Excluded: 作业代码、网络配置、数据湖完整架构和价格。

## Source Context

导图在 Data Pipelines 下为 AWS Glue 列出 ETL、Crawlers、Data Catalog。

## Knowledge Point

提取、转换、加载（extract, transform, load, ETL）负责移动和整理数据；爬网程序（crawler）发现数据结构；Data Catalog 保存数据集及 Schema 元数据。这些能力共同让下游 GenAI 流程找到并准备可信数据。

## PDF Grounding

详细课件说明 Glue crawler 扫描 S3、创建 Schema 并写入 Data Catalog，可周期运行；Glue Studio 提供可视化 ETL，Glue Data Quality 管理质量规则。Study Guide 将 Glue ETL 作为插入 divider strings、改善向量分块并保留文档结构的一条实现路径。

## Logical Path

1. 数据位于不同位置且结构不一。
2. Crawler 发现数据并更新 Catalog 元数据。
3. ETL 作业读取元数据、转换并写出目标数据。
4. 自动发现可能推断错误，Schema 和数据质量仍需治理。

## Key Terms

- 提取、转换、加载（`extract, transform, load, ETL`）：搬运并整理数据的流程。
- 数据目录（`Data Catalog`）：集中保存数据集结构和位置元数据的目录。

## Example

示意示例：Crawler 发现 S3 中新增日志分区，Catalog 记录字段，ETL 作业清洗后供知识库摄取；这展示三项能力的协作。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“IV. Data Engineering for GenAI > Data Pipelines > AWS Glue (ETL, Crawlers, Data Catalog)”支持组件范围。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 102–108 页支持 crawler、Data Catalog、partitions、visual ETL 与 Data Quality。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 3 页“Data Structuring”支持 Glue ETL 在文档结构化与分块准备中的用途。
