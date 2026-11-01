# AWS 实验 KP 来源与范围审核

审核日期：2026-11-01，Australia/Sydney。
学习根目录：`AIP/`。本次重点源码：`AIP/preRaw/AIP-Materials/AgentsLab/`。

## 结论与用户范围

用户明确选择：保留全部 AWS 实验 KP，移除书籍、图片等样本内容 KP。
本报告取代上一版将样本文本拆成学习主题的规划。文件可读并不代表其主题就是课程学习目标；必须区分实现机制与供实现处理的材料。

- 保留 `aip-labs-*` 的工程机制目标，包括 AgentsLab 的构建、工具、运行时入口、容器、路由和适配，以及其他 AWS 实验。
- 从活跃 KP 目录撤回 `aip-business-*`（原编号 096–151）和 `aip-materials-*`（原编号 152–155）。这些编号保留历史含义，不再复用。
- `book.txt`、章程、三张图片、演示明文与页面业务内容作为输入或辅助材料；不以它们的商业、章程、物种、文字或秘密内容作为学习主题。
- 随部署包提供的 LICENSE 是分发辅助文件；不因文件存在就新增 Apache 法律条款课程。
- 自定义计数函数、固定算式、示例城市、固定天气和角色口吻只能用来说明工具契约、调用路径或协议映射，不能成为独立考核目标。
- S3 → Lambda → Rekognition → DynamoDB 的事件链仍是学习目标；对三张样图的具体内容进行学习则已撤回。KMS 的加密字节与编码转换也保留，演示明文内容不进入学习笔记。

## 验证与原始内容保护

全部 42 个本地文件均存在且可读。AgentsLab 六个文件的正文已重新检查；其他 KP 的来源路径已逐项核对。文本按其实际编码读取（book.txt 为 Windows-1252），DOCX 和 ZIP 通过完整性检查，JPEG 通过图像格式检查。本次只验证来源可访问和静态代码支持，不执行任何实验或部署。

原始材料、原有已完成 KP 001–074、raw 和 wiki 均未改写。活跃 KP 的状态与进度由 `preRaw/KP/*.md` 的 frontmatter 推导；本报告不维护另一套状态表。原 Mode 1 路线未重排。

撤回定义及本次改写前的六个 AgentsLab KP、旧审核报告和旧进度摘要，保存在 [复核归档](archives/material-sample-kps-2026-11-01.zip)。归档含 manifest.json，记录撤回 ID、原因与 SHA-256。它用于追溯和恢复，不是活跃学习计划。

## AgentsLab 审核依据

- `strandsagent.py:26–38,41–59`：代理配置与调用是机制，角色设定、固定算式和任务文本是演示数据。KP 075 保留调用路径。
- `strandsagent.py:5–38`：@tool、签名、docstring 与 tools 注册支持工具契约；子串计数不再作为 KP 076 的独立学习目标。计数实现只在例子中用于检查契约一致性。
- `agentcore.py:27–48`：payload → 代理调用 → response 是接口机制；创建位置与未使用的 context 是状态边界。KP 077 不要求学习输入任务的内容。
- `Dockerfile:1–40`、`.dockerignore:1–68`、`requirements.txt:1–3`：支持构建内容与启动方式。KP 078 不要求背诵固定版本、区域或镜像取值。
- `squad_demo.py:54–96,114–137`：描述、分类器、候选注册与 agent_name 支持职责路由。KP 079 不以角色名称或示例答案为目标。
- `squad_demo.py:3–51,99–111`：输入转交和返回消息转换支持跨框架适配。KP 080 区分格式兼容与身份、会话、历史参数的实际转交。

保留代码局限为相应 KP 的边界证据：Agent Squad 依赖未在 requirements 中声明；适配器同步调用共享代理且没有转交会话参数；容器 telemetry 约束使用未加引号的 shell 写法。没有另造“记住示例 bug”的 KP，也没有声称已运行通过。

其他实验同样以可迁移机制审查：天气返回结构、提示链上下文、Lambda 响应序列化、EC2 初始化与元数据、CloudFormation 引用、CDK 综合、事件数据链、构建门禁、部署钩子、定时工作请求、流/队列消费、加密编码边界和追踪采集。样本业务内容仅用于解释这些机制。

## 保留目标逐项审核

