---
title: API、流式与后台任务
derived_from:
  - aip-integration-bedrockapi-055
  - aip-integration-streaming-056
  - aip-integration-eventdriven-057
  - aip-integration-apigateway-058
last_synced: 2026-11-01
status: current
---

# API、流式与后台任务

## 请求与业务职责
Control plane 管理资源，runtime 执行推理、检索和 Agent 操作。API Gateway 提供适用 API 类型的路由、鉴权、限流及校验；Lambda 或 Express/FastAPI 后端负责业务、State 和编排。具体能力需要配置，不能仅因经过 Gateway 就假定已生效。

## 两种等待方式
流式需从模型事件、后端增量读取和转发，一直贯通到浏览器展示。任意层缓冲完整结果都会破坏体验。显示首段更快不保证总生成更快，上游工具执行也会增加等待。

长任务可可靠接收后返回 202 和 jobId，由后台 Worker 执行，通过查询或推送给出状态。async/await 不等于任务持久化。查询任务结果时，后端必须检查当前用户是否拥有该任务。

## 事件与恢复
SQS 用于工作排队和缓冲，EventBridge 按事件规则路由，Step Functions 组织流程。任务要记录 queued、running、waiting_for_input、succeeded 或 failed 等业务状态。重复投递与重试需要幂等，完成状态应与已保存结果一致。

相关：[Agent 与审批](agents.md)、[安全边界](security.md)。

## Raw 来源

- [aip-integration-bedrockapi-055](../raw/aip-integration-bedrockapi-055.md)
- [aip-integration-streaming-056](../raw/aip-integration-streaming-056.md)
- [aip-integration-eventdriven-057](../raw/aip-integration-eventdriven-057.md)
- [aip-integration-apigateway-058](../raw/aip-integration-apigateway-058.md)
