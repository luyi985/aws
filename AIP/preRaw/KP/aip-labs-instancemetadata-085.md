---
id: aip-labs-instancemetadata-085
title: 从实例内查询 EC2 元数据
status: pending
sources:
- AIP/preRaw/AIP-Materials/cli/ec2-metadata.sh — lines 1–3
dependencies: []
---

# aip-labs-instancemetadata-085: 从实例内查询 EC2 元数据

## Learning Objective

能够识别示例请求查询的实例属性，并说明实例内元数据访问与从本地电脑调用 AWS API 的区别。

## Scope

- Included: 链路本地元数据地址、instance-id 路径和示例没有令牌步骤的边界。
- Excluded: 当前 IMDS 配置修改、临时凭证读取和完整 IMDSv2 操作教程。

## Source Context

cli/ec2-metadata.sh 只有一个 curl 请求，没有查询 AWS 控制平面 API，也没有获取令牌的步骤。

## Knowledge Point

实例元数据（instance metadata）描述当前实例。示例访问链路本地地址 169.254.169.254 的 instance-id 路径，预期执行位置是实例内部。该代码未展示令牌获取；能否直接成功取决于实例的元数据设置，不能把这条请求当作所有实例上的通用操作保证。

## Logical Path

1. 先区分请求目标是链路本地地址还是区域 AWS API。
2. 从路径识别本次只读取 instance-id。
3. 检查代码有没有认证令牌获取或请求头。
4. 把源码展示的最小查询与实际实例配置要求区分开。

## Key Terms

- 实例元数据（`instance metadata`）：关于当前 EC2 实例自身属性的数据。
- 链路本地地址（`link-local address`）：用于本地链路或特定实例环境的地址。

## Example

源码示例：curl 的目标是 /latest/meta-data/instance-id，不是列出整个账号的实例。这个例子说明查询当前实例属性与使用 AWS CLI 管理账号资源是两种不同访问路径。

## Sources

- `AIP/preRaw/AIP-Materials/cli/ec2-metadata.sh — lines 1–3`：完整请求地址和被查询的 instance-id 属性。
