---
tags:
  - AWS
---
Creation : 11th April 2025
Last Modified : 11th April 2025
___

ALB é um load balancer que funciona na camada 7, ou seja , apenas com protocolo http 

USADO PARA TRAFEGO HTTP E HTTPS

este permite rotear por múltiplas aplicações http através de varias maquinas(chamadas de target group)

também faz o load balance para múltiplas aplicações na mesma maquina(containers)

suporta redirecionamentos (http para https) e web sockets.

![[Pasted image 20250411183154.png]]

![[Pasted image 20250411183238.png]]

assim, podemos rotear o trafego de usuários para a aplicação correta manejada por maquinas(target groups) diferentes de forma fácil

target groups podem consistir de: 
![[Pasted image 20250411183453.png]]
exemplo:
![[Pasted image 20250411183551.png]]


![[Pasted image 20250411183638.png]]

assim, a instancia EC2 não sabe o IP do cliente, mas consegue acessar com os headers que o ALB passa.

Podemos acessar e criar load balancers no menu EC2  na seção Load balancers.

para usar, precisamos criar um security group e um target group.

para o security group do load balancer, este deve pode receber e enviar trafego em http

no target group, adicionar as instancias EC2 ou outras opções

depois de criado, recebemos um DNS que podemos acessar para usar o Load Balancer

depois devemos mudar o grupo de segurança das instancias EC2 do target group para permitir apenas acesso pelo load balancer(permitindo comunicação apenas com o security group do load balancer), assim restringimos o acesso direto do usuário as instancias, deixando apenas possível pelo load balancer
![[Pasted image 20250411185623.png]]


no listener/ rule condition podemos manejar como faremos o roteamento e regras para rotear para cada instancia, alem de editar códigos de resposta
exemplo:![[Pasted image 20250411190010.png]]
