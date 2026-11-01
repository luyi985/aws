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

## 从需求到一次模型请求
Prompt 将指令、背景、输入与输出要求组织起来。Zero-shot 直接描述任务；Few-shot 用示例表达分类边界或输出模式。分步推理的提示方式仍需结果校验。

State 保存需求、进度和结果；Context 是本次实际发送给模型的内容。短期记忆服务当前任务，长期记忆保存跨会话有价值的信息，并考虑隔离、同意、过期和删除。

## 保护有效条件
选购助手可保存预算及币种、必须功能、偏好和本地库存要求。未知条件保持未知；修改预算只更新对应字段。Worker 调查时和 Synthesizer 综合时，都应获得相关的当前约束。

裁剪去除无关内容，摘要压缩过程，但两者都可能丢失条件。扩大窗口不能恢复组装前丢掉的信息。CountTokens 测量规模；max_tokens 限制输出；TPM 是吞吐配额，三者不能互换。

## 版本与验证
模板变量保存运行时数据；Version 记录历史；Variant 对比不同方案。修改 Prompt 或摘要策略后，用固定测试集比较结果。先检查实际请求、关键条件、Token 和结束原因，再判断模型是否使用证据不当。

相关：[评估](evaluation.md)、[故障定位](troubleshooting.md)。

## Raw 来源

- [aip-foundations-prompttechniques-004](../raw/aip-foundations-prompttechniques-004.md)
- [aip-foundations-promptanatomy-005](../raw/aip-foundations-promptanatomy-005.md)
- [aip-foundations-promptmanagement-006](../raw/aip-foundations-promptmanagement-006.md)
- [aip-agentic-memory-023](../raw/aip-agentic-memory-023.md)
- [aip-operations-tokenefficiency-037](../raw/aip-operations-tokenefficiency-037.md)
- [aip-troubleshooting-context-074](../raw/aip-troubleshooting-context-074.md)
