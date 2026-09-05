---
id: aip-governance-lineage-054
title: SageMaker Lineage Tracking 与 MLOps 审计
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — VI. Governance, Security & QA > Governance > SageMaker Lineage Tracking (MLOps Auditing)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 333-336, ‘SageMaker ML Lineage Tracking’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 7, ‘V. Managing Models with SageMaker AI’"
dependencies: []
---

# aip-governance-lineage-054: SageMaker Lineage Tracking 与 MLOps 审计

## Learning Objective

能够说明 lineage tracking 如何连接数据、处理、训练与模型工件以支持审计。

## Scope

- Included: SageMaker lineage、artifact、association、MLOps auditing 和可追溯性。
- Excluded: API 操作、完整元数据模型和组织审计制度设计。

## Source Context

导图将 SageMaker Lineage Tracking 与 MLOps Auditing 关联。

## Knowledge Point

血缘追踪（lineage tracking）记录数据集、处理步骤、训练作业、模型工件和部署结果之间的关系。它为 MLOps 审计提供“这个模型从哪里来”的可追溯证据，但前提是关键步骤和外部资产被完整记录。

## PDF Grounding

详细课件列出 Trial component、Trial、Experiment、Context、Action、Artifact 与 Association 等 lineage entities，说明可用 LineageQuery 追查使用某 artifact 的模型或 endpoint，并可通过 AddAssociation 跨账户连接。Study Guide 未单列 lineage，只提供 SageMaker 模型部署、监控与持续管理的上位生命周期语境。

## Logical Path

1. 模型结果源自数据、代码、参数和多个处理步骤。
2. 血缘系统把这些工件及其关联持久化。
3. 审计或故障分析可沿关系回溯来源与影响。
4. 未纳管的手工步骤会形成血缘断点，记录存在也不等于过程合规。

## Key Terms

- 血缘追踪（`lineage tracking`）：记录资产来源和处理关系的机制。
- MLOps 审计（`MLOps auditing`）：检查机器学习生命周期活动与证据的过程。

## Example

示意示例：发现模型版本异常后，沿血缘查到使用的数据快照、处理作业和训练参数；这展示血缘对根因分析的价值。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“VI. Governance, Security & QA > Governance > SageMaker Lineage Tracking (MLOps Auditing)”支持追踪与审计主题。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 333–336 页支持 lineage entity、查询、可视化、审计及跨账户关联。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 7 页“Managing Models with SageMaker AI”支持模型部署与监控的生命周期语境；未直接展开 lineage tracking。
