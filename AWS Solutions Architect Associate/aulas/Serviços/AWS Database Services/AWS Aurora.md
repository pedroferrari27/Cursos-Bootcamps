---
tags:
  - AWS-RDS
---
---
Creation : 14th April 2025
Last Modified : 14th April 2025
___
É uma Engine de SQL proprietária da Amazon, que diz ser criada com cloud em mente e tem uma performance melhor neste parâmetro

pode ser utilizado PostgreSQL ou Mysql nos padrões da AWS AURORA(o que quer dizer que os drivers irão funcionar como se fossem no PostgreSQL ou Mysql)

o armazenamento escala automaticamente em escalas de 10Gb, até 128Tb

A recuperação de falhas é instantânea, já que tem apetrechos para isso nativamente, tornando uma engine de alta disponibilidade

replicas de leitura podem ser mais rapidas

é cerca de 20% mais caro q as outras opções, porem é mais eficiente, então pode chegar a ser mais barato


![[Pasted image 20250414172815.png]]

![[Pasted image 20250414173005.png]]

um mestre e varias replicas de leitura. o armazenamento é replicado, com auto correções(self-healing) , de expansão automática , e separado em múltiplos blocos pequenos

a Aurora utiliza writer Endpoint e Reader endpoint, que são endpoints que o usuário pode se conectar ao mestre(no caso de writer) e as replicas(no caso de read). o Db se conecta automaticamente ao endpoint correspondente para a conexão com o usuário.

há de se notar que há Load balancing na parte da conexão, para determinar qual db ou replica se conectará.

![[Pasted image 20250414173602.png]]

vantagens : 
![[Pasted image 20250414173655.png]]

[[Aurora Advanced Concepts]]

[[Aurora Backups]]