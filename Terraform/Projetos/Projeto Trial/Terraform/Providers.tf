terraform {
   required_providers {
     aws = {
       source  = "hashicorp/aws"
     }
   }
 }
 
 # Configure the AWS Provider
 provider "aws" {
   region                   = "sa-east-1"
   shared_config_files      = ["~/.aws/config"]
   shared_credentials_files = ["~/.aws/credentials"]
   profile                  = "terraform"
}