---
aliases: 
tags:
  - AWS-EC2
---
---
Creation : 8th April 2025
Last Modified : 8th April 2025
___

AWS has support for ipv4 and ipv6

com o IP publico , podemos nos comunicar pela internet com qualquer computador.
com IP privado podemos apenas nos comunicar na rede propiá, na intranet.

![[Pasted image 20250410171418.png]]
![[Pasted image 20250410171503.png]]


Elastic IP - quando começamos e paramos uma instancia EC2 , esta pode mudar o seu IP publico.Então podemos usar um elastic IP, que seria um IPpropio de propiedade sua que podemos acoplar a uma instancia EC2, de forma a manter um só ip

![[Pasted image 20250410171828.png]]

![[Pasted image 20250410171900.png]]
há um custo por alugar um ip. podendo ser um ipv4 padrao em uma instancia ec2, ou um elastic ip, que é mais caro
