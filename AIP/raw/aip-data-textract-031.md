# aip-data-textract-031: Amazon Textract 文档 OCR

## Concepts

### Optical Character Recognition

OCR（optical character recognition）用于把图像中的文字转换成机器可处理文本。

适用于：

- scanned documents
- image-based PDFs
- images containing text

### Amazon Textract

Amazon Textract 面向 document extraction。

它不仅关注字符识别，还可以表达：

- printed text
- handwriting
- forms
- tables
- document layout / structure relationships

因此 Textract 的定位不仅是“读字”，还包括保留一定的 document structure。

### Document Structure

Document structure 指文档中字段、表格和布局元素之间的关系。

相比只返回纯文本：

Textract
→ Text + Document Structure

这使结果更适合进入后续：

- search
- RAG
- data pipeline
- structured processing

### Textract vs BDA

Textract 和 Bedrock Data Automation（BDA）不是实现上的上下级关系。

当前 source 支持的定位差异是：

Textract
→ document / image focused
→ OCR + forms / tables / structure extraction

BDA
→ broader multimodal extraction
→ document / image / audio / video
→ structured output for downstream use

OCR 可以看作“非结构化内容提取”问题中的一个基础能力方向，但不能据此断言 BDA 内部由 Textract 实现。

### Validation

复杂版式、模糊扫描和低质量输入可能导致提取误差。

关键字段应结合：

- confidence
- validation rules
- human review when needed

## Understanding

如果需求只是：

“从大量 scanned PDF / image 中提取文字、表格和 form 字段”

则优先考虑 Textract，因为需求核心是 document OCR + structure extraction。

如果输入扩展为：

- PDF
- image
- audio
- video

并且结果需要统一供 downstream service 使用，则更适合 BDA，因为它覆盖更广的 multimodal extraction，并强调 structured output。

Textract 的输出并不是完全 unstructured。

它也可以表达 fields、tables 和 layout relationships。

因此更准确的区别不是：

“Textract = unstructured output，BDA = structured output”

而是：

“Textract = document extraction specialist，BDA = broader multimodal extraction service。”

### Implementation Example

> 下面的 API 示例来自本次讨论中的实现补充，不是当前 KP source 展开的考试范围。

最小 OCR 思路：

```python
import boto3

textract = boto3.client("textract")

response = textract.detect_document_text(
    Document={
        "S3Object": {
            "Bucket": "my-bucket",
            "Name": "invoice.png"
        }
    }
)

for block in response["Blocks"]:
    if block["BlockType"] == "LINE":
        print(block["Text"])
```

如果需要 forms / tables / document structure，则可使用 document analysis 类能力：

```python
response = textract.analyze_document(
    Document={
        "S3Object": {
            "Bucket": "my-bucket",
            "Name": "invoice.png"
        }
    },
    FeatureTypes=["FORMS", "TABLES"]
)
```

心智模型：

```text
detect_document_text
→ OCR text

analyze_document
→ OCR + forms / tables / structure
```

同一个 invoice 场景下：

```text
Textract
→ “这个文档里有什么字、表格、字段关系？”

BDA
→ “从这个内容里，把业务需要的字段抽出来并组织成 downstream 可消费结果。”
```

## Open Questions

- None
