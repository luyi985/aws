# aip-data-glue-034: AWS Glue 数据管道基础

## Concepts

### AWS Glue

AWS Glue 是用于数据发现、编目和 ETL 的 AWS data engineering service。

在当前 KP 中，重点理解三个组件如何协同：

```text
Crawler
→ Data Catalog
→ ETL
```

可以压缩成：

```text
Crawler = 发现
Data Catalog = 记录
ETL = 加工
```

### Glue Crawler

Glue Crawler 用于扫描数据源，例如 S3，发现：

- 数据集
- schema
- partitions
- 数据结构变化

Crawler 可以周期运行，因此当 S3 中出现新的 partition 或字段变化时，可以重新扫描并更新 metadata。

核心作用：

> 发现数据在哪里、结构是什么、发生了什么变化。

### Glue Data Catalog

Glue Data Catalog 是集中保存数据 metadata 的目录。

它可以记录：

- dataset location
- schema
- fields
- partitions
- table metadata

例如：

```text
Table: application_logs

Location:
s3://company-data/

Schema:
timestamp → string
service   → string
message   → string
severity  → string

Partitions:
year
month
day
```

Data Catalog 本身不是主要的数据清洗或转换组件。

它更像：

> 数据地图 + schema registry。

需要注意：

Crawler 负责发现数据和变化，Data Catalog 负责保存这些发现出的 metadata。

### ETL

ETL 全名：

**Extract, Transform, Load**

分别表示：

```text
Extract
→ 从数据源读取数据

Transform
→ 清洗、标准化、转换、重组数据

Load
→ 把处理后的数据写入目标位置
```

核心模型：

```text
Source Data
→ Extract
→ Transform
→ Load
→ Target Data
```

例如原始日志：

```json
{
  "timestamp": "01/10/2026 10:00",
  "service": "PAYMENT-SVC",
  "message": "timeout calling bank API",
  "severity": "err"
}
```

ETL 可以转换成：

```json
{
  "timestamp": "2026-10-01T10:00:00Z",
  "service": "payment",
  "message": "timeout calling bank API",
  "severity": "ERROR"
}
```

这里可能进行了：

- 日期格式统一
- 字段标准化
- service 名称规范化
- severity 标准化

### Data Preparation Workflow

Data preparation workflow 可以理解为：

> 把驳杂、异构、质量参差的 raw data 整理成下游系统可以可靠消费的数据。

在 Agent / RAG 场景中，可以用更直观的心智模型：

> 把脏乱杂的数据“提纯”成适合 retrieval 和 context 使用的输入。

典型流程：

```text
Raw Data
→ Discover
→ Catalog
→ Clean / Transform
→ Validate
→ Prepared Data
→ GenAI / Analytics / Knowledge Base
```

### Glue in GenAI Data Preparation

在 GenAI 场景下，Glue 可以参与：

- 数据发现
- schema 管理
- 数据清洗
- 标准化
- 文档结构准备
- chunking 前的数据处理

当前 source 还提到：

- Glue Studio 可用于 visual ETL
- Glue Data Quality 可管理质量规则
- Glue ETL 可以用于文档结构化和 chunking preparation

## Understanding

可以把 Glue 和学习系统做类比。

学习系统：

```text
Google Drive 原始资料
→ 扫描 / 发现文件
→ 记录文件位置和 metadata
→ 整理 / 转换
→ 给学习系统使用
```

Glue：

```text
S3 / Raw Data
→ Crawler
→ Data Catalog
→ ETL
→ Prepared Data
→ Downstream Systems
```

两者相似的地方是：

```text
discover
→ catalog
→ transform
→ downstream consume
```

但区别是：

> Learning System 是 knowledge workflow；Glue 是 data preparation workflow。

Glue 不管理：

- learning state
- KP identity
- Human Admission
- raw / wiki knowledge governance

这些属于学习系统的知识治理职责。

### Mental Model

最稳的一句话：

```text
Crawler 发现
Catalog 记录
ETL 加工
```

进一步理解：

```text
Data Catalog
= “这批数据是什么、在哪里、结构如何”

ETL
= “把这批数据实际加工成我要的样子”
```

也可以记成：

```text
Catalog = 地图和说明书
ETL = 加工厂
```

## Validation Evidence

场景：

公司把大量客户交互日志放在 S3。

每天：

- 新增 partitions
- schema 可能变化

系统还需要：

- 清洗数据
- 标准化字段
- 供 GenAI / analytics 使用

正确职责划分：

```text
Glue Crawler
→ 发现新数据、新 partition 和 schema 变化

Glue Data Catalog
→ 保存 schema、location、partition 等 metadata

Glue ETL
→ 清洗、转换、标准化并写出 prepared data

Prepared Data
→ GenAI / Analytics
```

当前理解达到本 KP 的 exam-ready working depth。

## Open Questions

- None
