---
id: aip-governance-responsibleai-052
title: Responsible AI 的公平、可解释与安全支柱
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — VI. Governance, Security & QA > Governance > Responsible AI Pillars (Fairness, Explainability, Safety)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 432-433, ‘Responsible AI: Core Dimensions’ and ‘AWS Tools for Responsible AI’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 8, ‘VII. Governance and QA > Responsible AI’"
dependencies: []
---

# aip-governance-responsibleai-052: Responsible AI 的公平、可解释与安全支柱

## Learning Objective

能够用公平性、可解释性和安全性三个维度审视 GenAI 系统风险。

## Scope

- Included: Fairness、explainability、safety 及其在系统生命周期中的作用。
- Excluded: 完整 Responsible AI 框架、法律判断和所有治理支柱。

## Source Context

导图在 Responsible AI Pillars 中明确列出 Fairness、Explainability、Safety。

## Knowledge Point

负责任 AI（responsible AI）要求系统不仅有效，还需审视影响。公平性（fairness）关注不同群体结果差异；可解释性（explainability）关注人能否理解依据与限制；安全性（safety）关注避免有害行为和失控后果。

## PDF Grounding

详细课件在三项导图支柱之外补充 Privacy and Security、Controllability、Veracity and Robustness、Governance 与 Transparency，并将 Bedrock Evaluations、Clarify、Model Monitor、A2I 与 ML Governance 映射为治理工具。Study Guide 复述同一扩展维度及 human review/correction loop。

## Logical Path

1. 明确系统用途、用户与可能受影响群体。
2. 评估不同群体的质量和错误分布。
3. 提供足以支持使用决策的依据、限制和追踪信息。
4. 用技术控制与人工流程降低伤害；三个维度不能互相替代。

## Key Terms

- 公平性（`fairness`）：识别并降低不合理的群体结果差异。
- 可解释性（`explainability`）：让人理解系统输出依据和限制的能力。
- 安全性（`safety`）：预防、检测并缓解有害行为的能力。

## Example

示意示例：招聘辅助系统分别检查群体错误率、向审核员显示推荐依据，并禁止自动做最终决定；这展示三个支柱的互补。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“VI. Governance, Security & QA > Governance > Responsible AI Pillars (Fairness, Explainability, Safety)”支持三支柱范围。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 432–433 页支持 Responsible AI 扩展维度及 AWS 工具映射。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 8 页“Responsible AI”支持扩展维度、Clarify、Bedrock Evaluation 与 A2I 人工复核。
