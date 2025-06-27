---
aliases: 
tags:
  - TERRAFORM
created: 12-06-2025
---
utilizing the guide on this link : https://www.youtube.com/watch?v=iRaai1IBlB0&t=229s
from FreecodeCamp.org

![[Pasted image 20250612144011.png]]

o objetivo é criar um ambiente de desenvolvimento, onde poderemos criar uma sessão SSH com uma instancia EC2 diretamente no VS code

### 0- setup inicial

primeiro instalamos ou verificamos a instalação do terraform : [[Installation]]


primeiro baixamos o AWS Toolkit no vscode. então criamos um usuário novo no IAM para acesso a plataforma AWS, no caso usamos a policy administrator access, porem em exemplos futuros usaremos outras polices.

então com as chaves criadas para o usuário no IAM, podemos logar no AWS toolkit no vscode com as credenciais. a partir dai, temos acesso ao AWS CLI. 

criamos o perfil "terraform"

então nosso arquivo de config deve estar assim : 

```
[terraform]
region = sa-east-1
output = json

```

e o config assim:

  
```
[terraform]
# This key identifies your AWS account.
aws_access_key_id = [public key]
# Treat this secret key like a password. Never share it or store it in source
# control. If your secret key is ever disclosed, immediately use IAM to delete
# the key pair and create a new one.
aws_secret_access_key = [secret key]
```

Obs: Arquivos .tf são processados como se fossem todos o mesmo arquivo, então todos devem estar no mesmo diretório


outra coisa importante, ao usar o git, devemos usar o ==.gitignore== para prevenir passar os arquivos gerais do terraform,que são específicos da sua maquina, para o repositório. assim o código funcionara em qualquer maquina depois do ==terraform init== . como o exemplo a seguir, que temos os arquivos do terraform em uma pasta ''terraform'' 

.gitiginore
```
# Terraform files and directories (in Terraform subdirectory)
Terraform/**/.terraform/
Terraform/**/.terraform.lock.hcl

# Terraform state files
Terraform/**/*.tfstate
Terraform/**/*.tfstate.*
Terraform/**/*.tfstate.backup

# Terraform variable files (may contain sensitive data)
Terraform/**/*.tfvars
Terraform/**/*.tfvars.json

# Terraform plan files
Terraform/**/*.tfplan

# Terraform crash logs
Terraform/**/crash.log
Terraform/**/crash.*.log

# Terraform RC files
Terraform/**/.terraformrc
Terraform/**/terraform.rc

# Terraform lock files
Terraform/**/.terraform.tfstate.lock.info
```
### 1- criamos um arquivo de providers

criamos um arquivo chamado providers.tf, e inserimos a configuração especificada em 
https://registry.terraform.io/providers/hashicorp/aws/latest/docs

no exemplo usaremos esta

```
terraform {
required_providers {
aws = {
source = "hashicorp/aws"
}
}
}
# Configure the AWS Provider
provider "aws" {
region = "sa-east-1"
shared_config_files = ["~/.aws/config"]
shared_credentials_files = ["~/.aws/credentials"]
profile = "terraform"
}
```

> The AWS Provider can source credentials and other settings from the [shared configuration and credentials files](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html). By default, these files are located at `$HOME/.aws/config` and `$HOME/.aws/credentials` on Linux and macOS, and `"%USERPROFILE%\.aws\config"` and `"%USERPROFILE%\.aws\credentials"` on Windows.
>
   usando a profile "terraform" que criamos

 então podemos abrir o terminal e realizar o ==terraform init==

e esperamos essa mensagem

%% Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary. %%

com isso, é criado dois arquivos, o .terraform.lock.hcl que serve para fixar a versão do terraform, e o .terraform para a licensa e o provedor para aws compilado.

### 2- criar uma VPC

utilizaremos o recurso VPC https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc

então criaremos um novo Arquivo .tf para o recurso VPC, no nosso caso se chamará Main e sera referenciado como Main.

então nele criamos o recurso VPC, no nosso caso, chamado trial_VPC

```
resource "aws_vpc" "trial_VPC"{
cidr_block = "10.0.0.0/16"
enable_dns_hostnames = true
enable_dns_support = true

tags = {
Name = "dev"
}
}
```

