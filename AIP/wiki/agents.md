---
title: Agent 编排、工具与人工介入
derived_from:
  - aip-agentic-planning-021
  - aip-agentic-actiongroups-022
  - aip-agentic-memory-023
  - aip-agentic-agentcore-024
  - aip-agentic-strands-025
  - aip-agentic-mcp-026
  - aip-integration-eventdriven-057
  - aip-testing-agenttroubleshooting-072
  - aip-agentic-multiagent-hitl-073
  - aip-troubleshooting-context-074
last_synced: 2026-11-01
status: needs-review
---

# Agent 编排、工具与人工介入

[返回导航](README.md) · [考试覆盖与缺口](exam-coverage.md)

## 从目标到可执行任务

Agent loop 把模型判断、工具执行和 observation 连接起来。Planner 决定需要做哪些业务动作；Schema 描述如何调用；执行器解析参数并分派；业务服务检查权限和规则并产生真实结果。

“模型没返回 Tool Call”可以结束一轮基础循环，但不证明用户目标已满足。固定字段查询通常可直接编排；开放需求且需要动态拆解、依赖和进度管理时，显式计划才有价值。

Strands 等框架简化消息、工具注册、分派和结果回填；MCP 统一工具发现、Schema 与调用协议。框架运行时仍需获得工具定义，不是完全不知道 Schema。两者都不负责自动保证业务授权。

Raw KPs: `aip-agentic-planning-021`, `aip-agentic-actiongroups-022`, `aip-agentic-strands-025`, `aip-agentic-mcp-026`, `aip-integration-eventdriven-057`

## 显式计划：依赖与参数引用分别解决什么

教学计划可以表达为：
~~~json
{
  "tasks": [
    {"id": "find", "tool": "search_products", "dependsOn": []},
    {"id": "prices", "tool": "get_prices", "dependsOn": ["find"],
     "args": {"productIds": {"$ref": "tasks.find.output.products[*].id"}}},
    {"id": "warranty", "tool": "get_warranty", "dependsOn": ["find"]}
  ]
}
~~~
dependsOn 决定何时执行，$ref 决定参数来自哪里；这个 $ref 格式需要应用解析，不是 JSON 或 TypeScript 自带行为。

执行前检查工具存在、ID 唯一、依赖存在且无环、输出引用合法、解析后的参数符合 Schema。调度器只执行依赖成功的任务，并控制并发；上游失败时不能用不存在的输出继续执行。Replan 保留已完成结果，同时限制总步数、时间和成本。仅生成计划 JSON 不提供进程重启后的恢复能力。

Raw KPs: `aip-integration-eventdriven-057`, `aip-agentic-multiagent-hitl-073`

## 多 Agent 的交接契约

Orchestrator 负责拆解和缺项判断，Worker 在任务边界内行动，Synthesizer 综合证据。这些是逻辑角色，不要求独立部署。

先确认型号，再并行调查价格、保修和评价。每个 Worker 返回实际使用的型号、地区、结果、来源和未知项。如果各自猜测型号，即便调用全部成功，合并结果也可能无效。

缺少关键信息可以返回 needs_input，由协调者统一澄清。普通工具执行一次固定动作；Worker 可以观察结果、调整搜索和继续行动。并行增加协调和调用成本，多数 Agent 同意也不能代替事实核验。

Raw KPs: `aip-agentic-memory-023`, `aip-agentic-multiagent-hitl-073`, `aip-troubleshooting-context-074`

## 人工批准必须绑定一次具体动作

|记录|必须区分的内容|
|---|---|
|workflow_run_id|属于哪次工作流|
|checkpoint_id|暂停在什么步骤|
|approval_id|哪一次审批请求|
|action 与参数版本|批准的具体操作|
|审批状态与审批者|是否有效、是否有权批准|

同一 checkpoint 在循环里可能出现多次，因此不能只凭步骤名称恢复。用户批准 180 澳元的购买，参数变为 250 后不能复用批准。澄清型号不等于批准购买。

恢复前校验审批者、动作版本与 pending 状态；重复提交要避免重复恢复及重复副作用。多个待审批项同时存在时，按钮或明确选择应绑定 approval_id，不能让模型猜“同意”指哪一项。

Raw KPs: `aip-agentic-multiagent-hitl-073`

## AgentCore 的稳定边界与待复核范围

Runtime 提供承载、隔离和生命周期管理；业务 State 保存什么、用户是否有权操作某对象，仍由应用负责。Gateway 连接外部能力；可观测性帮助定位问题，不自动修复错误工具选择。

**待复核：** KP 024 对 AgentCore 整体作了运行支撑层的概括；KP 072 已记录 managed harness 托管循环和 code-defined agents 两条路径。可以区分 Runtime 组件与平台产品范围，但 raw 尚未完成明确修订，本页不把旧概括提升为当前产品全集定义。

读者应保留这一区分：自己写 loop 并部署 Runtime，与采用托管 harness，是不同使用方式；无论哪条路径，工具的业务权限与参数正确性仍需验证。

Raw KPs: `aip-agentic-agentcore-024`, `aip-testing-agenttroubleshooting-072`

## 考试场景：工具契约、调度与恢复

|题目条件|正确判断|典型误解|
|---|---|---|
|多个框架复用工具服务|MCP 统一发现、Schema 与调用契约|MCP 自动实现业务逻辑|
|参数合法但用户无对象权限|仍需拒绝执行|Schema 合法即允许操作|
|find 成功，prices 与 warranty 无相互依赖|可在并发上限内执行|所有步骤必须串行|
|find 失败，后续依赖其产品 ID|阻塞或跳过依赖任务|编造输出继续|
|进程重启后继续计划|持久化执行状态或由工作流管理|计划 JSON 本身提供恢复|
|Replan 中出现已完成工作|保留已完成结果并管理剩余计划|无条件重做全部动作|

其他独立分支能否继续，还取决于执行器的失败策略；逻辑依赖独立不等于所有框架都自动保持该分支运行。raw 尚未定义完整分支失败和恢复协议。

MCP 的协议职责已有；Lambda/ECS 部署选型、传输配置和恢复操作仍待补。工具部署位置、调用权限和业务动作是否合法应分别判断。

Raw KPs: `aip-agentic-mcp-026`, `aip-integration-eventdriven-057`

## 原始笔记与来源边界

本页综合已批准的 raw；例子、数字和数据结构为教学用途。未将来源链接的存在当作所有产品能力的重新核验。具体原始文档、页码与当时查阅状态保留在各 raw 中。

- [aip-agentic-planning-021](../raw/aip-agentic-planning-021.md)
- [aip-agentic-actiongroups-022](../raw/aip-agentic-actiongroups-022.md)
- [aip-agentic-memory-023](../raw/aip-agentic-memory-023.md)
- [aip-agentic-agentcore-024](../raw/aip-agentic-agentcore-024.md)
- [aip-agentic-strands-025](../raw/aip-agentic-strands-025.md)
- [aip-agentic-mcp-026](../raw/aip-agentic-mcp-026.md)
- [aip-integration-eventdriven-057](../raw/aip-integration-eventdriven-057.md)
- [aip-testing-agenttroubleshooting-072](../raw/aip-testing-agenttroubleshooting-072.md)
- [aip-agentic-multiagent-hitl-073](../raw/aip-agentic-multiagent-hitl-073.md)
- [aip-troubleshooting-context-074](../raw/aip-troubleshooting-context-074.md)
