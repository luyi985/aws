# aip-operations-backoff-043: 指数退避与抖动

## Concepts

### Exponential Backoff

Exponential backoff 用于处理临时性、可重试错误。

核心思想是：

```text
request fails
→ wait
→ retry

fails again
→ wait longer
→ retry again
```

连续失败后逐步拉长重试间隔，可以减少对已经处于压力状态的服务继续施压。

### Jitter

如果很多客户端同时失败，即使都使用 exponential backoff，仍可能在相同时间点一起重试：

```text
100 clients
→ retry after 1s
→ retry after 2s
→ retry after 4s
```

这会造成 synchronized retry / thundering herd。

Jitter 在等待时间中加入随机性：

```text
base backoff
+ random variation
→ clients retry at different times
```

因此：

```text
backoff
→ reduce retry frequency

jitter
→ reduce retry synchronization
```

### Retryable vs Non-Retryable Errors

不是所有错误都应该 retry。

可重试错误通常具有临时性：

```text
429 Too Many Requests
transient 5xx error
timeout
temporary connection issue
```

这类问题有可能随着时间恢复。

而下面这类错误通常不应该盲目 retry：

```text
400 invalid request
validation error
permission/configuration error
```

例如：

```text
400 Bad Request
because modelId is missing
```

等待再久也不会自动修复 request 本身。

因此：

```text
Retryable error
→ backoff + jitter

Non-retryable error
→ fail fast / fix the request
```

### Retry Limits

即使错误属于 retryable，也不能无限重试。

需要设置：

```text
max retries
→ limit retry count

overall timeout / retry deadline
→ limit total waiting time
```

完整 retry policy 可以理解为：

```text
error classification
+ exponential backoff
+ jitter
+ max retries / timeout
```

### Idempotency and Retry Safety

对于有副作用的操作，retry 还需要考虑 idempotency。

例如：

```text
payment succeeds
→ response is lost
→ client sees timeout
→ retries
→ payment may execute twice
```

因此：

```text
retry safety
depends on idempotency
```

可以使用 idempotency key / request ID，让服务端识别重复请求，避免同一个业务操作被执行多次。

## Understanding

用户首先理解到，如果 100 个客户端收到 429 后全部固定 1 秒重试：

> 大概率还会失败，因为会再次形成同样的流量压力。

用户理解 exponential backoff + jitter 可以提高恢复机会。

进一步整理为：

```text
Exponential backoff
→ 减少重试频率

Jitter
→ 打散不同客户端的重试时间
```

对于 `400 Bad Request: modelId missing`，用户最初认为应该 retry，因为担心过快重试造成 traffic blocking。

这里进行了纠正：

```text
400 invalid request
→ request 本身有问题
→ waiting cannot fix it
→ should not retry blindly
```

用户随后明确理解：

> 只有 recoverable / temporary error 才适合 retry。

对于无限重试问题，用户指出：

> 如果 retry 一直失败，用户就会一直等下去，所以 max retry + timeout 是为了设置限制，避免 infinite retry。

因此：

```text
retryable
≠ retry forever
```

最后，对于扣款场景，用户准确指出：

> 第一次其实已经成功，但 response 丢失后再次 retry，可能会再扣一次钱。

并进一步判断：

> 这种情况需要做幂等检查。

最终 mental model：

```text
1. classify error
   → retryable or non-retryable

2. if retryable
   → exponential backoff

3. add jitter
   → avoid synchronized retries

4. set max retries / timeout
   → avoid infinite waiting

5. side-effect operation
   → require idempotency protection
```

## References

- `AIP/preRaw/NotebookLM Mind Map.png — V. Operational Efficiency > Resiliency Patterns > Exponential Backoff & Jitter`
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 302, ‘Exponential Backoff’`
- `AIP/preRaw/AIPStudyGuide.pdf — PDF p. 7, ‘System Resiliency’`
