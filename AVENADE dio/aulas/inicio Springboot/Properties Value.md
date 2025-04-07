---
tags:
  - SPRINGBOOT
---
---
Creation : 27th March 2025
Last Modified : 27th March 2025
___
podemos fazer algumas atribuições de valores da nossa aplicação no arquivo [[aplication.properties]]  para definir alguns valores padrao que geralmente não alteraremos durante a execução, valores default

utilizaremos a anotação @value  para isso

exeplo, ao invez de declarar explicitamente como: 

![[Pasted image 20250327181521.png]]

podemos fazer :
![[Pasted image 20250327181551.png]]

e então declarar os valores no aplication.properties:
![[Pasted image 20250327181645.png]]

podemos tambem adicionar um valor defalut padrao, para caso haja erros no codigo, ainda poder executar com um nome padrao, como:
![[Pasted image 20250327182017.png]]
onde o valor default é o depois do parenteses

