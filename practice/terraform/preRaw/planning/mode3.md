# Terraform on AWS — Mode 3 实操学习体系

## Scope

- Learning root / persistence root：`luyi985/aws/practice/terraform`。
- Primary mode：Mode 3（用户于 2026-10-31 明确指定）。
- Depth / final validation：guided-practice；默认逐步带练，不把跟练成功当作独立掌握。
- Last update：2026-10-31（Australia/Sydney）。
- Session ID：SESSION-AWS-TERRAFORM-001。
- Project Path ID：PATH-AWS-TERRAFORM-001。
- Session state、Project Path、轻量 learning manifest、资料索引均集中在本文件；这是唯一活动计划，恢复时先读它。
- 用户授权：在 aws repo 中建立 Terraform 学习体系并搜集可靠资料；本次是准备阶段，不执行云端部署。
- Source scope：HashiCorp Terraform 官方教程与语言/CLI 文档为主；AWS 官方文档、AWS Provider 官方源代码文档、GitHub 官方 OIDC 文档为补充。用户已委托搜集资料，所选范围与用途见下表。
- Existing Knowledge Map / Session：检查 main 的完整递归文件树（未截断），没有发现 Terraform 专属 Map、Session 或计划。已有 AIP 和 practice/mcp 资产保持原位，不将它们重建到这里。
- Knowledge map ID/location：当前未建立 Terraform Map；本计划不生成 KP 定义或分配 KP ID。若出现知识阻塞，先定位可复用记录，再按相应 KP 工作流处理；不得把 checkpoint 编号当作 KP 身份。
- Active KP set：[]；下文“即时概念”是操作提示，不是新 KP 记录或掌握声明。
- Candidate root：`practice/terraform/preRaw/`；未来已准入笔记位置：`practice/terraform/raw/`；未来 wiki：`practice/terraform/wiki/`。本次仅创建 planning 文件，不创建空 raw/wiki 或批量 KP。
- Governance：已读取 Learning System manifest、Global Contract、Entry、Shared Core、Mode 3、Persistence；执行同时采用 learning-mode3 skill。候选知识保留在 preRaw，raw 准入另由用户决定。

## Operational Goal

用 Terraform 在个人 AWS 练习环境完成：
私有 S3 资源的创建、修改、验证与销毁 → 远程 state 和锁 → 漂移处理与导入 → 模块和环境隔离 → 可重复部署一个 TypeScript/Node.js Lambda 服务 → 可选 HTTP 入口与 CI。

核心完成条件：用户在指导下完成 C0–C8 与 C11；能对照 plan 解释资源变化，取得真实验证证据，保留可重建配置，明确所有资源的清理/保留状态。C9、C10 是扩展，不阻挡核心完成。

不要求先读完整平台文档。每次只推进一个可独立验证的能力；有明确需要时才抽象 module、引入 CI。

### Scope boundaries

- Include：HCL、provider/resource/data、输入输出与引用、依赖、state、plan 审查、版本约束/lockfile、S3 backend、import/drift、module/moved、独立环境、Lambda/IAM/日志、清理。
- Deferred：EC2 部署、VPC 深入、ECS/EKS、RDS、NAT Gateway、ALB、多云、Terragrunt、HCP Terraform、证书刷题、平台工程体系。
- 不把现有 MCP 服务作为第一步必须迁移的对象。C8 后可另立增量，将已验证服务的基础设施纳入 Terraform；先明确现有资源和 state 的归属。
- 不加入 LLM 调用、向量数据库或 agent loop；先验证基础设施交付能力。

## End-to-End Flow

本地身份与工具 → HCL 配置 → init / fmt / validate → plan 审查 → apply → AWS API/业务行为验证 → 无变更 plan → Git checkpoint → 下一项能力 → destroy 或明确保留。

### Minimal Safe Working Case

V0：在已确认账号和区域创建一个私有练习 S3 bucket，开启明确的公开访问阻断，上传/读取一份合成文本，修改标签，再清空并删除。

- 第一轮使用本地 state，以便看到配置、state、真实资源三者关系。
- 不开放静态网站、不启用 Object Lock、不使用真实数据。
- 本地 state 仍需保护；不提交到 public repo。
- 远程 backend 在完成本地闭环后引入，单独管理 bootstrap bucket。
- 不假设 free tier 可用；有少量存储/API 请求费用，具体区域价格在操作前核对。

