# aip-foundations-prompttechniques-004: Zero-shot、Few-shot 与 Chain-of-Thought

## Concepts

### Zero-shot

Zero-shot 指不给模型示例，直接描述任务并要求完成。

例如：

`把下面评论分类成 Positive 或 Negative：The service was excellent.`

适合：

- 常见任务
- 规则简单
- 模型本身已经熟悉
- 不需要特殊业务校准

可以简单理解为：

`Zero-shot = 直接给任务`

### Few-shot

Few-shot 指在正式任务前，先提供少量输入与输出示例，让模型模仿这些模式完成新任务。

例如：

`I love this product. → Positive`

`This is terrible. → Negative`

`The service was excellent. → ?`

Few-shot 特别适合：

- 公司内部有特殊分类标准
- 不同类别边界不明显
- 需要固定输出风格
- 需要通过示例表达隐含规则

例如 support ticket 分类中，如果公司内部对 `Bug` 与 `Feature Request` 的定义比较特殊，可以通过 few-shot 示例直接向模型展示判定边界。

可以理解为：

`Few-shot = 用示例告诉模型“应该像什么”`

### Chain-of-Thought

Chain-of-Thought（CoT）用于需要多步推理的复杂任务。

它的核心思想是：

**将复杂问题拆成多个推理步骤，而不是直接从输入跳到最终答案。**

例如：

`API Gateway → Lambda → DynamoDB`

出现请求延迟时，可以要求模型按顺序分析：

1. API Gateway 是否产生延迟
2. Lambda 是否存在 cold start、duration、throttling 等问题
3. DynamoDB 是否存在 throttling 或响应延迟
4. 根据证据判断最可能的瓶颈

因此：

`CoT = 让模型按步骤分析问题`

实际应用中，更适合要求模型给出结构化的分析步骤、判断依据和结论，而不是要求暴露完整内部思维过程。

### 三者的选择逻辑

可以用下面的框架快速判断：

`简单、常见任务 → Zero-shot`

`需要示例校准 → Few-shot`

`需要多步推理 → CoT`

例如：

客户情绪分类：

`Positive / Neutral / Negative`

如果没有特殊业务规则，Zero-shot 通常已经足够。

如果公司内部有特殊分类边界，则 Few-shot 更合适。

如果任务是分析复杂 AWS 调用链中的性能瓶颈，则更适合 CoT。

### Few-shot 与 CoT 可以组合

Few-shot 和 CoT 并不互斥。

一个复杂任务可以同时使用：

`Few-shot examples + CoT-style reasoning`

例如先提供几个标准故障分析范例，再让模型按照类似方法分析新的故障案例。

因此 Prompt Technique 并不是严格的“三选一”，而是根据任务特点组合使用。

## Understanding

本次学习形成了以下理解：

- Zero-shot 适合模型本身已经熟悉、规则简单的任务。
- Few-shot 适合通过示例表达特殊业务规则或分类边界。
- CoT 适合中间存在多个推理步骤的复杂任务。
- Few-shot 更像是在教模型“像什么”。
- CoT 更像是在规定模型“按什么步骤分析”。
- Few-shot 和 CoT 可以组合使用，并非互斥。

对 AWS 场景的理解：

如果请求路径是：

`API Gateway → Lambda → DynamoDB`

并要求定位性能瓶颈，这不是简单的输入到输出映射，而是需要沿多个组件逐步分析，因此更适合 CoT 风格的结构化推理。

## Open Questions

- None
