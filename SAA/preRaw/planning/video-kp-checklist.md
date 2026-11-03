# SAA 视频课时 → KP 复习清单

整理日期：2026-11-04。课程顺序保持不变；33 章、396 个课时，另有 29 个章节 Quiz／模拟考试。

## 使用方式

1. 按课程原顺序观看，用英文标题定位；完成后勾选该课时。
2. 看完先读“直接对应 KP”；有疑问再读“补充理解 KP”，不要求一次读完所有关联项。
3. 自问：它解决什么问题？在当前应用链路中负责什么？什么时候不适用或会失败？
4. Hands-on 复用同一 KP，记录自己的验证结果；勾选课时只代表看过，不代表 KP 已掌握。

## 来源与映射边界

- 课程目录：按公开课程页面展开的章节与课时标题整理：[Udemy 课程](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/)。保留视频、资料和说明条目，避免漏掉学习步骤；396 不是纯视频数。
- KP 内容：读取 [SAA/preRaw/KP](https://github.com/luyi985/aws/tree/main/SAA/preRaw/KP) 当前 235 个 Markdown 文件；保持原 ID 与正文，不修改其状态。
- 映射属于候选阅读建议：依据课时标题、课程课件主题线索和现有 KP 正文建立；没有读取视频逐字稿，也未逐段观看验证。因此“直接对应”表示主题可直接匹配，不保证该 KP 完整覆盖视频。
- “补充理解”是关联或对比阅读，不能替代缺失主题。综合案例统一标作推荐组合，避免伪装为逐段内容核验。
- 原目录没有独立视频条目的 KP 放到末尾“额外补充 KP”；不为凑对应关系修改 KP。
- 下表编号是本清单的课时顺序编号，Quiz 不占编号；若课程更新，以英文标题定位。
- 所有勾选初始为空；本文件不是正式 Session State 或另一份 Knowledge Map。

## 章节索引

| 章 | 章节 | 课时数 | 主线 |
| --- | --- | ---: | --- |
| 01 | [Introduction - AWS Certified Solutions Architect Associate](#chapter-01) | 6 | 公共基础 |
| 02 | [Code & Slides Download](#chapter-02) | 1 | 公共基础 |
| 03 | [Getting started with AWS](#chapter-03) | 3 | 公共基础 |
| 04 | [IAM & AWS CLI](#chapter-04) | 20 | 公共基础／④安全与运维 |
| 05 | [EC2 Fundamentals](#chapter-05) | 16 | ①应用部署 |
| 06 | [EC2 - Solutions Architect Associate Level](#chapter-06) | 9 | ①应用部署 |
| 07 | [EC2 Instance Storage](#chapter-07) | 14 | ①应用部署／②数据与存储 |
| 08 | [High Availability and Scalability: ELB & ASG](#chapter-08) | 17 | ①应用部署 |
| 09 | [AWS Fundamentals: RDS + Aurora + ElastiCache](#chapter-09) | 14 | ①应用部署 |
| 10 | [Route 53](#chapter-10) | 20 | ①应用部署 |
| 11 | [Classic Solutions Architecture Discussions](#chapter-11) | 7 | ①应用部署 |
| 12 | [Amazon S3 Introduction](#chapter-12) | 14 | ②数据与存储 |
| 13 | [Advanced Amazon S3](#chapter-13) | 8 | ②数据与存储／③应用解耦与处理 |
| 14 | [Amazon S3 Security](#chapter-14) | 15 | ②数据与存储／④安全与运维 |
| 15 | [CloudFront & AWS Global Accelerator](#chapter-15) | 7 | ②数据与存储 |
| 16 | [AWS Storage Extras](#chapter-16) | 10 | ②数据与存储 |
| 17 | [Decoupling applications: SQS, SNS, Kinesis, Active MQ](#chapter-17) | 16 | ③应用解耦与处理 |
| 18 | [Containers on AWS: ECS, Fargate, ECR & EKS](#chapter-18) | 10 | ③应用解耦与处理 |
| 19 | [Serverless Overviews from a Solution Architect Perspective](#chapter-19) | 18 | ③应用解耦与处理 |
| 20 | [Serverless Solution Architecture Discussions](#chapter-20) | 4 | ③应用解耦与处理 |
| 21 | [Databases in AWS](#chapter-21) | 10 | ③应用解耦与处理 |
| 22 | [Data & Analytics](#chapter-22) | 12 | ③应用解耦与处理 |
| 23 | [Machine Learning](#chapter-23) | 12 | ③应用解耦与处理 |
| 24 | [AWS Monitoring & Audit: CloudWatch, CloudTrail & Config](#chapter-24) | 18 | ④安全与运维 |
| 25 | [Identity and Access Management (IAM) - Advanced](#chapter-25) | 10 | ④安全与运维 |
| 26 | [AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF](#chapter-26) | 21 | ④安全与运维 |
| 27 | [Networking - VPC](#chapter-27) | 38 | ①应用部署／④安全与运维 |
| 28 | [Disaster Recovery & Migrations](#chapter-28) | 11 | ②数据与存储 |
| 29 | [More Solution Architectures](#chapter-29) | 5 | 综合架构 |
| 30 | [Other Services](#chapter-30) | 15 | ③应用解耦与处理／④安全与运维 |
| 31 | [WhitePapers and Architectures - AWS Certified Solutions Architect Associate](#chapter-31) | 4 | 综合架构 |
| 32 | [Preparing for the Exam + Practice Exam - AWS Certified Solutions Architect Assoc](#chapter-32) | 8 | 考试整合 |
| 33 | [Congratulations - AWS Certified Solutions Architect Associate](#chapter-33) | 3 | 结束说明 |

<a id="chapter-01"></a>
## 01. Introduction - AWS Certified Solutions Architect Associate

主线：公共基础。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 001 / 01.01 | Course Introduction - AWS Certified Solutions Architect Associate | — | — | 导学，无需对应技术 KP |
| ☐ | 002 / 01.02 | PLEASE READ: Lectures you can skip if you took a course from me before | — | — | 课程说明 |
| ☐ | 003 / 01.03 | Creating an AWS Account | — | — | 账号创建操作；暂无独立 KP |
| ☐ | 004 / 01.04 | AWS Account Activation Troubleshooting | — | — | 账号激活排错；暂无独立 KP |
| ☐ | 005 / 01.05 | Important Message | — | — | 课程说明 |
| ☐ | 006 / 01.06 | About your instructor | — | — | 讲师介绍 |

<a id="chapter-02"></a>
## 02. Code & Slides Download

主线：公共基础。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 007 / 02.01 | Slides and Code Download | — | — | 下载资料；无需技术 KP |

<a id="chapter-03"></a>
## 03. Getting started with AWS

主线：公共基础。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 008 / 03.01 | AWS Cloud Overview - Regions & AZ | [001 · 区域选择与服务作用域（Region）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-foundations-regions-001.md)<br>[002 · 可用区与故障隔离（Availability Zone）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-foundations-availabilityzones-002.md) | [214 · 按服务划分安全责任（Shared responsibility model）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-foundations-sharedresponsibility-214.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 009 / 03.02 | [Important] AWS Console UI Update | — | — | 界面更新说明 |
| ☐ | 010 / 03.03 | Tour of the AWS Console & Services in AWS | — | [001 · 区域选择与服务作用域（Region）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-foundations-regions-001.md)<br>[006 · 控制台与程序化访问（AWS CLI and SDK）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-accessmethods-006.md) | 补充理解；控制台导航无独立 KP |

<a id="chapter-04"></a>
## 04. IAM & AWS CLI

主线：公共基础／④安全与运维。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 011 / 04.01 | IAM Introduction: Users, Groups, Policies | [003 · 身份与权限分组（IAM identities）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-identities-003.md)<br>[004 · 策略语句如何表达权限（IAM policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-policies-004.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 012 / 04.02 | IAM Users & Groups Hands On | [003 · 身份与权限分组（IAM identities）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-identities-003.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 013 / 04.03 | AWS Console Simultaneous Sign-in | — | [003 · 身份与权限分组（IAM identities）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-identities-003.md)<br>[006 · 控制台与程序化访问（AWS CLI and SDK）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-accessmethods-006.md) | 多会话登录操作无独立 KP |
| ☐ | 014 / 04.04 | IAM Policies | [004 · 策略语句如何表达权限（IAM policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-policies-004.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 015 / 04.05 | IAM Policies Hands On | [004 · 策略语句如何表达权限（IAM policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-policies-004.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 016 / 04.06 | IAM MFA Overview | [005 · 多因素认证的保护边界（Multi-Factor Authentication）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-mfa-005.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 017 / 04.07 | IAM MFA Hands On | [005 · 多因素认证的保护边界（Multi-Factor Authentication）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-mfa-005.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 018 / 04.08 | AWS Access Keys, CLI and SDK | [006 · 控制台与程序化访问（AWS CLI and SDK）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-accessmethods-006.md) | [215 · 临时凭证的签发与续用（STS AssumeRole）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-stssessions-215.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 019 / 04.09 | AWS CLI Setup on Windows | [006 · 控制台与程序化访问（AWS CLI and SDK）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-accessmethods-006.md) | — | 安装操作参考；按自己的操作系统选择 |
| ☐ | 020 / 04.10 | AWS CLI Setup on Mac OS X | [006 · 控制台与程序化访问（AWS CLI and SDK）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-accessmethods-006.md) | — | 安装操作参考；按自己的操作系统选择 |
| ☐ | 021 / 04.11 | AWS CLI Setup on Linux | [006 · 控制台与程序化访问（AWS CLI and SDK）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-accessmethods-006.md) | — | 安装操作参考；按自己的操作系统选择 |
| ☐ | 022 / 04.12 | AWS CLI Hands On | [006 · 控制台与程序化访问（AWS CLI and SDK）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-accessmethods-006.md) | [004 · 策略语句如何表达权限（IAM policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-policies-004.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 023 / 04.13 | AWS CloudShell: Region Availability | — | [006 · 控制台与程序化访问（AWS CLI and SDK）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-accessmethods-006.md)<br>[001 · 区域选择与服务作用域（Region）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-foundations-regions-001.md) | CloudShell 具体环境与限制未独立成 KP；另见已有 AWS_cloudshell.md |
| ☐ | 024 / 04.14 | AWS CloudShell | — | [006 · 控制台与程序化访问（AWS CLI and SDK）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-accessmethods-006.md) | CloudShell 具体环境与限制未独立成 KP；另见已有 AWS_cloudshell.md |
| ☐ | 025 / 04.15 | IAM Roles for AWS Services | [007 · 服务如何取得访问权限（IAM role）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-serviceroles-007.md) | [215 · 临时凭证的签发与续用（STS AssumeRole）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-stssessions-215.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 026 / 04.16 | IAM Roles Hands On | [007 · 服务如何取得访问权限（IAM role）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-serviceroles-007.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 027 / 04.17 | IAM Security Tools | [008 · 凭证与权限使用审计（Credential report and Access Advisor）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-accessaudit-008.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 028 / 04.18 | IAM Security Tools Hands On | [008 · 凭证与权限使用审计（Credential report and Access Advisor）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-accessaudit-008.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 029 / 04.19 | IAM Best Practices | [003 · 身份与权限分组（IAM identities）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-identities-003.md)<br>[005 · 多因素认证的保护边界（Multi-Factor Authentication）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-mfa-005.md)<br>[007 · 服务如何取得访问权限（IAM role）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-serviceroles-007.md) | [008 · 凭证与权限使用审计（Credential report and Access Advisor）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-accessaudit-008.md)<br>[214 · 按服务划分安全责任（Shared responsibility model）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-foundations-sharedresponsibility-214.md) | 综合复习 |
| ☐ | 030 / 04.20 | IAM Summary | [003 · 身份与权限分组（IAM identities）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-identities-003.md)<br>[004 · 策略语句如何表达权限（IAM policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-policies-004.md)<br>[007 · 服务如何取得访问权限（IAM role）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-serviceroles-007.md) | [005 · 多因素认证的保护边界（Multi-Factor Authentication）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-mfa-005.md)<br>[006 · 控制台与程序化访问（AWS CLI and SDK）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-accessmethods-006.md)<br>[008 · 凭证与权限使用审计（Credential report and Access Advisor）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-accessaudit-008.md) | 综合复习 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-05"></a>
## 05. EC2 Fundamentals

主线：①应用部署。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 031 / 05.01 | AWS Budget Setup | [222 · 预算阈值与费用通知（AWS Budgets）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cost-budgets-222.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 032 / 05.02 | EC2 Basics | — | [010 · 按资源瓶颈选择实例（EC2 instance family）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-instancetypes-010.md)<br>[009 · 实例首次启动初始化（EC2 user data）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-bootstrap-009.md)<br>[019 · 块存储的持久性与可用区边界（Elastic Block Store）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ebs-019.md)<br>[214 · 按服务划分安全责任（Shared responsibility model）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-foundations-sharedresponsibility-214.md) | EC2 总体执行模型无独立总览 KP；这些 KP 分别补充选型、初始化、存储和责任边界 |
| ☐ | 033 / 05.03 | Create an EC2 Instance with EC2 User Data to have a Website Hands On | [009 · 实例首次启动初始化（EC2 user data）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-bootstrap-009.md) | [010 · 按资源瓶颈选择实例（EC2 instance family）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-instancetypes-010.md)<br>[011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md)<br>[019 · 块存储的持久性与可用区边界（Elastic Block Store）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ebs-019.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 034 / 05.04 | EC2 Instance Types Basics | [010 · 按资源瓶颈选择实例（EC2 instance family）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-instancetypes-010.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 035 / 05.05 | Security Groups & Classic Ports Overview | [011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md) | — | 端口清单仍需结合课件 |
| ☐ | 036 / 05.06 | Security Groups Hands On | [011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 037 / 05.07 | SSH Overview | — | [011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md)<br>[015 · 实例地址与固定入口（Elastic IP）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-ipaddresses-015.md) | SSH 密钥认证与连接机制暂无独立 KP |
| ☐ | 038 / 05.08 | How to SSH using Linux or Mac | — | [011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md)<br>[015 · 实例地址与固定入口（Elastic IP）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-ipaddresses-015.md) | SSH 操作暂无独立 KP；按自己的操作系统选择 |
| ☐ | 039 / 05.09 | How to SSH using Windows | — | [011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md)<br>[015 · 实例地址与固定入口（Elastic IP）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-ipaddresses-015.md) | SSH 操作暂无独立 KP；按自己的操作系统选择 |
| ☐ | 040 / 05.10 | How to SSH using Windows 10 | — | [011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md)<br>[015 · 实例地址与固定入口（Elastic IP）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-ipaddresses-015.md) | SSH 操作暂无独立 KP；按自己的操作系统选择 |
| ☐ | 041 / 05.11 | SSH Troubleshooting | — | [011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md)<br>[015 · 实例地址与固定入口（Elastic IP）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-ipaddresses-015.md)<br>[179 · 公网连通的必要条件（Internet Gateway and route table）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-internet-179.md) | 补充网络排错；SSH 专项暂无独立 KP |
| ☐ | 042 / 05.12 | EC2 Instance Connect | — | [011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md)<br>[015 · 实例地址与固定入口（Elastic IP）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-ipaddresses-015.md) | Instance Connect 认证与连接模式暂无独立 KP |
| ☐ | 043 / 05.13 | EC2 Instance Roles Demo | [007 · 服务如何取得访问权限（IAM role）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-serviceroles-007.md) | [215 · 临时凭证的签发与续用（STS AssumeRole）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-stssessions-215.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 044 / 05.14 | EC2 Instance Purchasing Options | [012 · 按负载特征选择购买方式（EC2 purchasing options）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-purchasing-012.md)<br>[014 · 专用硬件隔离的选择（Dedicated Host and Dedicated Instance）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-dedicated-014.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 045 / 05.15 | Spot Instances & Spot Fleet | [013 · 可中断计算的适用条件（Spot instance）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-spot-013.md) | [012 · 按负载特征选择购买方式（EC2 purchasing options）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-purchasing-012.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 046 / 05.16 | EC2 Instances Launch Types Hands On | [012 · 按负载特征选择购买方式（EC2 purchasing options）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-purchasing-012.md)<br>[013 · 可中断计算的适用条件（Spot instance）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-spot-013.md)<br>[014 · 专用硬件隔离的选择（Dedicated Host and Dedicated Instance）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-dedicated-014.md) | — | 看完后用 KP 解释操作的原因与验证结果 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-06"></a>
## 06. EC2 - Solutions Architect Associate Level

主线：①应用部署。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 047 / 06.01 | Private vs Public vs Elastic IP | [015 · 实例地址与固定入口（Elastic IP）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-ipaddresses-015.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 048 / 06.02 | Private vs Public vs Elastic IP Hands On | [015 · 实例地址与固定入口（Elastic IP）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-ipaddresses-015.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 049 / 06.03 | EC2 Placement Groups | [016 · 放置策略的性能与隔离取舍（Placement group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-placement-016.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 050 / 06.04 | EC2 Placement Groups - Hands On | [016 · 放置策略的性能与隔离取舍（Placement group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-placement-016.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 051 / 06.05 | Elastic Network Interfaces (ENI) - Overview | [017 · 网卡与网络身份（Elastic Network Interface）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-eni-017.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 052 / 06.06 | Elastic Network Interfaces (ENI) - Hands On | [017 · 网卡与网络身份（Elastic Network Interface）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-eni-017.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 053 / 06.07 | ENI - Extra Reading | [017 · 网卡与网络身份（Elastic Network Interface）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-eni-017.md) | — | 补充资料 |
| ☐ | 054 / 06.08 | EC2 Hibernate | [018 · 休眠与停止的区别（EC2 hibernation）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-hibernate-018.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 055 / 06.09 | EC2 Hibernate - Hands On | [018 · 休眠与停止的区别（EC2 hibernation）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-hibernate-018.md) | — | 看完后用 KP 解释操作的原因与验证结果 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-07"></a>
## 07. EC2 Instance Storage

主线：①应用部署／②数据与存储。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 056 / 07.01 | EBS Overview | [019 · 块存储的持久性与可用区边界（Elastic Block Store）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ebs-019.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 057 / 07.02 | EBS Hands On | [019 · 块存储的持久性与可用区边界（Elastic Block Store）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ebs-019.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 058 / 07.03 | EBS Snapshots | [020 · 快照如何支持恢复与迁移（EBS snapshot）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-snapshots-020.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 059 / 07.04 | EBS Snapshots - Hands On | [020 · 快照如何支持恢复与迁移（EBS snapshot）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-snapshots-020.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 060 / 07.05 | AMI Overview | [021 · 机器镜像与实例复制（Amazon Machine Image）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ami-021.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 061 / 07.06 | AMI Hands On | [021 · 机器镜像与实例复制（Amazon Machine Image）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ami-021.md) | [009 · 实例首次启动初始化（EC2 user data）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-bootstrap-009.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 062 / 07.07 | EC2 Instance Store | [022 · 临时本地存储的边界（Instance store）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-instancestore-022.md) | [019 · 块存储的持久性与可用区边界（Elastic Block Store）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ebs-019.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 063 / 07.08 | EBS Volume Types | [023 · 按 IOPS 与吞吐选择卷（EBS volume type）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ebstypes-023.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 064 / 07.09 | EBS Multi-Attach | [024 · 共享块设备的并发写入边界（EBS Multi-Attach）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-multiattach-024.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 065 / 07.10 | EBS Encryption | [025 · 加密卷与快照的继承关系（EBS encryption）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ebsencryption-025.md) | [166 · 密钥管理与使用授权（AWS Key Management Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-kms-166.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 066 / 07.11 | Amazon EFS | [026 · 跨实例共享文件系统（Elastic File System）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-efs-026.md)<br>[027 · 共享文件系统的吞吐与分层（EFS throughput and lifecycle）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-efsperformance-027.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 067 / 07.12 | Amazon EFS - Hands On | [026 · 跨实例共享文件系统（Elastic File System）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-efs-026.md)<br>[027 · 共享文件系统的吞吐与分层（EFS throughput and lifecycle）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-efsperformance-027.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 068 / 07.13 | EFS vs EBS | [019 · 块存储的持久性与可用区边界（Elastic Block Store）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ebs-019.md)<br>[026 · 跨实例共享文件系统（Elastic File System）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-efs-026.md) | [022 · 临时本地存储的边界（Instance store）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-instancestore-022.md) | 对比复习 |
| ☐ | 069 / 07.14 | EBS & EFS - Section Cleanup | — | [019 · 块存储的持久性与可用区边界（Elastic Block Store）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ebs-019.md)<br>[020 · 快照如何支持恢复与迁移（EBS snapshot）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-snapshots-020.md)<br>[026 · 跨实例共享文件系统（Elastic File System）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-efs-026.md) | 清理操作；KP 用于识别资源，不能代替清理清单 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-08"></a>
## 08. High Availability and Scalability: ELB & ASG

主线：①应用部署。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 070 / 08.01 | High Availability and Scalability | [028 · 扩展能力与高可用（Scalability and high availability）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-scaling-availability-028.md) | [002 · 可用区与故障隔离（Availability Zone）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-foundations-availabilityzones-002.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 071 / 08.02 | Elastic Load Balancing (ELB) Overview | [029 · 健康检查与流量摘除（Load balancer health check）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-healthchecks-029.md) | [030 · 应用层请求路由（Application Load Balancer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-alb-030.md)<br>[031 · 传输层入口与固定地址（Network Load Balancer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-nlb-031.md)<br>[032 · 透明插入网络检查设备（Gateway Load Balancer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-gwlb-032.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 072 / 08.03 | Application Load Balancer (ALB) | [030 · 应用层请求路由（Application Load Balancer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-alb-030.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 073 / 08.04 | Application Load Balancer (ALB) - Hands On - Part 1 | [030 · 应用层请求路由（Application Load Balancer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-alb-030.md)<br>[029 · 健康检查与流量摘除（Load balancer health check）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-healthchecks-029.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 074 / 08.05 | Application Load Balancer (ALB) - Hands On - Part 2 | [030 · 应用层请求路由（Application Load Balancer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-alb-030.md) | [011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 075 / 08.06 | Network Load Balancer (NLB) | [031 · 传输层入口与固定地址（Network Load Balancer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-nlb-031.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 076 / 08.07 | Network Load Balancer (NLB) - Hands On | [031 · 传输层入口与固定地址（Network Load Balancer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-nlb-031.md)<br>[029 · 健康检查与流量摘除（Load balancer health check）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-healthchecks-029.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 077 / 08.08 | Gateway Load Balancer (GWLB) | [032 · 透明插入网络检查设备（Gateway Load Balancer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-gwlb-032.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 078 / 08.09 | Elastic Load Balancer - Sticky Sessions | [033 · 会话粘滞与负载倾斜（Session affinity）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-stickiness-033.md) | [058 · 状态外置与横向扩展（Stateless application）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-stateless-058.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 079 / 08.10 | Elastic Load Balancer - Cross Zone Load Balancing | [034 · 跨可用区分配流量（Cross-zone load balancing）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-crosszone-034.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 080 / 08.11 | Elastic Load Balancer - SSL Certificates | [035 · HTTPS 证书与域名选择（TLS termination and SNI）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-tls-035.md) | [170 · 证书生命周期与部署位置（AWS Certificate Manager）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-acm-170.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 081 / 08.12 | Elastic Load Balancer - SSL Certificates - Hands On | [035 · HTTPS 证书与域名选择（TLS termination and SNI）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-tls-035.md)<br>[170 · 证书生命周期与部署位置（AWS Certificate Manager）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-acm-170.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 082 / 08.13 | Elastic Load Balancer - Connection Draining | [036 · 下线时完成在途请求（Deregistration delay）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-draining-036.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 083 / 08.14 | Auto Scaling Groups (ASG) Overview | [037 · 期望容量与实例替换（Auto Scaling Group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-scaling-asg-037.md) | [028 · 扩展能力与高可用（Scalability and high availability）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-scaling-availability-028.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 084 / 08.15 | Auto Scaling Groups Hands On | [037 · 期望容量与实例替换（Auto Scaling Group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-scaling-asg-037.md) | [021 · 机器镜像与实例复制（Amazon Machine Image）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ami-021.md)<br>[029 · 健康检查与流量摘除（Load balancer health check）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-healthchecks-029.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 085 / 08.16 | Auto Scaling Groups - Scaling Policies | [038 · 自动伸缩触发方式（Scaling policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-scaling-policies-038.md) | [152 · 指标的维度与采集边界（CloudWatch metric）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-metrics-152.md)<br>[154 · 从指标条件到行动（CloudWatch alarm）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-alarms-154.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 086 / 08.17 | Auto Scaling Groups - Scaling Policies Hands On | [038 · 自动伸缩触发方式（Scaling policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-scaling-policies-038.md) | [152 · 指标的维度与采集边界（CloudWatch metric）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-metrics-152.md)<br>[154 · 从指标条件到行动（CloudWatch alarm）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-alarms-154.md) | 看完后用 KP 解释操作的原因与验证结果 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-09"></a>
## 09. AWS Fundamentals: RDS + Aurora + ElastiCache

主线：①应用部署。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 087 / 09.01 | Amazon RDS Overview | [039 · 托管数据库的责任边界（Relational Database Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-manageddb-039.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 088 / 09.02 | RDS Read Replicas vs Multi AZ | [040 · 异步副本与读扩展（Read replica）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-readreplicas-040.md)<br>[041 · 备用实例与自动故障转移（Multi-AZ DB instance）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-multiaz-041.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 089 / 09.03 | Amazon RDS Hands On | [039 · 托管数据库的责任边界（Relational Database Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-manageddb-039.md)<br>[046 · 数据库访问的多层控制（Database security）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-dbsecurity-046.md) | [045 · 时间点恢复与快照（Database backup and restore）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-dbbackup-045.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 090 / 09.04 | RDS Custom for Oracle and Microsoft SQL Server | [230 · 数据库托管与操作系统定制（Amazon RDS Custom）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-custom-230.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 091 / 09.05 | Amazon Aurora | [042 · 共享存储与数据库端点（Amazon Aurora）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-aurora-042.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 092 / 09.06 | Amazon Aurora - Hands On | [042 · 共享存储与数据库端点（Amazon Aurora）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-aurora-042.md) | [046 · 数据库访问的多层控制（Database security）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-dbsecurity-046.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 093 / 09.07 | Amazon Aurora - Advanced Concepts | [043 · 按使用量调整数据库计算（Aurora Serverless）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-auroraserverless-043.md)<br>[044 · 跨区域数据库读取与恢复（Aurora Global Database）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-auroraglobal-044.md)<br>[218 · 按副本组分配数据库连接（Aurora custom endpoint）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-customendpoints-218.md) | [219 · 写时复制创建测试数据库（Aurora cloning）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-cloning-219.md) | 对应计算伸缩、全球库与端点；Aurora ML/Babelfish 等未独立覆盖 |
| ☐ | 094 / 09.08 | RDS & Aurora - Backup and Monitoring | [045 · 时间点恢复与快照（Database backup and restore）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-dbbackup-045.md)<br>[219 · 写时复制创建测试数据库（Aurora cloning）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-cloning-219.md) | [152 · 指标的维度与采集边界（CloudWatch metric）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-metrics-152.md) | 备份与克隆直接对应；监控仅补充通用指标，需结合视频 |
| ☐ | 095 / 09.09 | RDS Security | [046 · 数据库访问的多层控制（Database security）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-dbsecurity-046.md) | [166 · 密钥管理与使用授权（AWS Key Management Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-kms-166.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 096 / 09.10 | RDS Proxy | [047 · 连接池如何保护数据库（RDS Proxy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-dbproxy-047.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 097 / 09.11 | ElastiCache Overview | [048 · 应用缓存与会话存储（Amazon ElastiCache）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cache-elasticache-048.md) | [217 · 缓存引擎的能力取舍（Valkey Redis OSS and Memcached）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cache-engines-217.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 098 / 09.12 | ElastiCache Hands On | [048 · 应用缓存与会话存储（Amazon ElastiCache）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cache-elasticache-048.md)<br>[217 · 缓存引擎的能力取舍（Valkey Redis OSS and Memcached）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cache-engines-217.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 099 / 09.13 | ElastiCache for Solution Architects | [049 · 缓存填充与失效策略（Cache-aside and write-through）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cache-patterns-049.md)<br>[048 · 应用缓存与会话存储（Amazon ElastiCache）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cache-elasticache-048.md) | [217 · 缓存引擎的能力取舍（Valkey Redis OSS and Memcached）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cache-engines-217.md) | 缓存填充/会话可对应；引擎认证细节需结合视频 |
| ☐ | 100 / 09.14 | List of Ports to be familiar with | — | [011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md)<br>[046 · 数据库访问的多层控制（Database security）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-dbsecurity-046.md) | 端口清单暂无独立 KP |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-10"></a>
## 10. Route 53

主线：①应用部署。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 101 / 10.01 | What is a DNS ? | [050 · 域名解析的查询链路（Domain Name System）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-resolution-050.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 102 / 10.02 | Route 53 Overview | [051 · 记录与托管区域（Route 53 record and hosted zone）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-records-051.md) | [050 · 域名解析的查询链路（Domain Name System）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-resolution-050.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 103 / 10.03 | Route 53 - Registering a domain | — | [051 · 记录与托管区域（Route 53 record and hosted zone）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-records-051.md) | 域名注册流程不在 KP 的核心范围 |
| ☐ | 104 / 10.04 | Route 53 - Creating our first records | [051 · 记录与托管区域（Route 53 record and hosted zone）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-records-051.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 105 / 10.05 | Route 53 - EC2 Setup | — | [015 · 实例地址与固定入口（Elastic IP）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-ipaddresses-015.md)<br>[011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md)<br>[030 · 应用层请求路由（Application Load Balancer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-alb-030.md) | 实验环境准备，补充复习相关资源 |
| ☐ | 106 / 10.06 | Route 53 - TTL | [052 · DNS 缓存与变更传播（DNS Time To Live）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-ttl-052.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 107 / 10.07 | Route 53 CNAME vs Alias | [053 · 根域名如何指向 AWS 入口（Route 53 Alias）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-alias-053.md) | [051 · 记录与托管区域（Route 53 record and hosted zone）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-records-051.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 108 / 10.08 | Routing Policy - Simple | — | [051 · 记录与托管区域（Route 53 record and hosted zone）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-records-051.md)<br>[054 · 按权重与延迟选择答案（DNS routing policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-routing-054.md) | 054 主要讲权重/延迟；Simple 策略需结合视频 |
| ☐ | 109 / 10.09 | Routing Policy - Weighted | [054 · 按权重与延迟选择答案（DNS routing policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-routing-054.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 110 / 10.10 | Routing Policy - Latency | [054 · 按权重与延迟选择答案（DNS routing policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-routing-054.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 111 / 10.11 | Route 53 - Health Checks | [055 · 基于健康状态的主备解析（DNS health check and failover）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-failover-055.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 112 / 10.12 | Route 53 - Health Checks Hands On | [055 · 基于健康状态的主备解析（DNS health check and failover）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-failover-055.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 113 / 10.13 | Routing Policy - Failover | [055 · 基于健康状态的主备解析（DNS health check and failover）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-failover-055.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 114 / 10.14 | Routing Policy - Geolocation | [056 · 按地理信息选择解析目标（Geolocation and geoproximity routing）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-georouting-056.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 115 / 10.15 | Routing Policy - Geoproximity | [056 · 按地理信息选择解析目标（Geolocation and geoproximity routing）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-georouting-056.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 116 / 10.16 | Routing Policy - IP-based | — | [054 · 按权重与延迟选择答案（DNS routing policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-routing-054.md)<br>[056 · 按地理信息选择解析目标（Geolocation and geoproximity routing）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-georouting-056.md) | IP-based routing 暂无独立 KP；相关项用于对比 |
| ☐ | 117 / 10.17 | Routing Policy - Multi Value | — | [051 · 记录与托管区域（Route 53 record and hosted zone）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-records-051.md)<br>[055 · 基于健康状态的主备解析（DNS health check and failover）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-failover-055.md) | Multi Value 策略暂无独立 KP |
| ☐ | 118 / 10.18 | 3rd Party Domains & Route 53 | — | [051 · 记录与托管区域（Route 53 record and hosted zone）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-records-051.md)<br>[050 · 域名解析的查询链路（Domain Name System）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-resolution-050.md) | 托管区域与解析可补充；注册商委派操作需看视频 |
| ☐ | 119 / 10.19 | Route 53 Resolvers & Hybrid DNS | [057 · 混合网络中的双向解析（Route 53 Resolver endpoint）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-hybrid-057.md) | [186 · 本地网络到云的加密隧道（Site-to-Site VPN）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-vpn-186.md)<br>[187 · 专线连接与加密边界（AWS Direct Connect）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-directconnect-187.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 120 / 10.20 | Route 53 - Section Cleanup | — | [051 · 记录与托管区域（Route 53 record and hosted zone）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-records-051.md) | 资源清理操作，无需重复学习 KP |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-11"></a>
## 11. Classic Solutions Architecture Discussions

主线：①应用部署。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 121 / 11.01 | Solutions Architecture Discussions Overview | — | [232 · 分层网络与共享状态（Multi-tier architecture）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-multitier-232.md)<br>[211 · 用六个支柱审查架构（AWS Well-Architected Framework）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-wellarchitected-211.md) | 架构讨论导学；先概览，细节随案例复习 |
| ☐ | 122 / 11.02 | WhatsTheTime.com | — | [028 · 扩展能力与高可用（Scalability and high availability）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-scaling-availability-028.md)<br>[030 · 应用层请求路由（Application Load Balancer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-alb-030.md)<br>[037 · 期望容量与实例替换（Auto Scaling Group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-scaling-asg-037.md)<br>[058 · 状态外置与横向扩展（Stateless application）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-stateless-058.md) | 案例型映射：按课件主题推荐，未逐段核验视频 |
| ☐ | 123 / 11.03 | MyClothes.com | — | [232 · 分层网络与共享状态（Multi-tier architecture）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-multitier-232.md)<br>[039 · 托管数据库的责任边界（Relational Database Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-manageddb-039.md)<br>[040 · 异步副本与读扩展（Read replica）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-readreplicas-040.md)<br>[041 · 备用实例与自动故障转移（Multi-AZ DB instance）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-multiaz-041.md)<br>[048 · 应用缓存与会话存储（Amazon ElastiCache）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cache-elasticache-048.md)<br>[058 · 状态外置与横向扩展（Stateless application）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-stateless-058.md) | 案例型映射：按课件主题推荐，未逐段核验视频 |
| ☐ | 124 / 11.04 | MyWordPress.com | — | [232 · 分层网络与共享状态（Multi-tier architecture）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-multitier-232.md)<br>[026 · 跨实例共享文件系统（Elastic File System）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-efs-026.md)<br>[042 · 共享存储与数据库端点（Amazon Aurora）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-aurora-042.md)<br>[048 · 应用缓存与会话存储（Amazon ElastiCache）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cache-elasticache-048.md) | 案例型映射：按课件主题推荐，未逐段核验视频 |
| ☐ | 125 / 11.05 | Instantiating applications quickly | [009 · 实例首次启动初始化（EC2 user data）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-bootstrap-009.md)<br>[021 · 机器镜像与实例复制（Amazon Machine Image）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ami-021.md) | [045 · 时间点恢复与快照（Database backup and restore）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-dbbackup-045.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 126 / 11.06 | Beanstalk Overview | [059 · 托管应用环境的边界（Elastic Beanstalk）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-beanstalk-059.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 127 / 11.07 | Beanstalk Hands On | [059 · 托管应用环境的边界（Elastic Beanstalk）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-beanstalk-059.md) | — | 看完后用 KP 解释操作的原因与验证结果 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-12"></a>
## 12. Amazon S3 Introduction

主线：②数据与存储。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 128 / 12.01 | S3 Overview | [060 · 对象存储的命名模型（S3 bucket and object key）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-objects-060.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 129 / 12.02 | S3 Hands On | [060 · 对象存储的命名模型（S3 bucket and object key）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-objects-060.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 130 / 12.03 | S3 Security: Bucket Policy | [061 · 桶策略与公开访问保护（S3 bucket policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-bucketpolicy-061.md) | [004 · 策略语句如何表达权限（IAM policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-policies-004.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 131 / 12.04 | S3 Security: Bucket Policy Hands On | [061 · 桶策略与公开访问保护（S3 bucket policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-bucketpolicy-061.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 132 / 12.05 | S3 Website Overview | [062 · 静态网站托管的边界（S3 static website）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-website-062.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 133 / 12.06 | S3 Website Hands On | [062 · 静态网站托管的边界（S3 static website）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-website-062.md) | [061 · 桶策略与公开访问保护（S3 bucket policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-bucketpolicy-061.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 134 / 12.07 | S3 Versioning | [063 · 版本与删除标记（S3 versioning）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-versioning-063.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 135 / 12.08 | S3 Versioning - Hands On | [063 · 版本与删除标记（S3 versioning）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-versioning-063.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 136 / 12.09 | S3 Replication | [064 · 异步对象复制的条件（S3 replication）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-replication-064.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 137 / 12.10 | S3 Replication Notes | [064 · 异步对象复制的条件（S3 replication）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-replication-064.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 138 / 12.11 | S3 Replication - Hands On | [064 · 异步对象复制的条件（S3 replication）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-replication-064.md) | [063 · 版本与删除标记（S3 versioning）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-versioning-063.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 139 / 12.12 | S3 Storage Classes Overview | [065 · 访问频率与恢复时间的取舍（S3 storage class）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-storageclasses-065.md)<br>[066 · 按访问模式自动分层（S3 Intelligent-Tiering）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-intelligenttiering-066.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 140 / 12.13 | S3 Storage Classes Hands On | [065 · 访问频率与恢复时间的取舍（S3 storage class）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-storageclasses-065.md)<br>[066 · 按访问模式自动分层（S3 Intelligent-Tiering）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-intelligenttiering-066.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 141 / 12.14 | S3 Express One Zone | [067 · 单可用区低延迟对象存储（S3 Express One Zone）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-express-067.md) | — | 看完后复述机制、适用场景和限制 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-13"></a>
## 13. Advanced Amazon S3

主线：②数据与存储／③应用解耦与处理。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 142 / 13.01 | S3 Lifecycle Rules (with S3 Analytics) | [068 · 自动转换与过期规则（S3 Lifecycle）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-lifecycle-068.md) | [065 · 访问频率与恢复时间的取舍（S3 storage class）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-storageclasses-065.md)<br>[066 · 按访问模式自动分层（S3 Intelligent-Tiering）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-intelligenttiering-066.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 143 / 13.02 | S3 Lifecycle Rules - Hands On | [068 · 自动转换与过期规则（S3 Lifecycle）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-lifecycle-068.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 144 / 13.03 | S3 Requester Pays | [221 · 共享数据集的费用归属（S3 Requester Pays）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-requesterpays-221.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 145 / 13.04 | S3 Event Notifications | [069 · 对象变化如何触发处理（S3 event notification）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-events-069.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 146 / 13.05 | S3 Event Notifications - Hands On | [069 · 对象变化如何触发处理（S3 event notification）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-events-069.md) | [096 · 队列解耦与重复处理（SQS Standard queue）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-sqs-096.md)<br>[101 · 发布订阅与消息扇出（Simple Notification Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-sns-101.md)<br>[155 · 事件总线与匹配规则（Amazon EventBridge）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-events-eventbridge-155.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 147 / 13.06 | S3 Performance | [070 · 并行传输如何改善性能（Multipart upload and byte-range fetch）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-transferperformance-070.md)<br>[220 · 优化到 S3 的长距离传输（S3 Transfer Acceleration）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-acceleration-220.md) | — | 性能优化；按视频实际涉及部分阅读 |
| ☐ | 148 / 13.07 | S3 Batch Operations | [071 · 对对象集合执行批量任务（S3 Batch Operations）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-batchoperations-071.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 149 / 13.08 | S3 Storage Lens | [072 · 用存储指标定位优化机会（S3 Storage Lens）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-storagelens-072.md) | — | 看完后复述机制、适用场景和限制 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-14"></a>
## 14. Amazon S3 Security

主线：②数据与存储／④安全与运维。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 150 / 14.01 | S3 Encryption | [073 · 对象加密的责任边界（S3 server-side and client-side encryption）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-encryption-073.md) | [166 · 密钥管理与使用授权（AWS Key Management Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-kms-166.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 151 / 14.02 | About DSSE-KMS | — | [073 · 对象加密的责任边界（S3 server-side and client-side encryption）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-encryption-073.md)<br>[166 · 密钥管理与使用授权（AWS Key Management Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-kms-166.md) | 双层加密专属机制尚未独立展开 |
| ☐ | 152 / 14.03 | S3 Encryption - Hands On | [073 · 对象加密的责任边界（S3 server-side and client-side encryption）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-encryption-073.md) | [166 · 密钥管理与使用授权（AWS Key Management Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-kms-166.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 153 / 14.04 | S3 Default Encryption | [073 · 对象加密的责任边界（S3 server-side and client-side encryption）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-encryption-073.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 154 / 14.05 | S3 CORS | [075 · 浏览器跨源访问（Cross-Origin Resource Sharing）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-cors-075.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 155 / 14.06 | S3 CORS Hands On | [075 · 浏览器跨源访问（Cross-Origin Resource Sharing）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-cors-075.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 156 / 14.07 | S3 MFA Delete | [076 · 永久删除版本的附加保护（S3 MFA Delete）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-mfadelete-076.md) | [005 · 多因素认证的保护边界（Multi-Factor Authentication）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-mfa-005.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 157 / 14.08 | S3 MFA Delete Hands On | [076 · 永久删除版本的附加保护（S3 MFA Delete）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-mfadelete-076.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 158 / 14.09 | S3 Access Logs | [077 · 对象请求日志的用途（S3 server access logging）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-accesslogs-077.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 159 / 14.10 | S3 Access Logs - Hands On | [077 · 对象请求日志的用途（S3 server access logging）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-accesslogs-077.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 160 / 14.11 | S3 Pre-signed URLs | [078 · 有时限的委托对象访问（S3 presigned URL）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-presigned-078.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 161 / 14.12 | S3 Pre-signed URLs - Hands On | [078 · 有时限的委托对象访问（S3 presigned URL）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-presigned-078.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 162 / 14.13 | Glacier Vault Lock & S3 Object Lock | [079 · 不可变版本与保留策略（S3 Object Lock）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-objectlock-079.md) | — | Object Lock 可对应；Glacier Vault Lock 需结合课件补充 |
| ☐ | 163 / 14.14 | S3 Access Points | [080 · 按使用方拆分访问入口（S3 Access Point）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-accesspoints-080.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 164 / 14.15 | S3 Object Lambda | — | [080 · 按使用方拆分访问入口（S3 Access Point）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-accesspoints-080.md)<br>[111 · 事件驱动函数的执行模型（AWS Lambda）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-lambda-111.md) | 暂无直接 KP；Access Points 与 Lambda 不能替代 Object Lambda 专项说明 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-15"></a>
## 15. CloudFront & AWS Global Accelerator

主线：②数据与存储。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 165 / 15.01 | CloudFront Overview | [081 · 边缘缓存与回源（Amazon CloudFront）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-cloudfront-081.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 166 / 15.02 | CloudFront with S3 - Hands On | [081 · 边缘缓存与回源（Amazon CloudFront）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-cloudfront-081.md) | [060 · 对象存储的命名模型（S3 bucket and object key）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-objects-060.md)<br>[061 · 桶策略与公开访问保护（S3 bucket policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-bucketpolicy-061.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 167 / 15.03 | CloudFront - ALB/EC2 as an Origin | [081 · 边缘缓存与回源（Amazon CloudFront）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-cloudfront-081.md) | [030 · 应用层请求路由（Application Load Balancer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-alb-030.md)<br>[082 · 让源站保持私有（CloudFront VPC origin）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-privateorigin-082.md) | 082 专讲 VPC 私有源站，是扩展阅读，不代表所有源站模式 |
| ☐ | 168 / 15.04 | CloudFront - Geo Restriction | [084 · 按国家限制内容访问（CloudFront geo restriction）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-georestriction-084.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 169 / 15.05 | CloudFront - Cache Invalidation | [083 · 更新内容与缓存失效（CloudFront invalidation）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-invalidation-083.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 170 / 15.06 | AWS Global Accelerator - Overview | [085 · 全球网络入口与缓存的区别（AWS Global Accelerator）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-accelerator-085.md) | [081 · 边缘缓存与回源（Amazon CloudFront）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-cloudfront-081.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 171 / 15.07 | AWS Global Accelerator - Hands On | [085 · 全球网络入口与缓存的区别（AWS Global Accelerator）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-accelerator-085.md) | — | 看完后用 KP 解释操作的原因与验证结果 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-16"></a>
## 16. AWS Storage Extras

主线：②数据与存储。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 172 / 16.01 | AWS Snow Family Overview | [086 · 离线迁移的时间预算（Offline data transfer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-offline-086.md) | — | 对应离线迁移判断；设备功能与可用性不能仅靠此 KP |
| ☐ | 173 / 16.02 | AWS Snow Family Hands On | — | [086 · 离线迁移的时间预算（Offline data transfer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-offline-086.md) | 设备操作暂无直接 KP |
| ☐ | 174 / 16.03 | Architecture: Snowball into Glacier | — | [086 · 离线迁移的时间预算（Offline data transfer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-offline-086.md)<br>[065 · 访问频率与恢复时间的取舍（S3 storage class）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-storageclasses-065.md) | 架构组合的补充阅读 |
| ☐ | 175 / 16.04 | Amazon FSx | [087 · Windows 共享文件服务（FSx for Windows File Server）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-fsxwindows-087.md)<br>[088 · 并行文件系统与 S3 数据（FSx for Lustre）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-lustre-088.md)<br>[089 · 保留多协议存储语义（FSx for NetApp ONTAP）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ontap-089.md)<br>[090 · 托管 ZFS 文件工作负载（FSx for OpenZFS）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-openzfs-090.md) | — | 可先比较协议和工作负载，再深入需要的类型 |
| ☐ | 176 / 16.05 | Amazon FSx - Hands On | [087 · Windows 共享文件服务（FSx for Windows File Server）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-fsxwindows-087.md)<br>[088 · 并行文件系统与 S3 数据（FSx for Lustre）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-lustre-088.md)<br>[089 · 保留多协议存储语义（FSx for NetApp ONTAP）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ontap-089.md)<br>[090 · 托管 ZFS 文件工作负载（FSx for OpenZFS）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-openzfs-090.md) | — | 按视频演示的文件系统类型选择阅读 |
| ☐ | 177 / 16.06 | Storage Gateway Overview | [091 · 本地文件协议连接对象存储（S3 File Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-filegateway-091.md)<br>[092 · 本地块设备的缓存与备份（Volume Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-volumegateway-092.md)<br>[093 · 保留磁带备份接口（Tape Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-tapegateway-093.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 178 / 16.07 | Storage Gateway Hands On | [091 · 本地文件协议连接对象存储（S3 File Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-filegateway-091.md)<br>[092 · 本地块设备的缓存与备份（Volume Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-volumegateway-092.md)<br>[093 · 保留磁带备份接口（Tape Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-tapegateway-093.md) | — | 按视频演示的 Gateway 类型选择阅读 |
| ☐ | 179 / 16.08 | AWS Transfer Family | [094 · 托管文件传输端点（AWS Transfer Family）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-transferfamily-094.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 180 / 16.09 | DataSync - Overview | [095 · 文件数据的批量同步（AWS DataSync）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-datasync-095.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 181 / 16.10 | All AWS Storage Options Compared | [019 · 块存储的持久性与可用区边界（Elastic Block Store）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ebs-019.md)<br>[022 · 临时本地存储的边界（Instance store）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-instancestore-022.md)<br>[026 · 跨实例共享文件系统（Elastic File System）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-efs-026.md)<br>[060 · 对象存储的命名模型（S3 bucket and object key）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-objects-060.md)<br>[087 · Windows 共享文件服务（FSx for Windows File Server）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-fsxwindows-087.md)<br>[088 · 并行文件系统与 S3 数据（FSx for Lustre）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-lustre-088.md)<br>[089 · 保留多协议存储语义（FSx for NetApp ONTAP）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ontap-089.md)<br>[090 · 托管 ZFS 文件工作负载（FSx for OpenZFS）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-openzfs-090.md) | [091 · 本地文件协议连接对象存储（S3 File Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-filegateway-091.md)<br>[092 · 本地块设备的缓存与备份（Volume Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-volumegateway-092.md)<br>[093 · 保留磁带备份接口（Tape Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-tapegateway-093.md) | 综合比较；无需当次重新精读全部 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-17"></a>
## 17. Decoupling applications: SQS, SNS, Kinesis, Active MQ

主线：③应用解耦与处理。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 182 / 17.01 | Introduction to Messaging | — | [096 · 队列解耦与重复处理（SQS Standard queue）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-sqs-096.md)<br>[101 · 发布订阅与消息扇出（Simple Notification Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-sns-101.md)<br>[102 · 可重放的数据流（Kinesis Data Streams）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-kinesis-102.md) | 本章导航与对比 |
| ☐ | 183 / 17.02 | Amazon SQS - Standard Queues Overview | [096 · 队列解耦与重复处理（SQS Standard queue）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-sqs-096.md) | [231 · 受控重试与业务幂等（Retry with backoff）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-retry-231.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 184 / 17.03 | SQS - Standard Queue Hands On | [096 · 队列解耦与重复处理（SQS Standard queue）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-sqs-096.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 185 / 17.04 | SQS - Message Visibility Timeout | [097 · 可见性超时与消费确认（SQS visibility timeout）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-visibility-097.md) | [228 · 隔离反复失败的消息（SQS dead-letter queue）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-deadletter-228.md)<br>[231 · 受控重试与业务幂等（Retry with backoff）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-retry-231.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 186 / 17.05 | SQS - Long Polling | [098 · 减少空轮询（SQS long polling）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-longpolling-098.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 187 / 17.06 | SQS - FIFO Queues | [099 · 消息组与有序处理（SQS FIFO queue）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-fifo-099.md) | [231 · 受控重试与业务幂等（Retry with backoff）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-retry-231.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 188 / 17.07 | SQS + Auto Scaling Group | [100 · 按积压量扩展消费者（Queue-based scaling）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-backlog-100.md) | [037 · 期望容量与实例替换（Auto Scaling Group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-scaling-asg-037.md)<br>[038 · 自动伸缩触发方式（Scaling policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-scaling-policies-038.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 189 / 17.08 | Amazon Simple Notification Service (AWS SNS) | [101 · 发布订阅与消息扇出（Simple Notification Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-sns-101.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 190 / 17.09 | SNS and SQS - Fan Out Pattern | [101 · 发布订阅与消息扇出（Simple Notification Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-sns-101.md)<br>[096 · 队列解耦与重复处理（SQS Standard queue）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-sqs-096.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 191 / 17.10 | SNS - Hands On | [101 · 发布订阅与消息扇出（Simple Notification Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-sns-101.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 192 / 17.11 | Amazon Kinesis Data Streams | [102 · 可重放的数据流（Kinesis Data Streams）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-kinesis-102.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 193 / 17.12 | Amazon Kinesis Data Streams - Hands On | [102 · 可重放的数据流（Kinesis Data Streams）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-kinesis-102.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 194 / 17.13 | Amazon Data Firehose | [103 · 缓冲后投递数据到目的地（Amazon Data Firehose）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-firehose-103.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 195 / 17.14 | Amazon Data Firehose - Hands On | [103 · 缓冲后投递数据到目的地（Amazon Data Firehose）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-firehose-103.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 196 / 17.15 | SQS vs SNS vs Kinesis | [096 · 队列解耦与重复处理（SQS Standard queue）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-sqs-096.md)<br>[101 · 发布订阅与消息扇出（Simple Notification Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-sns-101.md)<br>[102 · 可重放的数据流（Kinesis Data Streams）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-kinesis-102.md) | — | 对比复习 |
| ☐ | 197 / 17.16 | Amazon MQ | [104 · 兼容现有消息协议（Amazon MQ）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-mq-104.md) | — | 看完后复述机制、适用场景和限制 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-18"></a>
## 18. Containers on AWS: ECS, Fargate, ECR & EKS

主线：③应用解耦与处理。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 198 / 18.01 | Docker Introduction | [235 · 镜像到容器的运行关系（Container image and container）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-fundamentals-235.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 199 / 18.02 | Amazon ECS | [105 · 容器任务与计算容量（Elastic Container Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-ecs-105.md)<br>[106 · 区分任务权限与平台权限（ECS task role）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-taskrole-106.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 200 / 18.03 | Creating ECS Cluster - Hands On | [105 · 容器任务与计算容量（Elastic Container Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-ecs-105.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 201 / 18.04 | Creating ECS Service - Hands On | [105 · 容器任务与计算容量（Elastic Container Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-ecs-105.md)<br>[106 · 区分任务权限与平台权限（ECS task role）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-taskrole-106.md) | [030 · 应用层请求路由（Application Load Balancer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-alb-030.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 202 / 18.05 | Amazon ECS - Auto Scaling | [107 · 任务扩展与主机扩展（ECS service scaling）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-ecsscaling-107.md) | [037 · 期望容量与实例替换（Auto Scaling Group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-scaling-asg-037.md)<br>[038 · 自动伸缩触发方式（Scaling policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-scaling-policies-038.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 203 / 18.06 | Amazon ECS - Solutions Architectures | — | [105 · 容器任务与计算容量（Elastic Container Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-ecs-105.md)<br>[106 · 区分任务权限与平台权限（ECS task role）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-taskrole-106.md)<br>[107 · 任务扩展与主机扩展（ECS service scaling）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-ecsscaling-107.md)<br>[096 · 队列解耦与重复处理（SQS Standard queue）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-sqs-096.md) | 组合阅读；按演示场景选择 |
| ☐ | 204 / 18.07 | Amazon ECS - Clean Up - Hands On | — | [105 · 容器任务与计算容量（Elastic Container Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-ecs-105.md) | 资源清理操作 |
| ☐ | 205 / 18.08 | Amazon ECR | [108 · 镜像存储与拉取授权（Elastic Container Registry）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-ecr-108.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 206 / 18.09 | Amazon EKS - Overview | [109 · 托管控制平面与工作节点（Elastic Kubernetes Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-eks-109.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 207 / 18.10 | Amazon EKS - Hands On | [109 · 托管控制平面与工作节点（Elastic Kubernetes Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-eks-109.md) | [235 · 镜像到容器的运行关系（Container image and container）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-fundamentals-235.md) | 看完后用 KP 解释操作的原因与验证结果 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-19"></a>
## 19. Serverless Overviews from a Solution Architect Perspective

主线：③应用解耦与处理。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 208 / 19.01 | About the Serverless Section | — | — | 章节说明 |
| ☐ | 209 / 19.02 | Serverless Introduction | [111 · 事件驱动函数的执行模型（AWS Lambda）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-lambda-111.md) | [214 · 按服务划分安全责任（Shared responsibility model）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-foundations-sharedresponsibility-214.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 210 / 19.03 | Lambda Overview | [111 · 事件驱动函数的执行模型（AWS Lambda）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-lambda-111.md) | [007 · 服务如何取得访问权限（IAM role）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-serviceroles-007.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 211 / 19.04 | Lambda Hands-On | [111 · 事件驱动函数的执行模型（AWS Lambda）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-lambda-111.md) | [007 · 服务如何取得访问权限（IAM role）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-serviceroles-007.md)<br>[153 · 日志组与订阅处理（CloudWatch Logs）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-logs-153.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 212 / 19.05 | Lambda Limits | — | [111 · 事件驱动函数的执行模型（AWS Lambda）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-lambda-111.md)<br>[112 · 并发容量与限流（Lambda concurrency）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-concurrency-112.md) | 执行时限、包体等配额未独立完整展开；以视频与现行文档为准 |
| ☐ | 213 / 19.06 | Lambda Concurrency | [112 · 并发容量与限流（Lambda concurrency）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-concurrency-112.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 214 / 19.07 | Lambda Concurrency - Hands On | [112 · 并发容量与限流（Lambda concurrency）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-concurrency-112.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 215 / 19.08 | Lambda SnapStart | [113 · 初始化延迟与预热方式（Lambda cold start）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-coldstart-113.md) | — | 冷启动 KP 含优化方式；按其适用边界理解 |
| ☐ | 216 / 19.09 | Lambda@Edge & CloudFront Functions | [114 · 在边缘修改请求与响应（CloudFront Functions and Lambda at Edge）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-edgefunctions-114.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 217 / 19.10 | Lambda in VPC | [115 · 函数访问私有数据库（Lambda VPC networking）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-lambdavpc-115.md) | [178 · 子网边界与地址容量（VPC and subnet）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-subnets-178.md)<br>[181 · 私有子网的 IPv4 出口（NAT gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-nat-181.md)<br>[184 · 私有访问服务的入口选择（VPC endpoint and PrivateLink）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-endpoints-184.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 218 / 19.11 | RDS - Invoking Lambda & Event Notifications | — | [039 · 托管数据库的责任边界（Relational Database Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-manageddb-039.md)<br>[111 · 事件驱动函数的执行模型（AWS Lambda）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-lambda-111.md)<br>[155 · 事件总线与匹配规则（Amazon EventBridge）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-events-eventbridge-155.md) | 具体 RDS 集成暂无独立 KP；勿把事件通知与数据库调用函数视为同一机制 |
| ☐ | 219 / 19.12 | Amazon DynamoDB | [116 · 按访问模式设计主键（DynamoDB primary key）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-datamodel-116.md)<br>[117 · 预配置与按需容量（DynamoDB capacity mode）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-capacity-117.md) | [226 · 按读取对象选择一致性（DynamoDB read consistency）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-consistency-226.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 220 / 19.13 | Amazon DynamoDB - Hands-On | [116 · 按访问模式设计主键（DynamoDB primary key）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-datamodel-116.md)<br>[117 · 预配置与按需容量（DynamoDB capacity mode）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-capacity-117.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 221 / 19.14 | Amazon DynamoDB - Advanced Features | [118 · 面向数据库 API 的读缓存（DynamoDB Accelerator）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-dax-118.md)<br>[119 · 项目变化事件与后续处理（DynamoDB Streams）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-streams-119.md)<br>[120 · 多区域读写复制（DynamoDB global table）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-globaltables-120.md)<br>[121 · 过期项目自动清理（DynamoDB Time To Live）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-ttl-121.md)<br>[122 · 表恢复与数据导出（DynamoDB backup）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-recovery-122.md) | [226 · 按读取对象选择一致性（DynamoDB read consistency）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-consistency-226.md)<br>[227 · 为替代查询路径设计索引（DynamoDB secondary index）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-indexes-227.md) | 按 DAX、Streams、全球表、TTL、恢复逐项复习；一致性和索引为补充 |
| ☐ | 222 / 19.15 | API Gateway Overview | [123 · 托管 API 入口与集成（Amazon API Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-apigateway-123.md)<br>[124 · 公开与私有 API 的入口（API Gateway endpoint type）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-apiendpoints-124.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 223 / 19.16 | API Gateway Basics Hands-On | [123 · 托管 API 入口与集成（Amazon API Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-apigateway-123.md) | [111 · 事件驱动函数的执行模型（AWS Lambda）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-lambda-111.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 224 / 19.17 | Step Functions | [125 · 多步骤工作流的编排（AWS Step Functions）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-stepfunctions-125.md) | [231 · 受控重试与业务幂等（Retry with backoff）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-retry-231.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 225 / 19.18 | Amazon Cognito Overview | [126 · 应用登录与 AWS 凭证的区别（Cognito User Pool and Identity Pool）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-identity-cognito-126.md) | — | 看完后复述机制、适用场景和限制 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-20"></a>
## 20. Serverless Solution Architecture Discussions

主线：③应用解耦与处理。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 226 / 20.01 | Mobile Application: MyTodoList | — | [123 · 托管 API 入口与集成（Amazon API Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-apigateway-123.md)<br>[111 · 事件驱动函数的执行模型（AWS Lambda）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-lambda-111.md)<br>[116 · 按访问模式设计主键（DynamoDB primary key）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-datamodel-116.md)<br>[126 · 应用登录与 AWS 凭证的区别（Cognito User Pool and Identity Pool）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-identity-cognito-126.md) | 案例型推荐，未逐段核验视频 |
| ☐ | 227 / 20.02 | Serverless Website: MyBlog.com | — | [060 · 对象存储的命名模型（S3 bucket and object key）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-objects-060.md)<br>[081 · 边缘缓存与回源（Amazon CloudFront）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-cloudfront-081.md)<br>[123 · 托管 API 入口与集成（Amazon API Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-apigateway-123.md)<br>[111 · 事件驱动函数的执行模型（AWS Lambda）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-lambda-111.md)<br>[116 · 按访问模式设计主键（DynamoDB primary key）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-datamodel-116.md) | 案例型推荐，未逐段核验视频 |
| ☐ | 228 / 20.03 | MicroServices Architecture | — | [058 · 状态外置与横向扩展（Stateless application）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-stateless-058.md)<br>[096 · 队列解耦与重复处理（SQS Standard queue）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-sqs-096.md)<br>[105 · 容器任务与计算容量（Elastic Container Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-ecs-105.md)<br>[111 · 事件驱动函数的执行模型（AWS Lambda）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-lambda-111.md)<br>[123 · 托管 API 入口与集成（Amazon API Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-apigateway-123.md) | 案例型推荐，按同步/异步和运行方式选择 |
| ☐ | 229 / 20.04 | Software updates distribution | — | [060 · 对象存储的命名模型（S3 bucket and object key）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-objects-060.md)<br>[081 · 边缘缓存与回源（Amazon CloudFront）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-cloudfront-081.md)<br>[083 · 更新内容与缓存失效（CloudFront invalidation）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-invalidation-083.md) | 案例型推荐，未逐段核验视频 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-21"></a>
## 21. Databases in AWS

主线：③应用解耦与处理。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 230 / 21.01 | Choosing the right database | [128 · 按数据模型与查询选择数据库（Database access pattern）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-databases-selection-128.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 231 / 21.02 | RDS | [039 · 托管数据库的责任边界（Relational Database Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-manageddb-039.md) | [040 · 异步副本与读扩展（Read replica）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-readreplicas-040.md)<br>[041 · 备用实例与自动故障转移（Multi-AZ DB instance）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-multiaz-041.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 232 / 21.03 | Aurora | [042 · 共享存储与数据库端点（Amazon Aurora）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-aurora-042.md) | [043 · 按使用量调整数据库计算（Aurora Serverless）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-auroraserverless-043.md)<br>[044 · 跨区域数据库读取与恢复（Aurora Global Database）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-auroraglobal-044.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 233 / 21.04 | ElastiCache | [048 · 应用缓存与会话存储（Amazon ElastiCache）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cache-elasticache-048.md) | [049 · 缓存填充与失效策略（Cache-aside and write-through）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cache-patterns-049.md)<br>[217 · 缓存引擎的能力取舍（Valkey Redis OSS and Memcached）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cache-engines-217.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 234 / 21.05 | DynamoDB | [116 · 按访问模式设计主键（DynamoDB primary key）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-datamodel-116.md)<br>[117 · 预配置与按需容量（DynamoDB capacity mode）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-capacity-117.md) | [118 · 面向数据库 API 的读缓存（DynamoDB Accelerator）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-dax-118.md)<br>[120 · 多区域读写复制（DynamoDB global table）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-globaltables-120.md)<br>[226 · 按读取对象选择一致性（DynamoDB read consistency）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-consistency-226.md)<br>[227 · 为替代查询路径设计索引（DynamoDB secondary index）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-indexes-227.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 235 / 21.06 | S3 | [060 · 对象存储的命名模型（S3 bucket and object key）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-objects-060.md) | [128 · 按数据模型与查询选择数据库（Database access pattern）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-databases-selection-128.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 236 / 21.07 | DocumentDB | [129 · 文档数据与接口兼容（Amazon DocumentDB）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-databases-documentdb-129.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 237 / 21.08 | Neptune | [130 · 图关系查询（Amazon Neptune）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-databases-neptune-130.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 238 / 21.09 | Keyspaces (for Apache Cassandra) | [131 · 托管 Cassandra 兼容访问（Amazon Keyspaces）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-databases-keyspaces-131.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 239 / 21.10 | Timestream | [132 · 时间序列数据的组织（Amazon Timestream）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-databases-timestream-132.md) | — | 看完后复述机制、适用场景和限制 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-22"></a>
## 22. Data & Analytics

主线：③应用解耦与处理。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 240 / 22.01 | Athena | [133 · 在对象存储上执行 SQL（Amazon Athena）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-athena-133.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 241 / 22.02 | Athena Hands On | [133 · 在对象存储上执行 SQL（Amazon Athena）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-athena-133.md) | [060 · 对象存储的命名模型（S3 bucket and object key）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-objects-060.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 242 / 22.03 | Redshift | [134 · 分析仓库与事务数据库（Amazon Redshift）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-redshift-134.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 243 / 22.04 | OpenSearch (ex: ElasticSearch) | [135 · 搜索索引与主数据存储（Amazon OpenSearch Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-opensearch-135.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 244 / 22.05 | EMR | [136 · 托管分布式数据处理（Amazon EMR）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-emr-136.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 245 / 22.06 | QuickSight | [137 · 可视化分析与仪表板共享（Amazon QuickSight）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-quicksight-137.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 246 / 22.07 | Glue | [138 · 数据转换与元数据目录（AWS Glue）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-glue-138.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 247 / 22.08 | Lake Formation | [139 · 集中管理数据湖权限（AWS Lake Formation）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-lakeformation-139.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 248 / 22.09 | Amazon Managed Service for Apache Flink | [140 · 有状态流处理（Managed Service for Apache Flink）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-flink-140.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 249 / 22.10 | Amazon Managed Service for Apache Flink - Hands On | [140 · 有状态流处理（Managed Service for Apache Flink）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-flink-140.md) | [102 · 可重放的数据流（Kinesis Data Streams）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-kinesis-102.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 250 / 22.11 | MSK - Managed Streaming for Apache Kafka | [141 · 托管 Kafka 与协议兼容（Amazon MSK）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-msk-141.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 251 / 22.12 | Big Data Ingestion Pipeline | [233 · 从事件摄取到查询结果的数据链路（Data ingestion pipeline）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-ingestionpipeline-233.md) | [102 · 可重放的数据流（Kinesis Data Streams）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-kinesis-102.md)<br>[103 · 缓冲后投递数据到目的地（Amazon Data Firehose）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-firehose-103.md)<br>[133 · 在对象存储上执行 SQL（Amazon Athena）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-athena-133.md)<br>[138 · 数据转换与元数据目录（AWS Glue）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-glue-138.md) | 看完后复述机制、适用场景和限制 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-23"></a>
## 23. Machine Learning

主线：③应用解耦与处理。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 252 / 23.01 | Rekognition Overview | [142 · 图像与视频识别（Amazon Rekognition）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-rekognition-142.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 253 / 23.02 | Transcribe Overview | [143 · 语音转文字（Amazon Transcribe）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-transcribe-143.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 254 / 23.03 | Polly Overview | [144 · 文字转语音（Amazon Polly）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-polly-144.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 255 / 23.04 | Translate Overview | [145 · 托管语言翻译（Amazon Translate）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-translate-145.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 256 / 23.05 | Lex + Connect Overview | [146 · 对话理解与联络中心（Amazon Lex and Amazon Connect）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-lexconnect-146.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 257 / 23.06 | Comprehend Overview | [147 · 从文本提取实体与情绪（Amazon Comprehend）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-comprehend-147.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 258 / 23.07 | Comprehend Medical Overview | — | [147 · 从文本提取实体与情绪（Amazon Comprehend）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-comprehend-147.md) | 医疗专属实体与边界暂无独立 KP |
| ☐ | 259 / 23.08 | SageMaker AI Overview | [148 · 自建模型的生命周期（Amazon SageMaker AI）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-sagemaker-148.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 260 / 23.09 | Kendra Overview | [149 · 面向文档的语义搜索（Amazon Kendra）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-kendra-149.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 261 / 23.10 | Personalize Overview | [150 · 个性化推荐（Amazon Personalize）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-personalize-150.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 262 / 23.11 | Textract Overview | [151 · 从扫描文档提取结构（Amazon Textract）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-textract-151.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 263 / 23.12 | Machine Learning Summary | [142 · 图像与视频识别（Amazon Rekognition）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-rekognition-142.md)<br>[143 · 语音转文字（Amazon Transcribe）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-transcribe-143.md)<br>[144 · 文字转语音（Amazon Polly）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-polly-144.md)<br>[145 · 托管语言翻译（Amazon Translate）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-translate-145.md)<br>[146 · 对话理解与联络中心（Amazon Lex and Amazon Connect）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-lexconnect-146.md)<br>[147 · 从文本提取实体与情绪（Amazon Comprehend）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-comprehend-147.md)<br>[148 · 自建模型的生命周期（Amazon SageMaker AI）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-sagemaker-148.md)<br>[149 · 面向文档的语义搜索（Amazon Kendra）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-kendra-149.md)<br>[150 · 个性化推荐（Amazon Personalize）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-personalize-150.md)<br>[151 · 从扫描文档提取结构（Amazon Textract）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-textract-151.md) | — | 综合回顾；优先比较任务与输入输出 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-24"></a>
## 24. AWS Monitoring & Audit: CloudWatch, CloudTrail & Config

主线：④安全与运维。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 264 / 24.01 | AWS Monitoring - Section Introduction | — | [152 · 指标的维度与采集边界（CloudWatch metric）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-metrics-152.md)<br>[153 · 日志组与订阅处理（CloudWatch Logs）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-logs-153.md)<br>[154 · 从指标条件到行动（CloudWatch alarm）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-alarms-154.md)<br>[156 · 谁通过 API 做了什么（AWS CloudTrail）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-audit-cloudtrail-156.md)<br>[157 · 资源配置历史与合规评估（AWS Config）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-audit-config-157.md) | 章节导航 |
| ☐ | 265 / 24.02 | CloudWatch Metrics | [152 · 指标的维度与采集边界（CloudWatch metric）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-metrics-152.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 266 / 24.03 | CloudWatch Logs | [153 · 日志组与订阅处理（CloudWatch Logs）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-logs-153.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 267 / 24.04 | CloudWatch Logs - Hands On | [153 · 日志组与订阅处理（CloudWatch Logs）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-logs-153.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 268 / 24.05 | CloudWatch Logs - Live Tail - Hands On | [153 · 日志组与订阅处理（CloudWatch Logs）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-logs-153.md) | — | Live Tail 操作细节需结合视频 |
| ☐ | 269 / 24.06 | CloudWatch Agent & CloudWatch Logs Agent | [152 · 指标的维度与采集边界（CloudWatch metric）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-metrics-152.md)<br>[153 · 日志组与订阅处理（CloudWatch Logs）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-logs-153.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 270 / 24.07 | CloudWatch Alarms | [154 · 从指标条件到行动（CloudWatch alarm）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-alarms-154.md) | [152 · 指标的维度与采集边界（CloudWatch metric）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-metrics-152.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 271 / 24.08 | CloudWatch Alarms Hands On | [154 · 从指标条件到行动（CloudWatch alarm）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-alarms-154.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 272 / 24.09 | CloudWatch Network Synthetic Monitor | — | [152 · 指标的维度与采集边界（CloudWatch metric）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-metrics-152.md)<br>[154 · 从指标条件到行动（CloudWatch alarm）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-alarms-154.md) | 网络合成监测的具体机制暂无独立 KP |
| ☐ | 273 / 24.10 | EventBridge Overview (formerly CloudWatch Events) | [155 · 事件总线与匹配规则（Amazon EventBridge）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-events-eventbridge-155.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 274 / 24.11 | Amazon EventBridge - Hands On | [155 · 事件总线与匹配规则（Amazon EventBridge）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-events-eventbridge-155.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 275 / 24.12 | CloudWatch Insights and Operational Visibility | — | [152 · 指标的维度与采集边界（CloudWatch metric）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-metrics-152.md)<br>[153 · 日志组与订阅处理（CloudWatch Logs）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-logs-153.md)<br>[225 · 跨服务请求链路定位（Distributed tracing and AWS X-Ray）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-tracing-225.md) | Insights 各功能未独立展开；tracing 为扩展，不等同于 Insights |
| ☐ | 276 / 24.13 | CloudTrail Overview | [156 · 谁通过 API 做了什么（AWS CloudTrail）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-audit-cloudtrail-156.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 277 / 24.14 | CloudTrail Hands On | [156 · 谁通过 API 做了什么（AWS CloudTrail）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-audit-cloudtrail-156.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 278 / 24.15 | CloudTrail - EventBridge Integration | [156 · 谁通过 API 做了什么（AWS CloudTrail）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-audit-cloudtrail-156.md)<br>[155 · 事件总线与匹配规则（Amazon EventBridge）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-events-eventbridge-155.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 279 / 24.16 | AWS Config - Overview | [157 · 资源配置历史与合规评估（AWS Config）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-audit-config-157.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 280 / 24.17 | AWS Config - Hands On | [157 · 资源配置历史与合规评估（AWS Config）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-audit-config-157.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 281 / 24.18 | CloudTrail vs CloudWatch vs Config | [152 · 指标的维度与采集边界（CloudWatch metric）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-metrics-152.md)<br>[153 · 日志组与订阅处理（CloudWatch Logs）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-logs-153.md)<br>[156 · 谁通过 API 做了什么（AWS CloudTrail）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-audit-cloudtrail-156.md)<br>[157 · 资源配置历史与合规评估（AWS Config）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-audit-config-157.md) | — | 对比复习 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-25"></a>
## 25. Identity and Access Management (IAM) - Advanced

主线：④安全与运维。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 282 / 25.01 | Organizations - Overview | [158 · 多账户管理与组织单元（AWS Organizations）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-governance-organizations-158.md)<br>[159 · 组织权限上限（Service Control Policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-governance-scp-159.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 283 / 25.02 | Organizations - Hands On | [158 · 多账户管理与组织单元（AWS Organizations）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-governance-organizations-158.md)<br>[159 · 组织权限上限（Service Control Policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-governance-scp-159.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 284 / 25.03 | Organizations - Tag Policies | — | [158 · 多账户管理与组织单元（AWS Organizations）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-governance-organizations-158.md)<br>[223 · 费用明细与项目归集（Cost and Usage Report and cost allocation tags）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cost-billingdata-223.md) | 标签策略机制暂无独立 KP；费用标签不能替代 Tag Policies |
| ☐ | 285 / 25.04 | IAM - Advanced Policies | [160 · 按请求上下文约束授权（IAM condition）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-conditions-160.md)<br>[162 · 委派管理的权限边界（Permissions boundary）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-boundaries-162.md) | [004 · 策略语句如何表达权限（IAM policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-policies-004.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 286 / 25.05 | IAM - Resource-based Policies vs IAM Roles | [161 · 跨账户访问的两条路径（Cross-account role and resource policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-crossaccount-161.md) | [007 · 服务如何取得访问权限（IAM role）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-serviceroles-007.md)<br>[215 · 临时凭证的签发与续用（STS AssumeRole）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-stssessions-215.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 287 / 25.06 | IAM - Policy Evaluation Logic | [216 · 有效权限的合并与约束（IAM policy evaluation）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-evaluation-216.md) | [159 · 组织权限上限（Service Control Policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-governance-scp-159.md)<br>[162 · 委派管理的权限边界（Permissions boundary）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-boundaries-162.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 288 / 25.07 | AWS IAM Identity Center | [163 · 员工跨账户单点登录（IAM Identity Center）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-identity-identitycenter-163.md) | [215 · 临时凭证的签发与续用（STS AssumeRole）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-stssessions-215.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 289 / 25.08 | AWS Directory Services | [164 · 目录托管与本地代理（AWS Directory Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-identity-directory-164.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 290 / 25.09 | AWS Directory Services - Hands On | [164 · 目录托管与本地代理（AWS Directory Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-identity-directory-164.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 291 / 25.10 | AWS Control Tower | [165 · 多账户环境的基线治理（AWS Control Tower）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-governance-controltower-165.md) | — | 看完后复述机制、适用场景和限制 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-26"></a>
## 26. AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF

主线：④安全与运维。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 292 / 26.01 | AWS Security - Section Introduction | — | [214 · 按服务划分安全责任（Shared responsibility model）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-foundations-sharedresponsibility-214.md)<br>[166 · 密钥管理与使用授权（AWS Key Management Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-kms-166.md) | 章节导航 |
| ☐ | 293 / 26.02 | Encryption 101 | — | [166 · 密钥管理与使用授权（AWS Key Management Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-kms-166.md)<br>[073 · 对象加密的责任边界（S3 server-side and client-side encryption）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-encryption-073.md)<br>[074 · 强制加密传输（S3 SecureTransport condition）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-transport-074.md) | 通用对称/非对称加密与信封加密未独立完整展开 |
| ☐ | 294 / 26.03 | KMS Overview | [166 · 密钥管理与使用授权（AWS Key Management Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-kms-166.md) | [234 · 密钥材料轮换与旧数据解密（KMS key rotation）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-keyrotation-234.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 295 / 26.04 | KMS Hands On w/ CLI | [166 · 密钥管理与使用授权（AWS Key Management Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-kms-166.md) | [006 · 控制台与程序化访问（AWS CLI and SDK）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-accessmethods-006.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 296 / 26.05 | KMS - Multi-Region Keys | [167 · 跨区域密钥与资源配置（KMS multi-Region key）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-multiregionkeys-167.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 297 / 26.06 | S3 Replication with Encryption | [064 · 异步对象复制的条件（S3 replication）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-replication-064.md)<br>[073 · 对象加密的责任边界（S3 server-side and client-side encryption）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-encryption-073.md)<br>[166 · 密钥管理与使用授权（AWS Key Management Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-kms-166.md) | — | 组合复习 |
| ☐ | 298 / 26.07 | Encrypted AMI Sharing Process | [021 · 机器镜像与实例复制（Amazon Machine Image）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ami-021.md)<br>[025 · 加密卷与快照的继承关系（EBS encryption）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ebsencryption-025.md)<br>[166 · 密钥管理与使用授权（AWS Key Management Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-kms-166.md) | [161 · 跨账户访问的两条路径（Cross-account role and resource policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-crossaccount-161.md) | 组合复习 |
| ☐ | 299 / 26.08 | SSM Parameter Store Overview | [168 · 分层配置与加密参数（SSM Parameter Store）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-parameterstore-168.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 300 / 26.09 | SSM Parameter Store Hands On (CLI) | [168 · 分层配置与加密参数（SSM Parameter Store）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-parameterstore-168.md) | [006 · 控制台与程序化访问（AWS CLI and SDK）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-accessmethods-006.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 301 / 26.10 | AWS Secrets Manager - Overview | [169 · 凭证存储与轮换（AWS Secrets Manager）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-secretsmanager-169.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 302 / 26.11 | AWS Secrets Manager - Hands On | [169 · 凭证存储与轮换（AWS Secrets Manager）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-secretsmanager-169.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 303 / 26.12 | AWS Certificate Manager (ACM) | [170 · 证书生命周期与部署位置（AWS Certificate Manager）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-acm-170.md) | [035 · HTTPS 证书与域名选择（TLS termination and SNI）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-tls-035.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 304 / 26.13 | AWS CloudHSM | — | [166 · 密钥管理与使用授权（AWS Key Management Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-kms-166.md) | 暂无独立 CloudHSM KP；KMS 只用于对比，不能替代专用 HSM 内容 |
| ☐ | 305 / 26.14 | Web Application Firewall (WAF) | [171 · 应用层请求过滤（AWS Web Application Firewall）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-waf-171.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 306 / 26.15 | Shield - DDoS Protection | [172 · 分布式拒绝服务防护（AWS Shield）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-shield-172.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 307 / 26.16 | Firewall Manager | [173 · 跨账户集中安全策略（AWS Firewall Manager）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-firewallmanager-173.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 308 / 26.17 | WAF & Shield - Hands On | [171 · 应用层请求过滤（AWS Web Application Firewall）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-waf-171.md)<br>[172 · 分布式拒绝服务防护（AWS Shield）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-shield-172.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 309 / 26.18 | DDoS Protection Best Practices | [172 · 分布式拒绝服务防护（AWS Shield）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-shield-172.md)<br>[171 · 应用层请求过滤（AWS Web Application Firewall）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-waf-171.md) | [081 · 边缘缓存与回源（Amazon CloudFront）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-cloudfront-081.md)<br>[085 · 全球网络入口与缓存的区别（AWS Global Accelerator）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-accelerator-085.md)<br>[038 · 自动伸缩触发方式（Scaling policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-scaling-policies-038.md) | 综合防护场景 |
| ☐ | 310 / 26.19 | Amazon GuardDuty | [174 · 行为与日志中的威胁发现（Amazon GuardDuty）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-guardduty-174.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 311 / 26.20 | Amazon Inspector | [175 · 软件漏洞与暴露风险评估（Amazon Inspector）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-inspector-175.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 312 / 26.21 | Amazon Macie | [176 · 对象数据中的敏感信息发现（Amazon Macie）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-macie-176.md) | — | 看完后复述机制、适用场景和限制 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-27"></a>
## 27. Networking - VPC

主线：①应用部署／④安全与运维。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 313 / 27.01 | Section Introduction | — | — | 章节说明 |
| ☐ | 314 / 27.02 | CIDR, Private vs Public IP | [177 · 地址范围与前缀长度（Classless Inter-Domain Routing）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-cidr-177.md)<br>[015 · 实例地址与固定入口（Elastic IP）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-ipaddresses-015.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 315 / 27.03 | Default VPC Overview | [178 · 子网边界与地址容量（VPC and subnet）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-subnets-178.md) | [179 · 公网连通的必要条件（Internet Gateway and route table）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-internet-179.md)<br>[011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md) | 默认配置细节以视频为准 |
| ☐ | 316 / 27.04 | VPC Overview | [178 · 子网边界与地址容量（VPC and subnet）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-subnets-178.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 317 / 27.05 | VPC Hands On | [178 · 子网边界与地址容量（VPC and subnet）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-subnets-178.md) | [177 · 地址范围与前缀长度（Classless Inter-Domain Routing）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-cidr-177.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 318 / 27.06 | Subnet Overview | [178 · 子网边界与地址容量（VPC and subnet）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-subnets-178.md) | [002 · 可用区与故障隔离（Availability Zone）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-foundations-availabilityzones-002.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 319 / 27.07 | Subnet Hands On | [178 · 子网边界与地址容量（VPC and subnet）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-subnets-178.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 320 / 27.08 | Internet Gateways & Route Tables | [179 · 公网连通的必要条件（Internet Gateway and route table）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-internet-179.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 321 / 27.09 | Internet Gateways & Route Tables Hands On | [179 · 公网连通的必要条件（Internet Gateway and route table）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-internet-179.md) | [015 · 实例地址与固定入口（Elastic IP）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-ipaddresses-015.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 322 / 27.10 | Bastion Hosts | [180 · 通过跳板访问私有实例（Bastion host）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-bastion-180.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 323 / 27.11 | Bastion Hosts Hands On | [180 · 通过跳板访问私有实例（Bastion host）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-bastion-180.md) | [011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md) | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 324 / 27.12 | NAT Instances | — | [181 · 私有子网的 IPv4 出口（NAT gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-nat-181.md)<br>[179 · 公网连通的必要条件（Internet Gateway and route table）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-internet-179.md)<br>[011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md) | 181 主要讲 NAT Gateway；NAT Instance 配置和差异需结合视频 |
| ☐ | 325 / 27.13 | NAT Instances Hands On | — | [181 · 私有子网的 IPv4 出口（NAT gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-nat-181.md)<br>[179 · 公网连通的必要条件（Internet Gateway and route table）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-internet-179.md)<br>[011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md) | NAT Instance 实现暂无独立 KP |
| ☐ | 326 / 27.14 | NAT Gateways | [181 · 私有子网的 IPv4 出口（NAT gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-nat-181.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 327 / 27.15 | NAT Gateways Hands On | [181 · 私有子网的 IPv4 出口（NAT gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-nat-181.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 328 / 27.16 | Regional NAT Gateway | [181 · 私有子网的 IPv4 出口（NAT gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-nat-181.md) | — | 现有 KP 已区分区域级与可用区级 NAT |
| ☐ | 329 / 27.17 | NACL & Security Groups | [182 · 无状态子网过滤（Network ACL）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-nacl-182.md)<br>[011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 330 / 27.18 | NACL & Security Groups Hands On | [182 · 无状态子网过滤（Network ACL）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-nacl-182.md)<br>[011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 331 / 27.19 | VPC Peering | [183 · 非传递的私有网络连接（VPC peering）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-peering-183.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 332 / 27.20 | VPC Peering Hands On | [183 · 非传递的私有网络连接（VPC peering）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-peering-183.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 333 / 27.21 | VPC Endpoints | [184 · 私有访问服务的入口选择（VPC endpoint and PrivateLink）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-endpoints-184.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 334 / 27.22 | VPC Endpoints Hands On | [184 · 私有访问服务的入口选择（VPC endpoint and PrivateLink）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-endpoints-184.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 335 / 27.23 | VPC Flow Logs | [185 · 用流量元数据排查连接（VPC Flow Logs）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-flowlogs-185.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 336 / 27.24 | VPC Flow Logs Hands On + Athena | [185 · 用流量元数据排查连接（VPC Flow Logs）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-flowlogs-185.md)<br>[133 · 在对象存储上执行 SQL（Amazon Athena）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-athena-133.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 337 / 27.25 | Site to Site VPN, Virtual Private Gateway & Customer Gateway | [186 · 本地网络到云的加密隧道（Site-to-Site VPN）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-vpn-186.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 338 / 27.26 | Site to Site VPN, Virtual Private Gateway & Customer Gateway Hands On | [186 · 本地网络到云的加密隧道（Site-to-Site VPN）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-vpn-186.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 339 / 27.27 | Direct Connect & Direct Connect Gateway | [187 · 专线连接与加密边界（AWS Direct Connect）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-directconnect-187.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 340 / 27.28 | Direct Connect + Site to Site VPN | [187 · 专线连接与加密边界（AWS Direct Connect）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-directconnect-187.md)<br>[186 · 本地网络到云的加密隧道（Site-to-Site VPN）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-vpn-186.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 341 / 27.29 | Transit Gateway | [188 · 集中式传递路由（Transit Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-transitgateway-188.md) | [183 · 非传递的私有网络连接（VPC peering）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-peering-183.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 342 / 27.30 | VPC Traffic Mirroring | [189 · 复制数据包进行检查（VPC Traffic Mirroring）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-mirroring-189.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 343 / 27.31 | IPv6 for VPC | — | [190 · IPv6 的仅出站入口（Egress-only Internet Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-ipv6egress-190.md)<br>[178 · 子网边界与地址容量（VPC and subnet）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-subnets-178.md) | 190 重点是 IPv6 仅出站访问；IPv6 地址模型需结合视频 |
| ☐ | 344 / 27.32 | IPv6 for VPC - Hands On | — | [190 · IPv6 的仅出站入口（Egress-only Internet Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-ipv6egress-190.md)<br>[178 · 子网边界与地址容量（VPC and subnet）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-subnets-178.md) | IPv6 地址分配操作未独立完整展开 |
| ☐ | 345 / 27.33 | Egress Only Internet Gateway | [190 · IPv6 的仅出站入口（Egress-only Internet Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-ipv6egress-190.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 346 / 27.34 | Egress Only Internet Gateway Hands On | [190 · IPv6 的仅出站入口（Egress-only Internet Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-ipv6egress-190.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 347 / 27.35 | Section Cleanup | — | — | 本章资源清理；按实验资源清单检查 |
| ☐ | 348 / 27.36 | VPC Section Summary | [177 · 地址范围与前缀长度（Classless Inter-Domain Routing）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-cidr-177.md)<br>[178 · 子网边界与地址容量（VPC and subnet）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-subnets-178.md)<br>[179 · 公网连通的必要条件（Internet Gateway and route table）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-internet-179.md)<br>[181 · 私有子网的 IPv4 出口（NAT gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-nat-181.md)<br>[182 · 无状态子网过滤（Network ACL）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-nacl-182.md)<br>[184 · 私有访问服务的入口选择（VPC endpoint and PrivateLink）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-endpoints-184.md) | [183 · 非传递的私有网络连接（VPC peering）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-peering-183.md)<br>[186 · 本地网络到云的加密隧道（Site-to-Site VPN）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-vpn-186.md)<br>[187 · 专线连接与加密边界（AWS Direct Connect）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-directconnect-187.md)<br>[188 · 集中式传递路由（Transit Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-transitgateway-188.md)<br>[190 · IPv6 的仅出站入口（Egress-only Internet Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-ipv6egress-190.md) | 综合复习；优先重画实际流量路径 |
| ☐ | 349 / 27.37 | Networking Costs in AWS | [191 · 按流量路径分析成本（Network data transfer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-transfercost-191.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 350 / 27.38 | AWS Network Firewall | [192 · 托管网络流量检查（AWS Network Firewall）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-networkfirewall-192.md) | — | 看完后复述机制、适用场景和限制 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-28"></a>
## 28. Disaster Recovery & Migrations

主线：②数据与存储。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 351 / 28.01 | Disaster Recovery in AWS | [193 · 恢复点与恢复时间目标（Recovery Point Objective and Recovery Time Objective）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-recovery-rporto-193.md)<br>[194 · 按恢复目标选择灾备策略（Disaster recovery strategy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-recovery-strategies-194.md) | [224 · 恢复环境的配额准备（Service quota readiness）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-recovery-quotas-224.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 352 / 28.02 | Elastic Disaster Recovery (DRS) | — | [193 · 恢复点与恢复时间目标（Recovery Point Objective and Recovery Time Objective）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-recovery-rporto-193.md)<br>[194 · 按恢复目标选择灾备策略（Disaster recovery strategy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-recovery-strategies-194.md)<br>[197 · 服务器重新托管迁移（Application Migration Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-migration-mgn-197.md) | 暂无 DRS 独立 KP；MGN 只作迁移对比，不能当成 DRS |
| ☐ | 353 / 28.03 | Database Migration Service (DMS) | [195 · 全量迁移与持续复制（Database Migration Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-migration-dms-195.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 354 / 28.04 | Database Migration Service (DMS) - Hands On | [195 · 全量迁移与持续复制（Database Migration Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-migration-dms-195.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 355 / 28.05 | RDS & Aurora Migrations | [195 · 全量迁移与持续复制（Database Migration Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-migration-dms-195.md) | [039 · 托管数据库的责任边界（Relational Database Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-manageddb-039.md)<br>[042 · 共享存储与数据库端点（Amazon Aurora）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-aurora-042.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 356 / 28.06 | On-Premises Strategies with AWS | — | [186 · 本地网络到云的加密隧道（Site-to-Site VPN）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-vpn-186.md)<br>[187 · 专线连接与加密边界（AWS Direct Connect）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-directconnect-187.md)<br>[197 · 服务器重新托管迁移（Application Migration Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-migration-mgn-197.md) | 组合场景，按视频具体方案复习 |
| ☐ | 357 / 28.07 | AWS Backup | [196 · 集中备份计划与不可变保留（AWS Backup）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-recovery-backup-196.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 358 / 28.08 | AWS Backup - Hands On | [196 · 集中备份计划与不可变保留（AWS Backup）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-recovery-backup-196.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 359 / 28.09 | Application Migration Service (MGN) | [197 · 服务器重新托管迁移（Application Migration Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-migration-mgn-197.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 360 / 28.10 | Transferring Large Datasets into AWS | [086 · 离线迁移的时间预算（Offline data transfer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-offline-086.md)<br>[095 · 文件数据的批量同步（AWS DataSync）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-datasync-095.md) | [191 · 按流量路径分析成本（Network data transfer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-transfercost-191.md) | 比较迁移路径 |
| ☐ | 361 / 28.11 | VMware Cloud on AWS | — | — | 暂无独立 KP；不能用 Outposts 或 MGN 代替 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-29"></a>
## 29. More Solution Architectures

主线：综合架构。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 362 / 29.01 | Event Processing in AWS | — | [069 · 对象变化如何触发处理（S3 event notification）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-events-069.md)<br>[096 · 队列解耦与重复处理（SQS Standard queue）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-sqs-096.md)<br>[101 · 发布订阅与消息扇出（Simple Notification Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-sns-101.md)<br>[111 · 事件驱动函数的执行模型（AWS Lambda）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-lambda-111.md)<br>[155 · 事件总线与匹配规则（Amazon EventBridge）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-events-eventbridge-155.md)<br>[231 · 受控重试与业务幂等（Retry with backoff）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-retry-231.md) | 综合场景推荐，未逐段核验视频 |
| ☐ | 363 / 29.02 | Caching Strategies in AWS | [127 · 按瓶颈选择缓存位置（Multi-layer caching）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-cachinglayers-127.md) | [049 · 缓存填充与失效策略（Cache-aside and write-through）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cache-patterns-049.md)<br>[081 · 边缘缓存与回源（Amazon CloudFront）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-cloudfront-081.md)<br>[118 · 面向数据库 API 的读缓存（DynamoDB Accelerator）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-dax-118.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 364 / 29.03 | Blocking an IP Address in AWS | — | [011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md)<br>[182 · 无状态子网过滤（Network ACL）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-nacl-182.md)<br>[171 · 应用层请求过滤（AWS Web Application Firewall）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-waf-171.md) | 组合与对比 |
| ☐ | 365 / 29.04 | High Performance Computing (HPC) on AWS | [198 · 计算与网络协同选型（High Performance Computing）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-hpc-198.md) | [016 · 放置策略的性能与隔离取舍（Placement group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-placement-016.md)<br>[088 · 并行文件系统与 S3 数据（FSx for Lustre）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-lustre-088.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 366 / 29.05 | EC2 Instance High Availability | — | [028 · 扩展能力与高可用（Scalability and high availability）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-scaling-availability-028.md)<br>[037 · 期望容量与实例替换（Auto Scaling Group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-scaling-asg-037.md)<br>[017 · 网卡与网络身份（Elastic Network Interface）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-eni-017.md)<br>[015 · 实例地址与固定入口（Elastic IP）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-ipaddresses-015.md) | 组合场景推荐，需按视频区分网络身份与实例替换 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-30"></a>
## 30. Other Services

主线：③应用解耦与处理／④安全与运维。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 367 / 30.01 | Other Services Section Introduction | — | — | 章节说明 |
| ☐ | 368 / 30.02 | CloudFormation Intro | [199 · 声明式基础设施与依赖（AWS CloudFormation）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iac-cloudformation-199.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 369 / 30.03 | CloudFormation - Hands On | [199 · 声明式基础设施与依赖（AWS CloudFormation）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iac-cloudformation-199.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 370 / 30.04 | CloudFormation - Service Role | [199 · 声明式基础设施与依赖（AWS CloudFormation）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iac-cloudformation-199.md)<br>[007 · 服务如何取得访问权限（IAM role）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-serviceroles-007.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 371 / 30.05 | Amazon SES | — | — | 暂无独立 KP；邮件发送机制需结合视频/课件 |
| ☐ | 372 / 30.06 | Amazon Pinpoint | — | — | 暂无独立 KP；用户触达与活动分析需结合视频/课件 |
| ☐ | 373 / 30.07 | SSM Session Manager | [200 · 通过代理建立管理会话（SSM Session Manager）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-operations-sessionmanager-200.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 374 / 30.08 | SSM Other Services | [201 · 对受管节点批量执行命令（SSM Run Command）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-operations-runcommand-201.md)<br>[202 · 补丁规则与维护窗口（SSM Patch Manager）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-operations-patching-202.md)<br>[203 · 运行手册编排运维步骤（SSM Automation）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-operations-automation-203.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 375 / 30.09 | AWS Cost Explorer | [204 · 按使用维度分析开销（AWS Cost Explorer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cost-explorer-204.md) | [223 · 费用明细与项目归集（Cost and Usage Report and cost allocation tags）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cost-billingdata-223.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 376 / 30.10 | AWS Cost Anomaly Detection | [205 · 识别异常支出模式（Cost Anomaly Detection）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cost-anomalies-205.md) | [222 · 预算阈值与费用通知（AWS Budgets）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cost-budgets-222.md) | 看完后复述机制、适用场景和限制 |
| ☐ | 377 / 30.11 | AWS Outposts | [206 · 本地部署的云基础设施（AWS Outposts）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-outposts-206.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 378 / 30.12 | AWS Batch | [207 · 按作业调度计算容量（AWS Batch）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-compute-batch-207.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 379 / 30.13 | Amazon AppFlow | [208 · SaaS 与云服务的数据传输（Amazon AppFlow）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-integration-appflow-208.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 380 / 30.14 | AWS Amplify | [209 · 前端应用与托管后端集成（AWS Amplify）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-frontend-amplify-209.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 381 / 30.15 | Instance Scheduler on AWS | [210 · 按非工作时间减少运行成本（Instance Scheduler）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cost-scheduler-210.md) | — | 看完后复述机制、适用场景和限制 |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-31"></a>
## 31. WhitePapers and Architectures - AWS Certified Solutions Architect Associate

主线：综合架构。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 382 / 31.01 | WhitePaper Section Introduction | — | — | 章节说明 |
| ☐ | 383 / 31.02 | AWS Well-Architected Framework & Well-Architected Tool | [211 · 用六个支柱审查架构（AWS Well-Architected Framework）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-wellarchitected-211.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 384 / 31.03 | AWS Trusted Advisor Overview + Hands-On | [212 · 账户检查与改进建议（AWS Trusted Advisor）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-trustedadvisor-212.md) | — | 看完后用 KP 解释操作的原因与验证结果 |
| ☐ | 385 / 31.04 | Examples of Architecture - AWS Certified Solutions Architect Associate | — | [211 · 用六个支柱审查架构（AWS Well-Architected Framework）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-wellarchitected-211.md)<br>[232 · 分层网络与共享状态（Multi-tier architecture）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-multitier-232.md)<br>[233 · 从事件摄取到查询结果的数据链路（Data ingestion pipeline）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-ingestionpipeline-233.md) | 综合架构推荐，不宣称视频只涉及这些 KP |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-32"></a>
## 32. Preparing for the Exam + Practice Exam - AWS Certified Solutions Architect Assoc

主线：考试整合。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 386 / 32.01 | Exam Preparation - Section Introduction | — | — | 备考说明 |
| ☐ | 387 / 32.02 | State of Learning Checkpoint - AWS Certified Solutions Architect Associate | — | [213 · 从场景约束筛选架构（Scenario-based architecture reasoning）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-exam-reasoning-213.md)<br>[211 · 用六个支柱审查架构（AWS Well-Architected Framework）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-wellarchitected-211.md) | 复习方法参考，不代表已经掌握 |
| ☐ | 388 / 32.03 | Exam Tips - AWS Certified Solutions Architect Associate | [213 · 从场景约束筛选架构（Scenario-based architecture reasoning）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-exam-reasoning-213.md) | — | 看完后复述机制、适用场景和限制 |
| ☐ | 389 / 32.04 | Links to Whitepapers | — | — | 资料链接 |
| ☐ | 390 / 32.05 | Exam Walkthrough and Signup | — | — | 报名流程，无对应技术 KP |
| ☐ | 391 / 32.06 | Save 50% on your AWS Exam Cost! | — | — | 考试优惠说明，无对应技术 KP |
| ☐ | 392 / 32.07 | Get an Extra 30 Minutes on your AWS Exam - Non Native English Speakers only | — | — | 考试便利安排说明，无对应技术 KP |
| ☐ | 393 / 32.08 | How does the exam work? | — | — | 考试形式说明，无对应技术 KP |

**本章 Quiz／模拟考试**：不占以上课时编号。根据错题回到本章对应 KP，不因做完测验自动标记 KP 已掌握。

<a id="chapter-33"></a>
## 33. Congratulations - AWS Certified Solutions Architect Associate

主线：结束说明。

| 看过 | 编号 | 原课程课时标题 | 直接对应 KP | 补充理解 KP | 对应边界／提示 |
| --- | --- | --- | --- | --- | --- |
| ☐ | 394 / 33.01 | AWS Certification Paths | — | — | 证书路径说明 |
| ☐ | 395 / 33.02 | Congratulations | — | — | 课程结束说明 |
| ☐ | 396 / 33.03 | Bonus Lecture | — | — | 附加说明 |

## 尚无直接对应 KP 的技术课时

以下条目可以先学视频；列出的相关 KP 仅帮助定位或对比，不代表缺口已补齐。

| 编号 | 课时 | 说明 |
| --- | --- | --- |
| 003 | Creating an AWS Account | 账号创建操作；暂无独立 KP |
| 004 | AWS Account Activation Troubleshooting | 账号激活排错；暂无独立 KP |
| 010 | Tour of the AWS Console & Services in AWS | 补充理解；控制台导航无独立 KP |
| 013 | AWS Console Simultaneous Sign-in | 多会话登录操作无独立 KP |
| 023 | AWS CloudShell: Region Availability | CloudShell 具体环境与限制未独立成 KP；另见已有 AWS_cloudshell.md |
| 024 | AWS CloudShell | CloudShell 具体环境与限制未独立成 KP；另见已有 AWS_cloudshell.md |
| 032 | EC2 Basics | EC2 总体执行模型无独立总览 KP；这些 KP 分别补充选型、初始化、存储和责任边界 |
| 037 | SSH Overview | SSH 密钥认证与连接机制暂无独立 KP |
| 038 | How to SSH using Linux or Mac | SSH 操作暂无独立 KP；按自己的操作系统选择 |
| 039 | How to SSH using Windows | SSH 操作暂无独立 KP；按自己的操作系统选择 |
| 040 | How to SSH using Windows 10 | SSH 操作暂无独立 KP；按自己的操作系统选择 |
| 041 | SSH Troubleshooting | 补充网络排错；SSH 专项暂无独立 KP |
| 042 | EC2 Instance Connect | Instance Connect 认证与连接模式暂无独立 KP |
| 100 | List of Ports to be familiar with | 端口清单暂无独立 KP |
| 103 | Route 53 - Registering a domain | 域名注册流程不在 KP 的核心范围 |
| 116 | Routing Policy - IP-based | IP-based routing 暂无独立 KP；相关项用于对比 |
| 117 | Routing Policy - Multi Value | Multi Value 策略暂无独立 KP |
| 151 | About DSSE-KMS | 双层加密专属机制尚未独立展开 |
| 164 | S3 Object Lambda | 暂无直接 KP；Access Points 与 Lambda 不能替代 Object Lambda 专项说明 |
| 173 | AWS Snow Family Hands On | 设备操作暂无直接 KP |
| 212 | Lambda Limits | 执行时限、包体等配额未独立完整展开；以视频与现行文档为准 |
| 218 | RDS - Invoking Lambda & Event Notifications | 具体 RDS 集成暂无独立 KP；勿把事件通知与数据库调用函数视为同一机制 |
| 258 | Comprehend Medical Overview | 医疗专属实体与边界暂无独立 KP |
| 272 | CloudWatch Network Synthetic Monitor | 网络合成监测的具体机制暂无独立 KP |
| 275 | CloudWatch Insights and Operational Visibility | Insights 各功能未独立展开；tracing 为扩展，不等同于 Insights |
| 284 | Organizations - Tag Policies | 标签策略机制暂无独立 KP；费用标签不能替代 Tag Policies |
| 293 | Encryption 101 | 通用对称/非对称加密与信封加密未独立完整展开 |
| 304 | AWS CloudHSM | 暂无独立 CloudHSM KP；KMS 只用于对比，不能替代专用 HSM 内容 |
| 325 | NAT Instances Hands On | NAT Instance 实现暂无独立 KP |
| 344 | IPv6 for VPC - Hands On | IPv6 地址分配操作未独立完整展开 |
| 352 | Elastic Disaster Recovery (DRS) | 暂无 DRS 独立 KP；MGN 只作迁移对比，不能当成 DRS |
| 361 | VMware Cloud on AWS | 暂无独立 KP；不能用 Outposts 或 MGN 代替 |
| 371 | Amazon SES | 暂无独立 KP；邮件发送机制需结合视频/课件 |
| 372 | Amazon Pinpoint | 暂无独立 KP；用户触达与活动分析需结合视频/课件 |

## 额外补充 KP：没有强行绑定视频

这些 KP 在现有文件中存在，但没有从当前目录找到足够直接的课时对应。它们仍保留在原知识范围内，按需要或阶段复习补读。

| KP | 建议阅读时机 |
| --- | --- |
| [110 · 从应用源到托管服务（AWS App Runner）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-apprunner-110.md) | ECS/EKS 后：对比更托管的应用运行方式。 |
| [229 · 跨账户共享受支持资源（AWS Resource Access Manager）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-governance-ram-229.md) | Organizations 与跨账户访问后：补资源共享。 |

## KP 反向索引

同一 KP 可用于多个视频；下表便于查找首次阅读位置和后续复习课时。

| KP | 直接对应课时编号 | 补充理解课时编号 |
| --- | --- | --- |
| [001 · 区域选择与服务作用域（Region）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-foundations-regions-001.md) | 008 | 010, 023 |
| [002 · 可用区与故障隔离（Availability Zone）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-foundations-availabilityzones-002.md) | 008 | 070, 318 |
| [003 · 身份与权限分组（IAM identities）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-identities-003.md) | 011, 012, 029, 030 | 013 |
| [004 · 策略语句如何表达权限（IAM policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-policies-004.md) | 011, 014, 015, 030 | 022, 130, 285 |
| [005 · 多因素认证的保护边界（Multi-Factor Authentication）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-mfa-005.md) | 016, 017, 029 | 030, 156 |
| [006 · 控制台与程序化访问（AWS CLI and SDK）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-accessmethods-006.md) | 018, 019, 020, 021, 022 | 010, 013, 023, 024, 030, 295, 300 |
| [007 · 服务如何取得访问权限（IAM role）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-serviceroles-007.md) | 025, 026, 029, 030, 043, 370 | 210, 211, 286 |
| [008 · 凭证与权限使用审计（Credential report and Access Advisor）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-accessaudit-008.md) | 027, 028 | 029, 030 |
| [009 · 实例首次启动初始化（EC2 user data）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-bootstrap-009.md) | 033, 125 | 032, 061 |
| [010 · 按资源瓶颈选择实例（EC2 instance family）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-instancetypes-010.md) | 034 | 032, 033 |
| [011 · 安全组如何限制访问（Security group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-securitygroups-011.md) | 035, 036, 329, 330 | 033, 037, 038, 039, 040, 041, 042, 074, 100, 105, 315, 323, 324, 325, 364 |
| [012 · 按负载特征选择购买方式（EC2 purchasing options）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-purchasing-012.md) | 044, 046 | 045 |
| [013 · 可中断计算的适用条件（Spot instance）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-spot-013.md) | 045, 046 | — |
| [014 · 专用硬件隔离的选择（Dedicated Host and Dedicated Instance）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-dedicated-014.md) | 044, 046 | — |
| [015 · 实例地址与固定入口（Elastic IP）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-ipaddresses-015.md) | 047, 048, 314 | 037, 038, 039, 040, 041, 042, 105, 321, 366 |
| [016 · 放置策略的性能与隔离取舍（Placement group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-placement-016.md) | 049, 050 | 365 |
| [017 · 网卡与网络身份（Elastic Network Interface）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-eni-017.md) | 051, 052, 053 | 366 |
| [018 · 休眠与停止的区别（EC2 hibernation）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ec2-hibernate-018.md) | 054, 055 | — |
| [019 · 块存储的持久性与可用区边界（Elastic Block Store）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ebs-019.md) | 056, 057, 068, 181 | 032, 033, 062, 069 |
| [020 · 快照如何支持恢复与迁移（EBS snapshot）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-snapshots-020.md) | 058, 059 | 069 |
| [021 · 机器镜像与实例复制（Amazon Machine Image）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ami-021.md) | 060, 061, 125, 298 | 084 |
| [022 · 临时本地存储的边界（Instance store）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-instancestore-022.md) | 062, 181 | 068 |
| [023 · 按 IOPS 与吞吐选择卷（EBS volume type）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ebstypes-023.md) | 063 | — |
| [024 · 共享块设备的并发写入边界（EBS Multi-Attach）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-multiattach-024.md) | 064 | — |
| [025 · 加密卷与快照的继承关系（EBS encryption）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ebsencryption-025.md) | 065, 298 | — |
| [026 · 跨实例共享文件系统（Elastic File System）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-efs-026.md) | 066, 067, 068, 181 | 069, 124 |
| [027 · 共享文件系统的吞吐与分层（EFS throughput and lifecycle）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-efsperformance-027.md) | 066, 067 | — |
| [028 · 扩展能力与高可用（Scalability and high availability）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-scaling-availability-028.md) | 070 | 083, 122, 366 |
| [029 · 健康检查与流量摘除（Load balancer health check）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-healthchecks-029.md) | 071, 073, 076 | 084 |
| [030 · 应用层请求路由（Application Load Balancer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-alb-030.md) | 072, 073, 074 | 071, 105, 122, 167, 201 |
| [031 · 传输层入口与固定地址（Network Load Balancer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-nlb-031.md) | 075, 076 | 071 |
| [032 · 透明插入网络检查设备（Gateway Load Balancer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-gwlb-032.md) | 077 | 071 |
| [033 · 会话粘滞与负载倾斜（Session affinity）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-stickiness-033.md) | 078 | — |
| [034 · 跨可用区分配流量（Cross-zone load balancing）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-crosszone-034.md) | 079 | — |
| [035 · HTTPS 证书与域名选择（TLS termination and SNI）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-tls-035.md) | 080, 081 | 303 |
| [036 · 下线时完成在途请求（Deregistration delay）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-elb-draining-036.md) | 082 | — |
| [037 · 期望容量与实例替换（Auto Scaling Group）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-scaling-asg-037.md) | 083, 084 | 122, 188, 202, 366 |
| [038 · 自动伸缩触发方式（Scaling policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-scaling-policies-038.md) | 085, 086 | 188, 202, 309 |
| [039 · 托管数据库的责任边界（Relational Database Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-manageddb-039.md) | 087, 089, 231 | 123, 218, 355 |
| [040 · 异步副本与读扩展（Read replica）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-readreplicas-040.md) | 088 | 123, 231 |
| [041 · 备用实例与自动故障转移（Multi-AZ DB instance）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-multiaz-041.md) | 088 | 123, 231 |
| [042 · 共享存储与数据库端点（Amazon Aurora）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-aurora-042.md) | 091, 092, 232 | 124, 355 |
| [043 · 按使用量调整数据库计算（Aurora Serverless）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-auroraserverless-043.md) | 093 | 232 |
| [044 · 跨区域数据库读取与恢复（Aurora Global Database）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-auroraglobal-044.md) | 093 | 232 |
| [045 · 时间点恢复与快照（Database backup and restore）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-dbbackup-045.md) | 094 | 089, 125 |
| [046 · 数据库访问的多层控制（Database security）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-dbsecurity-046.md) | 089, 095 | 092, 100 |
| [047 · 连接池如何保护数据库（RDS Proxy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-dbproxy-047.md) | 096 | — |
| [048 · 应用缓存与会话存储（Amazon ElastiCache）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cache-elasticache-048.md) | 097, 098, 099, 233 | 123, 124 |
| [049 · 缓存填充与失效策略（Cache-aside and write-through）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cache-patterns-049.md) | 099 | 233, 363 |
| [050 · 域名解析的查询链路（Domain Name System）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-resolution-050.md) | 101 | 102, 118 |
| [051 · 记录与托管区域（Route 53 record and hosted zone）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-records-051.md) | 102, 104 | 103, 107, 108, 117, 118, 120 |
| [052 · DNS 缓存与变更传播（DNS Time To Live）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-ttl-052.md) | 106 | — |
| [053 · 根域名如何指向 AWS 入口（Route 53 Alias）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-alias-053.md) | 107 | — |
| [054 · 按权重与延迟选择答案（DNS routing policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-routing-054.md) | 109, 110 | 108, 116 |
| [055 · 基于健康状态的主备解析（DNS health check and failover）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-failover-055.md) | 111, 112, 113 | 117 |
| [056 · 按地理信息选择解析目标（Geolocation and geoproximity routing）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-georouting-056.md) | 114, 115 | 116 |
| [057 · 混合网络中的双向解析（Route 53 Resolver endpoint）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dns-hybrid-057.md) | 119 | — |
| [058 · 状态外置与横向扩展（Stateless application）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-stateless-058.md) | — | 078, 122, 123, 228 |
| [059 · 托管应用环境的边界（Elastic Beanstalk）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-beanstalk-059.md) | 126, 127 | — |
| [060 · 对象存储的命名模型（S3 bucket and object key）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-objects-060.md) | 128, 129, 181, 235 | 166, 227, 229, 241 |
| [061 · 桶策略与公开访问保护（S3 bucket policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-bucketpolicy-061.md) | 130, 131 | 133, 166 |
| [062 · 静态网站托管的边界（S3 static website）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-website-062.md) | 132, 133 | — |
| [063 · 版本与删除标记（S3 versioning）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-versioning-063.md) | 134, 135 | 138 |
| [064 · 异步对象复制的条件（S3 replication）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-replication-064.md) | 136, 137, 138, 297 | — |
| [065 · 访问频率与恢复时间的取舍（S3 storage class）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-storageclasses-065.md) | 139, 140 | 142, 174 |
| [066 · 按访问模式自动分层（S3 Intelligent-Tiering）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-intelligenttiering-066.md) | 139, 140 | 142 |
| [067 · 单可用区低延迟对象存储（S3 Express One Zone）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-express-067.md) | 141 | — |
| [068 · 自动转换与过期规则（S3 Lifecycle）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-lifecycle-068.md) | 142, 143 | — |
| [069 · 对象变化如何触发处理（S3 event notification）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-events-069.md) | 145, 146 | 362 |
| [070 · 并行传输如何改善性能（Multipart upload and byte-range fetch）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-transferperformance-070.md) | 147 | — |
| [071 · 对对象集合执行批量任务（S3 Batch Operations）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-batchoperations-071.md) | 148 | — |
| [072 · 用存储指标定位优化机会（S3 Storage Lens）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-storagelens-072.md) | 149 | — |
| [073 · 对象加密的责任边界（S3 server-side and client-side encryption）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-encryption-073.md) | 150, 152, 153, 297 | 151, 293 |
| [074 · 强制加密传输（S3 SecureTransport condition）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-transport-074.md) | — | 293 |
| [075 · 浏览器跨源访问（Cross-Origin Resource Sharing）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-cors-075.md) | 154, 155 | — |
| [076 · 永久删除版本的附加保护（S3 MFA Delete）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-mfadelete-076.md) | 156, 157 | — |
| [077 · 对象请求日志的用途（S3 server access logging）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-accesslogs-077.md) | 158, 159 | — |
| [078 · 有时限的委托对象访问（S3 presigned URL）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-presigned-078.md) | 160, 161 | — |
| [079 · 不可变版本与保留策略（S3 Object Lock）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-objectlock-079.md) | 162 | — |
| [080 · 按使用方拆分访问入口（S3 Access Point）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-accesspoints-080.md) | 163 | 164 |
| [081 · 边缘缓存与回源（Amazon CloudFront）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-cloudfront-081.md) | 165, 166, 167 | 170, 227, 229, 309, 363 |
| [082 · 让源站保持私有（CloudFront VPC origin）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-privateorigin-082.md) | — | 167 |
| [083 · 更新内容与缓存失效（CloudFront invalidation）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-invalidation-083.md) | 169 | 229 |
| [084 · 按国家限制内容访问（CloudFront geo restriction）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-georestriction-084.md) | 168 | — |
| [085 · 全球网络入口与缓存的区别（AWS Global Accelerator）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-edge-accelerator-085.md) | 170, 171 | 309 |
| [086 · 离线迁移的时间预算（Offline data transfer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-offline-086.md) | 172, 360 | 173, 174 |
| [087 · Windows 共享文件服务（FSx for Windows File Server）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-fsxwindows-087.md) | 175, 176, 181 | — |
| [088 · 并行文件系统与 S3 数据（FSx for Lustre）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-lustre-088.md) | 175, 176, 181 | 365 |
| [089 · 保留多协议存储语义（FSx for NetApp ONTAP）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-ontap-089.md) | 175, 176, 181 | — |
| [090 · 托管 ZFS 文件工作负载（FSx for OpenZFS）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-storage-openzfs-090.md) | 175, 176, 181 | — |
| [091 · 本地文件协议连接对象存储（S3 File Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-filegateway-091.md) | 177, 178 | 181 |
| [092 · 本地块设备的缓存与备份（Volume Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-volumegateway-092.md) | 177, 178 | 181 |
| [093 · 保留磁带备份接口（Tape Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-tapegateway-093.md) | 177, 178 | 181 |
| [094 · 托管文件传输端点（AWS Transfer Family）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-transferfamily-094.md) | 179 | — |
| [095 · 文件数据的批量同步（AWS DataSync）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-datasync-095.md) | 180, 360 | — |
| [096 · 队列解耦与重复处理（SQS Standard queue）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-sqs-096.md) | 183, 184, 190, 196 | 146, 182, 203, 228, 362 |
| [097 · 可见性超时与消费确认（SQS visibility timeout）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-visibility-097.md) | 185 | — |
| [098 · 减少空轮询（SQS long polling）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-longpolling-098.md) | 186 | — |
| [099 · 消息组与有序处理（SQS FIFO queue）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-fifo-099.md) | 187 | — |
| [100 · 按积压量扩展消费者（Queue-based scaling）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-backlog-100.md) | 188 | — |
| [101 · 发布订阅与消息扇出（Simple Notification Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-sns-101.md) | 189, 190, 191, 196 | 146, 182, 362 |
| [102 · 可重放的数据流（Kinesis Data Streams）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-kinesis-102.md) | 192, 193, 196 | 182, 249, 251 |
| [103 · 缓冲后投递数据到目的地（Amazon Data Firehose）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-firehose-103.md) | 194, 195 | 251 |
| [104 · 兼容现有消息协议（Amazon MQ）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-mq-104.md) | 197 | — |
| [105 · 容器任务与计算容量（Elastic Container Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-ecs-105.md) | 199, 200, 201 | 203, 204, 228 |
| [106 · 区分任务权限与平台权限（ECS task role）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-taskrole-106.md) | 199, 201 | 203 |
| [107 · 任务扩展与主机扩展（ECS service scaling）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-ecsscaling-107.md) | 202 | 203 |
| [108 · 镜像存储与拉取授权（Elastic Container Registry）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-ecr-108.md) | 205 | — |
| [109 · 托管控制平面与工作节点（Elastic Kubernetes Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-eks-109.md) | 206, 207 | — |
| [110 · 从应用源到托管服务（AWS App Runner）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-apprunner-110.md) | — | 见额外补充 KP |
| [111 · 事件驱动函数的执行模型（AWS Lambda）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-lambda-111.md) | 209, 210, 211 | 164, 212, 218, 223, 226, 227, 228, 362 |
| [112 · 并发容量与限流（Lambda concurrency）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-concurrency-112.md) | 213, 214 | 212 |
| [113 · 初始化延迟与预热方式（Lambda cold start）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-coldstart-113.md) | 215 | — |
| [114 · 在边缘修改请求与响应（CloudFront Functions and Lambda at Edge）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-edgefunctions-114.md) | 216 | — |
| [115 · 函数访问私有数据库（Lambda VPC networking）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-lambdavpc-115.md) | 217 | — |
| [116 · 按访问模式设计主键（DynamoDB primary key）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-datamodel-116.md) | 219, 220, 234 | 226, 227 |
| [117 · 预配置与按需容量（DynamoDB capacity mode）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-capacity-117.md) | 219, 220, 234 | — |
| [118 · 面向数据库 API 的读缓存（DynamoDB Accelerator）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-dax-118.md) | 221 | 234, 363 |
| [119 · 项目变化事件与后续处理（DynamoDB Streams）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-streams-119.md) | 221 | — |
| [120 · 多区域读写复制（DynamoDB global table）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-globaltables-120.md) | 221 | 234 |
| [121 · 过期项目自动清理（DynamoDB Time To Live）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-ttl-121.md) | 221 | — |
| [122 · 表恢复与数据导出（DynamoDB backup）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-recovery-122.md) | 221 | — |
| [123 · 托管 API 入口与集成（Amazon API Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-apigateway-123.md) | 222, 223 | 226, 227, 228 |
| [124 · 公开与私有 API 的入口（API Gateway endpoint type）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-apiendpoints-124.md) | 222 | — |
| [125 · 多步骤工作流的编排（AWS Step Functions）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-serverless-stepfunctions-125.md) | 224 | — |
| [126 · 应用登录与 AWS 凭证的区别（Cognito User Pool and Identity Pool）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-identity-cognito-126.md) | 225 | 226 |
| [127 · 按瓶颈选择缓存位置（Multi-layer caching）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-cachinglayers-127.md) | 363 | — |
| [128 · 按数据模型与查询选择数据库（Database access pattern）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-databases-selection-128.md) | 230 | 235 |
| [129 · 文档数据与接口兼容（Amazon DocumentDB）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-databases-documentdb-129.md) | 236 | — |
| [130 · 图关系查询（Amazon Neptune）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-databases-neptune-130.md) | 237 | — |
| [131 · 托管 Cassandra 兼容访问（Amazon Keyspaces）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-databases-keyspaces-131.md) | 238 | — |
| [132 · 时间序列数据的组织（Amazon Timestream）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-databases-timestream-132.md) | 239 | — |
| [133 · 在对象存储上执行 SQL（Amazon Athena）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-athena-133.md) | 240, 241, 336 | 251 |
| [134 · 分析仓库与事务数据库（Amazon Redshift）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-redshift-134.md) | 242 | — |
| [135 · 搜索索引与主数据存储（Amazon OpenSearch Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-opensearch-135.md) | 243 | — |
| [136 · 托管分布式数据处理（Amazon EMR）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-emr-136.md) | 244 | — |
| [137 · 可视化分析与仪表板共享（Amazon QuickSight）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-quicksight-137.md) | 245 | — |
| [138 · 数据转换与元数据目录（AWS Glue）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-glue-138.md) | 246 | 251 |
| [139 · 集中管理数据湖权限（AWS Lake Formation）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-lakeformation-139.md) | 247 | — |
| [140 · 有状态流处理（Managed Service for Apache Flink）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-flink-140.md) | 248, 249 | — |
| [141 · 托管 Kafka 与协议兼容（Amazon MSK）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-msk-141.md) | 250 | — |
| [142 · 图像与视频识别（Amazon Rekognition）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-rekognition-142.md) | 252, 263 | — |
| [143 · 语音转文字（Amazon Transcribe）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-transcribe-143.md) | 253, 263 | — |
| [144 · 文字转语音（Amazon Polly）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-polly-144.md) | 254, 263 | — |
| [145 · 托管语言翻译（Amazon Translate）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-translate-145.md) | 255, 263 | — |
| [146 · 对话理解与联络中心（Amazon Lex and Amazon Connect）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-lexconnect-146.md) | 256, 263 | — |
| [147 · 从文本提取实体与情绪（Amazon Comprehend）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-comprehend-147.md) | 257, 263 | 258 |
| [148 · 自建模型的生命周期（Amazon SageMaker AI）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-sagemaker-148.md) | 259, 263 | — |
| [149 · 面向文档的语义搜索（Amazon Kendra）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-kendra-149.md) | 260, 263 | — |
| [150 · 个性化推荐（Amazon Personalize）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-personalize-150.md) | 261, 263 | — |
| [151 · 从扫描文档提取结构（Amazon Textract）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-ml-textract-151.md) | 262, 263 | — |
| [152 · 指标的维度与采集边界（CloudWatch metric）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-metrics-152.md) | 265, 269, 281 | 085, 086, 094, 264, 270, 272, 275 |
| [153 · 日志组与订阅处理（CloudWatch Logs）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-logs-153.md) | 266, 267, 268, 269, 281 | 211, 264, 275 |
| [154 · 从指标条件到行动（CloudWatch alarm）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-alarms-154.md) | 270, 271 | 085, 086, 264, 272 |
| [155 · 事件总线与匹配规则（Amazon EventBridge）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-events-eventbridge-155.md) | 273, 274, 278 | 146, 218, 362 |
| [156 · 谁通过 API 做了什么（AWS CloudTrail）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-audit-cloudtrail-156.md) | 276, 277, 278, 281 | 264 |
| [157 · 资源配置历史与合规评估（AWS Config）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-audit-config-157.md) | 279, 280, 281 | 264 |
| [158 · 多账户管理与组织单元（AWS Organizations）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-governance-organizations-158.md) | 282, 283 | 284 |
| [159 · 组织权限上限（Service Control Policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-governance-scp-159.md) | 282, 283 | 287 |
| [160 · 按请求上下文约束授权（IAM condition）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-conditions-160.md) | 285 | — |
| [161 · 跨账户访问的两条路径（Cross-account role and resource policy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-crossaccount-161.md) | 286 | 298 |
| [162 · 委派管理的权限边界（Permissions boundary）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-boundaries-162.md) | 285 | 287 |
| [163 · 员工跨账户单点登录（IAM Identity Center）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-identity-identitycenter-163.md) | 288 | — |
| [164 · 目录托管与本地代理（AWS Directory Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-identity-directory-164.md) | 289, 290 | — |
| [165 · 多账户环境的基线治理（AWS Control Tower）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-governance-controltower-165.md) | 291 | — |
| [166 · 密钥管理与使用授权（AWS Key Management Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-kms-166.md) | 294, 295, 297, 298 | 065, 095, 150, 151, 152, 292, 293, 304 |
| [167 · 跨区域密钥与资源配置（KMS multi-Region key）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-multiregionkeys-167.md) | 296 | — |
| [168 · 分层配置与加密参数（SSM Parameter Store）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-parameterstore-168.md) | 299, 300 | — |
| [169 · 凭证存储与轮换（AWS Secrets Manager）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-secretsmanager-169.md) | 301, 302 | — |
| [170 · 证书生命周期与部署位置（AWS Certificate Manager）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-acm-170.md) | 081, 303 | 080 |
| [171 · 应用层请求过滤（AWS Web Application Firewall）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-waf-171.md) | 305, 308, 309 | 364 |
| [172 · 分布式拒绝服务防护（AWS Shield）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-shield-172.md) | 306, 308, 309 | — |
| [173 · 跨账户集中安全策略（AWS Firewall Manager）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-firewallmanager-173.md) | 307 | — |
| [174 · 行为与日志中的威胁发现（Amazon GuardDuty）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-guardduty-174.md) | 310 | — |
| [175 · 软件漏洞与暴露风险评估（Amazon Inspector）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-inspector-175.md) | 311 | — |
| [176 · 对象数据中的敏感信息发现（Amazon Macie）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-macie-176.md) | 312 | — |
| [177 · 地址范围与前缀长度（Classless Inter-Domain Routing）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-cidr-177.md) | 314, 348 | 317 |
| [178 · 子网边界与地址容量（VPC and subnet）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-subnets-178.md) | 315, 316, 317, 318, 319, 348 | 217, 343, 344 |
| [179 · 公网连通的必要条件（Internet Gateway and route table）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-internet-179.md) | 320, 321, 348 | 041, 315, 324, 325 |
| [180 · 通过跳板访问私有实例（Bastion host）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-bastion-180.md) | 322, 323 | — |
| [181 · 私有子网的 IPv4 出口（NAT gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-nat-181.md) | 326, 327, 328, 348 | 217, 324, 325 |
| [182 · 无状态子网过滤（Network ACL）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-nacl-182.md) | 329, 330, 348 | 364 |
| [183 · 非传递的私有网络连接（VPC peering）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-peering-183.md) | 331, 332 | 341, 348 |
| [184 · 私有访问服务的入口选择（VPC endpoint and PrivateLink）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-endpoints-184.md) | 333, 334, 348 | 217 |
| [185 · 用流量元数据排查连接（VPC Flow Logs）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-flowlogs-185.md) | 335, 336 | — |
| [186 · 本地网络到云的加密隧道（Site-to-Site VPN）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-vpn-186.md) | 337, 338, 340 | 119, 348, 356 |
| [187 · 专线连接与加密边界（AWS Direct Connect）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-directconnect-187.md) | 339, 340 | 119, 348, 356 |
| [188 · 集中式传递路由（Transit Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-transitgateway-188.md) | 341 | 348 |
| [189 · 复制数据包进行检查（VPC Traffic Mirroring）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-mirroring-189.md) | 342 | — |
| [190 · IPv6 的仅出站入口（Egress-only Internet Gateway）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-ipv6egress-190.md) | 345, 346 | 343, 344, 348 |
| [191 · 按流量路径分析成本（Network data transfer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-transfercost-191.md) | 349 | 360 |
| [192 · 托管网络流量检查（AWS Network Firewall）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-network-networkfirewall-192.md) | 350 | — |
| [193 · 恢复点与恢复时间目标（Recovery Point Objective and Recovery Time Objective）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-recovery-rporto-193.md) | 351 | 352 |
| [194 · 按恢复目标选择灾备策略（Disaster recovery strategy）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-recovery-strategies-194.md) | 351 | 352 |
| [195 · 全量迁移与持续复制（Database Migration Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-migration-dms-195.md) | 353, 354, 355 | — |
| [196 · 集中备份计划与不可变保留（AWS Backup）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-recovery-backup-196.md) | 357, 358 | — |
| [197 · 服务器重新托管迁移（Application Migration Service）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-migration-mgn-197.md) | 359 | 352, 356 |
| [198 · 计算与网络协同选型（High Performance Computing）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-hpc-198.md) | 365 | — |
| [199 · 声明式基础设施与依赖（AWS CloudFormation）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iac-cloudformation-199.md) | 368, 369, 370 | — |
| [200 · 通过代理建立管理会话（SSM Session Manager）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-operations-sessionmanager-200.md) | 373 | — |
| [201 · 对受管节点批量执行命令（SSM Run Command）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-operations-runcommand-201.md) | 374 | — |
| [202 · 补丁规则与维护窗口（SSM Patch Manager）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-operations-patching-202.md) | 374 | — |
| [203 · 运行手册编排运维步骤（SSM Automation）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-operations-automation-203.md) | 374 | — |
| [204 · 按使用维度分析开销（AWS Cost Explorer）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cost-explorer-204.md) | 375 | — |
| [205 · 识别异常支出模式（Cost Anomaly Detection）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cost-anomalies-205.md) | 376 | — |
| [206 · 本地部署的云基础设施（AWS Outposts）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-hybrid-outposts-206.md) | 377 | — |
| [207 · 按作业调度计算容量（AWS Batch）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-compute-batch-207.md) | 378 | — |
| [208 · SaaS 与云服务的数据传输（Amazon AppFlow）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-integration-appflow-208.md) | 379 | — |
| [209 · 前端应用与托管后端集成（AWS Amplify）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-frontend-amplify-209.md) | 380 | — |
| [210 · 按非工作时间减少运行成本（Instance Scheduler）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cost-scheduler-210.md) | 381 | — |
| [211 · 用六个支柱审查架构（AWS Well-Architected Framework）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-wellarchitected-211.md) | 383 | 121, 385, 387 |
| [212 · 账户检查与改进建议（AWS Trusted Advisor）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-trustedadvisor-212.md) | 384 | — |
| [213 · 从场景约束筛选架构（Scenario-based architecture reasoning）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-exam-reasoning-213.md) | 388 | 387 |
| [214 · 按服务划分安全责任（Shared responsibility model）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-foundations-sharedresponsibility-214.md) | — | 008, 029, 032, 209, 292 |
| [215 · 临时凭证的签发与续用（STS AssumeRole）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-stssessions-215.md) | — | 018, 025, 043, 286, 288 |
| [216 · 有效权限的合并与约束（IAM policy evaluation）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-iam-evaluation-216.md) | 287 | — |
| [217 · 缓存引擎的能力取舍（Valkey Redis OSS and Memcached）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cache-engines-217.md) | 098 | 097, 099, 233 |
| [218 · 按副本组分配数据库连接（Aurora custom endpoint）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-customendpoints-218.md) | 093 | — |
| [219 · 写时复制创建测试数据库（Aurora cloning）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-cloning-219.md) | 094 | 093 |
| [220 · 优化到 S3 的长距离传输（S3 Transfer Acceleration）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-acceleration-220.md) | 147 | — |
| [221 · 共享数据集的费用归属（S3 Requester Pays）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-s3-requesterpays-221.md) | 144 | — |
| [222 · 预算阈值与费用通知（AWS Budgets）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cost-budgets-222.md) | 031 | 376 |
| [223 · 费用明细与项目归集（Cost and Usage Report and cost allocation tags）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-cost-billingdata-223.md) | — | 284, 375 |
| [224 · 恢复环境的配额准备（Service quota readiness）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-recovery-quotas-224.md) | — | 351 |
| [225 · 跨服务请求链路定位（Distributed tracing and AWS X-Ray）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-observability-tracing-225.md) | — | 275 |
| [226 · 按读取对象选择一致性（DynamoDB read consistency）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-consistency-226.md) | — | 219, 221, 234 |
| [227 · 为替代查询路径设计索引（DynamoDB secondary index）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-dynamodb-indexes-227.md) | — | 221, 234 |
| [228 · 隔离反复失败的消息（SQS dead-letter queue）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-messaging-deadletter-228.md) | — | 185 |
| [229 · 跨账户共享受支持资源（AWS Resource Access Manager）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-governance-ram-229.md) | — | 见额外补充 KP |
| [230 · 数据库托管与操作系统定制（Amazon RDS Custom）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-rds-custom-230.md) | 090 | — |
| [231 · 受控重试与业务幂等（Retry with backoff）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-retry-231.md) | — | 183, 185, 187, 224, 362 |
| [232 · 分层网络与共享状态（Multi-tier architecture）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-architecture-multitier-232.md) | — | 121, 123, 124, 385 |
| [233 · 从事件摄取到查询结果的数据链路（Data ingestion pipeline）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-analytics-ingestionpipeline-233.md) | 251 | 385 |
| [234 · 密钥材料轮换与旧数据解密（KMS key rotation）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-security-keyrotation-234.md) | — | 294 |
| [235 · 镜像到容器的运行关系（Container image and container）](https://github.com/luyi985/aws/blob/main/SAA/preRaw/KP/saa-containers-fundamentals-235.md) | 198 | 207 |

## 核验记录

- 33 个章节的课时数逐章匹配目录，总计 396 个编号条目。
- 29 个 Quiz／模拟考试单独注明，不混入 396 个课时编号。
- 引用的 KP 均已检查存在；未修改任何 KP 或学习状态。
- 233 个 KP 至少有一个直接或补充映射，另 2 个列在额外补充区；合计 235 个。