## Checkpoints

所有操作状态初始为 `not_started`，资料准备完成不计为实操完成。未来实现目录建议为 `practice/terraform/infra/`，当前尚未创建。

### C0 — 确认运行环境与资源边界（V0-preflight）

- Input：用户实际操作电脑、AWS profile、练习账号。
- Action：查看 Terraform / AWS CLI / Git 版本；用 profile 验证身份、区域；确定练习命名和权限；先准备 Git 忽略规则，再写基础设施代码。
- Output / role：一个可安全执行的 Terraform 工作目录，后续操作不会误指向其他账号。
- 即时概念：provider 与 AWS CLI 的认证来源；region；CLI 版本和 provider 版本分开管理。
- Verification：本机 `terraform version`、`aws --version`、`aws sts get-caller-identity --profile <profile>` 成功；账号信息只在本地核验或脱敏记录，禁止保存 token/密钥。
- Resources / cost：不创建资源。
- Rollback / cleanup：无云端回退；不要因身份检查失败就删除用户已有 profile。
- Sources：S01、S03、S05。
- Status：not_started。

### C1 — 创建并验证一个私有 S3 bucket（V0）

- Input：C0 通过，账号/区域/权限明确。
- Action：选择并约束已核验的 Terraform 和 AWS provider 版本；定义 bucket、公开访问阻断、标签与输出；`init → fmt → validate → plan → apply`。
- Output / role：首个真实 AWS 资源，建立最小部署链路。
- 即时概念：resource、provider、HCL block、属性引用、隐式依赖、state 中资源地址。
- Verification：plan 只包含本练习资源；AWS CLI 读取 bucket 区域与公开访问阻断配置；再次 plan 无变更；`terraform state list` 可定位相关地址。
- Resources / cost：S3 bucket 和对应配置；尚无业务数据。
- Rollback / cleanup：审查销毁计划后删除空 bucket；保留代码和 lockfile，排除 state。
- Sources：S02、S04、S05、S06、S15。
- Status：not_started。

### C2 — 写入合成对象并验证访问（V0.1）

- Input：可用的私有 bucket。
- Action：用 Terraform 增加一个小型文本对象，输出 bucket/object 标识；用已认证 AWS CLI 读取校验内容。
- Output / role：验证资源真正可用，连接“声明资源”和“使用资源”。
- 即时概念：资源之间的引用、对象 key、输入/输出、对象内容更新。
- Verification：读回内容与配置一致；bucket 保持私有；plan 无变更。
- Resources / cost：少量对象存储和请求；不开放匿名访问。
- Rollback / cleanup：删除练习对象资源的配置，审查 plan 后 apply；不要误删其他对象。
- Sources：S04 的 AWS provider 文档入口、S05、S15；实施前再读取所选 provider 版本的 object resource 文档。
- Status：not_started。

### C3 — 审查更新、替换与销毁（V0.2）

- Input：C2 的稳定部署和合成对象。
- Action：先修改标签并观察原地更新；再提出 bucket 名称变化，仅审查替换计划、不立即执行；最后恢复名字，审查销毁计划，清理本轮练习资源。
- Output / role：完成 create/change/destroy 闭环，并识别危险变更。
- 即时概念：update vs replace；资源地址与云端 ID；非空 bucket；destroy 只作用于当前 state 管理范围。
- Verification：标签读回正确；能指出替换计划中的删除/创建；清理后 state 中无受管资源，AWS 检查也确认目标资源已删除（403 等权限错误不能当作已删除）。
- Resources / cost：清理后本轮资源归零；不把修改名称当作迁移数据的方法。
- Rollback / cleanup：先按依赖清理已管理对象；不要默认启用 `force_destroy`。Git 回退代码后仍须 plan 审查，不能保证已删除数据可恢复。
- Sources：S04、S05。
- Status：not_started。

### C4 — 重建基线并建立远程 backend（V1-bootstrap）

