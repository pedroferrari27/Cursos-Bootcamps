---
tags: AWS-SERVICE-INTEGRATION, AWS-SQS
source: "[[SQS]]"
created: 19-05-2025
---
![[Pasted image 20250519174313.png]]

quando um consumidor faz um request da fila, ele pode opcionalmente esperar mais um pouco para mensagem chegarem se não tiver mensagens la presentemente. é chamado de Long Polling. isso ajuda por reduzir o numero de chamadas de API feitas ao SQS melhorando a eficiencia e a latencia da sua apliacação 