# aip-operations-crossregion-039: Cross-Region Inference

## Concepts

### Cross-Region Inference

Cross-Region Inference 允许模型推理请求在多个被允许的 AWS Region 之间使用可用容量。

核心目标是：

```text
single-region inference
→ only one Region's capacity

cross-region inference
→ use capacity across multiple approved Regions
→ improve throughput / availability
```

它主要解决的是 inference capacity 和 availability 问题。

### Inference Routing vs Application Failover

Cross-Region Inference 只影响模型推理流量的调度，不等于整个应用进行跨区域故障转移。

```text
Cross-Region Inference
→ inference traffic routing

Application failover
→ app / API / database / other dependencies fail over
```

因此，应用本身可以仍然运行在原 Region，只是模型推理请求被路由到其他允许的 Region。

### Capacity and Quotas

Cross-Region Inference 可以扩大可使用的容量池，但并不意味着无限容量。

```text
more Regions
→ more scheduling choices

but
→ capacity is still bounded
```

仍然需要考虑：

```text
service quotas
model availability
regional capacity
```

所以：

```text
Cross-Region Inference
≠ unlimited quota
```

### Geographic vs Global Profiles

资料中区分两种 routing profile 思路：

```text
geographic profile
→ routing bounded by geography
→ useful when data residency matters

global profile
→ broader Region pool
→ maximize available throughput
```

如果存在严格的数据驻留或合规要求，应优先考虑 geographic boundary，而不是单纯追求最大吞吐。

### Compliance and Policy Boundaries

Cross-Region Inference 不能绕过组织政策或合规限制。

目标 Region 是否可用，需要同时满足两个条件：

```text
capacity / availability
→ can this Region serve the request?

policy / compliance
→ is this Region allowed to serve the request?
```

例如，如果 AWS Organizations 的 SCP 禁止某个 Region：

```text
target Region has capacity
+ SCP denies access

→ request cannot be routed there
```

因此：

```text
Cross-Region Inference
≠ bypass SCP
≠ bypass compliance
≠ ignore data residency
```

## Understanding

用户首先准确理解：

> 它只是模型 routing 到其他 region 来缓解本区 capacity shortage。

由此建立了最关键边界：

```text
Cross-Region Inference
→ only model inference traffic is routed

not
→ entire application failover
```

对于数据驻留场景，用户判断：

> 受 compliance 限制，澳洲用户数据不能在境外模型处理。

因此理解到 global profile 虽然可以扩大容量池，但不能在有 residency / compliance 限制时无条件使用。

对于 SCP 场景，用户明确判断：

> 不能。

即使目标 Region 有 capacity，只要 SCP 不允许，该 Region 就不能被用作推理目标。

对于 quota，用户进一步指出：

> 虽然可以借用 different region 的 capacity，但依旧不是无限的。

最终 mental model：

```text
Cross-Region Inference
→ broader inference capacity pool
→ better availability / throughput

but still constrained by:
→ quota
→ model availability
→ approved Regions
→ compliance / data residency
→ SCP
```

考试场景下可优先识别：

```text
bursty traffic
+ single-region capacity pressure
+ want better inference availability
→ Cross-Region Inference
```

如果题目同时强调：

```text
data must remain within approved geography
```

则应优先考虑 geographic boundary，而不是只追求 global throughput。

## References

- `AIP/preRaw/NotebookLM Mind Map.png — V. Operational Efficiency > Optimization > Cross-Region Inference (Quotas & Availability)`
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 304-305, ‘Bedrock Cross-Region Inference’`
- `AIP/preRaw/AIPStudyGuide.pdf — PDF p. 6, ‘IV. Operational Efficiency and Optimization’`
