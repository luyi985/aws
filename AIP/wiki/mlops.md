---
title: 模型部署、血缘与 MLOps
derived_from:
  - aip-governance-lineage-054
  - aip-sagemaker-deployment-061
  - aip-sagemaker-mlops-062
last_synced: 2026-11-01
status: current
---

# 模型部署、血缘与 MLOps

## 制品如何成为服务
SageMaker 实时 Endpoint 服务在线请求，Batch Transform 面向离线批量推理。模型发布还要管理权重、容器、数据来源、评估结果及配置。

S3 保存制品与报告，ECR 保存容器镜像，Model Registry 管理版本和审批元数据，Pipelines 编排处理、训练和评估步骤。Lineage 连接数据、处理作业、训练、模型及部署，回答“这个模型从哪里来”。

## 发布闭环
候选版本先完成离线验证和审批，再通过适用的 Deployment Guardrails 逐步转移流量；告警或退化触发停止与回滚。审批记录、成功部署和线上质量是不同事实。

本页讨论 SageMaker 模型链路，不能直接把其 Endpoint 部署机制套用到所有 Bedrock Prompt 或 Agent 应用。应用发布需要相应版本和流量控制，见 [评估与发布](evaluation.md)。

## Raw 来源

- [aip-governance-lineage-054](../raw/aip-governance-lineage-054.md)
- [aip-sagemaker-deployment-061](../raw/aip-sagemaker-deployment-061.md)
- [aip-sagemaker-mlops-062](../raw/aip-sagemaker-mlops-062.md)
