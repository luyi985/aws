# aip-governance-lineage-054: SageMaker Lineage Tracking 与 MLOps 审计

## Concepts

### SageMaker Lineage Tracking

SageMaker Lineage Tracking 用来记录 ML 生命周期中不同资产和处理步骤之间的来源关系。

核心问题是：

> 这个模型到底是怎么来的？

典型链路：

```text
Raw Data
↓
Processing Job
↓
Processed Dataset
↓
Training Job
↓
Model Artifact
↓
Model Version
↓
Endpoint / Deployment
```

Lineage Tracking 会把这些资产和关系记录下来，形成可追溯的 provenance chain。

### Git 类比

可以把 Lineage Tracking 类比成 ML pipeline 的 Git 历史图。

```text
Git
→ 主要追踪代码版本和 commit history

Lineage Tracking
→ 追踪 data + processing + training + model provenance
```

近似类比：

```text
Git commit
≈ lineage 中的一个资产/事件节点

Git parent-child history
≈ lineage 中的 Association

git log
≈ lineage query / trace
```

但两者用途不同。Git 是 version control system；Lineage 更偏：

```text
traceability
audit
root cause analysis
impact analysis
```

### Artifact

Artifact 可以理解为一个被追踪的 ML 资产。

例如：

```text
raw-dataset-v3.csv
processed-dataset-v7.parquet
training-job-output
model.tar.gz
```

在 lineage graph 里：

```text
Artifact
→ node
```

它表示一个有身份、有来源、有上下游关系的资产。

### Association

Association 表示 lineage 中资产或步骤之间的关系。

例如：

```text
Raw Dataset
   ↓ used by
Processing Job
   ↓ generated
Processed Dataset
   ↓ used by
Training Job
   ↓ generated
Model Artifact
```

因此：

```text
Artifact
→ node

Association
→ edge
```

多个 Artifact 和 Association 连起来，就形成 lineage graph。

### Root Cause Analysis

假设线上发现：

```text
Model v17
→ 表现异常
```

可以沿 lineage 往回查：

```text
Model v17
↓
Training Job 2026-10-20
↓
Processed Dataset v9
↓
Processing Job X
↓
Raw Dataset snapshot
```

如果最终发现：

```text
Processing Job X
→ 使用了错误的 normalization 参数
```

就完成了 root cause analysis。

因此 Lineage 能回答：

> 这个异常模型是由哪一步产生的？

### Impact Analysis

Lineage 不只能向上追来源，也可以从一个问题资产向下看影响范围。

例如发现：

```text
Dataset v9 有问题
```

可以继续追：

```text
Dataset v9
↓
哪些 training jobs 使用过它？
↓
产生了哪些 model artifacts？
↓
哪些 endpoints 正在使用这些模型？
```

这就是 impact analysis。

### MLOps Auditing

MLOps audit 常见问题：

```text
这个模型用了什么数据？
经过哪些 processing steps？
是哪次 training job 训练的？
使用了哪些参数？
生成了哪个 model artifact？
部署到了哪里？
```

Lineage Tracking 为这些问题提供证据链。

因此：

```text
Lineage
→ provenance evidence

Audit
→ inspect evidence
→ judge process
```

### Lineage Is Not Rollback

Lineage Tracking 只负责：

```text
发现来源
定位问题
分析影响范围
```

它本身不负责 rollback。

例如：

```text
Production issue
↓
Lineage root cause analysis
↓
发现 Model v17 有问题
↓
Rollback endpoint → Model v16
↓
修复数据 / pipeline
↓
Retrain → Model v18
↓
重新验证并部署
```

这里：

```text
Lineage Tracking
→ 找问题

MLOps deployment/versioning
→ rollback / redeploy
```

可以类比：

```text
git log
→ 找问题 commit

git revert
→ 真正回滚
```

所以：

> Lineage 是“查案工具”，rollback 是“处置动作”。

### Broken Lineage

Lineage 的价值取决于关键步骤是否被记录。

例如：

```text
Raw Data
↓
人工 Excel 修改
↓
手工上传
↓
Training Job
```

如果“人工 Excel 修改”没有被纳管：

```text
Lineage graph
→ 出现断点
```

因此：

> 有 lineage record 不等于整个过程一定完整可追溯。

同样：

> 有 lineage evidence 不等于流程自动合规。

## Concept Relationships

核心关系：

```text
Artifact
→ 被追踪的资产

Association
→ 资产之间的关系

Lineage Graph
→ 资产 + 关系组成的 provenance chain

Audit
→ 使用 lineage evidence 检查 ML 生命周期

Root Cause Analysis
→ 从问题模型往上追来源

Impact Analysis
→ 从问题资产往下追受影响对象
```

Lineage Tracking 的核心作用可以压缩为：

```text
trace origin
+
trace dependencies
+
support audit
```

而不是：

```text
自动判断合规
自动修复
自动 rollback
```

## Understanding

用户首先把 Lineage Tracking 类比为 Git，并建立：

```text
Git
→ code provenance

Lineage
→ data + processing + training + model provenance
```

随后理解了：

```text
Artifact
→ node

Association
→ edge
```

并确认 Lineage 可以在模型训练结果异常时，用来追溯问题来源。

用户进一步询问：

> 如果模型训练出了问题，lineage tracking 追溯到了问题点，需要回滚吗？

由此明确：

```text
Lineage
→ 负责定位问题和影响范围

Rollback
→ 由 MLOps deployment/versioning 流程执行
```

用户最终将考试层面的理解压缩为：

> Lineage Tracking 是审查和追溯工具。

这一理解进一步补充为：

```text
Lineage Tracking
→ ML lifecycle provenance / audit trail

主要用途：
- audit
- root cause analysis
- impact analysis
- traceability

边界：
- 不负责 rollback
- 不等于自动合规
```

考试最重要的识别模式：

```text
“这个模型用了哪个 dataset？”
“是哪次 training job 训练的？”
“部署到了哪个 endpoint？”
“哪些模型受某个坏数据集影响？”
```

→ 选择 SageMaker Lineage Tracking。

## References

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/NotebookLM Mind Map.png — VI. Governance, Security & QA > Governance > SageMaker Lineage Tracking (MLOps Auditing)`

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 333-336, ‘SageMaker ML Lineage Tracking’`

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AIPStudyGuide.pdf — PDF p. 7, ‘V. Managing Models with SageMaker AI’`
