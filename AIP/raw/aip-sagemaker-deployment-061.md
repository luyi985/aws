# aip-sagemaker-deployment-061: SageMaker 实时 Endpoint 与 Batch Transform

## Concepts

### SageMaker 在这里的定位

SageMaker 主要用于自己训练、微调、导入和部署的模型生命周期。

可以先这样区分：

```text
Bedrock
→ AWS 托管的 Foundation Models
→ Converse / InvokeModel

SageMaker
→ 自己管理和部署的模型
→ InvokeEndpoint / Batch Transform
```

因此 061 讨论的不是 Bedrock 托管模型，而是 SageMaker 模型如何做在线和离线 inference。

### Real-time Endpoint

SageMaker Real-time Endpoint 是把模型部署成一个持续在线的推理服务。

典型数据流：

```text
Client / Backend
↓
HTTPS request
↓
SageMaker Real-time Endpoint
↓
Model inference
↓
Prediction response
```

适合实时风控、在线分类、推荐、预测等低延迟场景。

核心特点：

```text
模型保持在线
↓
请求来了立即处理
↓
低延迟
```

由于 endpoint 背后的 serving infrastructure 持续运行，即使暂时没有请求，也会产生持续资源成本。

### Batch Transform

Batch Transform 用于离线批量 inference。

典型数据流：

```text
S3 input
↓
Start Batch Transform job
↓
SageMaker 启动计算资源
↓
加载模型
↓
批量 inference
↓
结果写回 S3
↓
Job 结束
```

适合大量离线数据、不需要立即返回结果的夜间批处理或历史数据评分。

因此：

```text
Real-time Endpoint
→ service

Batch Transform
→ job
```

### Online vs Offline Inference

两种部署方式本质上对应不同 workload。

```text
Online inference
→ 用户正在等待
→ latency 很重要
→ Real-time Endpoint
```

```text
Offline inference
→ 大量数据批处理
→ 不要求即时响应
→ throughput / cost 更重要
→ Batch Transform
```

最简单的判断：

```text
Need immediate prediction?
├─ Yes → Real-time Endpoint
└─ No
   ↓
Large offline dataset?
   └─ Yes → Batch Transform
```

### S3 Model Artifact

SageMaker 训练完成后，常见结果是把 model artifact 保存到 S3。

例如：

```text
Training
↓
model.tar.gz
↓
S3
```

这个 artifact 可以包含 trained weights、model files、inference code 等。

然后：

```text
S3 model artifact
↓
SageMaker Model
↓
部署方式
├─ Real-time Endpoint
└─ Batch Transform
```

所以同一个训练好的模型，可以根据 workload 选择在线或离线 inference。

### Example: Fraud Detection

假设已经训练出 fraud model。

训练结果：

```text
Training
↓
model.tar.gz
↓
S3
```

实时刷卡判断：

```text
Transaction
↓
SageMaker Real-time Endpoint
↓
Fraud model
↓
risk score
↓
立即返回
```

因为系统需要立即决策，所以适合 Real-time Endpoint。

夜间批量审核：

```text
All daily transactions
↓
S3
↓
Batch Transform
↓
批量 fraud scores
↓
S3
```

因为不要求即时返回，所以适合 Batch Transform。

### SageMaker Endpoint vs Bedrock Runtime

Bedrock 和 SageMaker 都可以做 model inference，但 runtime interface 不同。

Bedrock：

```text
App
↓
Converse / InvokeModel
↓
AWS-managed Foundation Model
```

SageMaker：

```text
App
↓
InvokeEndpoint
↓
SageMaker Real-time Endpoint
↓
Custom / imported model
```

因此：

```text
Bedrock
→ managed FM runtime

SageMaker
→ custom model serving
```

### Runtime Interface

Bedrock 常见调用：

```text
ConverseCommand
InvokeModelCommand
```

SageMaker Real-time Endpoint 常见调用：

```text
InvokeEndpointCommand
```

虽然两边都在做 inference，但 API interface 不同。

可以抽象成：

```text
Application Model Interface
├─ Bedrock Adapter
└─ SageMaker Adapter
```

业务层可以通过统一 abstraction 使用不同 provider。

### Can SageMaker Replace Bedrock?

从应用架构角度，可以通过自己的 abstraction layer 做替换：

```text
Your App
↓
Unified Model Interface
├─ Bedrock → Converse
└─ SageMaker → InvokeEndpoint
```

但在 AWS 原生 API 层，两者不能直接互换。

```text
SageMaker Endpoint
≠ Bedrock modelId
```

所以不能把一个 SageMaker endpoint 直接传给 Bedrock `Converse`。

如果 SageMaker 中部署的是聊天模型，可以自己定义类似 message 的 chat interface，但这不是 Bedrock 原生 Converse API。

### SageMaker Endpoint in Agent Architecture

SageMaker Endpoint 还可以作为 Agent 的一个专业 ML tool。

例如：

```text
Bedrock Agent
↓
Action Group / Lambda
↓
SageMaker Real-time Endpoint
↓
Fraud model
↓
risk_score = 0.92
↓
返回 Agent
```

