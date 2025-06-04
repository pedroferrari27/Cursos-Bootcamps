---
tags:
  - AWS-CONTAINERS
  - AWS-STORAGE
source: "[[ECS]]"
created: 23-05-2025
---
![[Pasted image 20250523153824.png]]

No ECS e no Fargate, podemos armazenar dados usando o EFS(Elastic file System)
o que nos permite compartilhar dados em varias tasks  em Múltiplos AZs.

o fargate com um EFS é uma solução inteiramente serverless

nota-se que NÃO PODEMOS MONTAR O S3 COMO SISTEMA DE ARQUIVOS PARA CONTAINERS