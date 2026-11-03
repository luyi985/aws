---
id: saa-foundations-sharedresponsibility-214
title: 按服务划分安全责任（Shared responsibility model）
status: pending
sources:
- https://aws.amazon.com/compliance/shared-responsibility-model/
dependencies: []
verified_at: '2026-11-04'
---

# saa-foundations-sharedresponsibility-214: 按服务划分安全责任（Shared responsibility model）

## Learning Objective

对比 EC2 与 S3，判断补丁、数据和权限由谁负责。

## Scope

- Included: 按服务划分安全责任的机制、适用条件、失败或例外边界。
- Excluded: 完整部署步骤、实时价格和未引用的产品功能。

## Source Context

本项补齐官方考试任务所需的独立知识，依据下列 AWS 官方资料。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

共同责任模型将云基础设施安全与客户使用配置的安全区分。服务抽象程度改变客户运维范围，但不会消除客户对数据和访问配置的责任。

## Logical Path

1. EC2 客户管理来宾操作系统、应用和安全组配置。
2. S3 等抽象服务由 AWS 管理底层平台，客户管理数据分类、访问及相关加密配置。
3. 对每项控制标明责任方，避免把托管等同于免配置。

## Key Terms

- Security of the cloud：AWS 负责其运行服务所依赖的基础设施安全。
- Security in the cloud：客户负责其所选服务中的数据及安全配置。

## Example

示意例：应用从 EC2 自建存储迁到 S3 后无需维护存储服务器补丁，但仍要限制对象访问。例子说明托管转移了部分运维责任。

## Sources

- [AWS 官方：EC2 与抽象托管服务的客户安全责任](https://aws.amazon.com/compliance/shared-responsibility-model/)。用于核验上述具体边界；查阅日期：2026-11-04。
