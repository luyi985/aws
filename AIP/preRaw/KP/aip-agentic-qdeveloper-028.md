---
id: aip-agentic-qdeveloper-028
title: Amazon Q Developer
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — III. Agentic AI & Orchestration > Amazon Q Ecosystem > Q Developer (IDE Extension, Code Generation)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 6, ‘Agentic AI’ course scope (Amazon Q)"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 5, ‘III. Agentic AI > Amazon Q Developer’"
dependencies: []
---

# aip-agentic-qdeveloper-028: Amazon Q Developer

## Learning Objective

能够说明 Q Developer 在 IDE 中辅助代码生成的用途与验证责任。

## Scope

- Included: IDE extension、code generation、开发上下文和人工审查。
- Excluded: 最新 IDE 支持列表、安装步骤和功能完整清单。

## Source Context

导图将 Q Developer 与 IDE Extension、Code Generation 关联。

## Knowledge Point

Amazon Q Developer 在导图中是面向开发工作的 AI 助手，可通过集成开发环境扩展（IDE extension）提供代码生成（code generation）等能力。生成代码是候选实现，仍需审查、测试和安全检查。

## PDF Grounding

Study Guide 直接说明 Q Developer 可基于 AWS 文档答疑、建议 CLI 命令、执行安全扫描，并通过 VS Code、Visual Studio、JetBrains 扩展提供代码生成与补全；项目规则可保存在 `./amazon/rules`。详细课件只在 Agentic AI 范围页列出 Amazon Q，未单独展开 Q Developer。

## Logical Path

1. 开发者在 IDE 中提供代码与任务上下文。
2. 助手据此生成解释、补全或候选代码。
3. 开发者验证接口、测试、依赖和安全影响。
4. 生成结果不能替代代码所有权与发布流程。

## Key Terms

- 集成开发环境（`integrated development environment, IDE`）：编写、运行和调试代码的工具环境。
- 代码生成（`code generation`）：由模型创建候选程序文本。

## Example

示意示例：助手生成单元测试骨架后，开发者补充边界条件并运行测试；这展示 AI 建议与人工验收的分工。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“III. Agentic AI & Orchestration > Amazon Q Ecosystem > Q Developer (IDE Extension, Code Generation)”支持使用场景。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 6 页“Agentic AI”支持 Amazon Q 属于本课程的 agentic 范围；未单独描述 Q Developer。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 5 页“Amazon Q Developer”直接支持文档问答、CLI、安全扫描、IDE 与代码生成功能。
