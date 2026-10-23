# aip-integration-bedrockapi-055: Bedrock API surfaces 与运行时调用

## Concepts

### Control Plane vs Runtime Plane

Bedrock API 首先要区分 control plane 和 runtime plane。

```text
Control plane
→ create / configure / manage resources

Runtime plane
→ invoke / retrieve / generate
```

对应到 Bedrock：

```text
bedrock
→ control plane

bedrock-runtime
→ model inference runtime

bedrock-agent
→ manage Agent / Knowledge Base resources

bedrock-agent-runtime
→ run Agent / Knowledge Base operations
```

核心判断：

> 管资源用 control plane；真正执行一次推理、Agent 调用或 Knowledge Base 检索，用 runtime plane。

### bedrock-runtime

如果应用需要把 prompt 发给 foundation model 并得到生成结果，核心是：

```text
bedrock-runtime
```

常见模型调用 API：

```text
Converse
ConverseStream
InvokeModel
InvokeModelWithResponseStream
```

### Converse

`Converse` 是更高层、统一的 conversation/message 风格接口。

适合：

```text
user
assistant
user
assistant
```

这种多轮对话。

可以理解为：

```text
messages
↓
Converse
↓
Bedrock model
↓
response
```

它的价值之一是让多个支持 Converse 的模型尽量使用一致的 message-style interface，降低应用层对模型特定 payload 的依赖。

### InvokeModel

`InvokeModel` 是更底层的直接模型调用方式。

典型调用思路：

```text
modelId
+
model-specific request body
↓
InvokeModel
↓
specific foundation model
```

因此：

```text
Converse
→ higher-level conversational abstraction

InvokeModel
→ lower-level direct model invocation
```

不是谁一定“更强”，而是抽象层不同。

### Streaming APIs

两类模型调用都有 streaming 版本：

```text
Converse
→ ConverseStream

InvokeModel
→ InvokeModelWithResponseStream
```

区别：

```text
non-streaming
→ 等完整响应生成后再返回

streaming
→ 生成一点就返回一点
```

Streaming 主要改善：

```text
perceived latency
responsiveness
time to first visible output
```

它不意味着模型本身一定生成得更快，而是用户能更早看到结果。

### bedrock-agent vs bedrock-agent-runtime

和模型 API 一样，Agent 也分管理面和运行面。

```text
bedrock-agent
→ create / configure / manage
→ Agent
→ Action Group
→ Knowledge Base

bedrock-agent-runtime
→ InvokeAgent
→ Retrieve
→ RetrieveAndGenerate
```

### InvokeAgent

如果只是调用模型：

```text
Converse
InvokeModel
```

如果要真正运行一个已经配置好的 Bedrock Agent：

```text
InvokeAgent
```

区别：

```text
Converse / InvokeModel
→ run model

InvokeAgent
→ run agent orchestration
```

Agent runtime 背后可以涉及 planning、tool/action group、Knowledge Base 等能力。

### Retrieve

`Retrieve` 只做 Knowledge Base 检索：

```text
query
↓
Knowledge Base
↓
relevant chunks / documents
```

它返回的是检索结果，不负责生成最终自然语言答案。

因此：

```text
Retrieve
→ retrieval only
```

### RetrieveAndGenerate

`RetrieveAndGenerate` 把检索和生成组合起来：

```text
query
↓
retrieve relevant context
↓
send context to model
↓
generate answer
```

因此：

```text
Retrieve
→ retrieval only

RetrieveAndGenerate
→ retrieval + generation
```

可以对应到 RAG：

```text
Retrieve
≈ retrieval stage

RetrieveAndGenerate
≈ managed end-to-end RAG call
```

### Rerank in RetrieveAndGenerate Flow

Rerank 可以作为 retrieval pipeline 的增强步骤。

概念流程：

```text
query
↓
retrieve candidate chunks
↓
rerank
↓
select top results
↓
generate answer
```

因此不能简单理解为：

```text
RetrieveAndGenerate
= 一定自动 rerank
```

更准确是：

> 如果 retrieval configuration 中启用了支持的 reranking 配置，RetrieveAndGenerate 可以基于 rerank 后的结果继续生成答案。

关系：

```text
Retrieve
→ candidate retrieval

Rerank
→ improve relevance ordering

RetrieveAndGenerate
→ retrieval pipeline + generation
```

## Concept Relationships

整个 Bedrock API surface 可以压成：

```text
Bedrock APIs

Control plane
├─ bedrock
└─ bedrock-agent

Runtime plane
├─ bedrock-runtime
│  ├─ Converse
│  ├─ ConverseStream
│  ├─ InvokeModel
│  └─ InvokeModelWithResponseStream
│
└─ bedrock-agent-runtime
   ├─ InvokeAgent
   ├─ Retrieve
   └─ RetrieveAndGenerate
```

考试型选择逻辑：

```text
管理资源
→ control plane

直接跑模型
→ Converse / InvokeModel

需要流式输出
→ ConverseStream / InvokeModelWithResponseStream

运行 Agent
→ InvokeAgent

只检索 Knowledge Base
→ Retrieve

检索 + 生成答案
→ RetrieveAndGenerate
```

如果还需要提升检索结果排序：

```text
Retrieve
↓
Rerank
↓
Generate
```

## Understanding

用户先建立了 Bedrock API 的基本分层：

```text
bedrock
→ control plane

bedrock-runtime
→ model inference

bedrock-agent
→ Agent / Knowledge Base management

bedrock-agent-runtime
→ Agent / KB execution
```

随后理解：

```text
Converse
→ 更高层统一 conversation API

InvokeModel
→ 更底层直接模型调用
```

以及 streaming 版本的作用：

```text
Streaming
→ 更早返回生成结果
→ 改善用户感知延迟
```

用户进一步确认 Knowledge Base 的两种 runtime API：

```text
Retrieve
→ 只检索

RetrieveAndGenerate
→ 检索 + 生成
```

并追问 rerank 是否由 `RetrieveAndGenerate` 完成。

最终建立的理解是：

```text
RetrieveAndGenerate
→ managed RAG flow

Rerank
→ retrieval pipeline 中的可选增强步骤

query
→ retrieve
→ rerank
→ generate
```

因此，rerank 不是 `RetrieveAndGenerate` 必然自带的固定步骤，而是可以配置进 retrieval pipeline。

## References

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — AIP-C01 course slides / detailed coverage`

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AIPStudyGuide.pdf — AIP-C01 Study Guide (Detailed)`

- Inherited from source KP; underlying source not re-opened in this session:
  `https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html`

- Inherited from source KP; underlying source not re-opened in this session:
  `https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started-api-ex-cli.html`
