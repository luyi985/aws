# aip-operations-modelrouting-038: 静态与动态模型路由

## Concepts

### Model Routing

Model routing 为每个请求选择合适模型，目标是在质量、成本与延迟之间做权衡。

不同请求未必需要相同模型能力，因此可以把简单任务交给较轻量模型，把复杂任务交给能力更强的模型。

### Static Routing

Static routing 使用预先确定的模型映射。

```text
Static routing
→ fixed model assignment
```

例如：

```text
FAQ path
→ Model A

Deep analysis path
→ Model B
```

关键点不是“有没有规则”，而是某类请求在进入运行时判断前，模型分配已经被固定。

### Dynamic Routing

Dynamic routing 在每次请求到来后，根据该请求的运行时特征实时选择模型。

```text
Dynamic routing
→ per-request model selection
```

可能参考：

```text
complexity
risk
load
expected quality
```

因此 dynamic routing 不等于“必须使用 LLM 做 router”。LLM-based classification 只是其中一种实现方式。

### Static vs Dynamic

最核心的区别：

```text
Static
→ model assignment is fixed before evaluating the individual request

Dynamic
→ model is selected per request based on runtime characteristics
```

### Routing Failure and Fallback

动态路由可能误判。

例如：

```text
complex task
→ classified as simple
→ weaker model selected
→ answer still returned
→ quality drops
```

这类问题可能是静默质量下降，因此需要监控、评估和 fallback。

Fallback 可以包括：

```text
clarify
reclassify
escalate to a stronger model
```

### Risk as a Routing Signal

任务复杂度和任务风险不是同一维度。

```text
complexity
+ risk
→ routing decision
```

简单但高风险的请求仍可能需要更保守的模型选择和额外执行控制。

## Understanding

用户最初把 dynamic routing 理解为：

```text
user query
→ model analyzes query
→ classify
→ route to a model
```

这是一种有效的 LLM-based dynamic routing 实现。

用户对 static routing 的例子是：

```text
user selects query type
→ fixed model mapping
```

随后进一步澄清：static routing 不要求用户手动选择，只要模型分配是预先固定的，就属于 static。

用户指出 dynamic routing 的误判风险：

> 如果复杂请求被误判成简单请求，模型仍然可能给出结果，但质量下降，而且用户未必知道发生了误判。

用户提出的 fallback 思路：

```text
routing confidence below threshold
→ ask user to clarify
or
→ enrich query and classify again
```

并进一步理解到低置信度时也可以直接升级到更强模型。

对于高风险但简单的任务，用户判断：

> 这个需要 HITL。

由此形成跨层边界：

```text
Model routing
→ decide which model should handle the request

HITL / execution control
→ decide whether a high-risk action may proceed
```

用户曾对 Static vs Dynamic 的边界产生混淆，最终通过以下例子完成修正：

```text
premium user → always Claude
free user → always smaller model
```

用户正确判断这是 static routing，因为模型映射已经固定，不会根据本次 query 的特征重新选择。

最终 mental model：

```text
Static
→ fixed model assignment

Dynamic
→ per-request runtime model selection

Dynamic
≠ must use LLM

Routing quality
→ requires fallback and evaluation
```

## References

- `AIP/preRaw/NotebookLM Mind Map.png — V. Operational Efficiency > Optimization > Intelligent Model Routing (Static vs. Dynamic)`
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 288 and 296, ‘Cost-Effective Model Selection’ and ‘Building Responsive AI Systems’`
- `AIP/preRaw/AIPStudyGuide.pdf — PDF p. 6, ‘Model Selection & Routing’`
