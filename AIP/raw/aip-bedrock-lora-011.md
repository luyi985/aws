# aip-bedrock-lora-011: LoRA 低秩适配

## Concepts

### LoRA

LoRA（Low-Rank Adaptation）是一种参数高效微调方法：

> 冻结基础模型的大部分权重，只训练少量新增的 low-rank parameters。

可以简单理解为：

```text
Base Model
→ mostly frozen

LoRA Adapter
→ trainable small parameter set
```

因此 LoRA 不需要像 Full Fine-Tuning 那样更新大量模型参数。

### LoRA vs Full Fine-Tuning

```text
Full Fine-Tuning
→ update many / all model weights
→ higher compute / memory / storage cost

LoRA
→ freeze most base-model weights
→ train small low-rank adapters
→ lower compute / memory / storage cost
```

LoRA 属于：

```text
Parameter-Efficient Fine-Tuning
= PEFT
```

核心不是“完全不训练模型”，而是：

> 只训练相对很少的一组适配参数。

### Why LoRA Is Efficient

当前 source 明确支持：

> LoRA 不更新完整模型，而是在通常与 attention 权重相关的位置加入并训练低秩参数。

因此需要训练和保存的参数量更少，通常意味着：

```text
fewer trainable parameters
→ lower memory requirement
→ lower compute requirement
→ smaller storage requirement
```

### Multiple Adapters

LoRA 的一个重要使用思路是：

```text
One Base Model
├─ LoRA Adapter A → Business A
└─ LoRA Adapter B → Business B
```

不需要为每个业务分别保存一整套完整模型权重。

因此可以把 LoRA adapter 理解为：

> 针对某个任务或业务的“小型模型适配增量”，而不是完整模型本身。

### Trade-Off

LoRA 更轻量，但：

> 参数更少不代表模型效果一定和 Full Fine-Tuning 一样好。

因此仍然需要：

```text
LoRA result
vs
baseline / other tuning approach
→ evaluate quality
```

## Understanding

### Core Mental Model

本次学习形成的核心心智模型：

```text
LoRA
= freeze base model
+ train small adapter parameters
```

相比：

```text
Full Fine-Tuning
= update large portions of the model
```

因此 LoRA 的主要价值是：

```text
lower compute
lower memory
lower storage
```

### LoRA Is PEFT

LoRA 属于 Parameter-Efficient Fine-Tuning。

它的目标不是修改尽可能多的参数，而是：

> 用尽可能少的可训练参数实现模型适配。

### Exam-Level Boundary

本次讨论曾扩展到：

```text
ΔW
low-rank matrix
rank r
matrix decomposition
```

这些属于 LoRA 的更深机制说明。

但根据当前 KP source，本次考试学习不要求：

```text
matrix derivation
training code
specific Q/K/V implementation details
```

考试重点应放在：

```text
LoRA
→ PEFT
→ freeze most base-model weights
→ train small low-rank parameters
→ reduce compute / memory / storage
```

### LoRA Is Not Automatically Better

LoRA 更省资源，但不代表：

> 一定比 Full Fine-Tuning 效果更好。

正确理解是：

```text
LoRA
→ more resource-efficient

but
→ quality still needs evaluation
```

## Validation Evidence

如果题目场景是：

> 希望微调一个大模型，但希望减少 GPU memory、compute 和模型存储成本。

则 LoRA 是明显候选。

如果题目描述：

> 更新大量甚至全部基础模型参数。

则更接近 Full Fine-Tuning，而不是 LoRA。

### Exam Mental Model

```text
Need model adaptation?

Want to reduce trainable parameters
and compute / memory / storage?
→ LoRA / PEFT
```

核心记忆：

> LoRA is a parameter-efficient fine-tuning technique that freezes most base-model weights and trains a small number of low-rank adapter parameters.

## Open Questions

- None
