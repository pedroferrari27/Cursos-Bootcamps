---
aliases: 
tags:
  - AWS-SERVICE-INTEGRATION
  - AWS-SNS
created: 19-05-2025
---
O SNS(Simple Notification Service) permite transmitir uma mensagem para varios clientes/serviços de uma unica vez

![[Pasted image 20250519175514.png]]

funciona com Topicos. voce publica a mensagem para um topico e esta sera enviada a todos que se inscreveram nesse tópico, similar ao que jornais fazem

![[Pasted image 20250519175738.png]]

o SNS tambem pode receber eventos e avisos de outros serviços e assim publicalos e envia-los para frente

![[Pasted image 20250519175857.png]]

![[Pasted image 20250519175958.png]]

em segurança, ela usa os mesmos pafroes do SQS

![[Pasted image 20250519180044.png]]

[[SNS + SQS Fan Out Pattern]]

![[Pasted image 20250519180909.png]]