e adicionamos a tag "dev".

depois podemos usar o ==terraform plan==  , que resumira tudo o que o terraform criará, no caso só ao recurso VPC.

então podemos usar o ==terraform apply== para executar.

isso criara a VPC para nós.

depois disso podemos adicionar aos recursos no vscode na extensão AWS Toolkit para tracking. 

![[Pasted image 20250612161037.png]]

e la poderemos ver as informações da nossa VPC.

![[Pasted image 20250612161314.png]]

e é criado o arquivo terraform.tfstate com as configurações e informações do state em json.
### 3- State

utilizaremos o guia : https://developer.hashicorp.com/terraform/language/state

podemos usar o comando ==terraform state list== , que listará os recursos presentes, no nosso caso no momento temos apenas o VPC.

podemos usar o comando ==terraform state show [nome do recurso]== para mostrar as informações do recurso, podemos testar com o nosso trial_VPC:
```
terraform state show aws_vpc.trial_VPC
```

podemos usar apenas ==terraform show== para mostrar todo o estado, com todos os recursos

podemos usar o ==terraform destroy== (ou terraform apply -destroy se preferir) para deletar recursos, podemos usar o ==terraform plan destroy== para ver os recursos que serão deletados antes de realizar a ação. (podemos passar a flag -auto-approve para aprovar automaticamente)

### 4- deploy de uma Subnet

usamos o guia https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/subnet

então, no nosso arquivo main.tf adicionaremos o recurso da subnet:

```
resource "aws_subnet" "trial_public_subnet"{
	vpc_id = aws_vpc.trial_VPC.id
	cidr_block = "10.0.0.0/24"
	map_public_ip_on_launch = true
	availability_zone = "sa-east-1a"

tags = {
	Name = "dev_public_subnet"
}
}
```

obs: sempre adicionar um prefixo aos seus recursos, como no caso "trial_ ... " para evitar erros futuros

podemos ver que o vpc_id é pego como uma referencia do recurso vpc, observe como pegamos informações de referencia de outros recursos.

queremos adicionar a flag (map_public_ip_on_launch) para true para associar a essa subnet uma IP publica.

observe também que utilizamos o cidr_block com o \24. assim teremos mais ips do que a vpc, gerando no caso 251 Possíveis IPs (a aws reserva 5 ips para ela), podemos usar desde /17 até /28 na criação da subnet (mascara de redes)

demos o nome de dev_public_subnet para não nos perdemos depois.

podemos rodar o ==terraform plan== e ==terraform apply== agora para criar

assim, criamos nossa subnet

podemos adicionar aos recursos no vscode novamente:
![[Pasted image 20250612165858.png]]

e podemos vê-lá no console
![[Pasted image 20250612170026.png]]

### 5- internet gateway e terraform fmt

criamos um internet gateway para habilitar comunicação dos nossos recursos na vpc para a internet

adicionamos o recurso internet gateway https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/internet_gateway

```
resource "aws_internet_gateway" "test_internet_gateaway" {
vpc_id = aws_vpc.trial_VPC.id

  
tags = {
Name = "dev_internet_gateaway"
}
}
```
lembrando de usar referencias para pegar o id do vpc em
```
vpc_id = aws_vpc.trial_VPC.id
```
e conseguimos provisionar um internet gateway. apenas precisamos usar o ==terraform plan== e ==terraform apply==

agora podemos introduzir um conceito novo, o comando ==terraform fmt==

esse comando ajuda a reformatar o código nos arquivos .tf para arrumar algumas inconsistências no código

as vezes devemos dar override no arquivo para salvar as mudanças.

![[Pasted image 20250626171537.png]]lembrando de adicionar o recurso no vscode para tracking

### 6 - Criando uma Route Table

nota-se que há duas formas de criar uma tabela de roteamento para vpc no terraform, usando o recurso "aws_route" e o "aws_route_table". usaremos o route table: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table


usaremos um recurso route table neste projeto.

