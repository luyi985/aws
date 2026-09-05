---
id: aip-data-wrangler-035
title: SageMaker Data Wrangler
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — IV. Data Engineering for GenAI > Data Pipelines > SageMaker Data Wrangler (Visual Prep, Transformations)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 92-100, ‘SageMaker Data Wrangler’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF pp. 3-4, ‘II. Managing Data for Generative AI’"
dependencies: []
---

# aip-data-wrangler-035: SageMaker Data Wrangler

## Learning Objective

能够说明 Data Wrangler 如何通过可视化准备和转换形成可复用数据流程。

## Scope

- Included: Visual preparation、transformations、数据剖析与导出流程。
- Excluded: 当前界面、所有连接器、代码导出格式和价格。

## Source Context

导图将 SageMaker Data Wrangler 概括为 Visual Prep、Transformations。

## Knowledge Point

SageMaker Data Wrangler 在导图中承担可视化数据准备（visual data preparation）角色：连接数据、查看分布、配置转换，并把步骤组织成可重复的数据流。可视化操作仍需记录业务含义和验证输出。

## PDF Grounding

详细课件把 Data Wrangler 定位为 SageMaker Studio 中的数据准备界面，并依次展示 import、preview、visualize、transform、quick model 与 export data flow，还包含图像变换和数据平衡能力。Study Guide 未点名 Data Wrangler，但强调 GenAI 数据准备要保存 headings、tables 和结构，作为其上位质量目标。

## Logical Path

1. 连接待准备的数据源。
2. 查看缺失值、类型和分布等质量信号。
3. 配置清洗、编码或字段转换。
4. 导出或运行流程前验证转换没有引入偏差或泄漏。

## Key Terms

- 可视化数据准备（`visual data preparation`）：通过界面配置数据处理步骤。
- 数据转换（`transformation`）：改变数据格式、字段或取值的处理。

## Example

示意示例：分析者可视化检查空值后配置填补与类别编码，再保存处理流；这展示探索和可重复转换的衔接。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“IV. Data Engineering for GenAI > Data Pipelines > SageMaker Data Wrangler (Visual Prep, Transformations)”支持产品用途。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 92–100 页支持 Data Wrangler 的可视化准备、转换与导出流程。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 3–4 页“Managing Data for Generative AI”支持数据结构保留与知识库准备的上位目标；未单独描述 Data Wrangler。
