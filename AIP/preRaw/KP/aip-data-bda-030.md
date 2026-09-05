---
id: aip-data-bda-030
title: Bedrock Data Automation 多模态提取
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — IV. Data Engineering for GenAI > Automation & Extraction > Bedrock Data Automation (BDA) (Multimodal Extraction)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 83-91, ‘Bedrock Data Automation (BDA)’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 4, ‘Bedrock Data Automation (BDA)’"
dependencies: []
---

# aip-data-bda-030: Bedrock Data Automation 多模态提取

## Learning Objective

能够说明 BDA 如何把多模态非结构化内容转成可用输出。

## Scope

- Included: Bedrock Data Automation、multimodal extraction、输出结构与验证。
- Excluded: 当前支持格式、蓝图配置、价格和区域可用性。

## Source Context

导图将 BDA 与 Multimodal Extraction 直接关联。

## Knowledge Point

Bedrock Data Automation（BDA）在导图中用于多模态提取（multimodal extraction）：从文档、图像、音频或视频等非结构化内容提取可供应用使用的信息。输出仍需按业务 Schema 和质量规则验证。

## PDF Grounding

详细课件按文档、图像、视频与音频列出 BDA 输入输出，并说明 standard output 会推断结构，Blueprints 则显式定义要提取的字段和分类规则。Study Guide 补充输出可为 JSON、JSON+CSV/Markdown、HTML 或 CSV，且可服务 IDP 与 Knowledge Bases 数据准备。

## Logical Path

1. 原始内容包含文本、布局、声音或画面信号。
2. 自动化服务解析不同模态并识别相关信息。
3. 结果被组织成可供下游消费的结构。
4. 低质量输入和领域歧义会影响提取，关键字段需校验。

## Key Terms

- 多模态提取（`multimodal extraction`）：从多种内容形式识别结构化信息。
- 非结构化数据（`unstructured data`）：没有固定表格 Schema 的内容。

## Example

示意示例：从包含扫描页、表格和图片说明的报告中提取字段与摘要；这展示多种内容信号被统一处理。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“IV. Data Engineering for GenAI > Automation & Extraction > Bedrock Data Automation (BDA) (Multimodal Extraction)”支持主题范围。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 83–91 页支持 BDA 的多模态处理、standard output、Blueprint 与分类用途。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 4 页“BDA”支持输入模态、输出格式、IDP 与知识库准备场景。
