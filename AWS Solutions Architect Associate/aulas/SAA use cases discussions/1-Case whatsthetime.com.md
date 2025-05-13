---
tags:
  - AWS
---
---
Creation : 8th May 2025
Last Modified : 8th May 2025
___
a ideia é hostear um site simples para mostrar o tempo para o cliente, em que podemos começar pequeno e aceitando atrasos, para então escalar verticalmente e horizontalmente e sem atrasos(downtime).  não sera nescessario uso de databases

![[Pasted image 20250509154437.png]]

POC(proof of concept)

![[Pasted image 20250509154528.png]]
podemos usar apenas um elastic IP  para a conexão dos clientes
começando a ter muito fluxo
![[Pasted image 20250509155134.png]]
escalamos a instancia verticalmente
![[Pasted image 20250509155218.png]]
com mais fluxo, devemos escalar horizontalmente

![[Pasted image 20250509155422.png]]
para facilitar o acesso dos clientes, para n ter que saber multiplos IPs para acessar as instancias, colocamos um DNS com route53

este approach é bom, porem, quando tivermos problemas e alguma instancia é inacessível, os clientes podem passar um bom tempo sem conexão(igual ao TTL),
então precisamos ajustar 

![[Pasted image 20250509155642.png]]

![[Pasted image 20250509155819.png]]
adicionamos um load balancer para assegurar a conexão. as instancias agora  etão em uma subnet privada e podemos escalar e deescalar, se comunicando com o load balancer que pode se comunicar com a internet publica.  o load balancer pode realizar checks de saude para direcionar os clientes para uma instancia estável com pouco downtime.  devemos mudar o tipo de record  DNS A para Alias record para comunicarmos com o load balancer pelo route53.

no entanto, criar e excluir instancias manualmente ainda é trabalhoso, então:
![[Pasted image 20250509160449.png]]
adicionamos um auto-scaling group.
no entanto, ainda estamos sucetiveis a falhas que afetam a AZ inteira, então:
![[Pasted image 20250509160640.png]]
implementamos o multiAZ para o load balancer e auto scaling group e colocamos o instancias em varias AZ .

ainda, se quisermos manter algumas instancias sempre rodando, como por exemplo sempre ter 2 instancias rodando em cada AZ para garantir acesso, podemos usar instancias EC2 reservadas.

![[Pasted image 20250509161125.png]]
