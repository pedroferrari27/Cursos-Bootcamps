---
aliases:
  - Scopos
tags:
  - JAVA
  - SPRING
---
---
Creation : 26th March 2025
Last Modified : 26th March 2025
#JAVA #SPRING
___

![[Pasted image 20250326091440.png]]

Escopos são conceitos usados, Singleton e Prototype são conceitos do ambiente spring, Request,Session e Global são conceitos HTTP

Singleton - trabalhamos com apenas um Objeto, que sera compartilhado pela minha aplicação quando solicitado, o container do IOC do spring só define um objeto para toda a aplicação.

Prototype - abre uma nova instancia a cada requisição de um objeto/referencia a um container (não se pode enviar um mesmo objeto ou referencia para camadas ou cenários diferentes na minha aplicação), um novo objeto é criado a cada solicitação de container

HTTP Request - um Bean será criado a cada requisição http(o objeto existirá apenas enquanto a requisição estiver em execução)

HTTP Session - Um bean será criado para a sessão de usuário (podemos acessar a mesma solicitação varias vezes para testar escopos específicos da  web)

HTTP Global - cria um Bean para o ciclo de vida do contexto da aplicação, e objetos são compartilhados por toda a aplicação




