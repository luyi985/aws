---
id: saa-analytics-glue-138
title: 数据转换与元数据目录（AWS Glue）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=551
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=552
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=553
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=554
dependencies:
- saa-analytics-athena-133
---

# saa-analytics-glue-138: 数据转换与元数据目录（AWS Glue）

## Learning Objective

在“先把日志转换成列式文件”的场景中，能说明数据转换与元数据目录的判断依据，并指出适用限制。

## Scope

- Included: 数据转换与元数据目录的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-analytics-athena-133。

## Knowledge Point

数据集成服务负责提取、转换和加载，数据目录保存供查询使用的结构信息。

## Logical Path

1. 需求：先把日志转换成列式文件。
2. 转换数据与登记元数据是相关但不同的工作。
3. 结果：数据布局和元数据共同支撑分析。

## Key Terms

- ETL：Extract, transform, load，提取、转换及加载数据的过程。
- Data Catalog：保存数据结构及位置等元信息的目录。

## Example

示意例：先把日志转换成列式文件，再登记表结构供查询，说明数据布局和元数据共同支撑分析。

## Sources

- [课件 p.551：AWS Glue](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=551)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.552：AWS Glue – Convert data into Parquet format InputS3 Bucket Import CSVParquet OutputS3 Bucket Glue ETL AmazonAthenaAnalyze Eve](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=552)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.553：Glue Data Catalog: catalog of datasets JDBC Amazon S3 Amazon RDS Amazon DynamoDB AWS GlueData CatalogWrites Metadata Database](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=553)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.554：Glue – things to know at a high-level](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=554)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
