# aip-foundations-modalities-002: 基础模型的模态

## Concepts

### Modality（模态）

Modality 表示模型处理的信息形式，例如：

- Text
- Image
- Audio
- Video

判断模型能力时，需要分别看 **Input Modality** 和 **Output Modality**。

### Input Modality

Input Modality 表示模型能够原生接受什么类型的输入。

例如：

`Text + Image → Text`

表示模型可以同时接收文字和图片。

### Output Modality

Output Modality 表示模型能够生成什么类型的输出。

例如：

`Text → Image`

表示模型接收文本并生成图片。

**支持某种 Input Modality，不代表支持同一种 Output Modality。**

例如：

`Text + Image + Video → Text`

意味着模型能够接收文字、图片和视频，但只能输出文字，不能据此认为它能够生成图片或视频。

### Multimodal（多模态）

Multimodal 表示模型或系统能够处理多个模态。

实际进行模型选型时，不应只判断“是不是多模态模型”，而应该明确任务要求：

`Task → Required Input Modalities → Required Output Modalities → Model Selection`

例如：

`AWS Architecture Image + Text Question → Text Advice`

要求模型至少支持：

`Text + Image → Text`

## Understanding

### Model Modality 与 Application Modality 不一定相同

应用能够接受某种数据，并不意味着底层 Foundation Model 原生支持这种 Modality。

例如，一个应用表现为：

`Image → Text`

底层实际上可能执行：

`Image → OCR / Vision Tool → Text → Text-only FM → Text`

Video 也可能经过：

`Video → Frame Extraction / Transcription → Image/Text → FM → Text`

因此：

**Application / Pipeline Modality ≠ Foundation Model Native Modality**

看到 AWS 服务宣称支持 PDF、Image、Audio 或 Video 时，需要进一步判断：

**这是 Service/Pipeline 支持的数据类型，还是底层 Foundation Model 原生支持的 Input Modality？**

### Pre-training 与 Modality 的区别

Pre-training 是训练模型参数的过程，不是运行时把一种数据类型转换成另一种数据类型的方法。

模型是否能够原生接收 Image、Audio 或 Video，取决于模型的架构和训练方式是否支持相应模态。

因此，不能认为一个 `Text → Text` 模型仅仅因为经过 Pre-training，就能够直接接收 Image 或 Video。

## Open Questions

- None
