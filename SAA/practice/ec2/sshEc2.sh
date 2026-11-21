#!/bin/bash

KEY_FILE="$(pwd)/../credentials/ec2Tutorial.pem"
EC2_USER="ec2-user"
EC2_IP="13.55.94.61"

ssh -i "$KEY_FILE" "$EC2_USER@$EC2_IP"

# Check if the SSH command was successful
if [ $? -ne 0 ]; then
  echo "Failed to connect to $EC2_IP"
  exit 1
fi
echo "Successfully connected to $EC2_IP"