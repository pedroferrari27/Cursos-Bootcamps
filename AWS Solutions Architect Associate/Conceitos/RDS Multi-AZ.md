---
aliases: 
tags:
  - AWS
  - AWS-RDS
---
Creation : 14th April 2025
Last Modified : 14th April 2025
___

Outra opção de Replicas, porem este é feito para RECUPERAÇÃO DE FALHAS

a replica fica em Stand-by, sem interaçoes, e replica SINCRONAMENTE as alterações no banco de dados base. então, quando há falha no db base, a replica se torna o DB base, assim assegurando a disponibilidade do acesso ao banco

![[Pasted image 20250414171217.png]]

vale lembrar que este não é usado para escalamento