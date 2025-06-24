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

