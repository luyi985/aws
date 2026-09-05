---
id: aip-data-textract-031
title: Amazon Textract 文档 OCR
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — IV. Data Engineering for GenAI > Automation & Extraction > Amazon Textract (OCR for PDFs/Images)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 601, ‘Amazon Textract’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 3, ‘II. Managing Data for Generative AI > Data Structuring’"
dependencies: []
---

# aip-data-textract-031: Amazon Textract 文档 OCR

## Learning Objective

能够说明 Textract 在 PDF 与图像文字和文档结构提取中的作用。

## Scope

- Included: OCR、PDF/image 输入、文字及常见文档结构提取。
- Excluded: API 参数、当前功能清单和人工标注流程。

## Source Context

导图将 Amazon Textract 标注为用于 PDFs/Images 的 OCR 服务。

## Knowledge Point

光学字符识别（optical character recognition, OCR）把图像中的文字转换成机器可处理文本。Amazon Textract 面向文档，不仅关注字符，还可表达页面中的结构关系，供检索或数据流程继续处理。

## PDF Grounding

详细课件说明 Textract 可从扫描文档自动提取印刷文字、手写内容和数据，并处理 forms、tables、PDF 与 images。Study Guide 把 Textract 放在“保留 headings 与 tables 等文档结构”的数据准备路径中，强调提取结果应服务后续 FM 理解。

## Logical Path

1. 扫描 PDF 或图片中的文字不可直接作为普通文本读取。
2. OCR 识别字符及其位置。
3. 文档提取进一步组织字段、表格或布局关系。
4. 模糊扫描和复杂版式会产生误差，关键结果需置信度或人工复核。

## Key Terms

- 光学字符识别（`optical character recognition, OCR`）：从图像识别文字。
- 文档结构（`document structure`）：字段、表格及布局元素之间的关系。

## Example

示意示例：扫描发票经过 Textract 后得到供应商、日期和金额字段；这展示 OCR 结果如何进入结构化处理。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“IV. Data Engineering for GenAI > Automation & Extraction > Amazon Textract (OCR for PDFs/Images)”支持服务用途。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 601 页“Amazon Textract”支持文字、手写、forms、tables、PDF 与 image 提取。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 3 页“Data Structuring”支持用 Textract 保留非结构化文档中的结构信息。
