# aip-troubleshooting-context-074: Context Window、截断与 Prompt 回归排障

## Concepts

### 1. State 与 Context 的区别

State 是应用保存的信息，包括用户需求、任务进度和工具结果等。

Context 是某次推理实际提供给模型的信息。数据库保存了历史，不代表模型本次请求自动获得了这些历史。

应用需要按任务从 State 中选择必要内容，组装模型请求：

State → 选择相关字段 → 组装请求 → 模型推理。

一次 Agent 请求可能包括：

- System Prompt。
- 当前问题。
- 必要的对话历史。
- 检索和工具结果。
- 工具定义。
- 当前有效的任务约束。

因此，“模型没有遵守之前的条件”可能是请求中缺失了条件，不能直接判断为模型理解或记忆能力不足。

### 2. Context Window 与输出预算

Context Window 是单次推理的容量限制。

对于输入与输出共享总窗口的模型，需要同时考虑输入规模和输出预算。教学示例：

- 总窗口：32,000 Tokens。
- 输入：29,000 Tokens。
- 计划最多输出：4,000 Tokens。

合计超过窗口容量。具体模型还可能有独立输入、输出限制，应按对应模型规则判断。

`max_tokens` 限制输出长度，不会扩大上下文窗口。

Context Window 与 TPM 也不同：

| 概念 | 控制对象 |
|---|---|
| Context Window | 单次推理的容量 |
| TPM | 一分钟内的 Token 吞吐配额 |
| max_tokens | 单次生成的最大输出长度 |

### 3. Overflow 与 Truncation

| 问题 | 含义 | 可能表现 |
|---|---|---|
| Context Overflow | 请求超过允许容量 | 请求被拒绝 |
| Input Truncation | 输入被裁掉一部分 | 请求成功，但关键条件缺失 |
| Output Truncation | 输出达到长度限制 | 回答或 JSON 未完成 |

不能假设超限后模型一定会自动保留重要内容。是否报错、在哪里裁剪、按什么策略裁剪，取决于具体实现。

教学案例：

1. 用户最初要求“只看澳洲本地库存，预算 $300”。
2. 多轮搜索产生大量工具结果。
3. 应用删除最旧消息以控制请求长度。
4. 用户最初的限制被删除。
5. 助手推荐了海外商家的 $450 产品。

此时应检查实际请求中是否仍有预算和地区条件，而不是直接更换更大窗口的模型。

### 4. 裁剪、摘要与分块

| 方法 | 适用内容 | 主要风险 |
|---|---|---|
| Context Pruning | 重复或无关信息、无用工具输出 | 误删关键证据 |
| Summarization | 很长的历史对话、已完成的研究过程 | 遗漏数字、条件或例外 |
| Chunking | 单份材料过大 | 跨块关系丢失 |
| 结构化 State | 预算、地区、型号等关键条件 | 未及时更新，或未带入模型请求 |

摘要可以压缩过程，但当前有效的关键条件应单独保护。

更大的窗口只能增加可容纳内容，无法恢复请求组装前已经丢失的信息，也不保证模型一定正确使用全部内容。

### 5. 产品选购助手：结构化需求

用户可以用自然语言表达需求，由 LLM 提取结构化字段，再由程序校验。

例如：

> 想买降噪耳机，300 澳币以内，最好轻一点，必须澳洲本地有货。

可以提取为：

```json
{
  "budget": {
    "max": 300,
    "currency": "AUD"
  },
  "requiredFeatures": ["主动降噪"],
  "preferredFeatures": ["重量轻"],
  "localStockOnly": true
}
```

处理流程：

用户表达 → LLM 提取 → 程序校验 → 必要时澄清 → 更新 State → 搜索产品。

关键边界：

- 用户未提供的条件应保持未知，不能自行补造。
- 未提供预算，不等于预算不限。
- 用户没说明预算是否含运费，应保留为未知。
- “必须”作为硬条件，“最好”作为偏好。
- 结构化格式正确，不代表提取含义一定正确。
- 存在歧义或冲突时，需要澄清。

MVP 可以使用自由文本数组保存暂时无法分类的要求。当某项要求需要经常参与程序过滤时，再提取成独立字段。

### 6. State 的增量更新与条件执行

用户后续说“预算提高到 400”，应更新预算，保留其他仍然有效的条件。

不应把一条局部修改理解成对全部需求的替换，也不应在后续调用中重新带入已经失效的旧条件。

对于预算、本地库存等可验证的硬条件，可以在检索或候选筛选阶段进行确定性检查。

结构化 State 并不是唯一保存方式，直接保留原始需求也可以；结构化字段更便于更新、校验和程序过滤。

### 7. Worker 与 Synthesizer 如何使用 State

重要需求应在调查阶段就提供给相关 Worker，而不是只在最后交给 Synthesizer。

最终综合时，Synthesizer 应获得：

