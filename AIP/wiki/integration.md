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

[返回导航](README.md) · [考试覆盖与缺口](exam-coverage.md)

## Bedrock API 选择表

|本次需要做什么|接口/客户端方向|输出或职责|
|---|---|---|
|创建和配置资源|control plane|管理资源，不执行一次模型推理|
|用统一消息格式调用支持的模型|Converse / bedrock-runtime|模型响应|
|直接使用模型特定请求体|InvokeModel / bedrock-runtime|对应模型格式的响应|
|统一消息接口的流式响应|ConverseStream|带类型的增量事件|
|模型特定格式的流式响应|InvokeModelWithResponseStream|模型相关流式结果|
|运行已配置的 Classic Agent|InvokeAgent / bedrock-agent-runtime|Agent 编排结果|
|只取回知识库证据|Retrieve|Chunks 和相关信息|
|组合知识库检索与生成|RetrieveAndGenerate|生成答案及相关信息|

Converse 降低不同支持模型的消息格式差异；InvokeModel 不是质量更低，而是抽象层不同。Retrieve 返回证据，应用可自行选择 Context 和模型；RetrieveAndGenerate 组合流程。不能假设后者默认启用了 Reranking，需看支持和配置。Classic API 与 AgentCore 路径不能直接互换，见 [Agent](agents.md)。

Raw KPs: `aip-integration-bedrockapi-055`

## 流式是整条链路的性质

模型增量事件 → 后端识别事件类型 → 及时转发 → 浏览器增量读取 → UI 更新。服务端 for-await 读完所有片段再 res.json，仍然不是端到端流式。

模型事件流与浏览器 SSE 不是同一协议，后端要做解析和转换。文本片段未必是完整词、句子或 JSON；未完成工具参数不能直接执行。

|情况|业务处理|
|---|---|
|正常完成|根据实际结束原因保存完整回答|
|达到输出限制|标识截断，检查预算或任务设计|
|模型要求调用工具|进入工具流程，不当作最终成功|
|连接断开/错误|保留部分内容的状态，不标记完成|
|用户取消|尽可能向上游传递取消，不只停渲染|

重新生成不能直接接在旧的半段答案后面。生成重试与业务工具重试需要分开，防止重复动作。

Raw KPs: `aip-integration-streaming-056`

## 后台任务：持久状态与连接分离

收到长任务后，应可靠接收工作再返回 202 与 jobId。只启动进程内 Promise 不提供持久化保障。任务可经历 queued、running、waiting_for_input、succeeded、failed。

SQS 缓冲工作；Visibility Timeout 内消息暂时不可见，未成功完成并删除可能再次处理。Lambda 通过事件源映射轮询 SQS。任务与业务写操作需要稳定 ID 和幂等约束；先读后写不能防止并发竞争，关键状态变更需要原子约束。持续失败可隔离到 DLQ 调查。

EventBridge 将事件交给有关接收者；Step Functions 管理步骤、条件与等待。它们可以组合，也不必同时使用。KP 057 记录了 Classic Rules/Targets 与新版 Subscriber 的产品差异，不能把某一种配置直接当作所有版本的通用格式。

页面连接负责展示，数据库任务状态负责恢复；用户关闭页面不自动等于后台工作消失。再次查询仍要检查任务归属。

Raw KPs: `aip-integration-eventdriven-057`, `aip-integration-apigateway-058`

## API Gateway 的能力与后端责任

|问题|入口能做的事|后端仍需做的事|
|---|---|---|
|谁在调用|适用的 IAM/Authorizer 身份验证|使用验证后的身份|
|结构是否合法|对应 API 类型支持的校验|业务语义、对象及状态校验|
|请求过快|请求级限流|模型并发、Token、任务步数和额度控制|
|能否看 JOB-001|接口访问控制|检查 JOB-001 的 owner/ACL|

REST API 的 Model Schema、Usage Plan、API Key 与 HTTP API 的 JWT Authorizer 不能混成统一配置。API Key 不能单独充当用户身份认证。Gateway 的限流/配额是 best-effort 目标，不能承担严格余额控制。

一次 HTTP 请求可能展开十次模型调用与重试，所以 HTTP 请求数不等于模型请求数或 Token 账单。

Raw KPs: `aip-integration-apigateway-058`

## 复习与定位：前端为何迟迟没显示

后端第 1 秒收到文本，浏览器第 8 秒一次显示：先看后端第一次写出的时间。第 8 秒才写出，调查累积完整答案；第 1 秒写出，继续调查代理缓冲、浏览器读取及 UI 渲染。

至少记录请求开始、模型首片段、后端首写、浏览器首收、首次渲染和最终完成时间。不同观测点的 TTFT 不可混用。Gateway 验证了 JWT 后，Lambda 仍需按可信 userId 检查任务归属。

Raw KPs: `aip-integration-streaming-056`, `aip-integration-apigateway-058`

## 原始笔记与来源边界

本页综合已批准的 raw；例子、数字和数据结构为教学用途。未将来源链接的存在当作所有产品能力的重新核验。具体原始文档、页码与当时查阅状态保留在各 raw 中。

- [aip-integration-bedrockapi-055](../raw/aip-integration-bedrockapi-055.md)
- [aip-integration-streaming-056](../raw/aip-integration-streaming-056.md)
- [aip-integration-eventdriven-057](../raw/aip-integration-eventdriven-057.md)
- [aip-integration-apigateway-058](../raw/aip-integration-apigateway-058.md)
