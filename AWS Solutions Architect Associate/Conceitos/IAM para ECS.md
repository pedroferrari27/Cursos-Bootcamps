---
tags:
  - AWS-CONTAINERS
  - AWS-ECS
  - AWS-SECURITY
source: "[[ECS]]"
created: 23-05-2025
---
![[Pasted image 20250523152741.png]]


podemos criar  um perfil para todo o agente ECS, assim ele consegue utilizar todos os outros serviços por chamadas de API, como o ECR, Cloudwatch e secrets manager.

alem disso, também podemos criar perfis IAM para cada task. assim teremos uma forma mais segura para cada acesso em cada tarefa.