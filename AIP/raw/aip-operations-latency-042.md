# aip-operations-latency-042: 延迟优化推理与 TTFT、OTPS

## Concepts

### TTFT

TTFT（Time To First Token）衡量：

> 从请求发出，到第一个输出 token 出现所经历的时间。

典型链路：

```text
request
→ network / queue
→ input processing
→ first output token
```

因此 TTFT 主要反映：

```text
how fast generation starts
```

也就是用户多久能看到模型开始响应。

---

### OTPS

OTPS（Output Tokens Per Second）衡量：

> 模型开始生成之后，每秒输出多少 token。

典型过程：

```text
first token
→ token 2
→ token 3
→ ...
```

因此 OTPS 主要反映：

```text
how fast generation continues
```

也就是模型开始回答后，持续输出内容的速度。

---

### TTFT vs OTPS

两者测量的是不同阶段：

```text
TTFT
→ start speed

OTPS
→ generation speed
```

可能出现：

```text
TTFT low
OTPS low
```

表示很快开始回答，但后续生成较慢。

也可能：

```text
TTFT high
OTPS high
```

表示前面等得久，但一旦开始生成，后面非常快。

因此单看一个指标无法完整判断用户体验。

---

### Short vs Long Responses

对于很短的回答：

```text
TTFT
→ 对感知速度影响更大
```

因为首个 token 出现后，很快就结束了。

对于很长的回答：

```text
OTPS
→ 对总时长的影响越来越大
```

例如两个模型：

```text
Model A
TTFT = 0.5s
OTPS = 20

Model B
TTFT = 2s
OTPS = 80
```

短回答时，A 可能感觉更快。

长回答时，B 虽然起步更慢，但后续生成快很多，最终总耗时可能更低。

---

### End-to-End Latency

TTFT 和 OTPS 都不是完整的 end-to-end latency。

完整链路可以理解成：

```text
request
→ network / queue / input processing
→ first token
→ remaining generation
→ app processing / rendering
→ complete result
```

因此：

```text
TTFT
→ 多久开始

OTPS
→ 开始后多快

End-to-End Latency
→ 整体多久结束
```

三个指标关注的阶段不同。

---

### Inference Performance vs Model Quality

TTFT 和 OTPS 可以看作 inference performance metrics。

它们测量的是：

```text
speed / latency behavior
```

而不是：

```text
accuracy
reasoning quality
faithfulness
correctness
hallucination rate
```

因此：

> 一个模型 TTFT 很低、OTPS 很高，只能说明它生成得快，不代表它回答得更好。

可以分成：

```text
speed performance
→ TTFT / OTPS / end-to-end latency

quality performance
→ correctness / faithfulness / task success
```

---

### Measurement

TTFT / OTPS 不是 Bedrock 专属指标。

任何支持 streaming 的 LLM serving 系统，都可以通过时间戳测量。

通用测量方式：

```text
t0 = request sent
t1 = first token received
t2 = last token received
```

因此：

```text
TTFT = t1 - t0
```

而 OTPS 可以通过输出 token 数量和生成阶段时长推导。

---

### Bedrock Measurement

在 Amazon Bedrock 场景中，可以通过 CloudWatch 监控与推理延迟相关的指标。

AWS Bedrock runtime 会发布包括：

```text
TimeToFirstToken
InvocationLatency
OutputTokenCount
InvocationThrottles
client/server errors
```

其中 TimeToFirstToken 适用于 streaming API，例如 ConverseStream 与 InvokeModelWithResponseStream。OTPS 可以由 OutputTokenCount、InvocationLatency 与 TimeToFirstToken 推导。

这些指标可以帮助定位：

```text
slow first response
slow total generation
capacity / throttling issues
```

Bedrock 还支持 latency-optimized inference 配置，用于改善响应性能。

---

### Benchmark / Load Test

工程实践中，可以通过：

```text
custom benchmark script
load testing tools
streaming timestamps
token count
```

测量不同模型和不同并发条件下的 TTFT / OTPS。

性能分析通常不会只看 average，还会关注 percentile，例如：

```text
p50
p95
p99
```

因为 percentile 能帮助观察延迟分布和长尾表现。

---

## Concept Relationships

整个 latency mental model 可以整理为：

```text
request
→ pre-generation latency
→ first token
   = TTFT

→ streaming generation
   = OTPS

→ application / rendering
→ complete result
   = end-to-end latency
```

因此：

```text
TTFT
≠ OTPS
≠ End-to-End Latency
```

但三者共同决定用户对系统速度的感知。

另外：

```text
TTFT / OTPS
→ inference speed

correctness / faithfulness
→ model quality
```

两类指标不能混为一谈。

---

## Understanding

用户首先确认：

> 这两个指标是测量模型性能的？

随后建立了更准确的区分：

```text
TTFT / OTPS
→ measure inference speed
→ not full model quality
```

并理解：

```text
TTFT
→ 多久开始输出

OTPS
→ 开始后输出多快
```

用户进一步询问：

> 通常有什么工具测试这两个 metric？

由此确认：

```text
Bedrock
→ CloudWatch

General LLM serving
→ benchmark script / streaming timing / load test
```

用户随后追问：

> 仅限 Bedrock 模型对吗？

进一步建立：

```text
TTFT / OTPS
→ general LLM inference metrics

CloudWatch monitoring
→ Bedrock-specific monitoring approach
```

最终形成：

```text
TTFT
→ start responsiveness

OTPS
→ generation throughput

End-to-End latency
→ complete user-perceived response time
```

---

## References

- Inherited from source KP; underlying source not re-opened in this session: `../preRaw/NotebookLM Mind Map.png — V. Operational Efficiency > Performance & Caching > Latency Optimized Inference (TTFT, OTPS)`
- Inherited from source KP; underlying source not re-opened in this session: `../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 286 and 295, ‘Other Stuff CloudWatch Monitors’ and ‘Building Responsive AI Systems’`
- Inherited from source KP; underlying source not re-opened in this session: `../preRaw/AIPStudyGuide.pdf — PDF p. 6, ‘Latency and Caching’`
- Directly consulted during grounding: Amazon Bedrock User Guide — Monitor bedrock-runtime inference using CloudWatch metrics — https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring-runtime-metrics.html
- Directly consulted during grounding: Amazon Bedrock User Guide — Diagnose InvocationLatency increases using output tokens per second (OTPS) — https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring-runtime-otps.html
- Directly consulted during grounding: Amazon CloudWatch User Guide — CloudWatch statistics definitions — https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html
