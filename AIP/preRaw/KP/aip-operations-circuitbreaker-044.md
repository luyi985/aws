---
id: aip-operations-circuitbreaker-044
title: Step Functions 与 DynamoDB 熔断器
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — V. Operational Efficiency > Resiliency Patterns > Circuit Breaker Pattern (Step Functions + DynamoDB)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 371, ‘Step Functions: Circuit Breakers’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 7, ‘System Resiliency’"
dependencies:
  - aip-operations-backoff-043
---

# aip-operations-circuitbreaker-044: Step Functions 与 DynamoDB 熔断器

## Learning Objective

能够解释熔断器的状态转换，以及 Step Functions 与 DynamoDB 在示例实现中的分工。

## Scope

- Included: Closed、Open、Half-open 状态，工作流编排与共享状态存储。
- Excluded: 完整 ASL 定义、表结构、并发一致性证明和生产阈值。

## Source Context

导图把 Circuit Breaker Pattern 与 Step Functions + DynamoDB 组合关联。

## Knowledge Point

熔断器模式（circuit breaker pattern）在下游持续失败时暂时阻止新调用，恢复窗口后再试探。Step Functions 可编排判断与调用步骤，DynamoDB 可保存跨执行共享的熔断状态。

## PDF Grounding

详细课件把 circuit breaker 定义为阻止继续调用正在超时或失败的服务，并在服务恢复后重新放行；示例实现组合 Step Functions、Lambda 与 DynamoDB 来保护 AI workflow。Study Guide 同样把 Step Functions + DynamoDB 熔断器与 exponential backoff 并列为容错模式。

## Logical Path

1. Closed 状态正常调用并统计失败。
2. 达到阈值后进入 Open，快速失败以保护下游。
3. 等待期后进入 Half-open，允许少量试探请求。
4. 实现必须处理状态过期、并发更新和业务回退。

## Key Terms

- 熔断器（`circuit breaker`）：按下游健康状态允许或阻止调用的模式。
- 半开状态（`half-open state`）：恢复窗口后有限试探的状态。

## Example

示意示例：模型端点连续失败后，工作流读取 DynamoDB 的 Open 状态并直接走备用响应；等待后允许一次试探。该例展示状态转换。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“V. Operational Efficiency > Resiliency Patterns > Circuit Breaker Pattern (Step Functions + DynamoDB)”支持模式及服务组合。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 371 页支持失败服务保护、恢复检测及 Step Functions/Lambda/DynamoDB 组合。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 7 页“System Resiliency”支持熔断器用于模型故障与工作流保护。
