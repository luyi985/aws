# aip-operations-provisionedthroughput-060: Bedrock Provisioned Throughput 与容量规划

## Concepts

### Inference

Inference 指模型已经训练完成后，拿输入让模型产生输出的运行过程。

```text
Prompt / Input
↓
Model
↓
Generated Output
```

它和 training 的区别：

```text
Training
→ 更新模型参数
→ 让模型学习

Inference
→ 不更新模型参数
→ 使用现有模型生成结果
```

在 Bedrock 中，`Converse`、`InvokeModel` 等 runtime 调用本质上都在执行 inference。

### On-Demand

On-Demand 模式下，不需要提前预留固定推理容量。

可以理解为：

```text
Request arrives
↓
Bedrock allocates available shared capacity
↓
Run inference
↓
Pay based on usage
```

适合：

```text
流量低
流量不确定
流量波动大
PoC / Demo
```

核心优势是：

> 灵活，不需要为长期闲置容量持续付费。

### Provisioned Throughput

Provisioned Throughput 是提前为特定模型工作负载准备推理容量。

可以理解为：

```text
Choose model
↓
Provision inference capacity
↓
Application sends runtime requests
↓
Reserved capacity handles workload
```

核心价值不是让模型更聪明，而是提高：

```text
capacity predictability
stable throughput
```

它更适合：

```text
稳定
持续
高负载
对吞吐可预测性要求高
```

### Why Provisioned Throughput Is More Predictable

On-Demand 更接近：

```text
多个客户
↓
共享 Bedrock 可用推理容量
↓
根据请求动态调度
```

Provisioned Throughput 更接近：

```text
提前为 workload 准备容量
↓
持续使用该容量进行 inference
```

因此可以类比：

```text
On-Demand
≈ 临时打车

Provisioned Throughput
≈ 长期包车
```

前者灵活，后者容量更可预测，但后者即使利用率不足，也可能产生较高成本。

### Runtime API vs Capacity Mode

Provisioned Throughput 不是另一套模型 API。

应用仍然通过 Bedrock runtime API 进行 inference，例如：

```text
Converse
InvokeModel
```

可以分成两层理解：

```text
API layer
Converse / InvokeModel
        ↓
Capacity layer
├─ On-Demand
└─ Provisioned Throughput
```

因此：

> API 解决“怎么调用模型”，capacity mode 解决“调用背后的推理容量怎么提供”。

### Model and Capacity Binding

Provisioned Throughput 不是购买一个可以随意给所有模型使用的通用容量池。

更接近：

```text
选择 model
↓
为该 model 创建 provisioned capacity/resource
↓
应用调用对应 resource
```

因此它比 On-Demand 的模型切换灵活性低。

On-Demand：

```text
不同 workload 可较灵活地选择模型
```

Provisioned：

```text
容量和特定模型资源绑定
```

所以购买之前需要更认真地确认长期 workload 和模型选择。

### Cost and Utilization Trade-off

Provisioned Throughput 不等于一定更便宜。

真正的判断是：

```text
稳定高利用率
→ Provisioned 更值得考虑

低利用率 / 波动大
→ On-Demand 通常更合理
```

可以压成：

| | On-Demand | Provisioned Throughput |
|---|---|---|
| Traffic | 波动 / 未知 | 稳定高负载 |
| Capacity | 按需共享 | 提前预留 |
| Flexibility | 高 | 较低 |
| Cost model | Usage-based | Provisioned capacity |
| Idle capacity cost | 低 | 可能较高 |
| Throughput predictability | 较低 | 更高 |

所以本质上是在交换：

```text
On-Demand
→ 买灵活性

Provisioned Throughput
→ 买容量确定性
```

## Concept Relationships

060 可以整体理解成：

```text
Application
↓
Bedrock Runtime API
↓
Inference
↓
Capacity Mode
├─ On-Demand
└─ Provisioned Throughput
```

选择逻辑：

```text
低频 / 不确定 / 波动大
→ On-Demand

持续 / 稳定 / 高负载
→ Provisioned Throughput
```

考试中看到：

```text
predictable workload
consistently high traffic
stable throughput requirement
```

优先考虑 Provisioned Throughput。

看到：

```text
intermittent workload
unpredictable usage
proof of concept
```

优先考虑 On-Demand。

## Example

假设公司内部 AI Copilot：

```text
数千员工
每天工作时间持续使用
长期高负载
需要较稳定吞吐
```

这类 workload 可以考虑：

```text
Provisioned Throughput
```

而个人面试 Demo：

```text
每天几十次请求
长时间没有流量
使用量不稳定
```

通常更适合：

```text
On-Demand
```

否则会为了没有实际使用的 capacity 持续承担成本。

## Understanding

用户在本节中进一步确认了 `inference` 的含义：

```text
Training
→ 学模型 / 改参数

Inference
→ 用已经训练好的模型产生结果
```

并建立了 Provisioned Throughput 的核心 mental model：

```text
On-Demand
→ 灵活
→ 用多少付多少

Provisioned Throughput
→ 预留推理容量
→ 换取更稳定、可预测的 throughput
```

同时理解：

```text
Converse / InvokeModel
→ API 调用层

On-Demand / Provisioned
→ capacity 层
```

两者不是不同功能的 API，而是同一 inference 调用背后的不同容量模式。

最终压缩为：

> On-Demand 买灵活性，Provisioned Throughput 买容量确定性。

## References

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — AIP-C01 course slides / detailed coverage`

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AIPStudyGuide.pdf — AIP-C01 Study Guide (Detailed)`

- Inherited from source KP; underlying source not re-opened in this session:
  `https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html`
