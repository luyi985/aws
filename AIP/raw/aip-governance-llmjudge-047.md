# aip-governance-llmjudge-047: LLM-as-a-Judge

## Concepts

### 1. Generator 与 Evaluator

LLM-as-a-Judge 使用模型，按照明确标准评价候选回答或执行结果。

- Generator：生成答案。
- Evaluator / Judge：评价答案。

Judge 是一种评估方法，不只用于 Agent，也可以评价普通 LLM 回答或 RAG 答案。

评价 Agent 时，要区分最终结果与执行过程：

| 对象 | 评价内容 | 所需信息 |
|---|---|---|
| 最终回答 | 正确性、完整性、证据支持度等 | 问题、回答、评分规则及必要依据 |
| 执行过程 | 规划、工具选择和参数是否合理 | 任务目标、执行 Trace、工具输入输出及结果 |

只提供最终答案，无法据此判断执行过程是否包含错误工具调用或多余操作。

通用方法中，同一个模型也可以通过不同调用承担生成和评分，但不能因此认为评价独立可靠；换一个模型同样不保证没有共同错误。

### 2. 质量指标、评估方法与 Rubric

三者承担不同职责：

| 概念 | 回答的问题 | 示例 |
|---|---|---|
| 质量指标 | 测什么？ | Faithfulness、Correctness、Completeness |
| 评估方法 | 怎么测？ | 人工评价、LLM Judge、确定性校验 |
| Rubric | 按什么细则评分？ | 检查项目、通过条件和各分数的含义 |

例如测量 Faithfulness：

1. 指标关注回答是否得到所给证据支持。
2. Rubric 要求逐条检查事实断言，无依据声明需要扣分。
3. LLM Judge 根据这些规则检查回答与证据。
4. 人工抽样复核 Judge 是否可靠。

同一个指标可以采用不同评估方法，同一种评估方法也可以评价多个指标。

### 3. 北极星指标与质量指标

北极星指标关注产品是否持续为用户创造核心价值；质量指标关注系统完成任务的质量。

选购助手的教学设计示例：

- 北极星指标候选：每周成功帮助用户完成选购决策的任务数。
- 质量指标：需求满足率、事实正确性、任务成功率等。
- 评估方法：代码校验、Judge 评分、人工评价。

Judge 高分不等于用户获得实际价值，还需要真实用户反馈和行为证据。

该北极星指标只是本次讨论中的候选设计，尚未验证。

### 4. Rubric 将指标落实成评分规则

只要求“请给答案打 1～5 分”，评分依据可能不明确。

应为每个维度定义检查内容与分数锚点，并根据任务选择规则。

教学案例采用虚构公司政策：

> 问题：全职员工每年有多少天年假，能否结转？  
> 有效政策：每年 20 天，可以结转。

候选答案：

- A：每年 20 天，未使用年假可以结转。
- B：全职员工每年享有 25 天年假，未使用部分可以结转，并附有较长的福利介绍。

本例的 Correctness 评分规则：

| 分数 | 规则 |
|---|---|
| 2 | 两个关键事实均正确，且没有额外错误断言 |
| 1 | 部分关键事实正确，但存在错误或缺失 |
| 0 | 两个关键事实都错误，或回答与问题无关 |

按此量表，A 应得 2 分，B 因年假天数错误只能得 1 分。

这些分数是教学设计，不是 AWS 默认标准。

Completeness 与 Correctness 需要分开：回答了两个问题，不代表两个答案都正确。语言流畅或内容更长，也不能抵消关键事实错误。

### 5. Rubric 可以定制，但比较时应固定

Rubric 通常需要根据任务与业务要求设计，并不存在适用于所有任务的统一细则。标准评测或平台内置指标也可能提供既定 Rubric。

例如 Completeness：

| 任务 | 完整性要求 |
|---|---|
| 产品推荐 | 价格、必要功能、购买链接、推荐理由 |
| 客服回答 | 回答问题、处理步骤、必要限制 |
| 文档总结 | 主要结论、关键数据、重要例外 |

定制仍需保留指标本义，不能把“答案更长”直接等同于“更完整”。

工程原则：

- 评估前确定 Rubric。
- 比较版本时使用同一套 Rubric。
- 修改后记录版本。
- 需要比较历史结果时，用新规则重新评估。

可以总结为：按任务定制，按版本固定。

### 6. Judge 的输入与评价依据

| 输入 | 用途 |
|---|---|
| Question | 确认用户问题 |
| Candidate Answer | 提供被评价的回答 |
| Rubric | 定义评价规则 |
| Reference Answer（如有） | 提供经过验证的参考答案 |
| Context（需要时） | 检查证据支持关系 |

Faithfulness 关注答案与所给 Context 的关系。

Correctness 需要可靠事实依据，不能仅检查答案是否复述了 Context。参考答案或 Context 本身错误，也可能影响评价结果。

没有参考答案时，仍可以评价某些维度，但不能把裁判自己的知识自动当成事实真值。

可以要求 Judge 输出分数及具体理由：

```json
{
  "correctness": 1,
  "reason": "回答写25天，但有效政策为20天；结转规则正确。"
}
```

理由便于审核，但理由表达合理不保证判断正确。

### 7. 单答案评分与成对比较

- 单答案评分：检查某个答案是否达到规定标准。
- Pairwise Comparison：比较 A、B 哪个更好，或是否相当。

相对更好不代表达到上线门槛。两个答案都存在严重错误，也可能分出相对优劣。

