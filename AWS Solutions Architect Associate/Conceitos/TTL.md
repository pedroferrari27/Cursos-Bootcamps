---
aliases: 
tags:
  - AWS-ROUTE53
---
Creation : 8th May 2025
Last Modified : 8th May 2025
___



feito para atualizar os dados dos DNS Records no servidor DNS.

se o TTL for muito longo, como um dia, os clientes que acessam o domínio podem ter informações atrasadas ou desatualizadas até esse tempo, assim a cada dia é atualizado.

se o TTL for muito curto, como um minuto, as informações serão sempre atualizadas rapidamente, porem gera muito trafego no servidor DNS, causando altos custos.

![[Pasted image 20250508155157.png]]


quando fazemos uma requisição a algum record ou entrar no domínio, recebemos o record e ele é armazenado na cache do computador por um período de tempo, que é o TTL, então qualquer requisição feita para o mesmo record ou domínio feita pelo mesmo computador receberá a mesma resposta enquanto estiver no período do TTL, e quando este espirar, só então o computador baixará as novas informações do servidor .


