---
title: 企业助手与应用形态
derived_from:
  - aip-agentic-qbusiness-027
  - aip-agentic-qdeveloper-028
  - aip-agentic-qapps-029
  - aip-integration-bedrockflows-059
last_synced: 2026-11-01
status: current
---

# 企业助手与应用形态

## 根据使用者与流程选形态
|形态|主要对象|核心工作|
|---|---|---|
|Q Business|企业员工|基于内部知识问答、摘要|
|Q Developer|开发者|代码、文档、CLI 与开发辅助|
|Q Apps|重复业务任务|用自然语言和配置形成可复用应用|
|Bedrock Flows|预定义 GenAI 流程|连接节点、条件分支与数据传递|

这些定位来自已批准课程笔记，不代表重新核验过的产品可用性清单。

## 治理随能力进入流程
企业检索需要结合身份和文档权限。Permission-aware retrieval 不能自动修复源系统错误的 ACL。生成代码是候选实现，要经审查、测试和安全检查。无代码应用同样需要数据权限与动作治理。

Flows 的预定义路径适合明确流程；需要根据中间结果决定下一步的任务可使用 [Agent 编排](agents.md)。应用形态改变开发方式，不改变执行授权的责任。

## Raw 来源

- [aip-agentic-qbusiness-027](../raw/aip-agentic-qbusiness-027.md)
- [aip-agentic-qdeveloper-028](../raw/aip-agentic-qdeveloper-028.md)
- [aip-agentic-qapps-029](../raw/aip-agentic-qapps-029.md)
- [aip-integration-bedrockflows-059](../raw/aip-integration-bedrockflows-059.md)
