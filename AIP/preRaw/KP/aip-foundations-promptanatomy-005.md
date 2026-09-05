---
id: aip-foundations-promptanatomy-005
title: 提示词的组成结构
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — I. Foundational AI Concepts > Prompt Engineering > Anatomy (Instructions, Context, Input, Output Indicator)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 65, ‘Anatomy of a Prompt’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 3, ‘Prompt Engineering & Flows’"
dependencies: []
---

# aip-foundations-promptanatomy-005: 提示词的组成结构

## Learning Objective

能够用指令、上下文、输入与输出指示器组成结构清晰的提示词。

## Scope

- Included: Instructions、Context、Input、Output Indicator 的职责与组合顺序。
- Excluded: 模型参数调优、提示版本管理和复杂推理策略。

## Source Context

导图把提示词解剖为四个组成部分，本 KP 聚焦这些部分如何共同限定任务。

## Knowledge Point

提示词（prompt）的指令（instructions）说明要做什么，上下文（context）提供判断所需背景，输入（input）给出本次数据，输出指示器（output indicator）约束结果形式。清楚分隔四部分可减少歧义。

## PDF Grounding

详细课件用“雨天咖啡馆中的读书对话”完整标注 Instructions、Context、Input data 与 Output indicator；Study Guide 复述同一四段结构，并补充可在指令中描述 JSON Schema 以约束结构化输出。

## Logical Path

1. 指令定义目标与角色边界。
2. 上下文提供完成目标所需的事实或规则。
3. 输入承载本次要处理的内容。
4. 输出指示器规定格式；它不能保证内容一定正确。

## Key Terms

- 上下文（`context`）：模型完成当前任务所需的背景信息。
- 输出指示器（`output indicator`）：对输出结构、格式或字段的明确要求。

## Example

示意示例：“把下列工单按规则分类”是指令，类别定义是上下文，工单正文是输入，“仅返回 JSON 的 category 字段”是输出指示器；该例展示四部分分工。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“I. Foundational AI Concepts > Prompt Engineering > Anatomy (Instructions, Context, Input, Output Indicator)”支持四部分结构。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 65 页“Anatomy of a Prompt”用完整示例支持四部分职责。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 3 页“Prompt Engineering & Flows”支持四部分结构及结构化输出约束。
