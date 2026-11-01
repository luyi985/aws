---
title: 质量评估与安全发布
derived_from:
  - aip-governance-evaluationtypes-045
  - aip-governance-evaluationmetrics-046
  - aip-governance-llmjudge-047
  - aip-governance-responsibleai-052
  - aip-governance-clarify-053
  - aip-sagemaker-mlops-062
  - aip-testing-regression-070
  - aip-agentic-multiagent-hitl-073
last_synced: 2026-11-01
status: current
---

# 质量评估与安全发布

[返回导航](README.md) · [考试覆盖与缺口](exam-coverage.md)

## 把指标与评分机制分开

|指标|评价对象|所需依据|典型反例|
|---|---|---|---|
|Correctness|事实是否正确|有效参考或可信业务结果|忠实复述过期政策|
|Faithfulness|断言是否由 Context 支持|实际提供的证据|证据 450，回答 280|
|Completeness|是否覆盖必要问题|问题与任务清单|只回答价格，遗漏库存|
|Conciseness|是否省去无用内容且保留必要信息|用途与完整性要求|过短到无法执行|

ROUGE 比较词语/序列重合，BERTScore 比较上下文化表示的相似性。它们能辅助比较，不能独立判定否定关系、数字或事实真值。

质量指标回答“测什么”，人工/Judge/代码回答“怎么测”，Rubric 回答“按哪些条件给几分”。北极星指标还要观察产品是否创造价值，Judge 分数高不等于用户已经完成决策。

Raw KPs: `aip-governance-evaluationtypes-045`, `aip-governance-evaluationmetrics-046`, `aip-governance-llmjudge-047`

## 可执行 Rubric 与 Judge 校准

教学政策：年假 20 天且允许结转。定义 Correctness：
- 2 分：两个事实均正确，无额外错误断言。
- 1 分：部分正确，但有错误或缺失。
- 0 分：关键事实均错或无关。

“25 天且能结转”不能因文笔好或更长而满分。Completeness 应单独检查是否回应两项问题。量表可因任务而变，但版本比较时必须固定；规则改变需记录版本并在需要时重新评估历史答案。

Judge 输入包括问题、候选答案、Rubric，以及对应指标需要的 Context/参考答案。只提供最终答案不能判断工具执行过程。

Human calibration 用代表性人工标注比较 Judge，分析误放行、误拒绝及任务类别差异，调整后用保留样本重新验证。交换 A/B 位置检查位置敏感，隐藏来源降低风格偏好，重复评分观察不稳定。换一个 Judge 模型并不自动获得独立可靠的事实判断。

Raw KPs: `aip-governance-llmjudge-047`

## 从离线评估到上线决策

Golden Dataset 应涵盖正常、缺证据、旧文档、权限、工具和边界案例。固定模型、Prompt、数据版本与评分配置；对随机波动必要时重复执行。

教学比较：B 的 Correctness 从 82% 升到 89%，但 Faithfulness 从 94% 降到 91%，P95 从 3 秒增到 4.8 秒。若预设门槛要求 Faithfulness 至少 92%、P95 不超 4 秒，就不能只看正确率提升而发布。数字是教学示例，不是 AWS 标准。

|手段|目的|决策证据|
|---|---|---|
|离线回归|发现变更退化|相同测试集和评分规则|
|验收门槛|决定是否准入|预先定义的质量、安全、延迟、成本|
|Canary|限制真实流量风险|监控、扩量条件与回滚|
|A/B|比较业务效果|合理分组、样本量及混杂因素控制|

安全失败应单独处理，不能用总体均分抵消。具有副作用的工具先在 Mock/Sandbox 中验证，线上仍受授权和审批约束。

Raw KPs: `aip-governance-evaluationtypes-045`, `aip-testing-regression-070`

## 公平、解释与业务质量

公平性需按群体比较错误与结果，不能仅凭总体准确率。Clarify 提供数据/预测中的差异和解释性证据，不自动裁决公平。解释需要展示依据和限制，不把流畅理由当作真实因果证明。

约束满足与 Faithfulness 不同：证据和答案都写 450 澳元，用户预算 300，问题是预算约束未满足；若把 450 改写成 280，还违反证据支持。

对于金额、ID、权限、重复执行等可确定验证项，应使用可信系统或代码检查。Judge 用于语义、完整性与证据关系等评价，不代替确定性控制。

Raw KPs: `aip-governance-responsibleai-052`, `aip-governance-clarify-053`, `aip-sagemaker-mlops-062`

## 复习任务：怎样评价一个选购助手

先定义任务成功：型号一致、满足硬条件、关键事实有来源、未知项明确报告。再选择：
1. 代码检查金额、地区、必填字段及工具结果 ID。
2. Judge 按 Rubric 检查推荐解释和证据支持。
3. 人工抽样核验来源与 Judge 分歧。
4. Trace 检查多余调用、错误参数及失败恢复。
5. 线上观察用户是否完成决策、任务成本和延迟。

单个漂亮答案不足以证明稳定；多个 Worker 同意不足以证明事实；Canary 平稳也不代表新版本统计上更优。

Raw KPs: `aip-governance-llmjudge-047`, `aip-testing-regression-070`, `aip-agentic-multiagent-hitl-073`

## 原始笔记与来源边界

本页综合已批准的 raw；例子、数字和数据结构为教学用途。未将来源链接的存在当作所有产品能力的重新核验。具体原始文档、页码与当时查阅状态保留在各 raw 中。

- [aip-governance-evaluationtypes-045](../raw/aip-governance-evaluationtypes-045.md)
- [aip-governance-evaluationmetrics-046](../raw/aip-governance-evaluationmetrics-046.md)
- [aip-governance-llmjudge-047](../raw/aip-governance-llmjudge-047.md)
- [aip-governance-responsibleai-052](../raw/aip-governance-responsibleai-052.md)
- [aip-governance-clarify-053](../raw/aip-governance-clarify-053.md)
- [aip-sagemaker-mlops-062](../raw/aip-sagemaker-mlops-062.md)
- [aip-testing-regression-070](../raw/aip-testing-regression-070.md)
- [aip-agentic-multiagent-hitl-073](../raw/aip-agentic-multiagent-hitl-073.md)
