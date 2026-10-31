# aip-observability-agenttrace-068: Agent Tracing、X-Ray 与工具调用可观测性

## Concepts

### 1. Metric、Log 与 Trace

| 类型 | 核心问题 | 选购助手示例 |
|---|---|---|
| Metric | 整体表现怎么样？ | P95 延迟、工具失败率 |
| Log | 某个时刻发生了什么？ | 价格查询返回 429 |
| Trace | 一次执行经过哪些相关步骤？ | 检索、价格查询、重试、综合推荐 |

Trace 的价值不仅是记录更多内容，还在于关联步骤、调用关系、时间和结果。

错误日志可以说明出现过 429；结合 Trace，才能确定它属于哪个任务、哪次调用，以及后续是否恢复。

### 2. Agent Trace：定位任务路径中的错误

Agent Trace 关注 Agent 从输入到结果的执行路径，例如选择了哪些动作、使用什么参数、得到什么结果。

教学案例：用户要求查询耳机 A，答案却使用耳机 B 的价格。

| 检查位置 | 排查内容 |
|---|---|
| 模型实际输入 | 是否包含正确需求和准确型号 |
| 工具选择 | 是否选择正确工具 |
| 工具参数 | 产品 ID 是否已经错误 |
| 工具返回 | 请求 A 是否返回了 B |
| 最终生成 | 正确工具结果是否被错误转述 |

不同位置的错误需要不同处理：

- 参数已错：调查输入、State 和动作选择。
- 参数正确、工具结果错误：调查工具实现和数据源。
- 工具结果正确、答案错误：调查最终输入组装和生成。

Bedrock Agent Trace 可以提供编排步骤、Action Group 与 Knowledge Base 的输入输出，以及失败信息。通过 API 使用时，需要启用相应 Trace。

Trace 是系统提供或应用记录的执行信息，不等于模型全部内部思考的完整、可靠还原。

自建 Agent 不会自动获得 Bedrock Agent Trace，需要应用埋点或使用相应框架能力。

### 3. X-Ray：定位跨服务调用与耗时

X-Ray 收集应用请求及下游服务、数据库、HTTP API 调用的相关追踪数据，帮助调查耗时、错误和服务依赖。

教学记录：

| 操作 | 耗时 |
|---|---:|
| 加载用户需求 | 50ms |
| 模型选择下一步 | 1s |
| 查询价格 | 20s |
| 生成答案 | 3s |

这些数字仅为教学示例。

定位到价格查询较慢后，还需进一步检查：

- 外部 API 本身是否响应慢。
- 是否发生多次重试。
- 应用是否在调用前等待。
- 耗时是否包含传输和其他开销。

X-Ray 需要相应集成或埋点，不会自动看到所有业务步骤和参数。

### 4. Segment、Subsegment 与 Span

X-Ray 使用 Segment 表示服务完成的一段工作，使用 Subsegment 细分操作或下游调用，再将相关片段组织成 Trace。

通用 Tracing 中常见的 Span，可以先理解为一段具有开始、结束和上下文的操作。不同追踪系统的字段和组织方式仍需分别理解，不能将所有术语视为完全相同的 API 对象。

### 5. 关联业务任务、Agent 执行与应用 Trace

可以在应用记录中保留关联字段：

```json
{
  "jobId": "JOB-001",
  "agentRunId": "RUN-001",
  "traceId": "应用链路追踪ID",
  "stepId": "STEP-003",
  "toolCallId": "CALL-002",
  "tool": "get_price",
  "attempt": 2,
  "durationMs": 850,
  "status": "succeeded"
}
```

这是教学设计，不是 AWS 固定格式。

| 字段 | 作用 |
|---|---|
| jobId | 标识业务任务 |
| agentRunId | 标识某次 Agent 执行 |
| traceId | 关联应用调用链 |
| stepId / toolCallId | 定位步骤或工具调用 |
| attempt | 区分重试尝试 |

Bedrock Trace ID 与 X-Ray Trace ID 不应被假定为天然相同，需要通过应用上下文建立关联。

