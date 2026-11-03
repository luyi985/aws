---
id: saa-ml-rekognition-142
title: 图像与视频识别（Amazon Rekognition）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=567
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=568
dependencies: []
---

# saa-ml-rekognition-142: 图像与视频识别（Amazon Rekognition）

## Learning Objective

在“上传图片后生成审核标签并让低置信结果进入人工检查”的场景中，能说明图像与视频识别的判断依据，并指出适用限制。

## Scope

- Included: 图像与视频识别的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

托管视觉识别从图片或视频提取标签、人脸或内容审核等结果。

## Logical Path

1. 需求：上传图片后生成审核标签并让低置信结果进入人工检查。
2. 应用仍需决定置信阈值与人工处理路径，识别输出不是绝对事实。
3. 结果：识别服务提供决策输入。

## Key Terms

- Amazon Rekognition：托管视觉识别从图片或视频提取标签、人脸或内容审核等结果。

## Example

示意例：上传图片后生成审核标签并让低置信结果进入人工检查，说明识别服务提供决策输入。

## Sources

- [课件 p.567：Amazon Rekognition](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=567)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.568：Amazon Rekognition – Content Moderation](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=568)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
