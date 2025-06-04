---
tags:
  - AWS-CONTAINERS
source: "[[ECS]]"
created: 23-05-2025
---
![[Pasted image 20250523153329.png]]

Os agentes ECS e Fargate Tem integração com Load Balancers e podem ser conectados diretamente.

![[Pasted image 20250523154449.png]]

podemos aumentar ou diminuir automaticamente o numero de TASKS ECS  como se fosse um auto scaling group, conhecido como ECS Service Auto Scaling.

e podemos escalar baseado no uso da CPU,RAM e requests no feitos no load balancer.

lembrando que ESCALAMENTO DE TASKS ECS É DIFERENTE DO ESCALAMENTO DE INSTANCIAS EC2.

e no fargate o escalamento automático é feito pela AWS de forma Serverless

![[Pasted image 20250523155233.png]]

no launch type de EC2, podemos escalar as instancias EC2 pelo ASG ou por um recurso chamado ECS Cluster Capacity provider que escala as instancias EC2 de acordo com as necessidades das tasks nos containers EC2

![[Pasted image 20250523155643.png]]
