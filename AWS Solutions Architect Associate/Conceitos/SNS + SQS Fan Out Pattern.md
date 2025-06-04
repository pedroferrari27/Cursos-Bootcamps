---
tags: AWS-SERVICE-INTEGRATION, AWS-SNS
source: "[[SNS]]"
created: 19-05-2025
---
É Um padrão de uso, onde usamos o SNS para passar mensagens para multiplos SQS Queues 

![[Pasted image 20250519180354.png]]

util para passar mensagems atravez de regions. é nescessario liberar o acesso no SQS policy.

exemplo:

![[Pasted image 20250519180536.png]]
![[Pasted image 20250519180609.png]]
![[Pasted image 20250519180646.png]]
![[Pasted image 20250519180720.png]]

podemos usar para filtrar mensagens tambem

![[Pasted image 20250519180903.png]]
