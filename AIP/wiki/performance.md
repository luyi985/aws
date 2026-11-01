---
title: 推理性能、容量与可靠性
derived_from:
  - aip-operations-modelrouting-038
  - aip-operations-crossregion-039
  - aip-operations-promptcaching-040
  - aip-operations-semanticcache-041
  - aip-operations-latency-042
  - aip-operations-backoff-043
  - aip-operations-circuitbreaker-044
  - aip-integration-eventdriven-057
  - aip-operations-provisionedthroughput-060
  - aip-observability-bedrock-067
last_synced: 2026-11-01
status: current
---

# 推理性能、容量与可靠性

[返回导航](README.md) · [考试覆盖与缺口](exam-coverage.md)

## 把性能问题分解成可测部分

TTFT 是开始输出前的等待；OTPS 是开始后的生成速度；总耗时还与输出长度有关。模型调用变快不一定改善包括检索和工具在内的总时间。

静态路由预先固定路径与模型；动态路由在运行时结合任务特征选择。选择较轻模型要有质量证据，不能只看价格。Cross-Region Inference 利用允许区域的模型容量，不自动同步应用 State、数据库或整个应用。

On-Demand 不预留固定容量；Provisioned Throughput 用容量承诺换取相应供给可预测性，仍需考虑负载、利用率、支持模型及配置。runtime API 是调用方式，容量模式是供给方式；不能把 Converse 当成某一种计费容量模式。

Raw KPs: `aip-operations-modelrouting-038`, `aip-operations-crossregion-039`, `aip-operations-latency-042`, `aip-operations-provisionedthroughput-060`

## 缓存：复用计算还是复用答案

|方式|复用对象|命中条件|主要风险|
|---|---|---|---|
|Prompt caching|重复前缀的处理结果|稳定前缀及模型相关门槛|动态内容破坏命中；TTL/支持差异|
|Semantic cache|以前生成的结果|相似度加范围、权限、版本、新鲜度检查|相似却不可复用、旧答案或跨租户泄露|

Prompt 可以把稳定规则置前、动态请求置后，但不要假定所有模型的最小长度、缓存期限和 checkpoint 规则相同。Semantic cache 命中仍需验证业务条件，例如同一政策问题的地区、用户权限与文档版本是否一致。

评估缓存要同时测命中率、误命中、质量、延迟和成本；提高命中率但复用错误答案不是优化。

Raw KPs: `aip-operations-promptcaching-040`, `aip-operations-semanticcache-041`

## 重试与熔断的机制

退避回答“这个请求什么时候再试”；熔断回答“目前还应不应该调用该下游”。429、暂时 5xx 或网络问题可以按错误类型重试；缺字段、权限或配置错误需要修复本身。

指数退避减少频率，jitter 打散同步重试，最大次数和总 deadline 限制放大。超时不代表动作一定没执行，例如付款已成功但响应丢失，因此副作用操作需要幂等。

~~~mermaid
stateDiagram-v2
    Closed --> Open: 失败达到阈值
    Open --> HalfOpen: 冷却期结束
    HalfOpen --> Closed: 探测满足恢复条件
    HalfOpen --> Open: 探测失败
~~~

Open 时直接拒绝或 fallback；Half-open 只放少量探测，不立即恢复全部流量。恢复可以由新请求发现冷却期已到，也可由调度触发。

Raw KPs: `aip-operations-backoff-043`, `aip-operations-circuitbreaker-044`

## AWS 实现分工与排障案例

Step Functions 管本次 workflow 走到哪一步；DynamoDB 保存不同 execution 共享的下游熔断状态。Closed/Open/Half-open 是应用领域状态，不是 Step Functions 内置的 Task/Choice 等类型。

流程可读取 DynamoDB → Choice 判断 → 正常调用、探测或 fallback。可以用 Lambda 封装判断，也可以使用支持的直接服务集成。仅把熔断状态放在一个 execution 内，其他请求无法共享。

