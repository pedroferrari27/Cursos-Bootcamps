resource "aws_vpc" "trial_VPC"{
    cidr_block       = "10.0.0.0/16"
    enable_dns_hostnames = true
    enable_dns_support = true

    tags = {
        Name = "dev"
    }
}   

resource "aws_subnet" "trial_public_subnet"{
  vpc_id     = aws_vpc.trial_VPC.id 
  cidr_block = "10.0.0.0/24"
  map_public_ip_on_launch = true
  availability_zone = "sa-east-1a"

  tags = {
    Name = "dev_public_subnet"
  }
}
