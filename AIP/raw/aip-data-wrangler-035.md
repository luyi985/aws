# aip-data-wrangler-035: SageMaker Data Wrangler

## Concepts

### SageMaker Data Wrangler

SageMaker Data Wrangler 是 SageMaker Studio 中用于 **visual data preparation** 的工具。

它适合在数据处理逻辑还需要探索和验证时，通过可视化方式完成：

- import / connect data
- preview
- visualize
- transform
- quick model
- export data flow

核心流程：

```text
Import Data
→ Preview / Profile
→ Visualize
→ Transform
→ Validate
→ Export / Save Data Flow
```

### Visual Data Preparation

Visual data preparation 指通过可视化界面探索和配置数据处理步骤，而不是一开始就依赖手写数据处理代码。

典型关注点包括：

- missing values
- data types
- data distribution
- categorical fields
- class imbalance
- transformation results

### Transformation

Transformation 是对数据格式、字段或取值进行修改。

示例包括：

- 填补 missing values
- category encoding
- type conversion
- field transformation
- data balancing

这些 transformation 可以被组织成可重复的数据处理 flow。

### Data Profiling / Visualization

在真正确定处理逻辑之前，可以先检查：

```text
数据长什么样
→ 哪里缺失
→ 类型是否正确
→ 分布是否异常
→ 类别是否不平衡
```

然后再决定 transformation。

因此 Data Wrangler 的一个核心价值是：

> 在数据 preparation 逻辑尚未完全确定时，先探索、验证和试验。

## Understanding

### Data Wrangler vs Glue ETL

两者都可能涉及数据 transformation，所以功能存在重叠。

但当前学习中的主要区别是：

```text
Data Wrangler
= visual / interactive data preparation

Glue ETL
= data engineering ETL pipeline
```

心智模型：

```text
Data Wrangler
→ 看数据
→ 探索数据
→ 尝试 transformation
→ 验证处理结果

Glue ETL
→ Extract
→ Transform
→ Load
→ 持续执行数据处理流程
```

可以进一步理解成：

```text
Data Wrangler = 实验室工作台
Glue ETL      = 数据加工流水线
```

用户形成的取舍模型：

> 当 expected data processing 还没有完全确定，需要 experiment 和 exploration 时，更适合 Data Wrangler。

例如：

```text
Dataset
→ 检查 missing values
→ 查看 distribution
→ 尝试 category encoding
→ 检查 imbalance
→ 调整 transformation
→ 保存 processing flow
```

这种场景优先考虑 Data Wrangler。

相反：

```text
每天 S3 新增订单
→ 自动读取
→ join
→ clean
→ transform
→ 写回 data lake
```

这是更典型的 Glue ETL 场景。

### Important Boundary

当前 source 支持 Data Wrangler：

```text
import
→ preview
→ visualize
→ transform
→ quick model
→ export data flow
```

“先用 Data Wrangler 探索，然后一定转成 Glue ETL”并不是当前 source 定义的固定 AWS 工作流。

它可以作为工程上的理解，但不应当作为考试硬规则。

### Exam Mental Model

AIP 更重要的是根据场景做 service selection，而不是学习 Data Wrangler UI 的具体操作。

当前 KP 的重点：

```text
visualize / explore / profile / experiment with transformations
→ Data Wrangler
```

而不是：

```text
具体按钮位置
connector 配置细节
transformation code
code export format
pricing
```

这些内容不在本 KP scope 中。

## Validation Evidence

### Scenario 1

团队拿到一个 dataset，其中：

- 有 missing values
- 有 categorical fields
- 怀疑 category distribution 不均衡
- 希望先可视化检查
- 需要尝试 transformation
- 处理逻辑还没有完全确定

选择：

**SageMaker Data Wrangler**

理由：

> The data preparation logic is still exploratory. The team needs to visualize data quality, inspect distributions, and experiment with transformations before finalizing the processing flow.

### Scenario 2

每天需要自动处理 S3 新增数据：

```text
read
→ join
→ clean
→ transform
→ write back
```

选择：

**AWS Glue ETL**

因为这是 ETL data pipeline 场景，而不是交互式数据探索场景。

当前理解达到本 KP 的 **exam-ready working depth**。

## Open Questions

- None
