---
title: 质量评估与安全发布
derived_from:
  - aip-governance-evaluationtypes-045
  - aip-governance-evaluationmetrics-046
  - aip-governance-llmjudge-047
  - aip-governance-responsibleai-052
  - aip-governance-clarify-053
  - aip-testing-regression-070
last_synced: 2026-11-01
status: current
---

# 质量评估与安全发布

## 测什么、怎么测、如何打分
Correctness 衡量正确性，Faithfulness 衡量证据支持，Completeness 衡量完整性，Conciseness 衡量简洁性。人工评估、LLM Judge 和确定性校验是方法；Rubric 定义场景相关评分细则。ROUGE 和 BERTScore 测文字或语义相似，不能独立证明事实正确。

Judge 同样可能偏向特定措辞、长度或位置。Human calibration 用人工标注样本检验评分可靠性。评价 Agent 过程需要 Trace，只有最终答案无法证明工具选择正确。

## 从代表性案例到发布
Golden Dataset 覆盖正常、边界、拒答、权限和工具场景。固定模型、Prompt、数据与评分标准比较新旧版本，必要时重复执行。验收门槛同时约束质量、延迟、成本及独立安全要求。

Canary 先接入少量真实流量，依据指标扩量或回滚；A/B 比较业务效果，需考虑随机分配、样本量与混杂因素。离线改善不保证线上安全。

## 负责任的评价
公平性需要分组观察错误与结果，不能只看总体均分。Clarify 提供偏差与可解释性证据，不自动裁定公平。解释应说明依据与限制；与 [监控](observability.md) 联合形成持续反馈。

## Raw 来源

- [aip-governance-evaluationtypes-045](../raw/aip-governance-evaluationtypes-045.md)
- [aip-governance-evaluationmetrics-046](../raw/aip-governance-evaluationmetrics-046.md)
- [aip-governance-llmjudge-047](../raw/aip-governance-llmjudge-047.md)
- [aip-governance-responsibleai-052](../raw/aip-governance-responsibleai-052.md)
- [aip-governance-clarify-053](../raw/aip-governance-clarify-053.md)
- [aip-testing-regression-070](../raw/aip-testing-regression-070.md)
