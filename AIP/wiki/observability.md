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

## 三类运行证据
Metric 描述整体趋势，Log 记录具体事件，Trace 关联一次执行的步骤、时间与结果。CloudWatch 指标、日志、Dashboard 和告警帮助发现异常，Agent Trace 帮助定位工具选择与参数，分布式追踪帮助理解跨服务链路。

模型调用内容日志需要相应启用与治理，不能假定普通指标包含 Prompt。CloudTrail 关注 AWS API 活动，业务审批和用户操作仍需应用审计；部分数据事件需要单独配置。

## 漂移与质量
输入语言从以中文为主变为大量英文，是相对基线的分布变化。需要先定义并采集语言等特征，不能假定监控器自动理解所有文本变化。

Data drift 是输入变化，Model quality 是输出效果变化。漂移不必然导致质量下降，质量下降也不一定由漂移造成。要将分布信号与标签、参考答案或适用评估结合。LLM Judge 是质量评估方法之一，不是所有 Model Monitor 任务的默认机制。

审计回答谁做了什么；监控回答系统运行如何；模型血缘回答制品如何产生，参见 [MLOps](mlops.md)。

## Raw 来源

- [aip-governance-audit-066](../raw/aip-governance-audit-066.md)
- [aip-observability-bedrock-067](../raw/aip-observability-bedrock-067.md)
- [aip-observability-agenttrace-068](../raw/aip-observability-agenttrace-068.md)
- [aip-observability-modelmonitor-069](../raw/aip-observability-modelmonitor-069.md)
