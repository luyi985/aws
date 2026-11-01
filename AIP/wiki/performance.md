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
  - aip-operations-provisionedthroughput-060
last_synced: 2026-11-01
status: current
---

# 推理性能、容量与可靠性

## 先量化瓶颈
TTFT 衡量开始输出前的等待，OTPS 衡量生成后的输出速度，总完成时间还受输入和输出长度影响。模型路由按任务质量、成本和延迟选择模型；静态分配预先固定，动态路由在运行时判断。

## 两种缓存
Prompt caching 复用稳定前缀的处理结果，具体门槛与 TTL 依模型而异。Semantic cache 复用相似请求的答案，除了相似度，还需要检查用户范围、权限、版本和新鲜度。相似问题不能直接视为同一业务请求。

## 容量与故障保护
Cross-Region Inference 利用允许区域的推理容量，不等于应用自动具备跨区灾备。Provisioned Throughput 是容量规划选择，要结合负载与成本。

暂时失败使用有上限的指数退避与 jitter；持续失败通过熔断停止无效调用，再有限探测恢复。重试和熔断解决不同阶段的问题，具有副作用的请求还需要幂等控制。权限错误不能通过持续重试修复。

相关：[调用链](integration.md)、[监控](observability.md)。

## Raw 来源

- [aip-operations-modelrouting-038](../raw/aip-operations-modelrouting-038.md)
- [aip-operations-crossregion-039](../raw/aip-operations-crossregion-039.md)
- [aip-operations-promptcaching-040](../raw/aip-operations-promptcaching-040.md)
- [aip-operations-semanticcache-041](../raw/aip-operations-semanticcache-041.md)
- [aip-operations-latency-042](../raw/aip-operations-latency-042.md)
- [aip-operations-backoff-043](../raw/aip-operations-backoff-043.md)
- [aip-operations-circuitbreaker-044](../raw/aip-operations-circuitbreaker-044.md)
- [aip-operations-provisionedthroughput-060](../raw/aip-operations-provisionedthroughput-060.md)
