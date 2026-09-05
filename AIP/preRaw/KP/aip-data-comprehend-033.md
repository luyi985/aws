---
id: aip-data-comprehend-033
title: Amazon Comprehend 文本分析
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — IV. Data Engineering for GenAI > Automation & Extraction > Amazon Comprehend (NER, PII Redaction, Classification)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 114-118, ‘Amazon Comprehend’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF pp. 3-4, ‘Token-Level Redaction’ and ‘Amazon Comprehend’"
dependencies: []
---

# aip-data-comprehend-033: Amazon Comprehend 文本分析

## Learning Objective

能够区分 NER、PII 脱敏与文本分类在 Comprehend 流程中的作用。

## Scope

- Included: Named Entity Recognition、PII redaction、classification。
- Excluded: 支持语言、模型训练 API 和医学等专业版本。

## Source Context

导图为 Amazon Comprehend 列出 NER、PII Redaction 和 Classification。

## Knowledge Point

命名实体识别（named entity recognition, NER）找出人名、组织等实体；PII 脱敏识别并遮盖个人敏感信息；分类（classification）为整段文本分配类别。三类输出可服务不同数据治理与路由任务。

## PDF Grounding

详细课件区分 general NER、用户定义类别的 Custom Classification，以及识别业务专有术语的 Custom Entity Recognition，并展示 Lambda 在数据进入 Bedrock 前调用 Comprehend。Study Guide 进一步把它用于 input/output token-level PII redaction、pattern matching 与 topic modeling。

## Logical Path

1. 输入是待分析的自然语言文本。
2. NER 提取实体及类别。
3. PII 检测保护敏感字段，分类确定文档或语句类别。
4. 自动分析可能误报或漏报，需按风险设计复核。

## Key Terms

- 命名实体识别（`named entity recognition, NER`）：定位并分类文本中的实体。
- 文本分类（`text classification`）：给文本分配预定义类别。

## Example

示意示例：工单中的姓名和公司由 NER 提取，邮箱被 PII 流程遮盖，工单整体被分类为“退款”；这展示三类任务差异。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“IV. Data Engineering for GenAI > Automation & Extraction > Amazon Comprehend (NER, PII Redaction, Classification)”支持任务范围。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 114–118 页支持 NLP、classification、NER、custom entities 及 Lambda 前处理。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 3–4 页支持 PII redaction、pattern matching、topic modeling 与自定义文本分析。
