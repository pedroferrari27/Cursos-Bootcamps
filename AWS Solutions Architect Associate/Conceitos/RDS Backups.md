---
aliases: 
tags:
  - AWS-RDS
---
Creation : 14th April 2025
Last Modified : 14th April 2025
___

![[Pasted image 20250414180122.png]]

Os backups são automáticos e diários, e podem ser mantidos até 35 dias, e podemos ser restaurados a qualquer ponto.

podemos fazer snapshots manuais, e assim podemos manter indefinidamente estes.

geralmente quando paramos uma DB RDS, ainda pagamos o armazenamento.  se formos parar por um longo tempo, a melhor opção é fazer um snapshot e restaurar quando for preciso, para economizar os custos

![[Pasted image 20250414180810.png]]

para RDS,na restauração é nescessario apenas o backup armazenado no S3