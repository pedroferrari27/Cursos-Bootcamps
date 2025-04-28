---
aliases: 
tags:
  - AWS
  - AWS-SECURITY
---
Creation : 14th April 2025
Last Modified : 14th April 2025
___
its Encryption certificates for the files in transit(in-flight encryption)

![[Pasted image 20250414154753.png]]
![[Pasted image 20250414154859.png]]

Suporte ao SNI apenas no ALB e NLB
![[Pasted image 20250414155048.png]]


para adicionar um certificado SSL/TSL na nossa ALB, prescisamos criar umm listener HTTP na porta 443

![[Pasted image 20250414155632.png]]

![[Pasted image 20250414155704.png]]

![[Pasted image 20250414155751.png]]

Já no NLB , podemos settar um listener direto no TLS[[Conection Draining]]

![[Pasted image 20250414155908.png]]
