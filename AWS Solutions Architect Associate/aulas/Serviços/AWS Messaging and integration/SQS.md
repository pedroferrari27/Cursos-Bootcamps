---
aliases: 
tags:
  - AWS-SERVICE-INTEGRATION
  - AWS-SQS
created: 19-05-2025
---
é um sistema de filas, ou Queues, dando o nome do serviço SQS(Simple Queuing Service)

![[Pasted image 20250519170826.png]]

temos varios estilos de fila, começamdo pela Padrao
![[Pasted image 20250519171046.png]]
principal serviço para desacoplar aplicações

tem THROUGHPUT ILIMITADO , e BAIXA LATENCIA , porem tem uma limitaçaõ de mensagens pequenas, até 256KB

duração padrao retenção de mensagens

como funcionam as mensagens

![[Pasted image 20250519171449.png]]
![[Pasted image 20250519171811.png]]
![[Pasted image 20250519172107.png]]

podemos tambem organizar as queues em instancias EC2 para processar as mensagens, e ainda podemos configura-las em um ASG
![[Pasted image 20250519172516.png]]

usando a metrica da quantidade aproximada de mensagens para disparar um alarme no cloudwatch

um exemplo de arquitetura que usa o SQS para desacoplar partes da sua aplicação

![[Pasted image 20250519172946.png]]

assim podemos usar instancisas EC2 e arquiteturas especificas para o frontend, e instancias mais poderosas para processamento no backend, assim o SQS permite usarmos e sincronizarmos varias partes da nossa aplicação de forma robusta.

![[Pasted image 20250519173208.png]]
temos segurança em transito com https e estacionaria com KMS.

temos access policies que funcionam igual a S3 bucket policies

[[SQS Message Visibility Timeout]]

[[SQS Long Polling]]

[[SQS FIFO Queue]]

[[SQS + ASG]]