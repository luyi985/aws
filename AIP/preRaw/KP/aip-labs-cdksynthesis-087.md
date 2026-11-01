---
id: aip-labs-cdksynthesis-087
title: CDK 从构造代码到 CloudFormation 模板
status: pending
sources:
- AIP/preRaw/AIP-Materials/cdk/lib/cdk-app-stack.js — lines 1–83, CdkAppStack
- AIP/preRaw/AIP-Materials/cdk/lib/cdk-app-stack (1).js — lines 1–82
- AIP/preRaw/AIP-Materials/cdk/steps.sh — lines 1–32
- AIP/preRaw/AIP-Materials/cdk/steps (1).sh — lines 1–36
dependencies:
- aip-labs-stackreferences-086
---

# aip-labs-cdksynthesis-087: CDK 从构造代码到 CloudFormation 模板

## Learning Objective

能够把 CDK 示例中的构造对象与生成模板、部署和清理步骤对应起来，并识别两套版本文件的区别。

## Scope

- Included: Stack、构造对象、资产路径、bootstrap、synth、deploy 和 destroy 的职责。
- Excluded: 修复源码、执行部署、当前 CLI 安装方式和运行时支持矩阵。

## Source Context

cdk 目录同时保留 aws-cdk-lib 与 @aws-cdk/* 两种导入形式；步骤文件会初始化项目，因此目录本身不是已生成的完整应用。

## Knowledge Point

基础设施代码（infrastructure as code）可先表达资源，再综合（synthesis）成部署模板。CdkAppStack 创建桶、角色、表与函数；steps 文件区分 bootstrap、synth、deploy 和 destroy。阅读时必须保持导入版本与项目依赖一致，不能把两套文件拼成一套已经验证可运行的教程。

## Logical Path

1. 先确认 Stack 文件使用哪一种包导入形式。
2. 找出代码构造的资源与本地 Lambda 资产路径。
3. 区分初始化项目、准备部署环境、生成模板和实际部署。
4. 再读取清理步骤，保留版本与工作目录尚需确认的限制。

## Key Terms

- 综合（`synthesis`）：把构造代码转换成 CloudFormation 模板等部署产物。
- 资产（`asset`）：部署时需要打包或上传的本地代码文件。

## Example

源码示例：lambda.AssetCode.fromAsset("lambda") 引用本地目录，而 cdk synth 用于查看资源模板。这个对照展示应用代码资产与基础设施声明共同参与部署；仅复制 Stack 文件并不足以提供全部项目文件。

## Sources

- `AIP/preRaw/AIP-Materials/cdk/lib/cdk-app-stack.js — lines 1–83, CdkAppStack`：aws-cdk-lib 导入、资源构造和 Lambda 资产路径。
- `AIP/preRaw/AIP-Materials/cdk/lib/cdk-app-stack (1).js — lines 1–82`：@aws-cdk/* 导入形式的对照。
- `AIP/preRaw/AIP-Materials/cdk/steps.sh — lines 1–32`：初始化、bootstrap、synth、deploy 和清理顺序。
- `AIP/preRaw/AIP-Materials/cdk/steps (1).sh — lines 1–36`：另一套导入版本所配的步骤。
