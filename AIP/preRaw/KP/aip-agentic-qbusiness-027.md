---
id: aip-agentic-qbusiness-027
title: Amazon Q Business
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — III. Agentic AI & Orchestration > Amazon Q Ecosystem > Q Business (Employee Assistant, IAM Identity Center)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 260-264, ‘Amazon Q Business’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 5, ‘III. Agentic AI > Amazon Q Business’"
dependencies: []
---

# aip-agentic-qbusiness-027: Amazon Q Business

## Learning Objective

能够说明 Q Business 作为员工助手与 IAM Identity Center 身份上下文之间的关系。

## Scope

- Included: Employee assistant、企业内容访问、IAM Identity Center 与权限感知。
- Excluded: 连接器清单、定价、配置步骤和所有当前功能。

## Source Context

导图将 Q Business 概括为 Employee Assistant，并关联 IAM Identity Center。

## Knowledge Point

Amazon Q Business 在导图中定位为企业员工助手（employee assistant）。它需要结合用户身份与企业内容权限返回结果；IAM Identity Center 可参与用户身份和访问上下文管理。

## PDF Grounding

详细课件说明 Q Business 基于公司知识回答、摘要、生成内容和执行日常动作，通过 data connectors 连接企业数据，并借 IAM Identity Center 只返回用户有权读取的文档；admin controls 可限制词、主题或外部知识。Study Guide 还补充 native/custom plugins 可与第三方应用交互。

## Logical Path

1. 企业助手连接组织知识源。
2. 用户通过受管理身份访问助手。
3. 检索与回答应尊重该用户可见的内容范围。
4. 接入身份系统不自动修复源系统中的错误权限。

## Key Terms

- 员工助手（`employee assistant`）：面向组织内部工作任务的 AI 助手。
- 权限感知检索（`permission-aware retrieval`）：按当前用户访问权限制候选内容。

## Example

示意示例：财务员工可查询内部财务流程，其他员工只能看到公开政策；这展示身份上下文对回答范围的约束。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“III. Agentic AI & Orchestration > Amazon Q Ecosystem > Q Business (Employee Assistant, IAM Identity Center)”支持产品定位与身份关联。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 260–264 页支持员工助手、连接器、IAM Identity Center 权限感知及 admin controls。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 5 页“Amazon Q Business”支持企业数据、connectors、plugins、身份与 guardrails。