### 8. Judge Bias：裁判也会有偏差

| 偏差 | 可能表现 | 检查或缓解思路 |
|---|---|---|
| Position Bias | 更偏好排在某个位置的答案 | 交换答案顺序，观察选择是否稳定 |
| Verbosity Bias | 因篇幅更长而偏好答案 | 独立评价事实，明确不因长度额外加分 |
| Self-enhancement Bias | 偏好自身生成的内容或风格 | 隐去来源，比较其他裁判与人工结果 |
| 不一致性 | 同一案例重复评分发生变化 | 固定版本与规则，抽样重复检查 |

例如，A 放前面时选 A，交换顺序后又选择排在前面的 B，应怀疑位置偏差。

单个案例可以暴露顺序敏感或不稳定信号，不能凭一次交换就量化整个评估器的偏差。

缓解措施可以发现或降低偏差，不能保证完全消除偏差。

### 9. Human Calibration：用人工标注校准 Judge

人工校准以经过复核的人工标注为参照，检查 Judge 的判断是否符合任务标准。

基本流程：

1. 准备有代表性的案例。
2. 人工依据相同 Rubric 标注。
3. Judge 对案例评分。
4. 比较结果，分析分歧。
5. 调整 Rubric、示例或裁判配置。
6. 使用另一组保留案例重新验证。

不能只看总体一致率，还应检查：

- 错误答案被放行的情况。
- 正确答案被误判的情况。
- 分歧是否集中在某类任务。
- 问题来自 Rubric、参考依据，还是 Judge 能力。

人工标注也需要清晰规则；有争议的案例应复核。

Human Calibration 不只是给 Judge 打分，还包括分析差异、调整和重新验证。不能只调到适合已经看过的样本。

### 10. 确定性校验与 Judge 的边界

对于金额、ID、权限、调用结果和重复交易等可验证条件，应使用代码、可信系统和日志直接检查。

Judge 可以辅助判断语义合理性、完整性和证据支持关系，但不替代确定性业务校验。

在 AWS 映射上，Bedrock 的 Judge 模型评估任务区分 Generator 和 Evaluator，可对生成结果或提供的已有回答进行评价，并支持内置或自定义指标。参考回答是否必需，应根据具体评估任务和指标判断，不能一概认为所有 Judge 评价都必须提供参考答案。

## Concept Relationships

### 指标、规则和方法

指标定义质量目标，Rubric 将目标转换为可操作细则，评估方法执行检查并产生结果。

### 两层评价关系

第一层：Judge 按 Rubric 评价 LLM、RAG 或 Agent。

第二层：人用经过复核的标注检查 Judge，分析偏差并校准。

第二层不是另一个 Judge 自动宣布第一个 Judge 正确，而是用任务标准和可靠参照验证其适用性。

### 与 Golden Dataset 和回归测试的关系

经过验证的案例与评分规则可以支持版本比较。比较时应固定数据、Rubric 和裁判配置，避免把评估器变化误认为被评系统质量变化。

## Understanding

用户询问本节是否属于 Agent 评估。讨论明确：Judge 是可用于多种对象的评估方法；评价 Agent 执行过程时，需要提供相应 Trace。

用户进一步询问北极星指标、质量指标及评估方法的区别，讨论将其区分为：

- 用户核心价值。
- 系统质量目标。
- 测量质量的方法。

面对交换答案顺序后裁判总选择前一项的场景，用户回答：

> 裁判判断有偏向。

该回答识别了裁判偏差；讨论将此例具体命名为 Position Bias。

用户询问 Rubric 是否不是固定细则。讨论明确：可以按任务定制，但比较版本时需要固定并记录版本。

用户最后用自己的话概括：

> Human Calibration 是衡量 Judge 的 Judge。对于 Judge 对 Agent/RAG 的评估，Rubric 是评分细则，定义如何衡量指标。

这一解释抓住了两层评价关系。讨论补充：人工校准不只检查分数，还包含分歧分析、调整和重新验证，人工标注本身也需复核。

本次未实际创建 Bedrock 评估任务、运行 Judge 或进行人工一致性实验，不据此认定已具备独立实操能力。

## References

### 继承来源，未重新读取底层资料

- [NotebookLM Mind Map](../preRaw/NotebookLM%20Mind%20Map.png) — VI. Governance, Security & QA → Evaluation (QA) → LLM-as-a-Judge (Nova/Claude Evaluators)。
- [AWS Certified Generative AI Developer 课程资料](../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf) — PDF 第 50、430 页：RAG evaluation、Bedrock Model Evaluations。
- [AIP Study Guide](../preRaw/AIPStudyGuide.pdf) — PDF 第 9 页：Evaluation Techniques。

### 本次检索的补充来源

- [Amazon Bedrock — Evaluate model performance using another LLM as a judge](https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation-judge.html) — 本次读取搜索返回正文摘录；Generator/Evaluator、已有回答评价、内置及自定义指标。
- [Amazon Bedrock — Use metrics to understand model performance](https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-metrics.html) — 本次读取搜索摘要；提供参考回答时，裁判会考虑该依据。
- [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685) — 本次直接读取摘要页，未阅读全文；位置、篇幅、自我偏好及能力局限。

### KP 血缘

- [原始 KP 定义](../preRaw/KP/aip-governance-llmjudge-047.md) — 本次直接读取。

年假政策、评分数字和选购助手指标均为本次讨论中的教学示例。
