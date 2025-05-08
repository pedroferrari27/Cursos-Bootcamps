---
aliases: 
tags:
  - AWS-EC2
---
Creation : 14th April 2025
Last Modified : 14th April 2025
___

exemplo:
![[Pasted image 20250414154039.png]]

com o load balancing cross-zone, o trafego será distribuído igualmente a todas as instancias EC2 mesmo em AZs diferentes.

sem ele, a carga é dividida igualmente DENTRO da AZ, ou seja, haverá load balancig apenas do trafego na regiao. como no exemplo, a AZ1 acaba passando mais carga as suas instancias e no AZ2 acabam recebendo menos, isto por que a distribuição da carga para de trafego não é balanceada no geral e apenas na regiao

![[Pasted image 20250414154515.png]]
