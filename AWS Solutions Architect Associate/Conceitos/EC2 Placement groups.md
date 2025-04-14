---
aliases: 
tags:
  - AWS-EC2
---
---
Creation : 10th April 2025
Last Modified : 10th April 2025
___

![[Pasted image 20250410172502.png]]

São estrategias de alocamento de instancias de EC2

Opção 1- Cluster - varias instancias alocadas em um único AZ( Availability Zone )
![[Pasted image 20250410172703.png]]

bom uso em manejamento de Big Data que requer rapidez
e aplicações que nescessitam de baixa latencia e com alta carga na rede

Opção 2- Spread - Espalhar instancias em varias AZs
![[Pasted image 20250410172928.png]]
Bom para aplicaçoes que nessecitam minimizar as falhas(falhas isoladas umas das outras) e nescessitam de alta disponibilidade

Opção 3 - Partition - criar varias partições com instancias ec2
![[Pasted image 20250410173305.png]]
cada partição representa um Rack de servidor da aws

a diferença entre esse é o spread é que podemos ter mais instancias EC2 em cada região, por volta de centenas

Usado em aplicações big data que funcionam em partiçoes