队列积压增长时，先确认下游是否已经限流。若模型容量已满，盲目增加 Worker 会放大 429 和重试。结合 InvocationThrottles、Token、队列积压、重试次数与端到端延迟判断。

本页不提供未经验证的容量公式或通用阈值；具体配额与成本测算仍是 [考纲缺口](exam-coverage.md) 中的后续实践项。

Raw KPs: `aip-operations-circuitbreaker-044`, `aip-integration-eventdriven-057`, `aip-observability-bedrock-067`

## 考试场景：语义缓存的完整判断链

先取得可信的用户、租户与业务对象上下文，再检索相似问题；相似度达标只产生候选，仍需检查业务范围、权限、版本和新鲜度。检查顺序可依实现调整，但不能省略这些约束。

|题目条件|选择与处理|应排除的误解|
|---|---|---|
|通用密码重置问题，表达不同|语义缓存可能复用答案|只有字符串相同才有复用价值|
|订单 123 与订单 456，句式相似|不同业务对象，不能直接复用答案|高相似度证明答案适用|
|结构化订单 API 已有稳定资源键|优先考虑确定性缓存|所有缓存都应加 Embedding|
|缓存政策 v3，当前政策 v4|取新来源、重新生成、更新答案及版本|只改版本标签，或让模型凭记忆回答|
|问题相同，答案随时间变化|按 TTL、版本或业务新鲜度判断|提高相似度阈值可解决过期|

降低阈值可能增加命中与误命中；提高阈值不替代权限、对象和版本检查。模型提取的 ID 需 Schema 与业务验证；结构化上下文已有 ID 时，无需再次让模型猜测。命中率提升而错误复用增加，不能认定优化成功。

Raw KPs: `aip-operations-semanticcache-041`

## 考试场景：退避、熔断与路由

|症状|优先处理|不能替代|
|---|---|---|
|单次暂时失败|分类后退避、jitter、重试上限|业务幂等|
|同一下游持续失败|Open 时拒绝或 fallback；冷却后少量探测|修复下游|
|复杂请求被误分给轻量模型|质量评估、澄清或升级模型|HTTP 成功不等于答案正确|
|简单但高风险动作|模型选择之外保留审批与执行控制|强模型不能替代 HITL|

熔断记录可保存 openedAt 与 cooldown。新请求检查冷却时间，未到期走 fallback，到期进入探测判断；也可由调度触发。到期不等于恢复全部流量。跨进程探测名额的原子领取及探测宕机恢复，仍是 raw 未展开的实现边界。

Raw KPs: `aip-operations-modelrouting-038`, `aip-operations-backoff-043`, `aip-operations-circuitbreaker-044`

## 原始笔记与来源边界

本页综合已批准的 raw；例子、数字和数据结构为教学用途。未将来源链接的存在当作所有产品能力的重新核验。具体原始文档、页码与当时查阅状态保留在各 raw 中。

- [aip-operations-modelrouting-038](../raw/aip-operations-modelrouting-038.md)
- [aip-operations-crossregion-039](../raw/aip-operations-crossregion-039.md)
- [aip-operations-promptcaching-040](../raw/aip-operations-promptcaching-040.md)
- [aip-operations-semanticcache-041](../raw/aip-operations-semanticcache-041.md)
- [aip-operations-latency-042](../raw/aip-operations-latency-042.md)
- [aip-operations-backoff-043](../raw/aip-operations-backoff-043.md)
- [aip-operations-circuitbreaker-044](../raw/aip-operations-circuitbreaker-044.md)
- [aip-integration-eventdriven-057](../raw/aip-integration-eventdriven-057.md)
- [aip-operations-provisionedthroughput-060](../raw/aip-operations-provisionedthroughput-060.md)
- [aip-observability-bedrock-067](../raw/aip-observability-bedrock-067.md)
