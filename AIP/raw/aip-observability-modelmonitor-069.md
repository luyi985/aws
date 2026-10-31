# aip-observability-modelmonitor-069: SageMaker Model Monitor 与数据/质量漂移

## Concepts

### 1. Data Drift：输入数据分布变化

Data Drift 是生产输入相对基线数据的分布变化。

用户提出的例子：

> 原先模型服务于中文输入，后来英文输入逐渐变多。

更精确地说，需要比较实际分布，而不只是模型的设计意图。教学示例：

| 语言 | 基线 | 后来的生产输入 |
|---|---:|---:|
| 中文 | 95% | 50% |
| 英文 | 5% | 50% |

语言比例明显变化，属于输入分布漂移。

监测这一变化，需要应用识别并记录语言特征，不能假设监控器自动理解所有原始文本变化。

### 2. 数据质量、模型质量与偏差

| 概念 | 关注什么 |
|---|---|
| Data Quality / Drift | 输入是否缺失、类型异常、越界或分布变化 |
| Model Quality | 预测或回答是否仍然正确、满足要求 |
| Bias | 不同群体之间是否存在需要调查的差异 |

SageMaker Clarify 与偏差检测相关；Model Monitor 的范围不只包括偏差，也涉及数据和模型质量监控。偏差随时间的变化可以结合相应能力监测。

输入变化、质量下降和群体偏差是相关但不同的问题。

### 3. Data Drift 不等于 Model Quality 下降

以垃圾邮件分类为教学案例：

- 上线初期：主要是英文短邮件。
- 后来：其他语言邮件和长邮件增多。

这说明输入变了，但不能直接证明模型分类变差。

再用人工确认的标签检查预测：

| 时间 | 抽查数量 | 正确数量 | 准确率 |
|---|---:|---:|---:|
| 上线初期 | 100 | 95 | 95% |
| 后来 | 100 | 70 | 70% |

此时才有质量下降的直接评估依据。

需要区分三种情况：

| 情况 | 输入漂移 | 质量下降 |
|---|---|---|
| 其他语言增多，模型仍能正确分类 | 有 | 没有 |
| 已监测输入特征变化不明显，但新型诈骗邮件更难识别 | 可能未检测到 | 有 |
| 其他语言增多，模型不擅长处理 | 有 | 有 |

未发现已监测特征漂移，不代表所有输入特征或输入与目标之间的关系都没有变化。

### 4. Model Quality 不只使用 LLM-as-a-Judge

应先选择任务和指标，再确定评估方法。

| 任务 | 质量检查示例 |
|---|---|
| 垃圾邮件分类 | 预测标签与人工确认标签比较，计算准确率等指标 |
| 数值预测 | 将预测值与实际结果比较 |
| 开放式 LLM / RAG 回答 | 人工评价、Judge 评分及确定性校验配合 |

对于 LLM / RAG：

- 指标可以包括 Correctness、Faithfulness、Completeness、Conciseness。
- Rubric 定义每项指标的评分细则。
- LLM-as-a-Judge 是评估方法。
- Human Calibration 用人工标注检查并调整 Judge。

SageMaker 内置 Model Quality Monitoring 的典型方式，是将采集到的预测与实际 Ground Truth 标签关联，再计算相应任务指标，并不是默认调用 LLM Judge。

预测与标签需要有可匹配的记录标识。没有相应真实结果时，不能声称已完成这种基于标签的质量评价。

### 5. Baseline：建立比较参照

Baseline 包括用于比较的统计与约束。

教学示例：

| 特征 | 基线统计 |
|---|---:|
| 中文比例 | 95% |
| 英文比例 | 5% |
| 平均输入长度 | 100 Tokens |
| 空输入比例 | 0% |

SageMaker 基线任务可以生成：

- statistics.json：统计信息。
- constraints.json：建议约束。

建议约束需要检查是否符合业务，不能因为自动生成就认定合理。

内置分析能力主要面向支持的数据结构，例如表格特征。开放文本的语言、长度等监测，需要先形成适当特征或使用自定义分析。

### 6. Monitoring Schedule：定期分析生产数据

监控流程可以是：

采集生产数据 → 提取监测特征 → 定时分析 → 比较基线及约束 → 输出报告和指标。

Model Monitor 可以按计划启动处理作业，也可以进行一次性分析。

例如每小时分析一个时间窗口内的数据。作业比较当前数据与基线，生成违规报告，并发布相关 CloudWatch 指标。

定时分析不是逐条请求实时拦截，检测时效取决于采集、分析窗口和调度等配置。

