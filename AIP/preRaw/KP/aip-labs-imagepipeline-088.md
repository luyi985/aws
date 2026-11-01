---
id: aip-labs-imagepipeline-088
title: S3 图片事件到标签持久化的数据路径
status: pending
sources:
- AIP/preRaw/AIP-Materials/cdk/lib/cdk-app-stack.js — lines 53–79, table, Lambda and
  S3EventSource
- AIP/preRaw/AIP-Materials/cdk/lambda/index.py — lines 14–55, handler and rekFunction
dependencies:
- aip-labs-cdksynthesis-087
- aip-integration-eventdriven-057
---

# aip-labs-imagepipeline-088: S3 图片事件到标签持久化的数据路径

## Learning Objective

能够追踪图片上传事件怎样连接 Lambda、Rekognition 与 DynamoDB，并指出本例批量事件处理的边界。

## Scope

- Included: S3 事件绑定、桶与键读取、detect_labels、TABLE 环境变量和标签写入。
- Excluded: 自定义视觉模型训练、生产重试设计和实际识别准确率验证。

## Source Context

CDK Stack 声明事件绑定和权限，lambda/index.py 实现读取图片及标签落库；三张 JPEG 是输入样本，不是识别结果。

## Knowledge Point

事件数据路径（event data flow）需要同时检查资源连接和处理函数。Stack 让对象创建事件触发函数；函数从事件提取 bucket、key，调用 detect_labels，再向 TABLE 指定的表写入标签。代码中的 rekFunction 调用位于 for 循环外，多个 Records 时只处理最后保留的 bucket、key。

## Logical Path

1. 从 Stack 定位 S3 OBJECT_CREATED 到函数的绑定。
2. 把事件里的桶名与对象键对应到 Rekognition 输入。
3. 追踪返回 Labels 如何变成 DynamoDB 字段。
4. 用两个 Records 检查调用的缩进位置，区分设计链路与当前实现覆盖。

## Key Terms

- 对象键（`object key`）：标识桶内对象的名称。
- 事件记录（`event record`）：事件载荷中描述一次变化的数据项。

## Example

示意示例：事件含有 A.jpeg 和 B.jpeg 两条 Records 时，for 循环最后留下 B.jpeg，而 rekFunction 在循环后只调用一次。这展示事件链路已连通不等于批量载荷中的每个对象都被处理。

## Sources

- `AIP/preRaw/AIP-Materials/cdk/lib/cdk-app-stack.js — lines 53–79, table, Lambda and S3EventSource`：表名注入、事件绑定和资源授权。
- `AIP/preRaw/AIP-Materials/cdk/lambda/index.py — lines 14–55, handler and rekFunction`：事件字段提取、标签调用、循环边界和写入。
