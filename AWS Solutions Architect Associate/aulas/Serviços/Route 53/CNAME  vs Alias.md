---
aliases: 
tags:
  - AWS-ROUTE53
---
Creation : 8th May 2025
Last Modified : 8th May 2025
___

quando usamos um serviço AWS , muitas vezes expomos algum domínio AWS, e queremos mapear este recurso para um domínio nosso, para podermos acessar usando nosso domínio.

para isso temos 2 opções, usar recurso DNS CNAME ou o recurso Alias

![[Pasted image 20250508161431.png]]

Com o CNAME, podemos mapear qualquer nome de domínio a outro domínio, detalhe que só funciona para domínios não raiz.

já o Alias é um recurso exclusivo da AWS, gratuito e com checagem de saude, que possibilita mapear um nome de domínio a um recurso AWS(ou um domínio da AWS). e este funciona para domínios raiz e não raiz

![[Pasted image 20250508161809.png]]

importante notar que não podemos setar o TTL com o alias

alguns recursos que podemos usar o ALIAS:

![[Pasted image 20250508161910.png]]

Importante: NÃO FUNCIONA COM DOMÍNIOS DO EC2 DNS, mas podemos usar um alias para um load balancer para encontrar., também util quando queremos usar o root domain

