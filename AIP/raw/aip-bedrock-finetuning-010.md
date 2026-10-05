# aip-bedrock-finetuning-010: 监督式微调

## Concepts

### Supervised Fine-Tuning

监督式微调（supervised fine-tuning）使用带有期望输出的标注样本继续调整基础模型参数，使模型更稳定地表现出特定任务行为、输出模式或风格。

核心模型：

```text
Base Model
→ Labeled Data
→ Fine-Tuning
→ Customized Model Behavior
```

文本模型中，source 支持的典型训练形式是：

```text
Prompt
→ Completion
```

例如：

```text
Input:
"Refund requested after 45 days"

Expected Output:
"Policy exception required"
```

模型通过大量这种输入—期望输出样本，学习更稳定的目标行为。

### Labeled Data

Fine-Tuning 的关键输入不是“很多原始数据”，而是：

> 高质量、与目标行为一致的 labeled data。

例如分类场景：

```text
Input:
"This payslip is missing super contribution."

Expected Output:
{
  "category": "PAYROLL_ERROR",
  "priority": "HIGH"
}
```

适合 Fine-Tuning 的数据通常应经过：

```text
clean
→ deduplicate
→ validate labels
→ remove obsolete categories
```

重点不是单纯数据量大，而是：

> 数据质量 + 与目标任务的一致性。

### S3

在 Bedrock 场景中，训练数据可以由 S3 提供。

典型链路：

```text
Prepared Labeled Dataset
→ S3
→ Fine-Tuning
```

S3 在这里主要承担 training data storage / source 的角色，而不是 Fine-Tuning 算法本身。

### Supported Models

不是所有 Bedrock 模型都一定支持 Fine-Tuning。

当前 source 举出的可定制模型家族示例包括：

- Titan
- Cohere
- Meta

考试时更稳的判断方式是：

> 在选择 Fine-Tuning 前，先确认目标模型是否支持 customization / fine-tuning。

本 KP 不要求记实时支持矩阵。

### Independent Evaluation

训练完成后，应使用未参与训练的数据进行独立评估。

```text
Labeled Dataset
├─ Training Set
└─ Evaluation Set
```

Training Set：

```text
用于模型学习
```

Evaluation Set：

```text
不参与训练
→ 用于验证泛化效果
```

如果直接用训练数据评估，可能只是验证模型记住了训练样本，而不是证明它真正学会了任务模式。

## Understanding

### Fine-Tuning Solves Behavior Problems

用户形成的核心判断：

> Fine-Tuning 更适合改变模型“怎么回答”，而不是给模型补充实时变化的事实。

例如：

```text
要求模型稳定输出固定 JSON schema
要求稳定做分类
要求保持固定风格
要求遵循特定任务模式
```

这些都属于 model behavior / task behavior。

### Fine-Tuning vs RAG

核心取舍：

```text
Need fresh / changing knowledge?
→ RAG

Need stable learned behavior / task pattern?
→ Fine-Tuning
```

例如：

每天更新的 HR policy：

```text
Latest HR Policy
→ Retrieval
→ Context
→ Model Answer
```

应优先考虑 RAG。

原因是：

> policy 频繁变化，需要模型始终基于最新数据回答。

Fine-Tuning 不能替代事实检索，也不会因为外部政策变化而自动更新模型参数。

### Prompt / RAG Before Fine-Tuning

当前 source 的 Logical Path 强调：

```text
先确认 Prompt 或 RAG 是否已满足需求
→ 如果仍不足
→ 再考虑 Fine-Tuning
```

Fine-Tuning 会带来额外：

- training
- evaluation
- maintenance
- drift
- retraining

成本，因此不是所有行为问题都需要直接进入 Fine-Tuning。

### Data Quality Before Fine-Tuning

场景：

公司拥有大量客服工单和标准分类结果，但数据中存在：

- duplication
- wrong labels
- obsolete categories
- dirty data

正确思路：

```text
Clean
→ Deduplicate
→ Validate Labels
→ Remove Obsolete Categories
→ Split Train / Evaluation
→ Fine-Tune
```

用户的判断：

> 即使 labeled data 数量很大，如果质量有问题，也不能直接 Fine-Tune。

### Relationship with Data Wrangler and Glue

结合前面已学习的 data preparation，可以形成工程上的理解：

```text
Raw / Business Data
→ Data Preparation
→ Clean Labeled Dataset
→ S3
→ Fine-Tuning
→ Evaluation
```

其中：

```text
还在探索怎么清洗 / 转换
→ Data Wrangler

处理规则已经稳定，需要批量或自动执行
→ Glue ETL
```

然后：

```text
Prepared Labeled Dataset
→ Fine-Tuning
```

Important Boundary：

> 当前 010 source 并没有规定 Fine-Tuning 必须在 Data Wrangler 或 Glue 之后。

Source 明确支持的是：

```text
high-quality labeled data
→ S3
→ supported model fine-tuning
→ independent evaluation
```

Data Wrangler / Glue 作为 preparation 阶段，是结合前面 KP 形成的工程理解，而不是当前 source 规定的固定流程。

## Validation Evidence

### Scenario 1 — Stable Classification Behavior

公司已有大量：

```text
Support Ticket
→ Standard Classification
```

希望模型未来稳定做分类。

考虑 Fine-Tuning 的原因：

1. 目标是改变并稳定模型 task behavior；
2. 已有大量 labeled samples。

但如果数据存在重复、错误标签和废弃分类，应先：

```text
clean / validate
→ then Fine-Tune
```

### Scenario 2 — Frequently Updated Knowledge

公司要求模型回答每天更新的 HR policy。

选择：

**RAG**

理由：

> 需要基于 fresh data 持续回答，而不是把频繁变化的事实固化进模型参数。

### Scenario 3 — Strict Output Pattern

要求模型长期稳定输出：

```json
{
  "category": "...",
  "priority": "...",
  "reason": "..."
}
```

并拥有大量高质量“输入 → 标准输出”样本。

Fine-Tuning 是合理候选方案。

但如果 Prompt 已经能稳定满足要求，则不一定需要直接进行 Fine-Tuning。

当前理解达到本 KP 的 **exam-ready working depth**。

## Open Questions

- None
