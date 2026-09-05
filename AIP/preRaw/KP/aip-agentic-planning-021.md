---
id: aip-agentic-planning-021
title: Bedrock Agent 规划模块
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — III. Agentic AI & Orchestration > Bedrock Agents > Planning Module (Problem Decomposition)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 222, ‘LLM Agents’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 5, ‘III. Agentic AI > Bedrock Agents’"
dependencies: []
---

# aip-agentic-planning-021: Bedrock Agent 规划模块

## Learning Objective

能够解释规划模块如何把用户目标分解为可执行步骤。

## Scope

- Included: Planning module、problem decomposition、步骤选择与结果回流。
- Excluded: 特定模型内部推理、提示模板和完整代理实现。

## Source Context

导图将 Planning Module 与 Problem Decomposition 直接关联在 Bedrock Agents 分支。

## Knowledge Point

规划模块（planning module）把高层目标分解为子任务，决定何时调用工具、使用哪些信息以及如何组合结果。规划是动态决策过程，不等于预先写死的工作流。

## PDF Grounding

详细课件把 agent 描述为具备 memory、planning 与 tools 的 LLM，并说明 planning module 是指导模型把问题拆成工具可处理的子问题。Study Guide 复述这一分解角色，确认规划的目的在于提高复杂请求的可执行性。

## Logical Path

1. 用户给出目标和约束。
2. 规划模块识别完成目标所需的子问题。
3. 代理依次选择动作并把观察结果反馈给规划。
4. 规划可能出错，必须受权限、步数和验证规则限制。

## Key Terms

- 规划模块（`planning module`）：决定任务步骤与动作顺序的组件。
- 问题分解（`problem decomposition`）：把复杂目标拆成较小子任务。

## Example

示意示例：“安排一次客户会议”可分为查空闲时间、选时段、创建邀请；这展示了高层目标到工具步骤的分解。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“III. Agentic AI & Orchestration > Bedrock Agents > Planning Module (Problem Decomposition)”支持本 KP 的机制范围。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 222 页“LLM Agents”支持 planning module、子问题分解及工具协同。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 5 页“Bedrock Agents”支持规划模块分解复杂请求的职责。
