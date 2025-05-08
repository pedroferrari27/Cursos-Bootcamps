---
aliases: 
tags:
  - AWS-RDS
  - AWS-LAMBDA
---
Creation : 14th April 2025
Last Modified : 14th April 2025
___

![[Pasted image 20250414182143.png]]


criar um proxy da base de dados, geralmente feito para manejar as conexões e evitar um sobrecarregamento de conexões ao DB, auxiliando no stress de recursos e melhorando a recuperação de falhas.

também util para reforçar a autenticação com IAM. o proxy nunca é acessível publicamente

muito utilizado em VPCs(virtual private clouds) com o uso de funções Lambda
