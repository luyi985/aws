# aip-bedrock-customimport-013: 从 SageMaker 导入自定义模型

## Concepts

### Custom Model Import

Custom Model Import 用于把已经训练或调优完成、且与 Bedrock 兼容的 model artifact 导入 Bedrock 的托管推理环境。

核心路径：

```text
SageMaker
→ Train / Tune Model
→ Export Model Artifact
→ Bedrock Custom Model Import
→ Bedrock Inference
→ GenAI Application
```

这里的重点是：

> Import = 导入已有模型资产，而不是重新训练模型。

### Model Artifact

Model artifact 是可部署的模型资产，例如：

```text
model weights
configuration
other required model files
```

当前 source 强调，导入前需要确认兼容性，包括：

- model architecture
- weight format
- runtime requirements

并不是所有模型都可以直接导入 Bedrock。

### Import Is Not Retraining

Custom Model Import 不负责重新执行训练流程。

也就是说：

```text
Train / Fine-Tune
→ already completed

Custom Model Import
→ consume existing model artifact
```

因此它解决的问题不是：

> “怎么训练这个模型？”

而是：

> “这个模型已经训练好了，怎么让 Bedrock application 使用它？”

### Bedrock Inference

当前学习中可以把 Bedrock inference 理解为：

> GenAI application 调用模型的托管推理层。

整体关系：

```text
Application
→ Bedrock
→ Model Inference
→ Response
```

通过 Custom Model Import，SageMaker 等环境中已经训练好的兼容模型，可以进入 Bedrock inference 路径。

### Import Boundary

Custom Model Import 主要导入 model artifact。

它不会自动把 SageMaker 中的整个训练环境迁移到 Bedrock。

例如不会自动迁移：

```text
training jobs
preprocessing pipeline
full training workflow
all runtime dependencies
```

可以记成：

> 搬模型，不搬训练工厂。

## Understanding

### SageMaker and Bedrock Relationship

本次学习形成的心智模型：

```text
SageMaker
= data preparation + train / tune + deploy / MLOps

Bedrock
= foundation model / GenAI inference + customization + application integration
```

两者不是替代关系，而是可以衔接。

例如：

```text
SageMaker
→ train / tune
→ model artifact
→ Bedrock Custom Model Import
→ Bedrock inference
```

因此 SageMaker 可以承担训练侧工作，而 Bedrock 可以承担 GenAI application 的托管 inference。

### SageMaker Is Not the Only Tuning Path

前一个 KP 已经学习过：

```text
Bedrock Fine-Tuning
→ labeled data
→ supported foundation model
→ customized model behavior
```

而 SageMaker 也可以训练或调优模型。

因此不能理解为：

> 只有 SageMaker 才可以调优模型。

更准确的是：

```text
Bedrock
→ managed fine-tuning for supported foundation models

SageMaker
→ broader model training / tuning workflow
```

### Data Preparation to Model Serving

结合前面 Data Wrangler 和 Fine-Tuning，可以形成完整工程图：

```text
Raw Data
→ Data Wrangler / other preparation
→ Clean / Validated Dataset
→ SageMaker Train / Tune
→ Model Artifact
→ Bedrock Custom Model Import
→ Bedrock Inference
→ GenAI Application
```

这个流程不是当前 KP source 规定的唯一固定流程，而是把前面几个 KP 串起来形成的工程理解。

### Why Use Custom Model Import

适用场景：

团队已经在 SageMaker 或其他兼容环境中完成模型训练或调优。

需求是：

```text
Do not retrain
→ reuse existing model artifact
→ expose model through Bedrock inference
```

这种情况下，Custom Model Import 是合理选择。

## Validation Evidence

### Scenario 1 — Already Trained Model

团队已经在 SageMaker 中训练好领域模型，希望 Bedrock application 使用它。

正确判断：

**Custom Model Import**

原因：

> 模型已经完成训练，因此需要的是把已有 model artifact 导入 Bedrock，而不是重新执行训练。

### Scenario 2 — Full Pipeline Migration

SageMaker 中存在：

```text
model artifact
training jobs
preprocessing pipeline
custom runtime dependencies
```

使用 Custom Model Import 后，正确理解是：

> 主要导入兼容的 model artifact，并不是把整个 pipeline 一起迁移到 Bedrock。

用户总结：

> Bedrock Custom Model Import only needs the model artifact and connects it with Bedrock inference for GenAI use. It does not need to import the entire training pipeline.

### Exam Mental Model

```text
Already have trained model?
→ Need to use it in Bedrock?
→ Check compatibility
→ Custom Model Import
```

核心记忆：

> Custom Model Import = bring an already-trained compatible model artifact into Bedrock for managed GenAI inference; it does not migrate the full training pipeline.

当前理解达到本 KP 的 **exam-ready working depth**。

## Open Questions

- None
