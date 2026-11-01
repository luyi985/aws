---
id: aip-labs-xraysidecar-095
title: ECS 任务中的 X-Ray 采集容器
status: pending
sources:
- AIP/preRaw/AIP-Materials/x-ray/eb-java-scorekeep-xray-simplified.yaml — lines 190–230,
  ScorekeepTaskDefinition; lines 309–340, execution/task roles
dependencies:
- aip-observability-agenttrace-068
- aip-security-iampolicies-048
---

# aip-labs-xraysidecar-095: ECS 任务中的 X-Ray 采集容器

## Learning Objective

能够从任务定义识别应用容器、X-Ray daemon、UDP 端口和任务权限，并区分采集基础设施与应用埋点证据。

## Scope

- Included: 多容器任务、daemon、UDP 2000、TaskRoleArn 与 X-Ray 权限。
- Excluded: 未提供的应用埋点源码、真实 trace 结果和完整 ECS 部署修复。

## Source Context

文件名含 eb-java，但内容实际声明 EC2 类型 ECS 任务；必须依据 Resources 阅读运行结构。

## Knowledge Point

伴随容器（sidecar）可在同一任务中提供采集等辅助能力。模板把前端、后端和 xray-daemon 放进同一 ECS Task，并声明 UDP 2000；任务角色包含 X-Ray 权限。模板没有提供后端镜像里的埋点源码，因此这些资源只证明采集结构被声明，不证明业务调用已产生 trace。

## Logical Path

1. 先从资源类型确认这是 ECS 任务，而非按文件名猜测部署平台。
2. 区分前后端容器与采集容器。
3. 检查 daemon 端口、网络模式和任务角色权限。
4. 把采集基础设施声明与应用实际发出追踪数据的证据分开。

## Key Terms

- 伴随容器（`sidecar`）：与主应用共同部署、提供辅助能力的容器。
- 应用埋点（`instrumentation`）：由应用或库产生观测数据的代码或配置。

## Example

源码示例：task 中声明 amazon/aws-xray-daemon 和 UDP 2000，但看不到后端是否发送 trace。这展示“有接收组件”并不能单独证明“应用发送了数据”。

## Sources

- `AIP/preRaw/AIP-Materials/x-ray/eb-java-scorekeep-xray-simplified.yaml — lines 190–230, ScorekeepTaskDefinition; lines 309–340, execution/task roles`：容器、端口、网络与任务权限的静态声明。