| KP | 保留主题 | 学习目标 |
|---|---|---|
| [aip-labs-strandsinvocation-075](../KP/aip-labs-strandsinvocation-075.md) | Strands 代理的构建与单次调用 | 能够说明 Agent 如何组合工具和系统提示，并追踪一次请求从输入到结果的执行边界。 |
| [aip-labs-toolcontract-076](../KP/aip-labs-toolcontract-076.md) | 自定义 Strands 工具的声明与执行契约 | 能够说明 @tool 函数的参数、用途描述、返回值与 Agent.tools 注册如何形成可调用工具契约，并检查声明与实现是否一致。 |
| [aip-labs-runtimeentrypoint-077](../KP/aip-labs-runtimeentrypoint-077.md) | AgentCore 请求入口与响应封装 | 能够说明运行时入口如何把请求字段映射为代理输入，再把结果封装为响应，并识别实例与请求状态的边界。 |
| [aip-labs-agentcontainer-078](../KP/aip-labs-agentcontainer-078.md) | 代理容器的构建内容与启动命令 | 能够解释源文件、依赖声明、构建排除规则和启动命令怎样共同确定代理容器的运行环境。 |
| [aip-labs-agentrouting-079](../KP/aip-labs-agentrouting-079.md) | Agent Squad 按职责路由请求 | 能够说明候选代理描述、分类器、注册和 route_request 怎样形成请求分派，并通过元数据核对实际选择。 |
| [aip-labs-agentadapter-080](../KP/aip-labs-agentadapter-080.md) | 将 Strands 调用适配为 Agent Squad 接口 | 能够解释适配层如何转换请求和返回消息，并检查身份、会话与历史参数是否实际跨越框架边界。 |
| [aip-labs-actionresponse-081](../KP/aip-labs-actionresponse-081.md) | Bedrock 函数型 Action Group 的 Lambda 消息契约 | 能够根据 weather.py 对应输入事件字段与函数响应结构，并区分演示天气文本和真实外部工具结果。 |
| [aip-labs-promptchain-082](../KP/aip-labs-promptchain-082.md) | 提示链中后续步骤的上下文依赖 | 能够从三条提示词识别后续步骤依赖的城市信息，并说明提示列表与实际执行器之间的边界。 |
| [aip-labs-lambdaresponse-083](../KP/aip-labs-lambdaresponse-083.md) | API Gateway Lambda 代理响应的序列化边界 | 能够区分 HTTP 响应封装与 body 内的 JSON 数据，并推导示例 body 的实际类型。 |
| [aip-labs-ec2bootstrap-084](../KP/aip-labs-ec2bootstrap-084.md) | EC2 User Data 的服务初始化路径 | 能够按脚本顺序解释实例初始化怎样安装、启动并配置一个演示 Web 服务。 |
| [aip-labs-instancemetadata-085](../KP/aip-labs-instancemetadata-085.md) | 从实例内查询 EC2 元数据 | 能够识别示例请求查询的实例属性，并说明实例内元数据访问与从本地电脑调用 AWS API 的区别。 |
| [aip-labs-stackreferences-086](../KP/aip-labs-stackreferences-086.md) | CloudFormation 通过资源引用连接部署对象 | 能够从 EC2 模板追踪参数、资源引用和输出，解释实例、安全组及弹性 IP 的连接关系。 |
| [aip-labs-cdksynthesis-087](../KP/aip-labs-cdksynthesis-087.md) | CDK 从构造代码到 CloudFormation 模板 | 能够把 CDK 示例中的构造对象与生成模板、部署和清理步骤对应起来，并识别两套版本文件的区别。 |
| [aip-labs-imagepipeline-088](../KP/aip-labs-imagepipeline-088.md) | S3 图片事件到标签持久化的数据路径 | 能够追踪图片上传事件怎样连接 Lambda、Rekognition 与 DynamoDB，并指出本例批量事件处理的边界。 |
| [aip-labs-buildgate-089](../KP/aip-labs-buildgate-089.md) | CodeBuild 用命令退出结果形成构建门禁 | 能够追踪 buildspec 的执行阶段，并说明示例检查命令成功或失败对构建判断的意义。 |
| [aip-labs-deployhooks-090](../KP/aip-labs-deployhooks-090.md) | CodeDeploy 部署包与生命周期钩子的对应关系 | 能够根据 appspec 追踪页面文件复制和生命周期脚本，并区分钩子名称与脚本实际行为。 |
| [aip-labs-scheduledworker-091](../KP/aip-labs-scheduledworker-091.md) | 定时任务通过 HTTP POST 进入工作进程 | 能够连接 cron.yaml 的任务路径与 Node.js 的请求处理分支，并指出示例分支判断的实现问题。 |
| [aip-labs-sharditerator-092](../KP/aip-labs-sharditerator-092.md) | Kinesis 从写入记录到分片迭代读取 | 能够解释示例中的 partition key、shard ID 与 shard iterator 分别在哪个步骤使用。 |
| [aip-labs-queuereceipt-093](../KP/aip-labs-queuereceipt-093.md) | SQS 接收与删除之间的收据句柄 | 能够说明接收消息后的可见性窗口与删除动作，并识别删除请求为什么需要本次接收的 receipt handle。 |
| [aip-labs-kmsblob-094](../KP/aip-labs-kmsblob-094.md) | KMS CLI 的加密结果与 Base64 编码层 | 能够追踪明文、加密 blob、Base64 文本和解密结果之间的转换，避免把编码当作加密。 |
| [aip-labs-xraysidecar-095](../KP/aip-labs-xraysidecar-095.md) | ECS 任务中的 X-Ray 采集容器 | 能够从任务定义识别应用容器、X-Ray daemon、UDP 端口和任务权限，并区分采集基础设施与应用埋点证据。 |
