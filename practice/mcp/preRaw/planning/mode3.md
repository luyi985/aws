# AWS MCP 实操 — Mode 3

## Scope
- Learning root / persistence root: `luyi985/aws/practice/mcp`
- Primary mode: Mode 3
- Depth: guided-practice
- Last update: 2026-10-27 (Australia/Sydney)
- Session ID: SESSION-AWS-MCP-001
- Session state / project path: this file
- Source scope: AWS official documentation; user confirmed reference on 2026-10-27.
- Primary source: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-mcp.html
- Authentication reference: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-oauth.html
- Region reference: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agentcore-regions.html
- Existing map: no results from repository search for knowledge_map_id; this is not proof no map exists.
- Knowledge map identity/location: unresolved; no new map or KP IDs created. Reuse existing AIP identities if needed after locating their map.
- Active KP set: no IDs assigned; current operation only checks environment.
- Candidate artifacts: preRaw; no raw/wiki admission performed.

## Operational Goal
Deploy a Python MCP server to Amazon Bedrock AgentCore Runtime, discover its tools and successfully invoke add_numbers(2, 3) from a local MCP client.
Completion requires local and cloud invocation evidence, a basic explanation of the request flow, and resource cleanup or explicit preservation.

## End-to-End Flow
Check local tools and AWS identity → build local server → initialize MCP session, list tools and invoke tool → configure cloud deployment and authentication → deploy → invoke cloud tool → inspect logs → clean up.

## Checkpoints
| ID | Input | Action | Expected output / role | Status | Verification |
|---|---|---|---|---|---|
| C0 | User machine, existing AWS account | Check git/Python/uv/AWS CLI; check AWS identity after CLI available | Establish usable environment before implementation | in_progress | User terminal output; no secret values |
| C1 | Working Python environment | Implement one add_numbers tool using MCP SDK | Local MCP server | not_started | Server starts; exact dependency versions recorded |
| C2 | Running local server | Initialize client, list tools, invoke add_numbers(2,3) | Prove protocol and tool execution | not_started | tools/list includes tool; tools/call returns 5 without error |
| C3 | Local baseline, usable AWS identity | Verify supported region, deployment tool version/help, auth and minimum permissions | Concrete deployment configuration | not_started | Inspect configuration before deployment |
| C4 | Valid deployment configuration | Deploy to AgentCore Runtime | Authenticated remote MCP service | not_started | Runtime status and ARN |
| C5 | Deployed runtime | Invoke cloud MCP tool and inspect logs | Complete remote request flow | not_started | Tool discovery, result 5 and matching logs |
| C6 | Resource inventory | Remove experiment resources or deliberately preserve | Known cost/exposure state | not_started | Resource readback and cleanup record |

## Current Position
- Current version: V0, environment unverified.
- Active checkpoint: C0.
- Immediate action: user pulls repository and reports Python, uv and AWS CLI versions.
- Next transition: fix missing tools; validate AWS identity before cloud work.
- Mode stack: [mode_3].
- Return point: C0 environment check.

## Evidence
- practice/mcp/.gitkeep exists on main and was read back.
- User selected Mode 3 and requested guided operation using AWS documentation.
- AWS MCP hosting guide accessed; it specifies Streamable HTTP and server listening at 0.0.0.0:8000/mcp.
- No local server, AWS identity, region, permission or deployment has been verified.

## Blockers
No observed failure yet; user environment output pending.

## KP Interruptions
None.

## Open Questions
- Installed tool versions and account authentication method.
- Deployment region and permissions; verify before deployment.
- Locate canonical existing KP map if a knowledge interruption requires it.

## Environment, Cost and Safety
- No AWS resources created by this session.
- Cost at C0: no deployment cost.
- Cloud runtime and supporting storage/log/build resources may incur charges; inspect actual deployment resource list and pricing before provisioning.
- Never store credentials, tokens or .env secrets in git or chat.
- Prefer existing local AWS profile/SSO; choose authentication during C3.
- Deployment, invocation and cleanup commands must match installed CLI and current documentation.

## Checkpoint and Rollback
- Known repository baseline: practice/mcp directory exists; no implementation yet.
- Local baseline will be committed after verification.
- Rollback and cloud cleanup commands will be recorded with the actual created resources, before leaving cloud resources running.

## Completion
Not completed. Guided execution has not started beyond preparing the folder and plan.
