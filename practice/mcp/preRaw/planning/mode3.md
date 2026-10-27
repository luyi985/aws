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
Build and deploy a self-managed TypeScript/Node.js MCP endpoint behind API Gateway, backed by one MCP entry Lambda, four separate CRUD Lambda functions and one DynamoDB table.
Completion requires a local MCP client to discover four tools, execute create → read → update → read → delete → read-not-found, verify actual database changes, explain the request flow, and record cleanup or deliberate preservation.
User confirmed this revised scope on 2026-10-27. This update records the plan only; no implementation or AWS deployment has been performed.

## End-to-End Flow
MCP client → API Gateway → MCP entry Lambda → selected CRUD Lambda → one DynamoDB table → result back through the same path.

- API Gateway forwards HTTP requests; the entry Lambda and official MCP SDK handle protocol behavior and tool dispatch.
- Four business Lambdas implement create_item, get_item, update_item and delete_item. Use a fixed exercise table, not a caller-supplied table name.
- Entry Lambda synchronously invokes the selected business Lambda using the AWS SDK. Handle invocation failures and business errors explicitly.
- Initial transport design: stateless Streamable HTTP with JSON responses; defer SSE notifications, resumability and long-lived sessions. Pin SDK/protocol versions and prove API Gateway event/response adaptation in the first vertical slice.
- Keep MCP envelopes out of business Lambda contracts. Validate arguments at the boundary and enforce data rules inside business handlers.
- Prefer a supported Node.js runtime and TypeScript; exact runtime, SDK and deployment-tool versions are selected after the environment check.

## Scope Change and History
- Supersedes the unimplemented Python / AgentCore Runtime / add_numbers plan previously stored in this same session.
- Preserve SESSION-AWS-MCP-001 and the established persistence root. No previously validated runtime capability is being removed.
- AgentCore Runtime hosting is deferred, rather than a prerequisite for tonight.
- Later comparison: MCP client → AgentCore Gateway → existing four CRUD Lambdas → existing table. Configure target schemas, invocation permissions and inbound authentication; adapt contracts/tool names as needed and rerun the same CRUD acceptance sequence before retiring the original entry resources.
- AgentCore Gateway replaces both API Gateway and the self-managed MCP entry Lambda in that later design. It is a separate exercise, not an automatic address-only swap.

## Time Estimate
Planning estimate, not a measured commitment: 2–3 hours with working AWS access and tools; 3–4 hours if protocol adaptation or permissions require troubleshooting.
First query path: approximately 45–60 minutes. Remaining tools: approximately 45 minutes. Authentication, errors, verification and cleanup: approximately 30–60 minutes. Basic access control must be present before cloud CRUD is exposed.

## Checkpoints
| ID | Input | Action | Expected output / role | Status | Verification |
|---|---|---|---|---|---|
| C0 | User machine and AWS account | Check git, Node.js, package manager, AWS CLI, identity, region and deployment tooling | Usable environment, recorded versions and deployment method | in_progress | User terminal output; no credentials |
| C1 | Usable Node.js environment | Define four tool schemas and plain business contracts; run one local query tool with official MCP SDK | Local protocol baseline before cloud wiring | not_started | Client discovers query tool and invokes it; version-specific lifecycle verified |
| C2 | Local baseline and AWS access | Deploy authenticated API Gateway, MCP entry Lambda, query Lambda and exercise table; seed a synthetic item | First complete cloud query path | not_started | MCP client reads seeded item; database and relevant logs agree; unauthorized request rejected |
| C3 | Verified query path | Add create Lambda and tool | New synthetic item can be created | not_started | Readback proves persistence; duplicate ID behavior tested |
| C4 | Verified create/read | Add update Lambda and tool | Existing item can be changed | not_started | Readback proves changed value; missing-item behavior checked |
| C5 | Verified create/read/update | Add delete Lambda and tool | Complete four-tool cloud service | not_started | Client lists four tools; full CRUD sequence ends in not-found |
| C6 | Working CRUD service | Check invalid input, unknown tool, business errors and least-privilege boundaries; record checkpoint | Understandable failures and recoverable deployment | not_started | Invalid inputs rejected; errors distinguished; entry has invocation access but no table data access |
| C7 | Resource inventory and working checkpoint | Tear down experiment resources or record explicit preservation | Known cost and exposure state | not_started | Inventory/readback includes API, five Lambdas, table, logs and deployment assets |
| C8 | Preserved CRUD code/contracts | Later replace entry layer with AgentCore Gateway and rerun acceptance sequence | Compare self-managed and managed protocol layers | not_started | Separate future session; no migration claimed |

## Current Position
- Current version: V0, architecture agreed; environment unverified.
- Session status: paused pending tonight's guided practice.
- Active checkpoint / return point: C0 environment check.
- Immediate action when resuming: pull the updated repository; inspect Node.js, package manager and AWS CLI availability, then validate AWS identity and region.
- Next transition: choose exact deployment tooling and authentication supported by the test client, then build one query path.
- Mode stack: [mode_3].
- Depth remains guided-practice; no independent skill or learning completion inferred.

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
- Node.js/package-manager/AWS CLI versions and AWS profile or SSO availability.
- Region, deployment permissions and deployment method.
- Test MCP client and compatible inbound authentication.
- Exact SDK/protocol version and Lambda HTTP adapter; validate with the first query path.
- Locate canonical existing KP map if a knowledge interruption requires it. No new KP IDs are allocated by this plan update.

## Environment, Cost and Safety
- No AWS resources created by this session.
- Cost at C0: no deployment cost.
- Planned resources: API Gateway, five Lambdas, one DynamoDB table, IAM roles/policies, CloudWatch logs and any deployment assets. Actual inventory remains empty/unverified.
- Use DynamoDB on-demand as the initial design; no provisioned concurrency, VPC/NAT or always-on server is required by this plan.
- Continuous endpoint availability does not require a continuously executing Lambda. API requests, Lambda execution, stored data and retained logs/assets can still incur charges.
- No monthly price has been verified for this revised design. Check current regional pricing and expected traffic before provisioning; do not assume zero cost or free-tier eligibility.
- Entry role: invoke only the four selected functions, without direct table CRUD access. Each business role: only its required table operation plus logging.
- Use synthetic exercise data, authenticated inbound access, bounded timeouts/concurrency and finite log retention. Record all created resource identifiers and teardown steps.
- Never store credentials, tokens or .env secrets in git or chat.
- Prefer existing local AWS profile/SSO; choose authentication during C3.
- Deployment, invocation and cleanup commands must match installed CLI and current documentation.

## Checkpoint and Rollback
- Known repository baseline: practice/mcp directory exists; no implementation yet.
- Local baseline will be committed after verification.
- Rollback and cloud cleanup commands will be recorded with the actual created resources, before leaving cloud resources running.

## Completion
Not completed. Guided execution has not started beyond preparing the folder and plan.

## Revised Source References
- User decisions: 2026-10-27 voice discussion; self-managed protocol practice first, four separate CRUD Lambdas, one table, managed Gateway comparison later.
- AWS API Gateway Lambda integration: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-integrations.html
- Official MCP TypeScript SDK server guidance: https://ts.sdk.modelcontextprotocol.io/server
- AgentCore Lambda target configuration: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway-add-target-api-target-config.html
- These references were retrieved during planning. Exact version-specific deployment commands, prices and live runtime behavior have not been verified.
- Original Runtime references above remain historical/deferred context, not the current implementation instructions.
