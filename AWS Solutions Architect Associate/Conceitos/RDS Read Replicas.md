---
aliases: 
tags:
  - AWS
  - AWS-RDS
---
Creation : 14th April 2025
Last Modified : 14th April 2025
___
![[Pasted image 20250414170257.png]]

são replicas da base de dados criadas automaticamente e ASSINCRONAMENTE para APENAS LEITURA, facilitando a usabilidade do DB

essas replicas podem ser promovidas a um DB própio para caso seja nescessario modificações e escrita neles

as replicas podem ser armazenadas em um ou múltiplos
AZs, e até em regiões diferentes.

![[Pasted image 20250414170652.png]]

 HÁ também custos associados a replicas EM DIFERENTES REGIÕES, porem não em um mesmo AZ
 ![[Pasted image 20250414170900.png]]

As replicas de leitura podem ser configuradas para recuperação de falhas assim como o Multi-AZ

