# aip-testing-ragtroubleshooting-071: RAG 评估与检索故障定位

## Concepts

### 1. 分层定位 RAG 故障

RAG 回答错误，不一定是生成模型的问题。应沿着数据流，检查正确证据在哪一步缺失、被筛掉或被错误使用。

| 阶段 | 主要检查 |
|---|---|
| Source / Ingestion | 原文是否包含答案，最新文档是否成功入库 |
| Chunking | 证据是否被切断，适用条件是否与结论分离 |
| Embedding / Index | Chunk 是否成功建立索引，向量表示是否适合任务 |
| Retrieval | 正确 Chunk 是否进入初始候选集 |
| Reranking / Selection | 正确 Chunk 是否在重新排序后被保留 |
| Context Assembly | 正确证据是否完整进入模型实际请求 |
| Generation / Grounding | 模型是否依据证据正确回答 |

核心方法是检查每个阶段的实际输入和输出，而不是看到错误答案就直接更换模型。

### 2. Retrieval Quality：Recall@K 与 Precision@K

Recall@K 关注应找到的相关证据中，实际找到了多少。

\[
Recall@K=\frac{返回结果中的相关Chunk数}{全部已标注的相关Chunk数}
\]

Precision@K 关注返回结果中，有多少是相关证据。

\[
Precision@K=\frac{返回结果中的相关Chunk数}{返回的Chunk总数}
\]

通常返回结果数量为 K；如果不足 K，应明确实际使用的计算口径。

教学示例：共有 4 个已标注的相关 Chunk，Top-5 返回其中 3 个，另外两个无关。

- Recall@5 = 3/4 = 75%。
- Precision@5 = 3/5 = 60%。

计算 Chunk 级 Recall，需要知道哪些 Chunk 属于相关证据。只有问题和参考答案，通常不足以直接计算该指标。

对于同一固定排序列表，增加 K 不会降低 Recall，但 Precision 可能上升或下降。更多候选也可能增加后续处理成本；如果全部送入模型，还会增加 Token 消耗和噪声。

### 3. 正确证据没有进入 Retrieval 候选集

首先确认答案存在且可以被检索，再检查检索过程。

#### 原文、入库与索引新鲜度

- 原文是否包含正确答案？
- 是否存在更新后的政策或文档版本？
- 最新版本是否成功完成同步与索引？
- 检索系统是否仍然使用旧版本？

原文已经更新，不代表索引也已更新。

#### Chunk 质量

切块可能把结论与适用条件分开。例如：

- 一个 Chunk 写“每年 20 天年假”。
- 另一个 Chunk 写“仅适用于悉尼全职员工”。

如果只找到其中一个，证据可能不完整。需要检查切块边界、Chunk Size、Overlap，以及标题和适用范围是否保留。

#### Query 与检索配置

- Retrieval 实际收到的 Query 是否准确、完整？
- Query Rewrite 是否丢失了地区、员工类型等关键条件？
- Metadata Filter 是否误排除了正确文档？
- Embedding 是否适合当前语言和领域？
- Top-K 是否过小？
- 是否需要关键词与向量混合检索，以覆盖精确术语等情况？

“检查 Prompt”需要说明具体位置：

| Prompt 位置 | 与召回的关系 |
|---|---|
| Query Rewrite Prompt | 可能改变检索 Query，从而影响召回 |
| 最终答案生成 Prompt | 在检索之后执行，无法直接补回未召回的证据 |

### 4. 正确证据已召回，但被 Reranking 筛掉

Retrieval 与 Reranking 的分工通常是：

- Retrieval 取回较多候选，尽量覆盖相关证据。
- Reranking 调整候选顺序，再选取一部分交给模型。

教学示例：

1. Retrieval 返回 20 个候选，包含正确政策。
2. Reranker 将正确政策排在第 8。
3. 系统只保留前 5 个。
4. 正确政策没有进入最终 Context。

这时应检查 Reranking 与筛选阶段，而不是将其直接判断为初始召回失败。

可能原因包括：

- Reranker 不适合当前语言、领域或问题类型。
- 输入缺少标题、版本、适用范围等信息。
- 输入被截断，关键证据没有参与评分。
- 最终保留的 Top-K 太小。
- 如果使用 LLM 做 Reranker，评分 Prompt 可能不明确。

专用 Reranker 通常直接接收 Query 与候选文档，不一定提供可修改的 Prompt。不能把所有 Reranker 的问题都归因于 Prompt。

**单纯重新排序，无法找回候选集合中根本不存在的 Chunk。**

### 5. 最终 Context 与模型实际输入

RAG 中的 Context 通常指检索出的证据。模型的完整输入还可能包含：

