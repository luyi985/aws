---
id: aip-foundations-prompttechniques-004
title: Zero-shot、Few-shot 与 Chain-of-Thought
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — I. Foundational AI Concepts > Prompt Engineering > Techniques (Zero-shot, Few-shot, Chain-of-Thought)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 68, ‘Types of Prompts’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF pp. 3 and 7, ‘Prompt Engineering & Flows’ and ‘System Resiliency’"
dependencies:
  - aip-foundations-promptanatomy-005
---

# aip-foundations-prompttechniques-004: Zero-shot、Few-shot 与 Chain-of-Thought

## Learning Objective

能够按任务需要选择零样本、少样本或引导推理的提示技术。

## Scope

- Included: 三类提示技术的用途、差异与基本边界。
- Excluded: 特定模型的最佳模板、自动提示搜索和安全绕过技巧。

## Source Context

导图将 Zero-shot、Few-shot 和 Chain-of-Thought 并列为提示工程技术。

## Knowledge Point

零样本（zero-shot）只给任务说明；少样本（few-shot）再提供少量输入输出示例；思维链提示（chain-of-thought prompting）通过分步推理要求改善复杂任务的过程组织。应以可验证结果决定是否增加提示复杂度。

## PDF Grounding

详细课件用情感分类展示 zero-shot 不给示例、few-shot 给出正负样例，并把 CoT 概括为分步处理。Study Guide 补充 few-shot 用期望输出示例约束行为，并把 CoT 放在复杂推理场景中；它未单独展开 zero-shot。

## Logical Path

1. 先用清晰任务说明建立零样本基线。
2. 输出格式或边界不稳定时加入代表性示例。
3. 复杂推理任务可要求分解步骤或给出可审计依据。
4. 更多示例和推理文本会占用上下文，也可能暴露不必要信息。

## Key Terms

- 零样本（`zero-shot`）：不给示例，仅凭指令完成任务。
- 少样本（`few-shot`）：在提示中给少量示例。
- 思维链提示（`chain-of-thought prompting`）：引导模型按步骤组织推理的技术。

## Example

示意示例：情感分类先只给标签定义；若模型混淆“中性”和“负面”，再加入两条标注示例。这展示了从 zero-shot 到 few-shot 的升级条件。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“I. Foundational AI Concepts > Prompt Engineering > Techniques (Zero-shot, Few-shot, Chain-of-Thought)”支持三类技术范围。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 68 页“Types of Prompts”直接比较 zero-shot、few-shot 与 CoT，并提供情感分类示例。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 3、7 页说明 few-shot 示例与 CoT 的复杂推理用途；zero-shot 的直接定义由详细课件补足。
