# aip-operations-circuitbreaker-044: Step Functions 与 DynamoDB 熔断器

## Concepts

### Circuit Breaker

Circuit Breaker 用来保护持续失败或超时的 downstream service。

核心目标不是“修复”下游，而是：

> 当系统已经判断 downstream 处于持续异常状态时，暂时停止继续调用它。

这样可以避免无意义重试、timeout 堆积、latency 放大、资源浪费和 cascading failure。

### Closed State

`Closed` 是正常状态。

```text
request
→ downstream
→ success / failure
```

请求正常放行，同时系统统计失败情况。如果失败次数、失败率或其他健康指标达到设定阈值：

```text
Closed
→ Open
```

### Open State

`Open` 表示 circuit 已经熔断。

```text
request
→ read circuit state
→ state = OPEN
→ skip downstream call
→ return fallback immediately
```

此时不会继续调用已经持续失败的 downstream。

例如模型服务已经连续 timeout，没有 circuit breaker 时，后续请求仍会继续访问异常服务；有 circuit breaker 后，初始失败使 circuit 进入 OPEN，后续请求直接走 fallback。

### Half-open State

`Open` 不能永久保持。经过 cooldown / recovery window 后，系统需要验证 downstream 是否已经恢复，此时进入：

```text
Open
→ Half-open
```

`Half-open` 不会直接恢复全部流量，而是只允许少量 probe request：

```text
Half-open
→ limited probe request
→ downstream
```

如果 probe 成功：

```text
Half-open
→ Closed
```

如果 probe 失败：

```text
Half-open
→ Open
```

重新进入 cooldown。

因此 Half-open 的作用是：

> 用少量流量测试 downstream 是否恢复，而不是立即恢复所有请求。

### How OPEN Restores to HALF_OPEN

用户提出了一个关键问题：

> If the circuit breaker status is open and requests return early, how does the status restore back to half-open?

常见机制是保存 circuit 的时间信息，例如：

```text
state = OPEN
openedAt = 17:00
cooldown = 60s
```

每次新请求进入时，workflow 读取 DynamoDB：

```text
state = OPEN
→ check now - openedAt
```

如果 cooldown 尚未结束：

```text
→ return fallback immediately
```

如果 cooldown 已经结束：

```text
OPEN
→ HALF_OPEN
→ allow probe request
```

这是一种 lazy transition：

```text
new request
→ read state
→ OPEN?
→ cooldown expired?
   ├─ no  → return fallback
   └─ yes → HALF_OPEN → probe downstream
```

因此并不一定需要后台任务主动修改状态。

也可以通过主动调度实现，例如：

```text
OPEN
→ Wait / scheduled event
→ update state to HALF_OPEN
```

但核心概念相同：

> OPEN 是暂时停止调用；cooldown 到期后再进入 HALF_OPEN 进行恢复探测。

### Step Functions Responsibility

Step Functions 负责 workflow orchestration。

例如：

```text
CheckCircuit
→ CallModel
→ HandleSuccess
→ HandleFailure
→ Fallback
```

它负责读取 circuit state、根据状态决定是否调用 downstream、执行正常调用或 fallback、处理 success / failure，并更新 circuit state。

因此：

```text
Step Functions
→ orchestration / decision flow
```

### DynamoDB Responsibility

DynamoDB 用来保存跨 workflow execution 共享的 circuit state。

例如：

```text
service = model-A
state = OPEN
failureCount = 5
openedAt = 17:00
```

这是必要的，因为不同请求通常属于不同的 Step Functions execution。如果 circuit state 只存在单个 execution 内，就无法实现跨请求共享的熔断。

因此：

```text
DynamoDB
→ shared persistent circuit state
```

### Workflow State vs Circuit State

Workflow state，例如：

```text
CheckCircuit
→ CallModel
→ Fallback
```

表示当前这一次 workflow 执行到哪一步，主要由 Step Functions 管理。

Circuit state：

```text
CLOSED
OPEN
HALF_OPEN
```

表示某个 downstream service 当前整体健康状态，主要保存在 DynamoDB。

因此：

```text
Step Functions
→ execution/workflow state

DynamoDB
→ shared circuit state
```

### Circuit Breaker vs Exponential Backoff

Exponential Backoff：

```text
request failed
→ wait
→ retry
→ wait longer
→ retry
```

解决的是：

> 这个请求下一次什么时候再试？

Circuit Breaker：

```text
many requests failing
→ downstream considered unhealthy
→ OPEN
→ stop new calls
```

解决的是：

> 系统现在还应该继续调用这个 downstream 吗？

可以总结为：

```text
Backoff
→ retry timing

Circuit Breaker
→ whether downstream should be called
```

两者通常可以组合：transient failure 用 exponential backoff；persistent failure 则打开 circuit。

## Concept Relationships

Circuit Breaker 的状态转换为：

```text
           failure threshold reached
Closed  ----------------------------> Open
  ^                                    |
  |                                    |
  | probe succeeds                     | cooldown expires
  |                                    v
  +------------------------------- Half-open
                  probe fails
                     |
                     +--------------> Open
```

整体实现关系：

```text
request
→ Step Functions
→ read DynamoDB circuit state
→ decide whether downstream call is allowed
```

如果 state = CLOSED，则正常调用 downstream。

如果 state = OPEN 且 cooldown 未结束，则直接走 fallback；如果 cooldown 已结束，则进入 HALF_OPEN 并允许 limited probe。

probe 成功：

```text
→ CLOSED
```

probe 失败：

```text
→ OPEN
→ restart cooldown
```

因此核心分工是：

```text
Step Functions
→ 流程怎么走

DynamoDB
→ 大家共享的 circuit 状态是什么
```

## Understanding

用户把 Step Functions 和 LangGraph 做了类比：

> Step Function 和 LangGraph 里的 node function 有点像。

进一步澄清后建立了：

```text
LangGraph node
≈ Step Functions Task state

LangGraph graph
≈ Step Functions state machine
```

同时：

```text
LangGraph conditional edge
≈ Step Functions Choice
```

而在 circuit breaker 场景中：

```text
Step Functions
≈ workflow graph / orchestration

DynamoDB
≈ graph 外部 persistent shared state
```

用户正确判断了当 circuit state 为 `OPEN` 时，新请求应该读取 DynamoDB、识别 OPEN、跳过 model call 并直接进入 fallback，而不是继续调用 downstream。

用户随后进一步追问：

> If the circuit breaker status is open, and requests return early, how to restore the status back to half open?

由此确认了：

```text
OPEN
→ cooldown
→ HALF_OPEN
→ limited probe
```

并理解 OPEN → HALF_OPEN 可以通过下一次请求触发的 lazy transition 完成，而不是必须依赖后台任务主动恢复。

最终 mental model：

```text
Step Functions
→ orchestration / decision

DynamoDB
→ shared persistent circuit state

Backoff
→ control retry timing

Circuit Breaker
→ control whether to call downstream at all

OPEN
→ temporary protection period

HALF_OPEN
→ controlled recovery probe
```

## References

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/NotebookLM Mind Map.png — V. Operational Efficiency > Resiliency Patterns > Circuit Breaker Pattern (Step Functions + DynamoDB)`

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 371, ‘Step Functions: Circuit Breakers’`

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AIPStudyGuide.pdf — PDF p. 7, ‘System Resiliency’`