### 7. CloudWatch 告警与响应

教学规则：

> 英文比例超过 20%，且持续多个监测窗口，触发告警。

该阈值不是 AWS 默认标准。需要先提取特征、计算并发布对应指标，再配置告警。

告警意味着当前输入或质量指标偏离预期，需要调查，不意味着：

- 模型一定已经失效。
- 必须立即重新训练。
- 应自动更新基线以消除告警。

收到语言漂移告警后，可以按语言分别评估回答质量：

| 语言 | 情况 A：通过率 | 情况 B：通过率 |
|---|---:|---:|
| 中文 | 95% | 95% |
| 英文 | 94% | 60% |

以上为教学数字。

情况 A 可能只需持续观察；情况 B 需要调查检索资料、Prompt、模型能力等原因，再决定适配方式。

### 8. 基线更新需要经过判断

如果业务长期转向多语言，并且模型质量已验证，可以考虑更新监控基线。

不能看到偏离就自动重设基线，否则异常或数据问题可能被当成正常情况。

本次建立的闭环：

发现偏离 → 调查原因 → 验证质量 → 决定修复、适配或更新基线 → 持续监控。

### 9. 服务状态与学习边界

本次读取的 AWS 官方文档注明：

Amazon SageMaker Model Monitor 不再向新客户开放；现有客户可继续使用，AWS 继续维护安全性和可用性，但不计划新增功能。

这一服务状态需要与课程中的监控概念分开理解。数据漂移、质量监测、基线、调度和告警的概念仍然具有通用性；不能据此假定新账号可以直接完成相同服务实操。

## Concept Relationships

### 输入监控与结果评估互补

Data Drift 检查输入变化；Model Quality 检查结果表现。输入漂移可以触发进一步质量调查，但不能代替质量评估。

### Baseline、Schedule 与 Alarm

Baseline 定义参照，Schedule 决定何时分析哪批数据，Alarm 根据配置阈值触发响应。

### 质量指标与评估方法

指标定义测什么，Rubric 定义评分规则，评估方法执行检查。Judge 是可选方法之一，不是所有模型质量评价的默认机制。

### 与 Tracing 的联系

监控发现整体偏离后，可以结合 KP 068 的 Trace 和日志调查具体执行，定位检索、工具、参数或生成问题。

## Understanding

用户最初将本节与 Bias Detection 联系起来，讨论区分了 Clarify 偏差检测、输入漂移和模型质量。

用户要求通过例子解释 Data Drift 与 Model Quality，随后用自己的话说明：

> Data Drift 是输入数据的偏移。原先设计模型服务于中文输入，后来英文输入逐渐变多。

这一例子正确识别了输入变化。讨论补充：应比较实际基线与生产分布，并显式提取语言特征。

用户将模型质量评估与 Judge、Rubric、Human Calibration，以及 Correctness 等指标联系起来。讨论进一步明确：开放式回答可以使用 Judge；内置 Model Quality Monitoring 的典型路径是预测与真实标签比较。

用户明确表示：

> 可能要通过实操加深理解，不过现在概念了解了。

因此，本次记录为概念学习及例子解释，尚未验证实操能力。没有创建 Baseline、Monitoring Schedule、Ground Truth 关联或 CloudWatch Alarm，也没有运行真实漂移检测实验。

## References

### 继承来源，未重新读取底层资料

- [AWS Certified Generative AI Developer 课程资料](../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf) — AIP-C01 course slides / detailed coverage；原始 KP 未提供具体页码。
- [AIP Study Guide](../preRaw/AIPStudyGuide.pdf) — AIP-C01 Study Guide (Detailed)；原始 KP 未提供具体页码。

### 继承来源，本次直接读取

- [Monitoring a Model in Production](https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works-model-monitor.html) — 生产监控概述及服务可用性说明。
- [Schedule monitoring jobs](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-scheduling.html) — 周期与一次性分析、基线比较、报告和指标。

### 本次直接读取的补充来源

- [Model quality](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality.html) — 预测与实际标签比较、质量监控流程和任务指标。
- [Ingest Ground Truth labels and merge them with predictions](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-merge.html) — 标签、预测与记录标识的关联。
- [Create a Baseline](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-create-baseline.html) — 统计、建议约束与支持的数据形式。

### KP 血缘

- [原始 KP 定义](../preRaw/KP/aip-observability-modelmonitor-069.md) — 本次直接读取。

语言比例、邮件准确率、监控阈值和分组通过率均为本次教学示例，不是 AWS 默认配置或真实实验结果。
