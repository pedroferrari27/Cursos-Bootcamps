---
tags:
  - SPRINGBOOT
---
---
Creation : 27th March 2025
Last Modified : 27th March 2025
___

Usamos com o prefixo @ConfugurationProperties

e utiliza o [[aplication.properties]].

é usado para configurar algumas coisas para componentes e escopos.

então teremos um Bean de configuração centralizado em que todos os seus valores vão vir do [[aplication.properties]] 

ao invés de criar um @value igual para cada componente que usa do mesmo contexto,criamos um só centralizado.

como por exemplo , as informações do remetente de uma mensagem como nome e  email relacionados a esse, ao invez de usar esse em cada um dos componentes e beans que usariamos essas informação, usaremos o @ConfigurationProperties para isso

![[Pasted image 20250327183505.png]]
![[Pasted image 20250327183526.png]]

esses só podem ser usados neste componente.
para poder usar em outro, criaremos um bean de configuração, uma classe nova"remetente"

![[Pasted image 20250327183719.png]]
e criaremos getters e setteres para este


então usaremos o configurationproperties para achar esses atributos no aplication.propeties
![[Pasted image 20250327184145.png]]

com os valores identificados pelo prefixo no aplication.properties
![[Pasted image 20250327184247.png]]



