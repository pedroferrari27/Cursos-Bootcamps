---
aliases: 
tags:
  - AWS-ROUTE53
---
Creation : 8th May 2025
Last Modified : 8th May 2025
___

funciona como a police weighted, porem usaremos a proximidade geográfica para basear o direcionamento 

![[Pasted image 20250508165758.png]]

permite direcionar mais trafego a um recurso baseado em um peso(bias), que é definido de a cordo com a localidade do cliente.

os recursos podem ser AWS, onde será baseado com a região AWS, ou recursos não AWS, que usaremos longitude e latitude para criar nossos pesos(bias)

exemplo:
![[Pasted image 20250508170030.png]]
com pesos iguais, baseado na distancia, mostra onde os usuarios seriam direcionados por sua distancia ao servidor

exemplo 2:

![[Pasted image 20250508170207.png]]

nesse temos um favorecimento maior do recuso na direita, então usuários mais distantes deste irão serão direcionados a conectar com este recurso em favor do recurso mais próximo na esquerda