---
tags:
  - AWS
---
---
Creation : 9th May 2025
Last Modified : 9th May 2025
___
![[Pasted image 20250509170732.png]]

como desenvolvedor, temos varias tarefas para manejar e manter quando trabalhamos com a AWS, e a maior parte das vezes usamos arquiteturas similares: 
![[Pasted image 20250509170642.png]]

então para ajudar a manejar isso temos o Elastic Beanstalk

![[Pasted image 20250509171054.png]]

é uma visão para desenvolvedor, onde podemos ver e usar todos os componentes(serviços) da AWS, e tenta fazer o manejamento automático deste.

assim, o desenvolvedor n deve se preocupar muito em alterar a estrutura , e pode focar na criação de código, mas caso necessário, pode acessar o controle de cada um dos componentes. 

o Beanstalk é gratuito, porem os componentes que este maneja não são,então criara custos.

os componentes:
![[Pasted image 20250509171524.png]]

assim podemos manejar aplicações, e setar o ambiente de desenvolvimento desta, manejamento ambientes de teste e de produção.

suporta varias linguagens:
![[Pasted image 20250509171711.png]]
![[Pasted image 20250509171751.png]]
o web server tier é um estilo mais padrão, e o worker tier é par realizar grande cargas de trabalho baseados em uma fila SQS



temos dois tipos de deploy do Beanstalk

![[Pasted image 20250509171832.png]]


