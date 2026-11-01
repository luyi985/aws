---
id: aip-labs-promptchain-082
title: 提示链中后续步骤的上下文依赖
status: pending
sources:
- AIP/preRaw/AIP-Materials/PromptChaining.json — lines 1–7, prompts array
dependencies:
- aip-foundations-promptanatomy-005
---

# aip-labs-promptchain-082: 提示链中后续步骤的上下文依赖

## Learning Objective

能够从三条提示词识别后续步骤依赖的城市信息，并说明提示列表与实际执行器之间的边界。

## Scope

- Included: prompts 数组顺序、首步输出约束和后续步骤的上下文需求。
- Excluded: 未提供的执行器实现、自动重试和 Bedrock Flows 控制台配置。

## Source Context

PromptChaining.json 只有三条提示，不包含模型调用、消息历史拼接或变量替换代码。

## Knowledge Point

提示链（prompt chain）让后续步骤使用前面产生的信息。首条提示要求输出一个真实城市及其国家，第二条引用前面提到的城市，第三条要求描述该城市的饮食。顺序数组表达了预期次序，但只有执行器传递了城市或消息历史，这种依赖才得到满足。

## Logical Path

1. 先读第一条提示要求产生的数据与输出格式。
2. 在第二、第三条中找出指代前文的词。
3. 列出执行器必须保留或显式传入的城市信息。
4. 区分声明的提示序列与尚未提供的执行实现。

## Key Terms

- 提示链（`prompt chain`）：后一条提示依赖前一步结果的提示序列。
- 上下文传递（`context passing`）：把此前结果提供给后续步骤。

## Example

示意示例：假设第一步输出“Sydney, Australia”，后续饮食描述应围绕 Sydney。若第三条提示被当作无历史的独立请求，模型就缺少明确城市；这展示提示顺序不能替代上下文传递。

## Sources

- `AIP/preRaw/AIP-Materials/PromptChaining.json — lines 1–7, prompts array`：三条提示的顺序、输出约束和城市指代。
