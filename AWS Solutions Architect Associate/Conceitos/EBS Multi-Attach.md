---
aliases: 
tags:
  - AWS-EC2
---
---
Creation : 10th April 2025
Last Modified : 10th April 2025
___
permite ligar um volume EBS a mais de uma instancia EC2

![[Pasted image 20250410185435.png]]

todas instancias ligadas podem ler e escrever dados nessa EBS

apenas na mesma AZ apenas nos EBS tipo Io(IOPS optimized)

Até 16 instancias EC2

apenas possivel uso com sistemas de arquivos cluster-aware
