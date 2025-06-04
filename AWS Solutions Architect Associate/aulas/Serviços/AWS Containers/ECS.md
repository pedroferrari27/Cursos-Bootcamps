---
aliases:
  - Elastic Container Service
tags:
  - AWS-CONTAINERS
  - AWS-ECS
created: 23-05-2025
---
ECS ou Elastic Container Service

dar deploy em um container Docker na AWS equivale a fazer Launch de uma Task ECS nos Clusters ECS.

temos duas formas de dar deploy nos containers:

[[EC2 Launch Type]]

[[Fargate Launch Type]]

em termos de segurança , pudemos usar o IAM para autenticação

[[IAM para ECS]]

podemos ligar o ECS com um load Balancer para ajudar na redução de custos/melhoria de performance

[[Containers e Escalamento]]

e para armazenamento de dados Usamos Volumes de dados :
[[Container Storage]]

nota: para limpar arquivos de um cluster, devemos deletar o serviço, o que podemos ver no cloudformation, e então deletamos o cluster,(o que deletara toda a infraestrutura que criamos para o cluster)e podemos ver no cloudformation tbm
