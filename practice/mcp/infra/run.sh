
function create_role() {
    aws iam create-role \
    --role-name mcp-get-order-exec \
    --assume-role-policy-document file://infra/lambda-trust-policy.json \
    --description "Execution role for MCP get-order practice Lambda" \
    --profile yi-dev \
    --query 'Role.Arn' \
    --output text
}
##-------------------------------

#这里的 AWSLambdaBasicExecutionRole 是 AWS 提供的托管策略，包含三个权限：
#- logs:CreateLogGroup：创建日志组。
#- logs:CreateLogStream：创建日志流。
#- logs:PutLogEvents：写入日志内容。

function attach_policy() {
    aws iam attach-role-policy \
    --role-name mcp-get-order-exec \
    --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole \
    --profile yi-dev
}

##-------------------------------
function check_role() {
    aws iam list-attached-role-policies \
    --role-name mcp-get-order-exec \
    --profile yi-dev
}


##-------------------------------
function prepare_artifact() {
    npm run build
    rm -f artifacts/get-order.zip
    mkdir -p artifacts
    zip -j artifacts/get-order.zip dist/business/get-order.js
    unzip -l artifacts/get-order.zip
}

function deploy_lambda() {
   aws lambda create-function \
    --function-name mcp-get-order \
    --runtime nodejs22.x \
    --handler get-order.handler \
    --role arn:aws:iam::180558401500:role/mcp-get-order-exec \
    --zip-file fileb://artifacts/get-order.zip \
    --timeout 5 \
    --memory-size 128 \
    --region ap-southeast-2 \
    --profile yi-dev \
    --query '{Name:FunctionName,State:State,Runtime:Runtime,Handler:Handler}'
}

function invoke_lambda() {
   aws lambda invoke \
    --function-name mcp-get-order \
    --cli-binary-format raw-in-base64-out \
    --payload '{"order_id":"ORDER-001"}' \
    --region ap-southeast-2 \
    --profile yi-dev \
    artifacts/get-order-response.json
}