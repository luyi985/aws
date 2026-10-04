# aip-data-transcribe-032: Amazon Transcribe 语音识别与毒性检测

## Concepts

### Automatic Speech Recognition

ASR（automatic speech recognition）用于把语音转换成文本。

核心作用是回答：

“说了什么？”

典型输出是 transcript，可继续用于：

- search
- analytics
- RAG
- downstream processing

### Transcript

Transcript 是语音转写后的文本结果。

例如：

```text
Audio
→ ASR
→ Transcript
→ Search / Analytics / RAG
```

### Toxicity Detection

Toxicity Detection 用于识别攻击性、有害或其他风险内容。

它的核心作用是回答：

“这些内容是否可能存在风险？”

输出更偏向：

- toxicity category
- risk signal
- moderation signal

而不是 transcript。

### ASR vs Toxicity Detection

两者不是同一个任务。

```text
ASR
→ speech → text
→ “说了什么”

Toxicity Detection
→ content → risk labels
→ “内容是否可能有害”
```

当前 source 还说明，toxicity detection 会同时利用：

- textual signals
- tone / pitch 等语音信号

因此它不应简单理解成：

```text
Audio
→ ASR
→ Text
→ Toxicity Detection
```

更准确的概念模型是：

```text
Audio
  ├─→ ASR → Transcript
  └─→ Toxicity Detection → Risk labels
```

### Custom Vocabulary

Custom Vocabulary 适合处理固定的：

- domain terms
- brand names
- abbreviations
- product names

例如：

- KSP
- ABP
- TOC

如果这些固定术语经常被 ASR 转写错误，可以优先考虑 Custom Vocabulary。

### Custom Language Model

Custom Language Model 更偏向学习特定领域中的语言上下文和表达模式。

可以简单区分：

```text
固定术语 / 缩写识别错误
→ Custom Vocabulary

整个领域的语言模式和上下文特殊
→ Custom Language Model
```

### Other Related Capabilities

当前 source 还提到：

- PII redaction
- automatic language identification
- toxicity categories

这些属于 Transcribe 周边能力，但不是本 KP 的主要展开重点。

### Human Review Boundary

Toxicity Detection 的结果不能直接作为最终裁决。

原因包括：

- ASR 本身可能受到口音、噪声、术语等影响而出错
- toxicity classification 本身也可能受到语境、反讽、情绪表达影响
- risk label 本质上是风险信号，不是最终业务判定

因此更合理的链路是：

```text
Audio
→ Transcribe / Toxicity Detection
→ Risk Signal
→ Human Review / Business Decision
```

## Understanding

在客服中心场景中：

如果目标是把电话录音变成可搜索文本：

```text
Audio
→ ASR
→ Transcript
```

如果目标是发现可能包含辱骂、威胁等风险内容：

```text
Audio
→ Toxicity Detection
→ Risk Labels
→ Human Review
```

ASR 解决“说了什么”。

Toxicity Detection 解决“内容是否可能有害”。

当内部缩写或术语，例如 KSP、ABP、TOC，经常被错误转写时，更适合优先使用 Custom Vocabulary。

Custom Language Model 则更适用于整个领域的语言上下文和表达模式具有明显特殊性的场景。

Toxicity Detection 的输出不能直接作为处罚或业务最终裁决，因为 ASR 和分类判断都可能存在误差，而且语境会显著影响判断。

## Open Questions

- None