- Input：C3 完成，最小配置可重建。
- Action：复用已验证配置重建工作资源；用独立 bootstrap 配置创建 state bucket，启用 versioning、加密和公开访问阻断，设置必要权限。
- Output / role：供后续迁移使用的独立 state 存储。
- 即时概念：业务资源和 backend 基础设施的生命周期不同；backend bucket 必须先存在。
- Verification：bucket 版本控制、加密和访问策略可读回；bootstrap state 与业务 state 分离、各自可定位。
- Resources / cost：工作 bucket + state bucket；版本化 state 有存储成本。
- Rollback / cleanup：此时可回到本地 state；bootstrap state 先受保护地本地保存，不用它创建的 bucket 承载其自身 state。本地备份禁止进 Git。
- Sources：S07、S08。
- Status：not_started。

### C5 — 迁移 state 并验证锁（V1）

- Input：C4 的 backend bucket 和安全本地 state 备份。
- Action：配置 S3 backend、独立 key、`encrypt = true` 与 `use_lockfile = true`；按官方流程执行 `terraform init -migrate-state`；锁操作选支持 S3 原生锁的 Terraform（该能力从 1.10 起提供），C0 固定实际版本。
- Output / role：多人/多次运行可以共享受保护 state。
- 即时概念：backend 认证与 provider 认证各自生效；state lock 与 `.terraform.lock.hcl` 是两回事。
- Verification：迁移前后地址/资源 ID 一致，plan 无变更；在隔离练习中，一个操作持锁时第二个操作等待或明确失败；用正常结束/取消释放锁。
- Resources / cost：state 对象、版本、临时 .tflock 对象；保护它们的访问权限。
- Rollback / cleanup：先验证当前权威 state，再按迁移流程迁回；不得直接删除锁或 blind force-unlock。backend 仍被使用时不能销毁。
- Sources：S06、S07、S08。
- Status：not_started。

### C6 — 检测并处理手动修改（V1.1）

- Input：远程 state 已验证的练习 bucket。
- Action：仅在练习资源上通过 CLI 改标签；先观察普通 plan，再对比 refresh-only 计划；选择以代码恢复实际标签，或修改代码接受实际值。
- Output / role：理解控制台操作为什么会影响 IaC，形成排查流程。
- 即时概念：配置、state、真实资源；refresh-only 不会自动让 HCL 匹配真实配置。
- Verification：保留脱敏差异摘要、选择理由；最终 AWS 标签与目标代码一致，普通 plan 无变更。
- Resources / cost：无新增服务。
- Rollback / cleanup：重新 apply 原有配置并读回；不直接编辑 state JSON。
- Sources：S09、S05。
- Status：not_started。

### C7 — 导入并重构一个练习资源（V1.2）

- Input：已有稳定基线；新建一个独立、空的练习 bucket 供导入。
- Action：为这个未受管 bucket 编写目标配置和 `import` block；plan 审查后导入；随后将已验证 bucket 配置抽为本地 module，使用 `moved` block 显式迁移地址。
- Output / role：先接管已有资源，再以独立子检查验证重构不导致重建；两步分别留 checkpoint。
- 即时概念：import 绑定身份；module 是复用边界；更改资源地址需要保留映射。
- Verification：导入完成后 plan 无意外修改；module 重构后云端 ID 不变，plan 不出现意外 create/destroy。
- Resources / cost：新增一个空练习 bucket；禁止导入现有生产资源，禁止同一资源受两个 state 管理。
- Rollback / cleanup：保留导入/地址迁移记录；不能仅回退 module 文件而忽略 state 地址。清理新增练习 bucket。
- Sources：S10、S11、S12。
- Status：not_started。

### C8 — 部署可调用的 Node.js Lambda（V2；核心终点）

- Input：可复用的 module/远程 state 经验，简短 TypeScript/Node.js handler。
- Action：在独立 dev root 引用 module；构建并打包 handler；定义 Lambda、最小执行角色、有限保留期日志；将代码包 hash 纳入部署；直接通过 AWS CLI 认证调用。
- Output / role：基础设施交付一个真实应用能力；先完成函数调用再考虑 HTTP 入口。
- 即时概念：resource 引用与依赖；运行角色和部署身份；代码构建与资源 provisioning 的边界。
- Verification：invoke 得到预期合成 JSON，日志可查；修改响应后重部署并读回；最终 plan 无变更。另建 sandbox root 使用独立 state key，验证 dev 的资源不受其 plan 影响，再清理 sandbox。
- Resources / cost：Lambda、IAM、日志、可能的部署资产；API 调用/计算/日志/存储按使用收费。无需 VPC/NAT。
- Rollback / cleanup：保存可重建代码版本和包构建方法；旧代码重部署前审查 plan；不把未验证的运行时版本写成既成事实。
- Sources：S13、S14、S03；Node.js runtime 以实施当日 AWS 列表为准，教程中的 nodejs20.x 不能直接照搬。
- Status：not_started。

