---
aliases: 
tags:
  - AWS
  - AWS-RDS
  - AWS-SECURITY
---
Creation : 14th April 2025
Last Modified : 14th April 2025
___

![[Pasted image 20250414181417.png]]

temos criptografia do DB usando AWS KMS, então temos criptografia em transito com TSL,
também temos a autentificação no banco de dados, com username/password padrão ou usando AWS IAM. temos também grupos de segurança para controlar o acesso a rede.
por fim, temos também o logs do Cloudwatch para verificação, porem não podemos logar por ssh em instancias padrão.