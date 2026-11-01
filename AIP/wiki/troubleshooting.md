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

## 找到第一次偏离的位置
|证据|调查范围|
|---|---|
|原文没有答案或仍是旧版|数据源与同步|
|正确块未召回|切块、索引、Query、Filter|
|召回后被筛掉|Reranker 与 Top-K|
|筛选正确却不在模型输入|Context 组装与截断|
|模型参数 A，工具收到 B|执行器映射|
|工具收到正确参数但失败|权限、网络或服务|
|工具结果正确，答案错误|实际 Context、冲突与综合|

检查各层真实输入输出，不以最终答案猜测唯一根因。模型参数合法也可能指向错误对象；工具 HTTP 成功也可能返回业务错误数据。

## 最小复现与验证
用正确参数单独调用工具，或把已确认证据直接提供给综合模型，逐步隔离故障。简化后成功说明原链路值得调查，但一次成功不足以确定根因。

修复后重跑原失败案例与相关 Golden Dataset，固定版本并监测副作用。Classic 场景还要检查 Prepare、版本和 alias。AgentCore 的产品定位差异记录在 [Agent 页面](agents.md)，不影响上述分层定位方法。

## Raw 来源

- [aip-observability-agenttrace-068](../raw/aip-observability-agenttrace-068.md)
- [aip-testing-regression-070](../raw/aip-testing-regression-070.md)
- [aip-testing-ragtroubleshooting-071](../raw/aip-testing-ragtroubleshooting-071.md)
- [aip-testing-agenttroubleshooting-072](../raw/aip-testing-agenttroubleshooting-072.md)
- [aip-troubleshooting-context-074](../raw/aip-troubleshooting-context-074.md)
