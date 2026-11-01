---
title: 从原始数据到可用知识
derived_from:
  - aip-bedrock-knowledgebases-014
  - aip-data-bda-030
  - aip-data-textract-031
  - aip-data-transcribe-032
  - aip-data-comprehend-033
  - aip-data-glue-034
  - aip-data-wrangler-035
  - aip-data-appflow-036
  - aip-security-macie-051
last_synced: 2026-11-01
status: current
---

# 从原始数据到可用知识

[返回导航](README.md) · [考试覆盖与缺口](exam-coverage.md)

## 按输入与期望输出选择提取能力

|实际需求|能力方向|应验证什么|
|---|---|---|
|扫描件读字、表格、表单和布局|Textract|字段及关系是否完整|
|音频变文本|Transcribe|转写质量与丢失的非文字信息|
|实体、分类、PII 位置|Comprehend|标签正确性、误检漏检|
|多模态内容转成下游可消费信息|BDA|支持的提取形态、Schema 与业务字段|

OCR 提取文字不能替代所有图像理解；ASR 回答“说了什么”，转写文本不保留所有语调和背景信息。NER 识别人名、组织、地点等实体，PII 检测关注个人可识别信息，两者有交集但不相同。

需要语言理解时，先确认输入是否已经是可用文本。不能把 Comprehend 当成音频转写器，或把“模型支持文本”解释为原生支持音频。

Raw KPs: `aip-data-bda-030`, `aip-data-textract-031`, `aip-data-transcribe-032`, `aip-data-comprehend-033`

## BDA：输出形态、Standard Output 与 Blueprint

Structured output 描述结果组织形式；Standard Output 与 Blueprint 描述提取方式和控制。不要把“输出 JSON”本身当作业务正确性证明。

通用解析可先使用标准输出；下游需要发票号、供应商、日期、总额等固定字段时，Blueprint 显式定义提取要求。具体支持的输入模态、输出形式和功能组合仍应按对应服务能力核对。

提取后至少检查必填字段、类型、允许范围和业务关系。例如 total_amount 是字符串或明显超范围时，即使生成过程成功，也不应无条件写入后续系统。教学流程：内容输入 → 提取 → Schema/字段/业务验证 → 下游消费。

Raw KPs: `aip-data-bda-030`

## 连接、编目、转换分别由谁负责

|组件|职责|不是它自动保证的事|
|---|---|---|
|AppFlow|连接 SaaS 与目标，字段映射、筛选、验证和触发|任意来源都受支持、业务语义必然正确|
|Glue Crawler|发现结构、schema、分区|真正清洗数据|
|Glue Data Catalog|记录数据源和结构元数据|保存全部业务数据的副本|
|Glue ETL|执行数据转换流程|自动决定所有质量规则|
|Data Wrangler|可视化查看、分析、转换并保存数据流程|探索结果自动达到生产标准|

AppFlow 可按支持的连接器和触发方式进行计划、事件或按需传输。Data Wrangler 适合先查看缺失值、类型、类别和分布，再验证转换规则。Glue 的发现、元数据与加工形成衔接，但三个职责不能互换。

Raw KPs: `aip-data-glue-034`, `aip-data-wrangler-035`, `aip-data-appflow-036`

## 贯穿案例：企业资料进入 RAG

1. 从受支持业务来源接入资料，保留来源身份和版本。
2. 按文档类型提取文字、表格或业务字段，检查缺失和类型。
3. 识别敏感信息并决定能否摄取、是否需遮蔽及谁能检索。
4. 组织可重复转换流程，保持元数据随内容传递。
5. 进入切块、索引与检索，验证问题能否找到完整证据。

如果最终答案错，应区分“源文档本身错误”“提取漏了例外条件”“索引没有更新”和“生成偏离证据”。不同阶段不能通过统一改 Prompt 来修复。

此处补全的是学习笔记中的职责链。生产级去重、删除传播、增量同步和质量作业配置仍列为 [考纲待补项](exam-coverage.md)。

Raw KPs: `aip-data-bda-030`, `aip-data-textract-031`, `aip-data-comprehend-033`, `aip-data-glue-034`, `aip-data-appflow-036`, `aip-bedrock-knowledgebases-014`, `aip-security-macie-051`

## 考试场景：发现、转换与质量检查

场景：S3 日志每天新增分区，字段与日期格式不一致，后续供 GenAI 使用。

|任务|职责判断|应排除的误解|
|---|---|---|
|发现分区与 Schema 变化|Crawler|发现即完成清洗|
|记录位置、字段、分区|Data Catalog|Catalog 就是转换后的业务数据|
|统一格式、清洗和写出数据|ETL|更新 Catalog 就改好了原始记录|
|探索缺失值、类型与分布|Data Wrangler|探索成功等于生产验证|
|管理质量规则|KP 034 提及 Glue Data Quality|当前 raw 已包含规则执行和失败处置细节|

Glue Data Quality 在 raw 中只有能力定位，尚缺规则示例、评估结果、流水线准入与失败处理。名称出现不等于全面覆盖。

Raw KPs: `aip-data-glue-034`, `aip-data-wrangler-035`

## 原始笔记与来源边界

本页综合已批准的 raw；例子、数字和数据结构为教学用途。未将来源链接的存在当作所有产品能力的重新核验。具体原始文档、页码与当时查阅状态保留在各 raw 中。

- [aip-bedrock-knowledgebases-014](../raw/aip-bedrock-knowledgebases-014.md)
- [aip-data-bda-030](../raw/aip-data-bda-030.md)
- [aip-data-textract-031](../raw/aip-data-textract-031.md)
- [aip-data-transcribe-032](../raw/aip-data-transcribe-032.md)
- [aip-data-comprehend-033](../raw/aip-data-comprehend-033.md)
- [aip-data-glue-034](../raw/aip-data-glue-034.md)
- [aip-data-wrangler-035](../raw/aip-data-wrangler-035.md)
- [aip-data-appflow-036](../raw/aip-data-appflow-036.md)
- [aip-security-macie-051](../raw/aip-security-macie-051.md)
