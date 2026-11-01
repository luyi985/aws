---
title: 提示词、State 与上下文
derived_from:
  - aip-foundations-prompttechniques-004
  - aip-foundations-promptanatomy-005
  - aip-foundations-promptmanagement-006
  - aip-agentic-memory-023
  - aip-operations-tokenefficiency-037
  - aip-troubleshooting-context-074
last_synced: 2026-11-01
status: current
---

# 提示词、State 与上下文

[返回导航](README.md) · [考试覆盖与缺口](exam-coverage.md)

## 从 Prompt 结构到可管理资产

Prompt 至少要让模型理解做什么、基于什么背景、处理什么输入和怎样输出。把稳定规则写入模板，把当前客户消息或文档作为变量，可减少重复修改。

|概念|用途|容易混淆的边界|
|---|---|---|
|Zero-shot|直接描述任务|不是不给指令|
|Few-shot|用少量输入输出示例表达规则|示例应覆盖真实分类边界|
|分步推理提示|组织复杂问题的处理步骤|步骤看似合理不证明结论正确|
|Variable|填入本次变化的数据|变量值变化不等于模板新版本|
|Version|保留历史以测试和回滚|纵向版本历史|
|Variant|比较同一目标下不同方案|横向方案比较|

例如公司对 Bug 与 Feature Request 的定义特殊，应给出边界样例，而不只增加“请准确分类”。Prompt 修改需要与测试用例和模型配置一起记录，否则难以复现。

Raw KPs: `aip-foundations-prompttechniques-004`, `aip-foundations-promptanatomy-005`, `aip-foundations-promptmanagement-006`

## State 到 Context 的显式映射

数据库保存完整历史，不代表每次模型调用都会看见。应用必须选择相关 State，组装本次 Context。短期记忆保存当前任务状态；长期记忆保存跨会话有价值的偏好或事实，需考虑同意、隔离、过期和删除。

产品研究中可以保存：
~~~json
{
  "budget": {"max": 300, "currency": "AUD"},
  "requiredFeatures": ["主动降噪"],
  "preferredFeatures": ["重量轻"],
  "localStockOnly": true
}
~~~
这是教学数据结构，不是 AWS API 格式。未说明运费口径应保持未知；“必须”与“最好”不能合并成同一种约束。用户改预算时保留其他仍有效条件。

Worker 调查时需要当前型号与限制；Synthesizer 需要有效需求、调查结果、来源和未知项。无需把内部日志、重试计数等整个 State 全部传入。可以用代码先过滤预算或库存等硬条件，再让模型解释剩余候选。

Raw KPs: `aip-agentic-memory-023`, `aip-troubleshooting-context-074`

## 容量、裁剪与输出截断

|现象|检查证据|处理方向|
|---|---|---|
|请求超窗口|输入 Token 与模型限制|减少无关输入、分块或调整任务|
|输入被裁剪|实际发出的 messages/context|保护有效需求、证据与适用条件|
|JSON 输出不完整|结束原因与输出上限|检查输出预算及响应处理|
|输入不超限但答错|冲突文档、指令和证据|最小复现、Prompt 对比|

对于共享输入输出窗口的模型，输入 29k 加计划输出 4k，不能放进 32k 总窗口。具体模型可能另有输入、输出限制。max_tokens 不会扩大窗口；TPM 控制单位时间吞吐；CountTokens 负责测量，而不决定哪些信息可删。

Pruning 删除无关内容，摘要压缩过程，Chunking 拆分长材料。它们分别有误删证据、丢失数字与例外、破坏跨块关系的风险。扩大窗口也无法恢复组装前已丢失的信息。

Raw KPs: `aip-operations-tokenefficiency-037`, `aip-troubleshooting-context-074`

## 复习案例：为什么推荐了预算外的产品

用户要求预算 300 澳元、本地库存；长对话摘要把条件丢掉，助手推荐海外 450 澳元商品。

调查顺序是：读实际请求 → 检查当前约束 → 找裁剪/摘要/组装位置 → 修复并回归。如果约束完整，再比较新旧 Prompt 是否把“必须满足预算”弱化成“尽量给出最好推荐”。

验证既要检查 Token 数降低，也要检查预算、地区、来源是否完整。只有长度改善不算质量成功。

Raw KPs: `aip-foundations-promptmanagement-006`, `aip-operations-tokenefficiency-037`, `aip-troubleshooting-context-074`

## 原始笔记与来源边界

本页综合已批准的 raw；例子、数字和数据结构为教学用途。未将来源链接的存在当作所有产品能力的重新核验。具体原始文档、页码与当时查阅状态保留在各 raw 中。

- [aip-foundations-prompttechniques-004](../raw/aip-foundations-prompttechniques-004.md)
- [aip-foundations-promptanatomy-005](../raw/aip-foundations-promptanatomy-005.md)
- [aip-foundations-promptmanagement-006](../raw/aip-foundations-promptmanagement-006.md)
- [aip-agentic-memory-023](../raw/aip-agentic-memory-023.md)
- [aip-operations-tokenefficiency-037](../raw/aip-operations-tokenefficiency-037.md)
- [aip-troubleshooting-context-074](../raw/aip-troubleshooting-context-074.md)
