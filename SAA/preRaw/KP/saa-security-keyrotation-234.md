---
id: saa-security-keyrotation-234
title: 密钥材料轮换与旧数据解密（KMS key rotation）
status: pending
sources:
- https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html
dependencies:
- saa-security-kms-166
verified_at: '2026-11-04'
---

# saa-security-keyrotation-234: 密钥材料轮换与旧数据解密（KMS key rotation）

## Learning Objective

区分轮换密钥材料、换用新密钥资源和重新加密历史数据。

## Scope

- Included: 密钥材料轮换与旧数据解密的机制、适用条件、失败或例外边界。
- Excluded: 完整部署步骤、实时价格和未引用的产品功能。

## Source Context

本项补齐官方考试任务所需的独立知识，依据下列 AWS 官方资料。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-security-kms-166。

## Knowledge Point

KMS 轮换（key rotation）为符合条件的密钥更换当前加密材料，原逻辑密钥标识保留。旧材料仍用于解密已有密文；轮换不等于自动把所有历史数据重新加密。

## Logical Path

1. 先确认密钥类型支持何种自动、按需或手动轮换。
2. 轮换后新加密使用新材料，解密时由 KMS 选择匹配旧密文的材料。
3. 若业务要求改用另一逻辑密钥或重加密历史数据，另设计应用引用与迁移。

## Key Terms

- Key material：实际用于加密运算的秘密材料。
- Logical key：由标识、策略及相关材料组成的 KMS 资源。

## Example

示意例：轮换后旧文件仍能解密，新文件使用新材料；文件内容未因轮换被逐一重写。例子说明轮换与数据重加密不同。

## Sources

- [AWS 官方：新密钥材料与旧密文解密的关系](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html)。用于核验上述具体边界；查阅日期：2026-11-04。
