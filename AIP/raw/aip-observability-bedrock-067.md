# aip-observability-bedrock-067: Bedrock CloudWatch 指标、Invocation Logging 与 Dashboard

## Concepts

### 1. GenAI Observability

可观测性通过 Metrics、Logs 和 Traces 了解系统内部状态、发现异常并定位问题：

- **Metrics**：模型调用量、Token、延迟、错误及限流。
- **Logs**：具体事件、异常以及按需记录的模型调用内容。
- **Traces**：跨 Backend、RAG、Agent、Tool 与模型调用的执行路径。

Metrics 帮助发现异常；Logs 提供详细事件；Traces 定位耗时或失败步骤。CloudWatch Dashboard 展示趋势，CloudWatch Alarms 根据阈值进行告警。

### 2. Input Tokens 与 Output Tokens

`InputTokenCount` 和 `OutputTokenCount` 反映模型调用的输入和输出 Token 使用量。Input 可包含 System Prompt、User Prompt、History、RAG Context；Output 是模型生成的响应。

教学示例：输入从 2,000 增至 8,000 Tokens，输出从 500 增至 1,200 Tokens。潜在原因包括检索 Chunk 过多、History 未裁剪、Prompt 变长或 Agent 重复添加 Context。生成内容变长也可能增加延迟。

Token 总量并不直接等于账单：需考虑模型输入/输出定价、调用量、缓存及其他计费因素。

### 3. Latency、TTFT 与 OTPS

- **Latency**：某操作耗费的时间。
- **TTFT (Time to First Token)**：请求开始到收到第一个输出 Token 的时间。
- **OTPS (Output Tokens per Second)**：输出阶段 Token 生成速度。

```text
Request Start → Model Processing → First Token [TTFT]
              → Streaming Tokens [OTPS] → Invocation Complete [Latency]
```

TTFT 增加但生成速度正常，提示首 Token 等待或输入处理阶段变化；TTFT 正常但总耗时增加，可能是输出 Tokens 增多或生成速度下降。Bedrock `TimeToFirstToken` 适用于支持的流式调用场景；实际客户端体验还需考虑网络等因素。

### 4. Model Invocation Latency ≠ End-to-End Agent Latency

```text
User → Backend → RAG Retrieval → Agent Planning → Tool Execution
     → Bedrock Inference → Response Processing → User
```

`InvocationLatency` 只衡量模型调用的对应范围，不等于整条 Agent 工作流时间。如果模型调用耗时保持 3 秒而用户等待从 3 秒升至 12 秒，应调查 RAG、Backend、Tool、网络或重试等其他部分，并用应用侧耗时和 Trace 关联。

### 5. Bedrock Metrics、Throttling 与 Errors

典型 Bedrock CloudWatch 指标包括：

| Metric | 用途 |
|---|---|
| `Invocations` | 调用量 |
| `InputTokenCount` / `OutputTokenCount` | Token 用量 |
| `InvocationLatency` | 模型调用耗时 |
| `TimeToFirstToken` | 支持的流式调用首 Token 时间 |
| `InvocationThrottles` | 限流 |
| `InvocationClientErrors` | 客户端错误 |
| `InvocationServerErrors` | 服务端错误 |

```text
Request → Throttled → Backoff + Retry → Successful Invocation
```

即使最后调用成功，等待和重试也会提高端到端延迟。限流通常要调查请求速率、Token 配额、模型容量和重试策略，不能直接解释为模型生成质量差。

### 6. Bedrock Model Invocation Logging

Bedrock Model Invocation Logging 按配置把受支持模型调用的请求、响应及相关元数据发送至 CloudWatch Logs 或 S3。**默认关闭，需要主动启用**，实际范围依 API、配置和服务支持情况而定。

```text
CloudTrail → 哪个 AWS 身份发起 API 活动？
Invocation Logging → 模型调用的输入、输出与相关元数据？
Application Logs → Agent 的业务判断、执行事件与错误？
```

因为 Prompt/Response 可能包含 PII、内部文档、商业机密，应限制访问、按需脱敏、最小化记录并设置保留期限。

### 7. CloudWatch Dashboard 与 Alarms

推荐基础 Dashboard 观察调用量、Input/Output Token、平均及 P95 延迟、TTFT、Throttle、Client/Server Errors，并按模型或其他合理维度区分。平均数可能掩盖尾部延迟问题。

Dashboard 用于可视化；Alarms 在指标满足配置的阈值/周期条件时改变状态并可通知值班人员。生产阈值应来自业务 SLO 与历史基线，不能把示例数值当作统一标准。

## Concept Relationships

```text
GenAI Application → Bedrock
                       ├─ CloudWatch Metrics → Dashboard → Alarms
                       └─ Invocation Logging → CloudWatch Logs / S3
Application Tracing → RAG / Agent / Tool / Network 分段诊断
```

当端到端延迟上升时，先对比 `InvocationLatency`：模型延迟上升，则调查 Token、TTFT、Throttles、Errors；模型延迟基本不变，则调查 RAG、工具、Backend、网络和重试。必要时结合日志和 Trace。

本 KP 衔接 KP 037（Token Efficiency）、KP 042（Latency/TTFT）和 KP 066（CloudTrail/CloudWatch 边界）。

## Example

场景：Agent 总响应时间从 3 秒增加到 12 秒，Bedrock `InvocationLatency` 基本不变。

正确做法是分段检查 Backend、RAG Retrieval、Agent Planning、Tool Execution、网络和 SDK Retry/Backoff，并通过 Application Trace 定位额外时间。不应盲目更换更大模型、增加最大 Token 数或只检查 CloudTrail。

## Understanding

本次用户在场景选择题中明确选择 **B**：检查 Backend、RAG Retrieval、Tool Execution、重试与网络耗时。该回答与 **Model Invocation Latency 不等于 End-to-End Agent Latency** 的区分一致。

## References

以下来源继承自 preRaw KP，其中课件和指南本次未重新读取；官方文档 URL 保留为原始来源，不将继承引用冒充此次新阅读：

- [AWS Certified Generative AI Developer 课程资料](../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf) — AIP-C01 course slides / detailed coverage（继承来源，未重新读取）
- [AIP Study Guide](../preRaw/AIPStudyGuide.pdf) — AIP-C01 Study Guide (Detailed)（继承来源，未重新读取）
- [AWS Bedrock — Monitoring Runtime Metrics](https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring-runtime-metrics.html)（继承来源）
- [AWS Bedrock — Model Invocation Logging](https://docs.aws.amazon.com/bedrock/latest/userguide/model-invocation-logging.html)（继承来源）
