---
tags:
  - AWS
  - AWS-EC2
---
Creation : 11th April 2025
Last Modified : 11th April 2025
___

Load Balancing é o ato de distribuir a Carga(load) igualmente para vários trabalhadores ou instancias

no cloud load balance são servidores que direcionam o trafego e a carga para instancias diferentes.

![[Pasted image 20250411181451.png]]

vantagens:
![[Pasted image 20250411181540.png]]
expor para um único ponto de acesso DNS, prover HTTPS, separar trafego publico do privado, realizar checks de saude da rede alem da divisão de carga são pontos essenciais em muitas aplicações , o que leva a seu grande uso.

O ELB (elastic load balancer) é um serviço manejado pela AWS, com poucas opções de configuração do usuário.

As checagens de saude da rede são todas abertas por uma porta e rota especifica do servidor AWS ELB.
![[Pasted image 20250411182015.png]]


existem 4 tipos de load balancers da AWS:
![[Pasted image 20250411182157.png]]



![[Pasted image 20250411182251.png]]
para o uso de load balancers nas instancias, temos como no exemplo, um grupo de segurança própio do load balancer.  neste, podemos ter acesso do usuário de forma normal nas portas especificadas.

no entanto, no grupo de segurança da instancia, este deve ser apenas acessível pelo load balancer, como no exemplo.

