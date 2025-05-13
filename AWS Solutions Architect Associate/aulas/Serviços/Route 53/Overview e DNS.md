---
tags:
  - AWS
  - AWS-ROUTE53
---
---
Creation : 6th May 2025
Last Modified : 6th May 2025
___
[[DNS]]

![[Pasted image 20250508152409.png]]

é um serviço de domain registar, permitindo criar dominios, alem disso tambem é um servidor de DNS customizavel, onde podemos alterar os DNS records, e escalavel.

![[Pasted image 20250508152650.png]]

principais tipos de records que devemos saber

![[Pasted image 20250508152806.png]]

com isso temos hosted zones, que é onde guardamos os nossos registros dns e podemos configurar o roteamento de trafego da internet para nosso dominio.

cada hosted zone custa 0,50 U$ por mes

temos hosted zones publicas, que permitem roteamento de qualquer lugar da internet, e hosted zones privadas, que permitem apenas o acesso quando dentro da rede privada ou em sua VPC.

![[Pasted image 20250508153857.png]]
![[Pasted image 20250508154012.png]]
![[Pasted image 20250508171320.png]]

não util para prova
user data para ec2 para ver az

![[Pasted image 20250508154248.png]]

