---
id: aip-agentic-actiongroups-022
title: Bedrock Agent Action Groups
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — III. Agentic AI & Orchestration > Bedrock Agents > Action Groups (Lambda Tools, OpenAPI/Swagger Schemas)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 224, ‘How do Agents Know Which Tools to Use?’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 5, ‘III. Agentic AI > Bedrock Agents’"
dependencies:
  - aip-agentic-planning-021
---

# aip-agentic-actiongroups-022: Bedrock Agent Action Groups

## Learning Objective

能够说明 Action Groups 如何用 Lambda 工具和 OpenAPI/Swagger Schema 扩展代理动作。

## Scope

- Included: Action groups、Lambda、API Schema、参数和返回结果的契约。
- Excluded: Lambda 代码实现、完整 OpenAPI 语法和生产权限配置。

## Source Context

导图在 Bedrock Agents 下把 Action Groups 与 Lambda Tools、OpenAPI/Swagger Schemas 关联。

## Knowledge Point

动作组（action group）向代理声明可执行操作。API Schema 描述操作、参数和语义，Lambda 等执行端完成真实业务动作；代理根据规划选择操作并把结构化参数传给执行端。

## PDF Grounding

详细课件说明 Action Group 的 prompt 告诉 FM 何时使用工具，参数需包含 name、description、type 与 required，缺少信息时 agent 还可追问用户。Study Guide 补充 OpenAPI/Swagger Schema 可上传到 S3，标准化 function、input parameters 与 outputs。

## Logical Path

1. 用 Schema 定义代理可见的工具契约。
2. 规划模块按用户目标选择合适操作。
3. 执行端校验参数、完成动作并返回结果。
4. Schema 不是授权机制，执行端仍必须做身份与输入校验。

## Key Terms

- 动作组（`action group`）：提供给代理的一组相关工具或 API。
- OpenAPI Schema（`OpenAPI schema`）：描述 API 操作和数据契约的规范结构。

## Example

示意示例：代理通过 Schema 识别 `getOrderStatus(orderId)`，再调用 Lambda 查询订单；这展示了工具描述与实际执行的分工。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“III. Agentic AI & Orchestration > Bedrock Agents > Action Groups (Lambda Tools, OpenAPI/Swagger Schemas)”支持组件关系。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 224 页支持 Action Group 的使用提示、参数描述与缺失信息处理。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 5 页支持以 S3 中 OpenAPI/Swagger Schema 标准化函数、输入与输出。