排队后执行的长任务可能对应多段 Trace。业务任务 ID 可以关联提交、后台执行和结果查询，不必将它们强行视为一次持续连接。

### 6. 记录内容与诊断边界

按排障需要记录：

- Agent、模型、Prompt 和工具版本。
- 工具名称及必要参数。
- 返回状态、错误类型和重试次数。
- 步骤开始与结束时间。
- 必要证据标识或结果摘要。

敏感字段应按需要脱敏或限制访问，不必把全部用户资料和网页正文都存入 Trace。

需要区分：

- 技术成功不等于任务正确。
- 工具返回 200，也可能查询了错误型号。
- 并行操作耗时不能简单相加。

例如两个工具同时各执行 5 秒，阶段耗时通常接近较慢路径加上调度和汇合开销，不是必然 10 秒。

### 7. 模型参数与实际工具输入的对照

如果价格工具响应正常，但查询了错误产品，应向上追查：

1. State 中的产品 ID。
2. 模型实际收到的型号与上下文。
3. 模型生成的工具调用参数。
4. 执行器解析和映射后的参数。
5. 工具实际收到的输入。

对照模型生成参数与工具实际输入，可以区分模型选择问题与应用传参问题。

不能因为工具响应正常就认定调用正确，也不应把参数错误误当作容量问题去扩容。

### 8. 组合排障流程

1. 使用 Metric 发现质量或性能变化。
2. 根据任务标识定位执行。
3. 使用 Agent Trace 检查动作、参数和结果。
4. 使用应用 Trace 检查服务调用、耗时和错误。
5. 使用关联 Log 补充具体错误细节。

Trace 提供执行证据，不能自动证明执行路径合理。LLM-as-a-Judge 可以辅助评价任务路径，但仍需适当的评分规则和校准。

## Concept Relationships

### Agent Trace 与应用 Tracing 互补

Agent Trace 解释任务经过哪些动作；应用 Tracing 展示这些动作涉及哪些服务和调用。组合后才能同时分析语义路径与技术执行。

### Metric 发现，Trace 定位，Log 补充

整体指标帮助发现异常，关联 Trace 缩小到具体执行与步骤，Log 提供局部细节。三者不是互相替代关系。

### 执行证据与质量评价

返回码、耗时和调用记录属于执行证据。任务是否完成、参数是否符合需求，还需要结合业务上下文判断。

### 业务关联与异步任务

业务任务可以跨请求、队列和执行过程。持久化任务标识与追踪上下文的关联，有助于还原异步执行路径。

## Understanding

在“价格工具返回 200、只耗时 100ms，但参数中的产品 ID 已错误”的场景中，用户回答：

> 调查模型输入和参数。

该回答正确识别：应调查工具执行前的输入与参数来源，而不是优先扩容价格服务。

讨论进一步补充了 State、模型输入、模型生成参数、执行器映射和工具实际输入的逐层对照。

用户确认了该解释。本次未进行真实埋点、Trace Context 传播、X-Ray 配置或生产故障排查，不据此认定已具备独立实操能力。

## References

### 继承来源，未重新读取底层资料

- [AWS Certified Generative AI Developer 课程资料](../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf) — AIP-C01 course slides / detailed coverage；原始 KP 未提供具体页码。
- [AIP Study Guide](../preRaw/AIPStudyGuide.pdf) — AIP-C01 Study Guide (Detailed)；原始 KP 未提供具体页码。

### 继承来源，本次直接读取

- [Amazon Bedrock — Trace events](https://docs.aws.amazon.com/bedrock/latest/userguide/trace-events.html) — Agent 编排、调用输入输出与失败记录。
- [What is AWS X-Ray?](https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html) — 应用及下游调用追踪、集成和埋点。

### 本次直接读取的补充来源

- [AWS X-Ray concepts](https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html) — Segment、Subsegment、Trace 与调用关系。

### KP 血缘

- [原始 KP 定义](../preRaw/KP/aip-observability-agenttrace-068.md) — 本次直接读取。

任务关联字段、耗时数字和耳机查询场景均为本次教学示例。
