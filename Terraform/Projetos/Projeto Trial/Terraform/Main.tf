resource "aws_vpc" "trial_VPC" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "dev"
  }
}

resource "aws_subnet" "trial_public_subnet" {
  vpc_id                  = aws_vpc.trial_VPC.id
  cidr_block              = "10.0.0.0/24"
  map_public_ip_on_launch = true
  availability_zone       = "sa-east-1a"

  tags = {
    Name = "dev_public_subnet"
  }
}

resource "aws_internet_gateway" "trial_internet_gateway" {
  vpc_id = aws_vpc.trial_VPC.id

  tags = {
    Name = "dev_internet_gateway"
  }
}
#criamos uma tabela de roteamento
resource "aws_route_table" "trial_route_table" {
  vpc_id = aws_vpc.trial_VPC.id

  tags = {
    Name = "dev_route_table"
  }
}
#adicionamos rotas
resource "aws_route" "dev_rota_padrão" {
  route_table_id         = aws_route_table.trial_route_table.id
  destination_cidr_block = "0.0.0.0/0"
  #endereço 0.0.0.0/0 permite conexão de todos os ips, ou seja, todos os endereços de ip serão direcionados aqui
  gateway_id = aws_internet_gateway.trial_internet_gateway.id
}

resource "aws_route_table_association" "trial_rt_subnet_association" {
  subnet_id      = aws_subnet.trial_public_subnet.id
  route_table_id = aws_route_table.trial_route_table.id
}

resource "aws_security_group" "trial_security_group" {
  name        = "dev_trial_security_group"
  description = "grupo de seguranca para ambiente dev na aws"
  vpc_id      = aws_vpc.trial_VPC.id

  tags = {
    Name = "dev_trial_security_group"
  }
}

resource "aws_vpc_security_group_egress_rule" "example" {
  security_group_id = aws_security_group.trial_security_group.id
  cidr_ipv4   = "0.0.0.0/0"
  ip_protocol = "-1"
  # -1 indica todos os protocolos são permitidos
  description       = "all access from my security group"

  tags = {
    Name = "access everything from my security group"
  }
}

locals {
  common_services = {
    ssh   = { protocol = "tcp", port = 22 }
    http  = { protocol = "tcp", port = 80 }
    https = { protocol = "tcp", port = 443 }
    dns   = { protocol = "udp", port = 53 }
  }
}

resource "aws_vpc_security_group_ingress_rule" "common_services" {
  for_each = local.common_services

  security_group_id = aws_security_group.trial_security_group.id
  description       = "${upper(each.key)} access from my IP"

  ip_protocol = each.value.protocol
  from_port   = each.value.port
  to_port     = each.value.port

  cidr_ipv4 = "0.0.0.0/0"

  tags = {
    Name = "${upper(each.key)} from my IP"
  }
}