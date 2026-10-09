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

## Exam-Level Review — 2026-10-09

**Review result:** L4 Passed (exam-style practice, not a guarantee of exam performance)  
**Delayed retention:** Untested

### Concepts and Boundaries

- Input Modality and Output Modality are distinct; image understanding does not imply image generation.
- A multimodal application may combine OCR, transcription, data extraction, and text-only foundation models without its underlying FM natively supporting every input modality.
- Amazon Textract extracts text and document structure including forms and tables. It is not a general-purpose vehicle-damage image-understanding system.
- Check the actual supported input and output modalities of a particular Amazon Bedrock model.
- Ordinary speech-to-text transcription does not preserve all acoustic characteristics, such as tone, voice quality, and background noise, for downstream text-only analysis.

### Learner Understanding and Review Evidence

- Q1: Correctly explained why Text + Image + Video input with Text output does not imply image or video generation.
- Q2: B — Correct; an OCR/document-extraction pipeline can provide text to a text-only FM.
- Q3: B, C — Correct; input and output modality boundaries.
- Q4: B — Correct; use Textract for claim-form fields and a suitable vision-capable FM for vehicle-damage description.
- Q5: Explained that OCR alone is insufficient for interpreting accident photos, that structured document extraction need not involve a multimodal FM for every document, and that model conclusions require appropriate downstream review.
- Supplementary service question: C — Correct; Amazon Transcribe Call Analytics is the best fit for call transcription plus call-specific sentiment, talk-time, and interruption analysis with lower integration complexity.
- Distinction discussed: Transcribe converts speech to text; Comprehend performs NLP on text; Transcribe Call Analytics handles call-oriented analysis.
- Precision note: Human review should be proportionate to risk and confidence, rather than assuming every output requires manual review.

### Learning State

- Understanding: validated.
- Connection: related (FM modality versus application pipeline; speech versus text analysis).
- Application: transferred in hypothetical AWS architecture scenarios; no implementation evidence.
- Retention: recalled within session; delayed retention untested.

### Original KP References

- `AIP/preRaw/NotebookLM Mind Map.png` — I. Foundational AI Concepts > Foundation Models (FMs) > Modalities (Text, Image, Audio, Video, Multimodal)
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf` — PDF pp. 52–53, 'Multimodal Models and Pipelines'
- `AIP/preRaw/AIPStudyGuide.pdf` — PDF p. 4, 'Bedrock Data Automation (BDA)'

### AWS Verification References

- https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html
- https://docs.aws.amazon.com/textract/latest/dg/textract-best-practices.html
- https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetFoundationModel.html
- https://docs.aws.amazon.com/bedrock/latest/userguide/inference-api.html
- https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics-batch.html
- https://docs.aws.amazon.com/comprehend/latest/dg/

### Next Action

Review `aip-foundations-promptanatomy-005` at exam level and perform delayed retention check for KP 002 later.
