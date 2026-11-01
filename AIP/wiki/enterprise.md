---
title: 企业助手与应用形态
derived_from:
  - aip-agentic-planning-021
  - aip-agentic-qbusiness-027
  - aip-agentic-qdeveloper-028
  - aip-agentic-qapps-029
  - aip-security-iampolicies-048
  - aip-integration-eventdriven-057
  - aip-integration-bedrockflows-059
  - aip-security-appsecurity-065
last_synced: 2026-11-01
status: current
---

# 企业助手与应用形态

[返回导航](README.md) · [考试覆盖与缺口](exam-coverage.md)

## 根据使用者与工作形态判断

|产品/形态|主要入口|适合的问题|仍需验证|
|---|---|---|---|
|Q Business|员工与企业知识|内部资料问答、摘要、工作辅助|连接器、ACL、来源质量|
|Q Developer|开发上下文|代码生成、重构、文档和 CLI 辅助|测试、安全、项目规则|
|Q Apps|自然语言与配置|把重复业务任务包装成应用|数据权限、分享范围、动作授权|
|Bedrock Flows|节点与连接|已知步骤、数据映射和条件分支|Schema、节点输入输出、失败路径|

这些是 raw 记录的学习定位，不是当前产品功能和地区可用性的完整清单。选型需根据实际业务边界核对。

Raw KPs: `aip-agentic-qbusiness-027`, `aip-agentic-qdeveloper-028`, `aip-agentic-qapps-029`, `aip-integration-bedrockflows-059`

## 企业检索：相关性必须服从访问范围

Q Business 的学习模型是：身份和访问上下文参与检索，结果来自用户可访问的企业内容。最相关文档不一定是允许读取的文档。

如果源系统把机密文档错误地授予所有人，permission-aware retrieval 不会自动推断公司真正意图。排查需要追到源 ACL、同步和身份映射，而不是只调回答 Prompt。

对于会调用业务动作的系统，读权限与执行权限也不同。可以查看订单状态，不代表允许退款或删除。身份、资源授权和业务规则应在对应边界执行。

Raw KPs: `aip-agentic-qbusiness-027`, `aip-security-iampolicies-048`, `aip-security-appsecurity-065`

## 生成代码与无代码应用都需要验证

Q Developer 产生候选实现；接受前要检查项目约束、测试、依赖和安全。代码看起来符合语法，不证明满足业务或生产性能要求。

Q Apps 的价值是把输入、处理和输出组织成可重复任务，例如会议纪要生成行动清单。复用应用与一次聊天不同，但分享应用不等于可以分享全部底层数据，也不代表高风险动作已经获批。

复习时先回答“谁使用、输入是什么、输出是什么、是否执行动作”，再选产品。不要仅因出现 AI 或 no-code 就选择同一服务。

Raw KPs: `aip-agentic-qdeveloper-028`, `aip-agentic-qapps-029`

## Flows 与动态 Agent 的组合边界

Flows 用节点表示工作，用连接传递数据，用条件选择分支。预定义结构仍可以根据运行时数据走不同路径，不代表每个请求必须完全相同。

如果流程始终是接收文档、摘要、判断类别、保存结果，固定编排容易验证。若用户目标需要动态搜索、补问、尝试其他工具，Agent loop 更适合表达该局部行为。外层可靠流程与内层 Agent 可以组合。

例如审批流程仍由确定性状态控制，Agent 生成分析作为一个步骤；模型建议“可以批准”不能越过真正审批记录。相关机制见 [Agent](agents.md) 与 [集成](integration.md)。

Raw KPs: `aip-agentic-planning-021`, `aip-integration-eventdriven-057`, `aip-integration-bedrockflows-059`

## 原始笔记与来源边界

本页综合已批准的 raw；例子、数字和数据结构为教学用途。未将来源链接的存在当作所有产品能力的重新核验。具体原始文档、页码与当时查阅状态保留在各 raw 中。

- [aip-agentic-planning-021](../raw/aip-agentic-planning-021.md)
- [aip-agentic-qbusiness-027](../raw/aip-agentic-qbusiness-027.md)
- [aip-agentic-qdeveloper-028](../raw/aip-agentic-qdeveloper-028.md)
- [aip-agentic-qapps-029](../raw/aip-agentic-qapps-029.md)
- [aip-security-iampolicies-048](../raw/aip-security-iampolicies-048.md)
- [aip-integration-eventdriven-057](../raw/aip-integration-eventdriven-057.md)
- [aip-integration-bedrockflows-059](../raw/aip-integration-bedrockflows-059.md)
- [aip-security-appsecurity-065](../raw/aip-security-appsecurity-065.md)
