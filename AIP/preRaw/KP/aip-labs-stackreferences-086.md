---
id: aip-labs-stackreferences-086
title: CloudFormation 通过资源引用连接部署对象
status: pending
sources:
- AIP/preRaw/AIP-Materials/cloudformation/0-just-ec2.yaml — lines 1–8, Resources.MyInstance
- AIP/preRaw/AIP-Materials/cloudformation/1-ec2-with-sg-eip.yaml — lines 2–53, Parameters,
  Resources and Outputs
dependencies: []
---

# aip-labs-stackreferences-086: CloudFormation 通过资源引用连接部署对象

## Learning Objective

能够从 EC2 模板追踪参数、资源引用和输出，解释实例、安全组及弹性 IP 的连接关系。

## Scope

- Included: Parameters、Resources、!Ref、Outputs 和模板中的访问规则。
- Excluded: 实际部署、当前 AMI 有效性、费用测算和完整网络安全设计。

## Source Context

cloudformation 目录给出最小 EC2 模板和增加安全组及弹性 IP 的模板，便于比较声明式引用关系。

## Knowledge Point

资源引用（resource reference）把模板中的对象连接起来，而不是手工复制运行后才得到的值。扩展模板把安全组引用交给实例，把实例引用交给弹性 IP，并把弹性 IP 输出。参数只为组描述提供值。两个安全组的规则同时适用，较窄的 SSH 规则不能抵消另一个组中已允许的全网 SSH。

## Logical Path

1. 先比较只有实例的模板与扩展模板的新增对象。
2. 从 !Ref 找到每个被引用的参数或资源。
3. 沿着安全组到实例、实例到弹性 IP 的关系读取模板。
4. 检查输出及访问规则，区分对象连接与安全策略效果。

## Key Terms

- 资源引用（`resource reference`）：使用模板内对象的返回值连接其他配置。
- 逻辑 ID（`logical ID`）：模板中识别一个资源的名称。

## Example

源码示例：MyEIP.InstanceId 引用 MyInstance，Outputs.ElasticIP 再引用 MyEIP。它展示“声明实例—把地址绑定到实例—向外输出地址”的引用链，无需预先知道运行后分配的地址。

## Sources

- `AIP/preRaw/AIP-Materials/cloudformation/0-just-ec2.yaml — lines 1–8, Resources.MyInstance`：最小实例声明。
- `AIP/preRaw/AIP-Materials/cloudformation/1-ec2-with-sg-eip.yaml — lines 2–53, Parameters, Resources and Outputs`：参数、!Ref 引用链、访问规则和输出。
