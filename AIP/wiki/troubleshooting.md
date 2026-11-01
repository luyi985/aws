---
title: RAG 与 Agent 故障定位
derived_from:
  - aip-observability-agenttrace-068
  - aip-testing-regression-070
  - aip-testing-ragtroubleshooting-071
  - aip-testing-agenttroubleshooting-072
  - aip-troubleshooting-context-074
last_synced: 2026-11-01
status: current
---

# RAG 与 Agent 故障定位

[返回导航](README.md) · [考试覆盖与缺口](exam-coverage.md)

## 按证据消失或变化的位置定位

|观察|优先检查|避免的误判|
|---|---|---|
|原文就没有答案|数据源覆盖|让生成 Prompt 补造答案|
|新文档存在但索引旧|入库与同步|默认源更新等于索引更新|
|正确证据未召回|Chunk、Embedding、Query、Filter|先替换生成模型|
|已召回但排序后消失|Reranker 输入和最终 K|把排序损失叫初始召回失败|
|已选中却不在请求|Context 组装、截断、元数据|认为数据库有就等于模型看见|
|模型参数 A，工具收到 B|执行器映射与 State|修改本来正确的模型参数|
|参数正确但被拒绝|调用身份、操作、资源及失败环节|无限重试权限错误|
|结果正确、回答错误|实际请求、冲突和综合|仅凭工具日志判定模型能力不足|

核心是找到第一次可证实的偏离，而不是把最终错误直接归于某个组件。

Raw KPs: `aip-observability-agenttrace-068`, `aip-testing-ragtroubleshooting-071`, `aip-testing-agenttroubleshooting-072`, `aip-troubleshooting-context-074`

## 三个贯穿诊断案例

**政策案例：** 正确政策为 20 天。检索候选包含它，但 Reranker 排第 8，应用只取 5 个。改生成 Prompt 不会使已丢失的文档自动进入请求；检查排序输入的版本/范围、截断和 K，再验证保留率。

**参数案例：** 模型输出 productId=A，执行器传 B，工具正常返回 B。检查旧 State、字段映射、默认值覆盖；比较模型原始参数、实际请求和工具入参。工具返回 B 不证明工具查错。

**约束案例：** 用户预算 300，实际证据和回答均为 450。优先判断是否违反用户约束；如果回答把 450 编成 280，才同时出现证据偏离。两类错误可能需要不同修复。

Raw KPs: `aip-testing-ragtroubleshooting-071`, `aip-testing-agenttroubleshooting-072`, `aip-troubleshooting-context-074`

## 隔离实验与 Trace 所需信息

用确认正确的参数单独调用工具；用确认正确的工具输出直接调用 Synthesizer；逐步减少工具目录、冲突文档和无关历史。简化后能成功，说明原始链路值得调查，但一次实验不证明唯一根因。

至少保留任务/请求关联 ID、模型与 Prompt 版本、实际模型输入、工具名、模型参数、映射后参数、调用结果、重试、耗时和结束原因。记录应遵循最小化和脱敏要求，不能为了排障无限存储敏感内容。

规划错误检查必要步骤与依赖；工具选择错误先确认正确工具是否真的注册并提供；参数错误区分结构与语义；200 响应也要检查业务内容。

Raw KPs: `aip-observability-agenttrace-068`, `aip-testing-agenttroubleshooting-072`

## 修复闭环与验收

1. 保存能重现问题的输入、版本及预期结果。
2. 找出最早偏离的阶段，修改对应逻辑或配置。
3. 验证原失败案例，包括边界两侧的数据一致性。
4. 在相关 Golden Dataset 上检查回归。
5. 比较质量、延迟、成本和安全，而不是只看一次成功。
6. 有线上风险时按发布策略观察并保留回滚能力。

Classic Agent 修改后还需核对 Prepare、实际版本与 alias。AgentCore 使用方式见 [Agent](agents.md)，不要把一套服务的发布 API 名称套到另一套。

**自测：** 工具已返回无货，最终回答有货，第一步是改 Prompt 吗？先检查该结果是否完整进入最终请求；若组装前丢失，应修复输入链路，若完整且无冲突，再检查提示和生成行为。

Raw KPs: `aip-testing-regression-070`, `aip-testing-agenttroubleshooting-072`, `aip-troubleshooting-context-074`

## 原始笔记与来源边界

本页综合已批准的 raw；例子、数字和数据结构为教学用途。未将来源链接的存在当作所有产品能力的重新核验。具体原始文档、页码与当时查阅状态保留在各 raw 中。

- [aip-observability-agenttrace-068](../raw/aip-observability-agenttrace-068.md)
- [aip-testing-regression-070](../raw/aip-testing-regression-070.md)
- [aip-testing-ragtroubleshooting-071](../raw/aip-testing-ragtroubleshooting-071.md)
- [aip-testing-agenttroubleshooting-072](../raw/aip-testing-agenttroubleshooting-072.md)
- [aip-troubleshooting-context-074](../raw/aip-troubleshooting-context-074.md)