这时可以这样分工：

```text
Bedrock Foundation Model
→ reasoning / explanation / orchestration

SageMaker Endpoint
→ 专业 prediction / scoring
```

### Clarify 与 SageMaker 模型生命周期

Clarify 可以放到 SageMaker 模型生命周期里理解：

```text
Data
↓
Clarify pre-training bias check
↓
Training / fine-tuning
↓
Model
↓
Clarify post-training bias check
↓
Deploy
├─ Real-time Endpoint
└─ Batch Transform
```

Clarify 是 governance / evaluation 能力，不要求模型一定从零训练；已有、微调或导入的模型也可以进入相应分析流程。

### Cost Model: Real-time Endpoint vs Batch Transform

两者都主要围绕计算资源使用计费，但资源生命周期不同。

Real-time Endpoint 是 persistent endpoint：

```text
Endpoint running
↓
hosting instance remains available
↓
即使暂时没有 request
↓
仍然产生 compute cost
```

可以近似理解为：

```text
Real-time cost
≈ instance hourly price
× running instance count
× running hours
```

因此 Real-time Endpoint 的主要成本风险是 idle capacity：

```text
Endpoint 24/7 开着
但实际请求很少
→ 仍然持续支付 hosting cost
```

Batch Transform 则是 job-based：

```text
Start batch job
↓
启动 compute
↓
执行 batch inference
↓
job complete
↓
compute resource released
```

可以近似理解为：

```text
Batch cost
≈ instance hourly price
× instance count
× job runtime
```

因此如果每天只需要离线处理一批数据：

```text
每天运行 1 小时
其余时间无需 inference
→ Batch Transform 通常比 persistent endpoint 更合理
```

核心区别：

| Mode | Cost behavior |
|---|---|
| Real-time Endpoint | 为持续在线能力付费 |
| Batch Transform | 为实际 batch job 执行时间付费 |

可以压缩成：

> Real-time 为“随时可用”付钱；Batch Transform 为“实际跑任务”付钱。

### Serverless Inference Boundary

如果 workload 仍然需要在线 request/response，但流量很低或不规律，可以考虑 SageMaker Serverless Inference。

```text
持续、高频实时流量
→ Real-time Endpoint

低频 / intermittent 在线流量
→ Serverless Inference

大量离线数据
→ Batch Transform
```

因此不能简单认为“在线 = 永远必须 Real-time Endpoint”，而是根据 latency、traffic pattern 和成本要求选择 serving mode。

## Concept Relationships

061 可以整体压成：

```text
SageMaker Model
↓
Inference Mode
├─ Real-time Endpoint
│  → online
│  → low latency
│  → persistent service
│
├─ Serverless Inference
│  → online
│  → intermittent / low traffic
│
└─ Batch Transform
   → offline
   → large batch
   → job
```

和 Bedrock 的关系：

```text
Bedrock
→ managed Foundation Models
→ Converse / InvokeModel

SageMaker
→ custom / imported models
→ InvokeEndpoint / Batch Transform
```

所以 Bedrock 和 SageMaker 都可以做 inference，但托管对象和 runtime interface 不同。

## Understanding

用户首先提出疑问：为什么 Endpoint 是 SageMaker 的，而不是 Bedrock 的。

随后建立了核心区分：

```text
SageMaker
→ 自己训练 / 微调 / 导入的模型

Bedrock
→ AWS 托管的 Foundation Models
```

用户进一步确认：

```text
SageMaker Real-time Endpoint
→ 把自己的模型部署成在线 API
```

并把 Bedrock 与 SageMaker 的调用方式对比为：

```text
Bedrock
→ Converse / InvokeModel

SageMaker
→ InvokeEndpoint
```

最终用户总结：

> 核心就是 interface 不同。

进一步建立了可组合架构：

```text
Bedrock Agent
↓
SageMaker Endpoint 作为 tool
↓
返回结构化 prediction
↓
Bedrock FM 做 reasoning / orchestration
```

用户还把 Clarify 与 SageMaker 生命周期连接起来，理解为可以在训练前后做 bias / fairness 分析，再进入部署和运行阶段。

成本方面，用户进一步建立了：

```text
Real-time Endpoint
→ persistent service
→ 开着就有 hosting cost

Batch Transform
→ temporary job
→ 主要按 job 实际运行资源付费
```

并理解了第三种边界：

```text
低频但仍需要在线 inference
→ Serverless Inference
```

最终 mental model：

```text
Bedrock
→ 大脑 / LLM reasoning

SageMaker Endpoint
→ 专业模型能力 / prediction service
```

## References

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — AIP-C01 course slides / detailed coverage`

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AIPStudyGuide.pdf — AIP-C01 Study Guide (Detailed)`

- Inherited from source KP; underlying source not re-opened in this session:
  `https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints.html`

- Inherited from source KP; underlying source not re-opened in this session:
  `https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html`

- Directly consulted during this session for deployment-mode and cost boundary:
  `https://docs.aws.amazon.com/sagemaker/latest/dg/deploy-model-options.html`
