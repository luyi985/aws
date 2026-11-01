---
title: 从原始数据到可用知识
derived_from:
  - aip-data-bda-030
  - aip-data-textract-031
  - aip-data-transcribe-032
  - aip-data-comprehend-033
  - aip-data-glue-034
  - aip-data-wrangler-035
  - aip-data-appflow-036
last_synced: 2026-11-01
status: current
---

# 从原始数据到可用知识

## 先提取，再加工和摄取
|输入或任务|能力|输出用途|
|---|---|---|
|扫描文档、表单、表格|Textract|文本与文档结构|
|音频|Transcribe|转写文本及适用分析|
|文本实体、分类、PII|Comprehend|标签、实体和敏感信息位置|
|多模态非结构化内容|BDA|可供下游消费的结构化结果|
|数据发现与批量加工|Glue|Catalog 元数据与 ETL|
|交互式探索和准备|Data Wrangler|可视化转换与数据流|
|SaaS 数据集成|AppFlow|映射、过滤、验证后的数据传输|

OCR 的文字提取与图像内容理解不同；转写文本也不能保留音频全部信息。服务选择取决于要保留什么证据。

## 工程边界
Glue Crawler 发现 schema 和分区，Data Catalog 保存元数据，ETL 执行加工。发现结构并不等于完成清洗。可视化准备有助于探索规则，重复生产流程还要保证稳定运行。

以企业文档 RAG 为例，先接入内容、识别格式并提取，再治理敏感信息、保留来源和版本，最后进入 [切块与索引](rag.md)。提取成功不证明事实准确；下游仍需检验缺页、结构丢失和适用条件。

## Raw 来源

- [aip-data-bda-030](../raw/aip-data-bda-030.md)
- [aip-data-textract-031](../raw/aip-data-textract-031.md)
- [aip-data-transcribe-032](../raw/aip-data-transcribe-032.md)
- [aip-data-comprehend-033](../raw/aip-data-comprehend-033.md)
- [aip-data-glue-034](../raw/aip-data-glue-034.md)
- [aip-data-wrangler-035](../raw/aip-data-wrangler-035.md)
- [aip-data-appflow-036](../raw/aip-data-appflow-036.md)