### C9 — 扩展：通过 HTTP 调用应用（V2.1）

- Input：C8 的可用 Lambda。
- Action：增加 API Gateway HTTP API 集成及受控认证入口；优先 IAM 认证和 SigV4 测试，不直接开放匿名写操作。
- Output / role：客户端 → API Gateway → Lambda → JSON。
- Verification：已认证请求成功；未认证请求被拒绝；检查日志和错误定位；限制请求/并发以约束实验规模。
- Resources / cost：API Gateway 请求、Lambda 和日志；先核对当前区域价格。
- Rollback / cleanup：可独立删除 HTTP 层回到直接 invoke；应用和 state 保持可定位。
- Sources：S13（只参考部署结构）、实施时补充 AWS 官方认证/HTTP API 文档。
- Status：not_started；optional。

### C10 — 扩展：把审查放入 CI（V3）

- Input：C8 或 C9 的稳定项目。
- Action：先做无需云凭证的 fmt/check、init -backend=false、validate；再单独增加 OIDC 认证的受信分支 plan。
- Output / role：变更提交前有可重复的静态检查和部署审查。
- Verification：刻意语法错误导致检查失败；修复后通过；OIDC trust 限制本仓库/分支或 environment；不向不可信 PR 提供云权限。
- Resources / cost：GitHub Actions 用量与可选 AWS 只读调用。
- Rollback / cleanup：删除 workflow 的部署权限和专用 role 不影响手动部署；plan/state 不作为公共日志或公开 artifact。
- Sources：S16、S03、S06。
- Status：not_started；optional。默认不做自动 apply。

### C11 — 清理、重建证据与总结（核心收尾）

- Input：当前已执行阶段和完整资源清单。
- Action：先销毁应用/练习资源并验证，再处理 backend。若保留 backend，明确存储成本、权限和下次位置；若删除，先完成安全迁移/备份与消费者检查，再删除 state 版本/删除标记及 bootstrap 资源。
- Output / role：已知资源状态、可重建配置、可继续的位置。
- Verification：CLI 按资源类型检查实际删除；不同 root/state 分别检查，不用“一个 destroy 成功”代替全局清理；列出刻意保留项。
- Rollback / cleanup：配置可重建不代表数据能恢复；远程 state 版本恢复需核对真实资源，不将恢复旧 state 当作回滚基础设施。
- Sources：S04、S07、S08、各资源官方删除说明。
- Status：not_started。

## Reliable Learning Materials / Source Register

核对日期：2026-10-31。只保存链接、用途、版本提醒和自主计划，不复制整篇教程。官网可访问不等于示例代码已现场运行。主线教程选 Terraform Community Edition / CLI 路线，不要求注册 HCP。

