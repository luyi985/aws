# aip-data-bda-030: Bedrock Data Automation 多模态提取

## Concepts

### Bedrock Data Automation

Bedrock Data Automation（BDA）用于从多模态非结构化内容中提取并组织可供下游应用使用的信息。

输入可以来自：

- document
- image
- audio
- video

核心目标不是只把内容“读出来”，而是把不同模态中的信息转成结构化、可消费的结果。

### Structured Output

BDA 的结果可以组织成 structured output，并以 JSON、CSV、Markdown、HTML 等形式供下游消费。

这里的关键点是：

- structured output 描述的是结果的结构化形态
- 它不是一段无约束的 free-form text
- JSON / CSV 虽然 technically 是文本序列化格式，但业务上表达的是 structured data

### Standard Output

Standard Output 由 BDA 根据输入内容自动推断结构。

适合：

- 通用解析
- 探索性 extraction
- 不预先固定字段结构的场景

### Blueprint

Blueprint 用于显式定义需要提取的字段或分类规则。

适合：

- 固定业务 schema
- 下游系统依赖明确字段
- 需要更强结构控制的场景

例如发票场景：

- invoice_number
- supplier_name
- date
- total_amount
- line_items

因此可以记成：

Structured Output
= 输出结果是什么形态

Standard Output
= BDA 自己推断输出结构

Blueprint
= 用户显式定义要提取的字段和规则

Blueprint 不是 Structured Output 的替代品，而是控制提取结构的一种机制。

### Multimodal Extraction

BDA 不只是做纯文本 OCR。

它可以从 document、image、audio、video 等不同模态中提取信息，并组织成统一的下游可消费结果。

例如发票 PDF 中可能同时包含：

- scanned text
- tables
- layout
- images

BDA 的价值不仅是把这些内容转换成文本，还包括把业务相关信息组织成结构化字段，减少下游自行解析大量原始内容的工作。

### Validation

BDA 输出不能无条件直接写入下游系统。

即使使用 Blueprint，也仍然需要按业务要求进行：

- schema validation
- required field validation
- type validation
- business quality rules

例如：

`total_amount`

需要确认：

- 字段是否存在
- 是否为 number
- 是否满足业务允许范围

因此完整流程是：

Unstructured Content
→ BDA Extraction
→ Structured Output
→ Schema / Quality Validation
→ Downstream Application

## Understanding

BDA 的核心价值不是单纯 OCR，而是：

“从多模态非结构化内容中提取业务相关信息，并组织成结构化输出。”

Standard Output 适合让系统自己推断结构。

Blueprint 适合业务已经明确知道要提取哪些字段的场景。

如果下游系统依赖固定字段，例如：

- invoice_number
- supplier_name
- total_amount

则 Blueprint 更合适。

Structured Output 和 Blueprint 不是并列的两种输出。

更准确的关系是：

- Structured Output 是结果
- Standard Output 是系统自行推断结构的方式
- Blueprint 是显式控制字段和分类规则的方式

BDA 可以减少下游自行解析大量原始文本和无关信息的工作量。

但自动提取结果不应被默认视为完全正确；进入关键业务系统之前，需要进行 schema 和业务质量规则验证。

## Open Questions

- None
