---
aliases: 
tags:
  - AWS-S3
  - AWS-SECURITY
---
Creation : 13th May 2025
Last Modified : 13th May 2025
___
Criptografia usando chaves KMS que podem ser criadas e manejadas pelos usuários , porem podemos usar o serviço AWS KMS(key management system).

as vantagens de usar são o controle do usuário e se usar o AWS KMS, todos os acessos ficam logados e podem ser auditados no AWS Cloud Trail

deve usar o header "x-amz-server-side-encryption":"aws:kms"	

![[Pasted image 20250513172510.png]]

esse tipo de criptografia tem as desvantagems de lidar com kms como a geração de chaves e as chamadas de api kms
![[Pasted image 20250513172646.png]]

ainda temos a opção DSSE-KMS , que é uma opção nova , que é basicamente uma criptografia dupla usando KMS