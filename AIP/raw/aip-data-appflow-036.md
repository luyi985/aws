# aip-data-appflow-036: AWS AppFlow SaaS 数据集成

## Concepts

### Amazon AppFlow

Amazon AppFlow 用于在 SaaS 应用与 AWS / 非 AWS 目标之间建立受管理的数据流。

它的核心定位是：

> SaaS data integration / managed data transfer

典型流程：

```text
SaaS Application
→ AppFlow
→ Mapping / Filtering / Validation
→ Trigger
→ Target System
```

例如：

```text
Salesforce
→ AppFlow
→ 选择字段
→ field mapping
→ filter / validate
→ schedule
→ S3
```

### Connection

AppFlow 负责建立 SaaS 数据源与目标系统之间的连接。

当前 source 中的示例包括：

- Salesforce
- Zendesk
- Marketo
- S3
- Redshift
- Snowflake

本 KP 不要求记完整 connector 清单。

### Field Mapping

Field Mapping 用于定义：

> source field 如何对应到 target field。

例如：

```text
Salesforce.CustomerName
→
S3.customer_name
```

AppFlow 不只是“搬文件”，还可以配置数据字段层面的映射。

### Filtering and Validation

AppFlow 支持在数据流中配置 filtering 和 validation。

例如：

```text
只传 approved customer cases
只保留指定字段
过滤不需要的数据
验证字段是否满足要求
```

这可以减少进入目标系统的无关或不合格数据。

### Trigger

AppFlow 支持多种触发方式：

```text
schedule
event
on demand
```

因此它既可以定时运行，也可以按事件或手动触发。

## Understanding

### AppFlow 在数据准备流程中的位置

用户形成的主干模型：

```text
第三方 SaaS
→ AppFlow
→ 数据进入 AWS 数据流程
```

之后可能进入不同分支：

```text
→ Data Wrangler
  探索数据、尝试 transformation

→ Glue ETL
  进行稳定、自动化的数据处理

→ Analytics
  做数据分析

→ GenAI / RAG
  进入后续知识准备流程
```

因此 AppFlow 可以看作：

> SaaS 数据接入层 / integration bridge

### AppFlow vs Glue vs Data Wrangler

三者解决的是不同问题。

```text
AppFlow
= 数据怎么从 SaaS 接进来 / 送出去

Data Wrangler
= 数据还没想好怎么处理，先探索、可视化、试 transformation

Glue ETL
= 已经确定处理逻辑，持续、自动化执行数据 pipeline
```

可以压缩成：

```text
AppFlow       = 接数据
Data Wrangler = 研究怎么处理
Glue ETL      = 稳定地处理
```

### Important Boundary

AppFlow 并不自动解决：

- 数据使用许可
- 删除同步语义
- Schema drift 治理
- 业务字段含义
- 目标系统中的完整数据治理

它解决的是：

> managed integration and transfer

而不是所有数据治理问题。

### Flow Is Not Fixed

下面这条链可以作为常见工程理解：

```text
SaaS
→ AppFlow
→ Data Wrangler
→ Glue
→ GenAI / Analytics
```

但这不是固定流程。

实际更像一个分支结构：

```text
SaaS
→ AppFlow
→ S3 / Redshift / Snowflake / other target
   ├─ Data Wrangler
   ├─ Glue
   ├─ Analytics
   └─ GenAI / RAG
```

后续接什么取决于业务目标。

## Validation Evidence

### Scenario

公司需要把 Salesforce 客户支持数据同步到 AWS。

要求：

```text
Salesforce
→ 每小时同步
→ 只传指定字段
→ field mapping
→ filtering / validation
→ 写入 S3
```

选择：

**Amazon AppFlow**

理由：

- 数据来自外部 SaaS
- 需要 managed integration
- 需要 field mapping
- 需要 filtering / validation
- 需要 schedule
- 目标是 S3

因此核心问题是：

> SaaS data integration，而不是后续复杂数据加工。

当前理解达到本 KP 的 **exam-ready working depth**。

## Open Questions

- None
