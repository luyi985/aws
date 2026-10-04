# aip-bedrock-continuedpretraining-012: 持续预训练

## Concepts

### Continued Pre-training

Continued Pre-training 是在已有 Base Model 的基础上，继续使用特定领域的数据进行训练。

它的主要目标不是教模型完成某个特定任务，而是让模型进一步适应某个领域的：

- Terminology
- Language patterns
- Domain knowledge representation
- Data / domain distribution

例如：

大量未标注的法律文档
→ Continued Pre-training
→ 模型更加熟悉法律领域的术语和文本表达方式

### Unlabeled Data

Continued Pre-training 可以使用没有人工标签的文本。

例如：

- Legal documents
- Medical literature
- Financial documents
- Industry-specific text

这些数据不需要组织成：

Prompt → Expected Completion

模型继续通过 pre-training objective 从这些 domain documents 中学习。

### Continued Pre-training vs Fine-tuning

两者都属于 Model Customization，并且都会改变模型参数，但目标和训练数据不同。

Continued Pre-training：

Unlabeled domain data
→ Domain adaptation

Fine-tuning：

Labeled / Prompt-Completion examples
→ Task / behavior adaptation

因此可以简单理解为：

Continued Pre-training = 学领域

Fine-tuning = 学任务 / 行为

### Continued Pre-training vs RAG

Continued Pre-training 会改变模型本身。

RAG 不需要改变模型参数，而是在 inference 时从 external knowledge store 检索相关信息，并作为 context 提供给模型。

对于频繁变化的知识：

Knowledge update
→ Document / Index update
→ Retrieval

通常比重新训练模型更加灵活。

因此：

Continued Pre-training 更适合 domain adaptation。

RAG 更适合需要 freshness、快速更新和 external knowledge retrieval 的场景。

## Understanding

- Continued Pre-training 与 Fine-tuning 都属于 Model Customization，但解决的问题不同。
- Continued Pre-training 主要使用 unlabeled data，让模型适应特定 domain 的语言和数据分布。
- Fine-tuning 更强调通过 labeled / prompt-completion examples 学习指定任务或行为。
- 如果大量领域文本没有人工标注，而目标只是让模型整体更加熟悉该 domain，Continued Pre-training 更匹配。
- 如果公司内部知识频繁变化，RAG 通常更合适，因为成本更低、更新速度更快，并且不需要每次知识变化都重新训练模型。
- Continued Pre-training 不应该简单理解成“把最新事实存进模型”。它更重要的作用是 domain adaptation。

可以使用下面的判断方式：

Domain adaptation + unlabeled data
→ Continued Pre-training

Desired task behavior + labeled examples
→ Fine-tuning

Fresh / changing external knowledge
→ RAG

## Open Questions

- None