| ID | 可靠资料 / 链接 | 来源角色与使用时机 | 本次访问状态 / 注意点 |
|---|---|---|---|
| S01 | [Install Terraform](https://developer.hashicorp.com/terraform/install) | HashiCorp 官方；C0 按实际 macOS/Linux 安装 | 已访问；实际 OS 和安装版本待核验 |
| S02 | [Get Started – AWS](https://developer.hashicorp.com/terraform/tutorials/aws-get-started) | Primary；理解 create/change/destroy 的主线 | 已访问；官方起步案例用 EC2，本计划先改为私有 S3 以减少依赖 |
| S03 | [AWS Provider best practices](https://docs.aws.amazon.com/prescriptive-guidance/latest/terraform-aws-provider-best-practices/introduction.html) | AWS 官方补充；C0 和后续各阶段按需查阅 | 已检索正文摘要；不是要求开课前通读 |
| S04 | [aws_s3_bucket 官方源文档](https://github.com/hashicorp/terraform-provider-aws/blob/main/website/docs/r/s3_bucket.html.markdown) / [Registry 入口](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) | AWS Provider 官方；C1–C3 参数、替换、删除行为 | Registry 页面仅返回 JS 壳；已通过 GitHub 读取官方源文档。main/latest 可变，编码时改查已选版本 |
| S05 | [terraform plan](https://developer.hashicorp.com/terraform/cli/commands/plan) | HashiCorp CLI reference；各阶段审查变更 | 已访问；计划中的输出不作为真实部署证据 |
| S06 | [Dependency lock file](https://developer.hashicorp.com/terraform/language/files/dependency-lock) | HashiCorp；C1/C5 版本复现 | 已访问并定位版本控制说明；lockfile 应审查提交，它不是 state 锁 |
| S07 | [S3 backend](https://developer.hashicorp.com/terraform/language/backend/s3) | Primary；C4/C5 state、锁和 IAM 权限 | 已检索正文；use_lockfile 原生锁；DynamoDB locking 已弃用 |
| S08 | [Backend best practices](https://docs.aws.amazon.com/prescriptive-guidance/latest/terraform-aws-provider-best-practices/backend.html) | AWS 官方交叉核验；C4/C5/C11 | 已检索正文；S3 native locking 从 Terraform 1.10 起提供 |
| S09 | [Manage resource drift](https://developer.hashicorp.com/terraform/tutorials/state/resource-drift) | Primary；C6 按需读 drift/refresh-only 部分 | 已访问；教程 EC2/安全组实验不直接执行，改用练习 bucket 标签 |
| S10 | [Import resources overview](https://developer.hashicorp.com/terraform/language/import) | Primary；C7 import block 和目标配置 | 已访问；具体 ID/导入格式按所选 provider 版本核验 |
| S11 | [Build and use a local module](https://developer.hashicorp.com/terraform/tutorials/modules/module-create) | Primary；C7 模块输入/输出与调用 | 已访问；示例有网站/VPC/EC2 内容，只采用 module 机制，不照搬公开 bucket |
| S12 | [Refactor modules](https://developer.hashicorp.com/terraform/language/modules/develop/refactoring) | HashiCorp reference；C7 moved 地址重构 | 已访问；只在已出现复用/重构需求后引入 |
| S13 | [Deploy Lambda and API Gateway](https://developer.hashicorp.com/terraform/tutorials/aws/lambda-api-gateway) | Primary 项目参考；C8/C9 | 已访问；示例 Node.js 20 需要重新核对，不直接照搬公开入口 |
| S14 | [Lambda runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html) | AWS 官方；C8 运行时选择 | 已访问；选当日稳定受支持运行时，避免 preview |
| S15 | [Manage sensitive data](https://developer.hashicorp.com/terraform/language/manage-sensitive-data) | HashiCorp；C0 起贯穿 state/plan 管理 | 已访问；sensitive 标记不等于从 state 中消除值 |
| S16 | [GitHub OIDC in AWS](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-aws) | GitHub 官方；C10 CI 短期身份 | 已访问；限制 trust condition，不保存长期 AWS key |
| S17 | [AWS CLI IAM Identity Center](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html) | AWS 官方；已有 SSO 时的 C0 补充 | 已访问；若现有 profile 已能工作，不强制重新建立身份体系 |

### Reading sequence

1. 开始时只用 S01、S02、S04、S05、S15；S17 仅在身份设置需要时读。
2. 完成本地闭环后读 S06–S08。
3. 遇到漂移、导入、重复配置时再读 S09–S12。
4. 做应用部署时读 S13、S14；CI 扩展才读 S16。
5. S03 随操作查阅。暂不增加长视频课程或付费认证路线。
6. 出现版本差异时：固定本机 CLI/provider → 查该版本文档 → plan 验证；不能把滚动 latest 文档视为已安装版本保证。

## Current Position / Session State

- system_version：2.0。
- primary_mode：mode_3；expected_output：working_result。
- starting_state：用户具备 AWS/Node.js/K8s 背景（来自对话），Terraform 操作能力尚无证据。
- validated_kps：[]；practical_evidence：[]。
- current_version：V0-preflight。
- current_position：C0，尚未执行。
- status：paused（计划已准备，等待用户开始跟练）。
- next_action：恢复时先读取本文件；让用户在实际操作电脑检查 Terraform/AWS CLI 版本与 profile 身份，确认区域；通过后才创建基础设施代码。
- 建议区域：ap-southeast-2，仅为 Sydney 练习默认建议，尚未验证可用性和费用；实际以 C0 选择为准。
- mode_stack：[mode_3]；return_point：C0。
- latest_validation_evidence：仅仓库/来源访问核验；没有本地或云端实操结果。
- Starting capability：只检查环境，不要求用户先学习全部 HCL。
- Completion condition：guided 完成核心 C0–C8 和 C11，逐项真实验证；扩展 C9/C10 可独立选择。

## Evidence

- 已访问 luyi985/aws 仓库元数据与 main 完整递归文件树，已有 practice/mcp 结构。
- 初始 main：22f6391d6c8b82511e2e23d45d1b3172ae22d1ff；该版本没有 Terraform 专属路径，也没有 AGENTS.md。
- 已读取现有 MCP Mode 3 计划以沿用布局，不将其暂停状态当作当前 Terraform 进度。
- 资料核验方法：官网检索/页面读取；S3 Registry JS 限制用官方 GitHub 源文档补足。
- 尚未安装 Terraform、运行 fmt/validate/plan/apply，或创建 AWS 资源。无运行结果可供声称已通过。
- 学习路径与练习替换是 AI 的设计建议；资料作者没有原样提供本计划。

## Environment, Cost and Resource State

- 当前资源清单：[]（本准备任务未创建资源；不代表用户账号没有其他资源）。
- current_cost_type：none_for_this_planning_task；未来实验按用量，价格尚未核验。
- 实操前核对当前区域 S3、Lambda、API Gateway、CloudWatch 和 CI 用量价格，不承诺免费。
- 不引入 EKS、NAT、ALB 等持续费用组件作为先修要求。
- 公共仓库禁止提交 state、state backup、saved plan、真实 tfvars、凭证或包含敏感值的输出。sensitive 主要控制显示，仍可能写入 state/plan。
- 实现开始前按目录配置忽略：.terraform/、*.tfstate、*.tfstate.*、*.tfplan、tfplan、crash.log、真实 *.tfvars 和 *.tfvars.json；可提交脱敏 *.example 模板；不要忽略 .terraform.lock.hcl。
- 所有资源带练习标识；只处理本练习资源；部署身份和应用角色分别最小化。
- backend bucket 独立 bootstrap，不与业务资源混在一次 destroy；记录状态备份位置但不在公开仓库暴露内容。
- 每轮结束记录：实际资源、当前 state 所在地、是否保留、费用类型、删除步骤。不能仅凭 Terraform 输出推断没有遗留资源。

## Checkpoint and Rollback

- known_good_checkpoint：仅已保存的本计划；尚无成功运行的 Terraform 配置。
- 每个成功增量记录配置 commit、脱敏验证摘要、资源标识的安全引用、state 位置和下一步。
- Git 版本控制配置，Terraform 管理资源；Git revert 不自动恢复基础设施或数据。
- 出现意外 replace/destroy 先停止 apply，定位配置差异与资源地址，再决定修正。
- 诊断顺序：凭证/账号/区域 → provider/schema → AWS API/IAM → state/锁 → 实际资源 → 业务结果。
- 不把 force-unlock、state rm、手改 state 或 force_destroy 当作常规修复。

## Blockers

无已观测的环境故障。用户电脑版本、profile、权限和预算尚未核验，这是 C0 的工作，不是用户知识不足的证据。

## KP Interruptions

当前无中断。若出现阻塞：
记录 checkpoint、具体操作、最小未理解概念、已有 KP（若找到）、精确恢复点；暂停该操作并进入单独 KP 学习，再回到原 checkpoint。
本计划不为未知概念提前生成大量 KP 文件。

## Open Questions

- 实际操作设备、Terraform/AWS CLI 版本、认证 profile 与区域。
- 实验预算和每次资源保留时长；在首个云 apply 前解决。
- 后续是否把 MCP 项目作为迁移对象；不影响最小 S3 闭环。
- 若需正式 KP 捕获，先定位可复用的 canonical map/身份；本次没有创建或替代 Knowledge Map。

## Completion

体系准备：计划与可靠资料索引已编写；提交后需仓库读回验证。
学习执行：0 个已验证 checkpoint；没有宣称用户已掌握 Terraform。
结束位置：C0 前。下次说“开始 Terraform”，从环境核验继续，不重建本计划。
