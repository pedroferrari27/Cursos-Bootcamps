---
tags: AWS-SERVICE-INTEGRATION, AWS-SQS
source: "[[SQS]]"
created: 19-05-2025
---
![[Pasted image 20250519173628.png]]

quando uma mensagem é puxada por um consumidor, ela fica "invisivel" durante 30 segundos na fila, assim se outro consumidor tentar puxar mensagens nesse periodo ele não a verá e a processará. isso diz que 30 segundos é o tempo q a mensagem tem para ser processada , e se não for ela volta a ser visivel na fila e disponivel para ser puxada novamente.

se for muito baixo, podemos criar processamento duplicados de mensagens. se for muito alto, podemos gerar atrasos nos serviços
![[Pasted image 20250519174108.png]]
