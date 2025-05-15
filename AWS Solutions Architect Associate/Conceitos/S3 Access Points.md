---
aliases: 
tags:
  - AWS-S3
  - AWS-SECURITY
---
Creation : 13th May 2025
Last Modified : 13th May 2025
___
Podemos criar Access points para usuários para dar permissões para Usuários, funcionam como bucket policies, que alteram as permissions para grupos de usuário, mas alteram o acesso criando endpoints diferentes para usuários diferentes.
isso facilita no manejamento de segurança , e permite o uso de polices de bucket mais simples.

cada ponto de acesso tem seu propio nome DNS e police propiá
![[Pasted image 20250513183522.png]]

podemos usar isso em uma VPC. 

![[Pasted image 20250513183740.png]]

