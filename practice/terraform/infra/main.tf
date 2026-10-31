terraform {
  required_version = ">= 1.14.3, < 2.0.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 6.0.0"
    }
  }
}

provider "aws" {
  region  = "ap-southeast-2"
  profile = "yi-dev"
}

resource "aws_s3_bucket" "practice" {
  bucket_prefix = "yi-terraform-practice-"

  tags = {
    Project     = "terraform-learning"
    Environment = "practice"
  }
}

resource "aws_s3_bucket_public_access_block" "practice" {
  bucket = aws_s3_bucket.practice.id

  block_public_acls       = true
  ignore_public_acls      = true
  block_public_policy     = true
  restrict_public_buckets = true
}

output "bucket_name" {
  value = aws_s3_bucket.practice.id
}