então primeiramente criaremos uma tabela de roteamento
```
#criamos uma tabela de roteamento
resource "aws_route_table" "trial_route_table" {
	vpc_id = aws_vpc.trial_VPC.id
	tags = {
		Name = "dev_route_table"
	}
}
```

e depois criaremos uma rota padrão, como em https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route

```
resource "aws_route" "dev_rota_padrão"{
	route_table_id = aws_route_table.trial_route_table.id
	destination_cidr_block = "0.0.0.0/0"
	gateway_id = aws_internet_gateway.trial_internet_gateway.id
}
```

obs: 0.0.0.0/0 permite conexão de todos os ips, ou seja, todos os endereços de ip serão direcionados aqui

e rodar ==terraform plan== e ==terraform apply== para deploy

![[Pasted image 20250626180417.png]]
dar track da route table no vscode

### 7 - Associando nosso subnet com o route table

criaremos um recurso para associar esses recursos : https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table_association

```
resource "aws_route_table_association" "trial_rt_subnet_association" {
	subnet_id = aws_subnet.trial_public_subnet.id
	route_table_id = aws_route_table.trial_route_table.id
}
```

e rodar ==terraform plan== e ==terraform apply== para deploy

esse recurso não conseguimos dar tracking no vscode, mas conseguimos ver no aws console.

![[Pasted image 20250626181653.png]]

### 8 - criando security groups

![[Pasted image 20250626190818.png]]
diagrama de uso dos security groups

usaremos este recurso : https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group

nota-se que precisamos criar 3 recursos, o aws_security_group, o [`aws_vpc_security_group_egress_rule`](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc_security_group_egress_rule) para regras de conexão de saída e 
[`aws_vpc_security_group_ingress_rule`](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc_security_group_ingress_rule) para regras de entrada.

esses são as melhores praticas atuais, mas podem mudar no futuro

criando o security group:

```
resource "aws_security_group" "trial_security_group" {
	name = "dev_trial_security_group"
	description = "grupo de seguranca para ambiente dev na aws"
	vpc_id = aws_vpc.trial_VPC.id
	tags = {
		Name = "dev_trial_security_group"
	}
}
```
obs: não usar acentos e ç na descrição

agora com o security group feito, devemos organizar as regras de entrada e saída.

começando pela saída :

```
resource "aws_vpc_security_group_egress_rule" "example" {
	security_group_id = aws_security_group.trial_security_group.id
	cidr_ipv4 = "0.0.0.0/0"
	ip_protocol = "-1"
	description = "all access from my security group"
	
	tags = {
		Name = "access everything from my security group"
	}
}
```
usamos o ip_protocol = "-1" para permitir todos os protocolos, usamos o bloco 0.0.0.0/0 para permitir conexão de saída com todos os ips.

essa solução já resolve nossa saída, pois queremos conectar com todos os serviços.

para a entrada, faremos permissões mais detalhadas

```
locals {
	common_services = {
		ssh = { protocol = "tcp", port = 22 }
		http = { protocol = "tcp", port = 80 }
		https = { protocol = "tcp", port = 443 }
		dns = { protocol = "udp", port = 53 }
	}
}

resource "aws_vpc_security_group_ingress_rule" "common_services" {
	for_each = local.common_services

	security_group_id = aws_security_group.trial_security_group.id
	description = "${upper(each.key)} access from my IP"
	
	ip_protocol = each.value.protocol
	from_port = each.value.port
	to_port = each.value.port

	cidr_ipv4 = "0.0.0.0/0"

	tags = {
	Name = "${upper(each.key)} from my IP"
	}
}
```

aqui usamos variável locals para criar o recurso aws_vpc_security_group_ingress_rule 4 vezes, cada vez permitindo um dos protocolos. podemos adicionar manualmente também criando 4 recursos manualmente e escrevendo suas portas.

no caso usamos o cidr block 0.0.0.0/0 para permitir acesso a todos como exemplo. na pratica deveremos usar um ip apropriado para n permitir o acesso de estranhos na internet. para isso colocaremos ali nosso endereço de ip/32 (ou seja, permitindo só aquele endereço exato).

agora rodamos  ==terraform plan== e ==terraform apply== para deploy

### 9 - criando um AMI

