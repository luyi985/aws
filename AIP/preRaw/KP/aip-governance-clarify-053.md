---
id: aip-governance-clarify-053
title: SageMaker Clarify 偏差检测
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — VI. Governance, Security & QA > Governance > SageMaker Clarify (Bias Detection)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 327-328 and 433, SageMaker Clarify slides"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF pp. 7-8, ‘Bias and Explainability’ and ‘Responsible AI’"
dependencies:
  - aip-governance-responsibleai-052
  - aip-governance-evaluationtypes-045
---

# aip-governance-clarify-053: SageMaker Clarify 偏差检测

## Learning Objective

能够说明 Clarify 如何用数据与模型结果指标辅助偏差检测。

## Scope

- Included: SageMaker Clarify、bias detection、群体切片、基线与解释限制。
- Excluded: 指标公式全集、配置代码和法律公平结论。

## Source Context

导图将 SageMaker Clarify 与 Bias Detection 关联。

## Knowledge Point

偏差检测（bias detection）比较定义群体在数据或模型结果上的分布与差异。SageMaker Clarify 提供相关分析能力，但工具输出是调查信号；群体定义、可接受阈值和处置仍需要领域与治理判断。

## PDF Grounding

详细课件说明 Clarify 可检测群体不平衡、与 Model Monitor 集成并通过 CloudWatch 告警，还列出 Class Imbalance、Difference in Proportions of Labels 等 pre-training bias metrics；它也帮助解释特征贡献。Study Guide 重复 CI、DPL、群体差异与 explainability，并把 Clarify 放入 Responsible AI 工具集。

## Logical Path

1. 定义受保护或业务关注的群体与目标结果。
2. 检查训练数据是否存在代表性或标签差异。
3. 按群体分析模型输出与性能指标。
4. 指标差异不自动说明原因或违法，需要进一步因果与政策审查。

## Key Terms

- 偏差检测（`bias detection`）：寻找数据或模型结果中系统性群体差异。
- 群体切片（`group slice`）：按某个属性划分的评估子集。

## Example

示意示例：团队分别统计两个用户群体的误拒率，发现差异后检查样本和流程；这展示 Clarify 信号如何触发调查而非直接下结论。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“VI. Governance, Security & QA > Governance > SageMaker Clarify (Bias Detection)”支持产品与目标。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 327–328、433 页支持 Clarify 偏差指标、Model Monitor/CloudWatch 集成及解释能力。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 7–8 页支持 CI、DPL、群体偏差、特征贡献与 Responsible AI 语境。
