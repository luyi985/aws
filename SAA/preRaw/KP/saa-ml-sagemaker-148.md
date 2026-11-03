---
id: saa-ml-sagemaker-148
title: 自建模型的生命周期（Amazon SageMaker AI）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=576
dependencies: []
---

# saa-ml-sagemaker-148: 自建模型的生命周期（Amazon SageMaker AI）

## Learning Objective

在“使用历史交易数据训练自有预测模型并部署推理端点”的场景中，能说明自建模型的生命周期的判断依据，并指出适用限制。

## Scope

- Included: 自建模型的生命周期的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

机器学习平台支持准备、训练和部署自定义模型，适合需要控制模型开发过程的场景。

## Logical Path

1. 需求：使用历史交易数据训练自有预测模型并部署推理端点。
2. 使用预训练功能接口与自建模型承担不同的数据与运维责任。
3. 结果：平台围绕模型生命周期组织工作。

## Key Terms

- Amazon SageMaker AI：机器学习平台支持准备、训练和部署自定义模型，适合需要控制模型开发过程的场景。

## Example

示意例：使用历史交易数据训练自有预测模型并部署推理端点，说明平台围绕模型生命周期组织工作。

## Sources

- [课件 p.576：Amazon SageMaker AI](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=576)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
