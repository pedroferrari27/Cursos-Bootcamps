---
aliases: 
tags:
  - AWS-S3
---
Creation : 13th May 2025
Last Modified : 13th May 2025
___



![[Pasted image 20250513160302.png]]

esses são os tipos de bucket S3, em ordem de mais rápido - para armazenamento e leitura rápido e mais caro, até o mais lento- lento- para arquivação e com muito pouco acesso, mais caro.

podemos mover arquivos para tipos diferentes de bucket de acordo com Life cycle rules, geralmente usamos isso para mudar o tipo de armazenamento de um arquivo para um bucket mais barato quando o acesso a esses arquivos se torna mais infrequente

![[Pasted image 20250513160830.png]]

outra opção é para configurar a deleção automática de arquivos velhos ou logs

exemplos:

![[Pasted image 20250513161011.png]]
![[Pasted image 20250513161129.png]]


podemos usar o S3 Analytics para ajudar a analisar e alocar arquivos nos tipos de bucket certos
![[Pasted image 20250513161420.png]]

