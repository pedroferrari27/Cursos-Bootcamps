---
tags:
  - SPRINGBOOT
  - JAVA
---
---
Creation : 27th March 2025
Last Modified : 27th March 2025
___

quando usar @Bean ou quando usar o @Component para criar objetos gerenciados pelo container.

dica: usamos Component nas aplicações quando temos acesso ao código fonte, e então esse deve ser provido por uma injeção.
quando n temos acesso ao codigo fonte, usamos uma bean

para podermos usar componentes externos ,como bibliotecas externas , deveremos usar os Beans para criar e injetar essa dependência nos componentes. para fazer isso, podemos fazer de duas formas:

1- instanciar o componente externo dentro da classe principal! da aplicação 
![[Pasted image 20250327173739.png]]
como feito na parte em highlight
ou 

2- criar uma classe onde faremos esse processo em todos os componentes externos nescessarios, nomeadas geralmente com "Beans" ou "beansfactory"

assim, agruparemos todas essas classes externas, que seriam os Beans, em uma classe só
![[Pasted image 20250327174526.png]]
@configuration só é nescessario em algumas versões do spring

no fim, usamos component quando usamos uma classe provida através de uma injeção