# aip-foundations-modelfamily-003: 基础模型家族与选型

## Concepts

### Model Family（模型家族）
Model Family 是同一厂商或系列的一组 Foundation Models，例如 Claude、Llama、Amazon Nova 等。
选择模型时，不应该简单寻找“最强模型”，而应该根据具体任务反推需要的模型能力。
`Task → Requirements → Model Selection`

### Modality（模态）
首先判断任务需要的 Input / Output Modalities。
例如 `AWS Architecture Diagram + Question → Text` 要求模型至少支持 `Image + Text → Text`。
如果模型只支持 `Text → Text`，即使推理能力更强，也无法原生完成这个任务。
因此 Modality 可以作为模型选型中的硬性筛选条件。

### Capability（能力）
Capability 表示模型完成特定任务的能力，例如 Reasoning、Text Generation、Coding、Vision Understanding。
模型能力只需要达到业务任务所要求的水平。
**Best Model ≠ Strongest Model**
**Best Model = 能够满足任务质量要求，并最符合业务约束的模型。**

### Context Window（上下文窗口）
Context Window 决定一次推理能够容纳和参考多少上下文。
`Document → Tokenization → Required Tokens`
需要判断 `Required Tokens ≤ Model Context Window`。
**Context Window 足够大 ≠ 模型一定能够高质量理解全部内容。**
Context Window 首先解决“装不装得下”；最终质量仍受到模型能力、长上下文表现和文档结构等因素影响。

### Trade-offs（权衡）
满足任务硬要求以后，再比较 Quality、Cost、Latency、Throughput。
例如每天处理 100,000 张商品图片并生成简单描述时，如果两个模型都满足 Modality 和基本 Capability，较便宜、延迟较低的模型可能更合适。

## Understanding

本次学习形成的模型选型方法是：**先筛选，再优化。**

`Task → Required Modality → Required Capability → Required Context Window → 满足硬性要求的候选模型 → Cost / Latency / Throughput / Quality → Model Selection`

1. 先确认模型的 Input / Output Modality 能否满足任务。
2. 再确认 Capability 是否足够完成任务。
3. 如果任务包含大量上下文，检查 Context Window 是否足够。
4. 在能力满足以后，再比较价格、响应速度、吞吐量和质量。

学习过程中形成的关键判断：
> 如果模型的分析能力已经够用，就没有必要仅仅因为另一个模型推理能力更强而选择更昂贵、更慢的模型。

因此模型选型本质上不是寻找绝对最强的模型，而是在任务要求和业务约束之间进行匹配和权衡。

## Open Questions
- None
