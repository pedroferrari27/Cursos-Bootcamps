---
aliases: 
tags:
  - AWS-ROUTE53
---
Creation : 8th May 2025
Last Modified : 8th May 2025
___

Usado para direcionar usuários de localidades especificas para certo recurso.

definimos um direcionamento especifico para uma localidade, pode ser um continente, pais ou estado , e quando não temos um caminho especificado, este direcionara para um recurso Default

assim podemos associar  um usuário que mora na geolocalização do brasil para um recurso com a versão brasileira da minha aplicação, e um usuário americano para um recurso com a versão americana da minha aplicação

diferente de por latência, usuários da localidade especifica serão direcionados sempre para o recurso associado com a localidade, mesmo com diferentes latências
![[Pasted image 20250508165232.png]]