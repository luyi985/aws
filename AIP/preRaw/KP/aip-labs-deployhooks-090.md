---
id: aip-labs-deployhooks-090
title: CodeDeploy 部署包与生命周期钩子的对应关系
status: pending
sources:
- AIP/preRaw/AIP-Materials/aws-cicd/codedeploy/SampleApp_Linux/appspec.yml — lines
  1–17
- AIP/preRaw/AIP-Materials/aws-cicd/codedeploy/SampleApp_Linux/scripts/install_dependencies
  — lines 1–2
- AIP/preRaw/AIP-Materials/aws-cicd/codedeploy/SampleApp_Linux/scripts/start_server
  — lines 1–2
- AIP/preRaw/AIP-Materials/aws-cicd/codedeploy/SampleApp_Linux/scripts/stop_server
  — lines 1–5
- AIP/preRaw/AIP-Materials/aws-cicd/codedeploy/commands.sh — lines 3–11
- AIP/preRaw/AIP-Materials/aws-cicd/codedeploy/SampleApp_Linux/index.html — lines
  27–31
dependencies: []
---

# aip-labs-deployhooks-090: CodeDeploy 部署包与生命周期钩子的对应关系

## Learning Objective

能够根据 appspec 追踪页面文件复制和生命周期脚本，并区分钩子名称与脚本实际行为。

## Scope

- Included: files 映射、BeforeInstall、ApplicationStop、脚本位置和部署代理安装片段。
- Excluded: 真实部署执行、完整回滚策略和未提供的部署组配置。

## Source Context

SampleApp_Linux.zip 与展开目录的六个文件完全一致，作为同一部署包来源；不为重复压缩内容另造 KP。

## Knowledge Point

生命周期钩子（lifecycle hook）把部署阶段与脚本连接起来。appspec 把 index.html 放进 Web 目录，并在 BeforeInstall 中安装和启动 httpd，在 ApplicationStop 中引用停止脚本。stop_server 的变量赋值两侧存在空格，不能把意图当作已验证的有效执行。

## Logical Path

1. 先识别部署包内 appspec、页面和 scripts 的相对位置。
2. 追踪 files 源路径与目标目录。
3. 把 hooks 的阶段与脚本实际命令对应。
4. 检查执行前提和明显代码问题，区分静态理解与部署成功。

## Key Terms

- 生命周期钩子（`lifecycle hook`）：在指定部署阶段执行的脚本入口。

## Example

源码示例：启动 httpd 的脚本被放在 BeforeInstall，不是依据脚本名称推测的独立启动阶段。这个映射说明阶段由 appspec 决定；停止脚本仍需单独核对语法与行为。

## Sources

- `AIP/preRaw/AIP-Materials/aws-cicd/codedeploy/SampleApp_Linux/appspec.yml — lines 1–17`：文件映射、钩子阶段与脚本位置。
- `AIP/preRaw/AIP-Materials/aws-cicd/codedeploy/SampleApp_Linux/scripts/install_dependencies — lines 1–2`：安装 httpd。
- `AIP/preRaw/AIP-Materials/aws-cicd/codedeploy/SampleApp_Linux/scripts/start_server — lines 1–2`：启动服务。
- `AIP/preRaw/AIP-Materials/aws-cicd/codedeploy/SampleApp_Linux/scripts/stop_server — lines 1–5`：停止意图和赋值写法。
- `AIP/preRaw/AIP-Materials/aws-cicd/codedeploy/commands.sh — lines 3–11`：部署代理的安装片段。
- `AIP/preRaw/AIP-Materials/aws-cicd/codedeploy/SampleApp_Linux/index.html — lines 27–31`：被部署的演示页面。
