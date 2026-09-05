---
id: aip-governance-llmjudge-047
title: LLM-as-a-Judge
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — VI. Governance, Security & QA > Evaluation (QA) > LLM-as-a-Judge (Nova/Claude Evaluators)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 50 and 430, RAG evaluation and ‘Bedrock Model Evaluations’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 9, ‘Evaluation Techniques’"
dependencies:
  - aip-governance-evaluationtypes-045
---

# aip-governance-llmjudge-047: LLM-as-a-Judge

## Learning Objective

能够说明如何用 Nova 或 Claude 等评估模型按量表评分，以及如何校准其偏差。

## Scope

- Included: LLM-as-a-judge、evaluator、rubric、参考答案与人工校准。
- Excluded: 最新模型支持、价格、提示模板大全和统计显著性推导。

## Source Context

导图将 LLM-as-a-Judge 与 Nova/Claude Evaluators 关联。

## Knowledge Point

大模型裁判（LLM-as-a-judge）让评估模型根据明确量表对候选输出打分或比较。它能扩展主观评测规模，但会继承评估模型的偏好、位置效应和不一致性，需要用人工标注校准。

## PDF Grounding

详细课件区分 evaluator model 与 generator model，并要求提供 prompt dataset、评价指标提示及可选 reference responses/contexts；RAG job 可单独测 retrieval，也可测 retrieve-and-generate。Study Guide 同样把 LLM judges 放入 Bedrock Evaluation Jobs，并要求 ground truth 数据集支持评价。

## Logical Path

1. 定义可操作的评估量表和示例。
2. 向评估模型提供输入、候选答案及必要依据。
3. 收集分数、理由或成对偏好。
4. 用人工黄金集验证一致性，并控制顺序和自我偏好。

## Key Terms

- 大模型裁判（`LLM-as-a-judge`）：用另一个大模型评价候选输出的方法。
- 评分量表（`rubric`）：把质量标准转成可执行评分规则的说明。

## Example

示意示例：Nova 或 Claude 按“事实支持、完整性、简洁性”量表比较两个回答，再与专家评分核对；这展示模型评审与人工校准。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“VI. Governance, Security & QA > Evaluation (QA) > LLM-as-a-Judge (Nova/Claude Evaluators)”支持方法与评估模型示例。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 50、430 页支持 evaluator/generator 分工、prompt dataset、reference data 与 RAG 评估模式。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 9 页“Evaluation Techniques”支持 LLM judge、prompt dataset 及 reference responses/contexts。
