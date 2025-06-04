---
aliases:
  - Elastic Kubernetes Service
tags:
  - AWS-CONTAINERS
created: 23-05-2025
---
é como rodamos clusters Kubernetes na AWS.

é uma alternativa ao ECS de código Aberto.

podemos usar o launch type EC2 ou fargate similarmente ao ECS.

[[EC2 Launch Type]] 

[[Fargate Launch Type]]

usamos o EC2  para criar nodes de trabalhadores e o Fargate para fazer deploy serverless

é uma boa alternativa se ja usamos Kubernetes on premisses e queremos migrar para AWS.

kubernetes pode ser utilizada com varios provedores de cloud diferente, como aws,azure,oracle,etc

![[Pasted image 20250523161907.png]]

exemplo de uso em EC2 launch type

![[Pasted image 20250523162021.png]]

![[Pasted image 20250523162055.png]]