- 当前有效的需求。
- 各 Worker 的调查结果。
- 必要的来源和不确定事项。

教学示例：

```json
{
  "requirements": {
    "budget": {
      "max": 300,
      "currency": "AUD"
    },
    "requiredFeatures": ["主动降噪"],
    "preferredFeatures": ["重量轻"],
    "localStockOnly": true
  },
  "researchResults": [
    {
      "product": "耳机 A",
      "totalPriceAud": 280,
      "localStock": true,
      "features": ["主动降噪"],
      "sources": ["来源链接"]
    }
  ]
}
```

Synthesizer 根据需求比较候选，说明推荐理由、权衡和证据不足之处。

不必把整个 State 原样传入。重试计数、内部日志、审批 ID 等与当前推荐无关的字段，通常无需提供。

可以先通过代码筛选满足硬条件的产品，再由 Synthesizer 比较剩余候选。如果没有符合要求的产品，应明确报告，不能自行放宽条件。

### 8. Prompt Regression 与版本回退

即使输入没有超限、关键条件完整保留，修改 Prompt 也可能造成质量退化。

教学示例：

- 旧 Prompt：排除不满足预算和地区条件的产品。
- 新 Prompt：优先展示性能最好的产品，尽量给出推荐。

新要求可能干扰原有约束的优先级。

排查时，应尽量固定模型、测试输入和评分规则，比较新旧 Prompt，使用 Golden Dataset 进行回归测试。

如果确认新版本导致明显退化，可以回退到已验证版本。回退用于恢复已知行为，后续仍需定位原因并验证修复。

### 9. Token 计数与排障顺序

Bedrock CountTokens 可以在推理前，按指定模型的分词规则统计请求输入 Token 数。

它可以帮助判断输入规模，但不能证明关键证据保留完整，也不能保证回答质量。

Bedrock 的 `max_tokens` 还会影响请求开始时的配额预留。配额占用、实际计费和单次上下文容量是不同问题，不能混为一谈。

本次建立的排查顺序：

1. 检查模型实际收到的完整请求。
2. 确认关键约束和证据是否存在。
3. 检查输入 Token 数、输出上限，以及截断或结束原因。
4. 条件缺失时，调查请求组装、裁剪和摘要。
5. 条件完整时，调查冲突信息、Prompt 版本和模型使用证据的情况。
6. 修复后运行回归测试。

## Concept Relationships

### State 保存，Context 传递

State 负责保存信息；请求组装负责把相关信息交给当前模型调用。两者之间的映射决定模型本次能看到什么。

### 需求提取、任务分派与最终综合

用户需求先提取并校验，保存为当前有效 State。Worker 使用其中相关条件进行调查，Synthesizer 再结合需求与调查结果生成推荐。

### 容量管理与质量管理

Token 计数、裁剪、摘要和分块用于管理输入规模；它们可能改变证据完整性，因此必须同时验证输出质量。

### 与回归测试的联系

Prompt、摘要策略或上下文组装方式变化，都可能造成退化。失败案例可以加入 Golden Dataset，用于比较版本和防止问题再次出现。

## Understanding

面对“摘要遗漏本地库存条件，换更大窗口能否解决”的问题，用户回答：

> 不能，用户需求没有结构化保存在 State。

该回答正确识别了需要保护关键需求。讨论补充：结构化 State 是可行方法之一，但仍需在模型调用时读取并提供相关字段。

用户提出产品选购助手可优先结构化：

1. 价格。
2. 功能数组。
3. 其他需求数组。

讨论将价格明确为预算，并区分硬条件、偏好和未知信息；需要程序过滤的常用要求，可以提取成独立字段。

用户进一步确认：

- 用户提出需求后，可以先分析并结构化。
- 最后综合时，应将相关 State 字段与 Worker 结果一起提供给 Synthesizer。

本次完成了概念讨论与设计分析，尚未进行代码实现、真实截断排障或独立 Prompt 回归实验。

## References

### 继承来源，未重新读取底层资料

- [AWS Certified Generative AI Developer 课程资料](../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf) — AIP-C01 course slides / detailed coverage；原始 KP 未提供具体页码。
- [AIP Study Guide](../preRaw/AIPStudyGuide.pdf) — AIP-C01 Study Guide (Detailed)；原始 KP 未提供具体页码。

### 继承来源，本次直接读取

- [Amazon Bedrock — CountTokens](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_CountTokens.html) — 推理前输入 Token 计数及模型相关的分词规则。
- [Amazon Bedrock — Token Quota Management](https://docs.aws.amazon.com/bedrock/latest/userguide/quotas-token-burndown.html) — Token 配额、max_tokens 与配额预留。

### KP 血缘

- [原始 KP 定义](../preRaw/KP/aip-troubleshooting-context-074.md) — 本次直接读取。

选购助手的数据结构与流程是本次讨论中的教学设计示例，不是 AWS API 规定格式。