| 输入部分 | 作用 |
|---|---|
| System Prompt | 指定回答规则 |
| 用户问题 | 明确当前任务 |
| 检索 Context | 提供 Chunks、标题和版本等证据 |
| 对话历史 | 提供之前的交互信息 |

正确 Chunk 出现在 Reranker 输出中，不代表它已完整进入模型请求。

需要检查：

- **组装遗漏**：选中了正确 Chunk，但拼接请求时漏掉。
- **截断**：关键内容在处理上下文长度时被裁掉。
- **元信息丢失**：保留正文，却丢失版本或适用范围。
- **噪声**：大量无关内容干扰模型使用证据。
- **冲突**：同时传入旧版与新版政策，却没有明确有效版本。

因此，排障应检查模型实际收到的完整请求，不能只看检索或 Reranking 日志。

### 6. Generation、Faithfulness 与 Correctness

沿用 HR 政策教学案例：最新有效政策是 20 天年假。

| 情况 | 初步调查方向 |
|---|---|
| Context 是旧政策 15 天，回答也是 15 天 | 数据版本、索引新鲜度、检索选择 |
| 正确政策存在，但没有进入候选集 | 入库、索引、Chunk、Query、Filter、Retrieval |
| 正确政策已召回，但被筛掉 | Reranking 与最终 Top-K |
| 正确政策完整进入请求，回答却是 15 天 | 上下文冲突、Prompt、证据使用与生成 |

如果模型忠实复述旧政策，Faithfulness 可以较高，但相对于最新有效政策的 Correctness 较低。

如果输入证据清楚写着 20 天，模型却回答 15 天，则需要调查生成是否偏离证据。

### 7. 用最小复现隔离问题

构造一个简化请求，只保留：

- 用户问题。
- 已确认的正确证据。
- 明确的回答要求。

观察结果：

- 简化后能答对：优先检查原请求的 Context 组装、噪声和冲突。
- 简化后仍答错：进一步检查 Prompt、模型理解与生成能力。

这是一种缩小调查范围的方法，单次结果不足以证明唯一根因。

## Concept Relationships

### 分阶段指标与 Trace 配合

Recall 和 Precision 描述检索结果质量；Trace 帮助确定证据在哪一步发生变化。

可按排障需要记录：

- 文档版本与 Chunk ID。
- Retrieval 候选、排名和分数。
- Reranking 后的排名、分数及保留结果。
- 模型实际收到的输入。
- 最终输出。

正确证据可能在不同阶段丢失，因此不能只观察最终答案或只测初始检索。

### 与 Golden Dataset 和回归测试的联系

本 KP 与 KP 070 形成闭环：

1. 从错误回答发现问题。
2. 沿 Pipeline 定位故障。
3. 修改对应阶段。
4. 将失败案例加入 Golden Dataset。
5. 运行回归测试，检查问题是否修复，以及其他能力是否退化。

Golden Dataset 用于重复验证；Trace 用于解释具体失败过程。

## Understanding

用户正确计算了：

- Recall@5 = 3/4 = 75%。
- Precision@5 = 3/5 = 60%。

针对“已召回正确 Chunk，但 Reranking 后未保留”的情况，用户提出：

1. Reranker 模型能力可能不足。
2. Reranking 的 Prompt 可能不明确。

讨论补充了实现边界：Prompt 调整适用于可配置提示词的 LLM 排序方案，不能直接套用于所有专用 Reranker。

针对“初始 Retrieval 未包含正确结果”，用户提出：

1. 先确认原文是否包含正确答案。
2. 检查 Chunk 是否截断原文及 Chunk 质量。
3. 检查提示词是否明确。

讨论进一步区分了 Query Rewrite Prompt 与最终生成 Prompt：前者可能影响召回，后者无法直接补回未召回证据。

用户还询问，Context 是否指 Rerank 后的 Chunks 与问题一起输入模型。讨论明确区分：

- 检索 Context：选出的证据。
- 模型完整输入：规则、问题、证据及可能的对话历史。

本次完成了概念讨论与局部场景分析；未进行真实系统排障或长期记忆验证。

## References

以下来源继承自原始 preRaw KP。本次已读取 KP 定义，未重新读取底层 PDF 或打开以下官方文档，不声称已验证其当前内容。

- [AWS Certified Generative AI Developer 课程资料](../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf) — AIP-C01 course slides / detailed coverage；原定义未提供具体页码。
- [AIP Study Guide](../preRaw/AIPStudyGuide.pdf) — AIP-C01 Study Guide (Detailed)；原定义未提供具体页码。
- [AWS Official Docs — Knowledge Base Evaluation](https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation-kb.html)。
- [AWS Official Docs — Knowledge Base Evaluation Report](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-evaluation-report.html)。

KP 血缘：

- [原始 KP 定义](../preRaw/KP/aip-testing-ragtroubleshooting-071.md) — 本次直接读取。
