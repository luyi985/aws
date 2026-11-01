---
id: aip-labs-kmsblob-094
title: KMS CLI 的加密结果与 Base64 编码层
status: pending
sources:
- AIP/preRaw/AIP-Materials/kms/kms-demo-cli.sh — lines 1–20
- AIP/preRaw/AIP-Materials/kms/ExampleSecretFile.txt — entire demo plaintext fixture;
  contents intentionally not reproduced
dependencies:
- aip-security-kmsencryption-049
---

# aip-labs-kmsblob-094: KMS CLI 的加密结果与 Base64 编码层

## Learning Objective

能够追踪明文、加密 blob、Base64 文本和解密结果之间的转换，避免把编码当作加密。

## Scope

- Included: fileb://、CiphertextBlob、Plaintext 和本地 Base64 解码。
- Excluded: 创建密钥、权限配置、信封加密和实际处理任何用户秘密。

## Source Context

kms 目录提供演示明文文件及加解密片段；本 KP 只读取代码，文件内容不复制到学习笔记。

## Knowledge Point

二进制结果（binary blob）与文本表示需要区分。脚本调用 KMS encrypt 后取 CiphertextBlob 字段，将 Base64 文本解码成加密字节；decrypt 读取这些字节，再解码返回的 Plaintext。Base64 只改变数据表示，真正的加解密动作由 KMS 调用完成。

## Logical Path

1. 先确定 fileb:// 指向的原始文件输入。
2. 追踪 encrypt 返回字段与 Base64 文本文件。
3. 区分本地解码和 KMS decrypt 的职责。
4. 把解密后的 Base64 Plaintext 还原成原始字节。

## Key Terms

- 二进制结果（`binary blob`）：作为字节序列返回或传递的数据。
- Base64 编码（`Base64 encoding`）：把字节表示为可传输文本的方法。

## Example

示意示例：对 CiphertextBlob 做 Base64 解码只得到加密字节，尚未得到原始文件；还要调用 decrypt。这展示移除编码层与解密是不同步骤。

## Sources

- `AIP/preRaw/AIP-Materials/kms/kms-demo-cli.sh — lines 1–20`：加密、字段提取、Base64 解码与解密链路。
- `AIP/preRaw/AIP-Materials/kms/ExampleSecretFile.txt — entire demo plaintext fixture; contents intentionally not reproduced`：脚本引用的本地输入文件存在且可读。
