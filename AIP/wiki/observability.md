---
title: 运行监控、审计与漂移
derived_from:
  - aip-governance-audit-066
  - aip-observability-bedrock-067
  - aip-observability-agenttrace-068
  - aip-observability-modelmonitor-069
last_synced: 2026-11-01
status: current
---

# 运行监控、审计与漂移

[返回导航](README.md) · [考试覆盖与缺口](exam-coverage.md)

## 先看指标，再关联具体执行

|证据|回答的问题|限制|
|---|---|---|
|Metrics|调用量、失败率和延迟趋势如何|不自动包含完整 Prompt|
|Logs|某个事件发生了什么|孤立日志未必能串起一次任务|
|Trace|哪些步骤相互关联、何处耗时|不等于完整可见的模型内部思考|
|CloudTrail|哪个 AWS 身份做了什么 API 操作|不自动记录全部业务审批|
|应用审计|用户、规则、批准与副作用如何发生|需要主动设计完整性与保留|

可记录业务 jobId/runId 与 traceId 的关联。Agent Trace 显示工具选择及参数，X-Ray/应用 tracing 关联跨服务调用。不要假定业务 ID 会自动出现在所有 AWS 事件中。

Raw KPs: `aip-governance-audit-066`, `aip-observability-bedrock-067`, `aip-observability-agenttrace-068`

## Bedrock 指标和延迟诊断

|指标|调查用途|
|---|---|
|Invocations|调用量变化|
|InputTokenCount / OutputTokenCount|输入输出规模|
|InvocationLatency|对应模型调用耗时|
|TimeToFirstToken|支持的流式调用首输出时间|
|InvocationThrottles|限流与重试压力|
|InvocationClientErrors / InvocationServerErrors|错误类别|

输入从 2k 变为 8k，先查历史、Chunks、模板和重复 Context。Token 数不是最终账单，还取决于模型定价、缓存等条件。

Agent 总耗时由 3 秒增至 12 秒而 InvocationLatency 不变，应调查检索、工具、后端与重试。TTFT 上升但后续速率稳定，优先查开始前等待；TTFT 正常而总时长上升，检查输出长度和生成速度。

Dashboard 展示，Alarm 按阈值与周期判断；平均值不能替代 P95 等尾部指标。告警应依据业务目标，不使用教学阈值作为默认生产值。

Raw KPs: `aip-observability-bedrock-067`, `aip-observability-agenttrace-068`

## 日志启用、审计与保留

Model Invocation Logging 默认关闭，需要按支持的 API 和配置启用，才会把相应输入输出及元数据送到 CloudWatch Logs/S3。日志可能携带内部资料或 PII，应控制访问、脱敏和保留。

CloudTrail Event History 的管理事件查询不等于默认捕获 S3 对象的全部读取、写入或删除。相应 Data Events 通常需主动配置，事后启用不能补回未采集历史。通过 CLI 删除对象不会经过你的 Backend，不能期待应用日志自动记录。

审计需要业务请求、权限检查、HITL、工具结果等证据。CloudTrail、应用审计与模型 Lineage 互补；必要的防篡改、生命周期与访问策略按业务要求设置，不能把普通 debug log 自动视为可信审计记录。

Raw KPs: `aip-governance-audit-066`, `aip-observability-bedrock-067`

## 漂移监控如何运行

Data drift 比较生产输入与基线，例如中文 95%/英文 5% 变为各 50%。需要先提取语言或长度等特征，不能默认监控器自动理解所有开放文本变化。

基线可包含 statistics.json 与 constraints.json；自动生成的建议约束仍要检查。生产数据采集后按 Monitoring Schedule 分析，比较基线并输出报告及指标，再由 CloudWatch Alarm 触发响应。定时分析不是逐条实时拦截。

Model quality 的典型标签监控需要把预测与真实结果按记录 ID 关联。开放式 LLM 问答可采用人工、Judge 和代码组合，但不把 Judge 当作内置监控的默认机制。输入漂移不证明质量下降，没观察到已监测特征漂移也不证明系统没有变化。

处理闭环：发现偏离 → 分组评估质量 → 调查检索/Prompt/模型等原因 → 修复或适配 → 验证后考虑基线更新。不能自动重设基线来消除告警。

Raw KPs: `aip-observability-modelmonitor-069`

## 服务状态与复习边界

KP 069 直接查阅的官方资料记录：SageMaker Model Monitor 已不向新客户开放，现有客户可继续使用，维护安全和可用性但不计划新增功能。因此监控机制可以用于理解课程和设计，不能据此保证新账号可直接复现实验。

来源与时间语境保留在 [原始 KP 069](../raw/aip-observability-modelmonitor-069.md)。真实 baseline、标签匹配、调度及告警配置仍需实操验证。

Raw KPs: `aip-observability-modelmonitor-069`

## 原始笔记与来源边界

本页综合已批准的 raw；例子、数字和数据结构为教学用途。未将来源链接的存在当作所有产品能力的重新核验。具体原始文档、页码与当时查阅状态保留在各 raw 中。

- [aip-governance-audit-066](../raw/aip-governance-audit-066.md)
- [aip-observability-bedrock-067](../raw/aip-observability-bedrock-067.md)
- [aip-observability-agenttrace-068](../raw/aip-observability-agenttrace-068.md)
- [aip-observability-modelmonitor-069](../raw/aip-observability-modelmonitor-069.md)
