---
tags:
  - BANCO_DE_DADOS
  - SPRING
  - JAVA
---
---
Creation : 28th March 2025
Last Modified : 28th March 2025
___
[[AVENADE dio/Conceitos/Spring Data JPA|Spring Data JPA]]

nescessario para o uso do @Query e @Param


para criar uma classe usando jpa:

![[Pasted image 20250328153651.png]]

importante usar o @entity e seu import

então gerar um ID
![[Pasted image 20250328154008.png]]

neste caso usando um valor gerado pelo bd

agora definimos as colunas
![[Pasted image 20250328154523.png]]

obs: mudamos o nome da coluna do id por conta da geração.

agora podemos gerar os getters, setters E o tostring()

![[Pasted image 20250328161531.png]]

agora, a partir dessa classe, podemos usar o JPA para fazer nosso repository para esse usuario.

criando uma nova pasta para armazenar repositories, e então uma classe para isso

![[Pasted image 20250328155020.png]]

onde user é a classe original e integer é o tipo do ID dela.

então precisamos inicializar esta na aplicação principal (na main), usando o [[CommandLineRunner]]

para isso, criaremos uma classe para implementar o commandlinerunner
![[Pasted image 20250328155543.png]]

implementmos o metodo @run nescessario para a clr 

então vamos transformar em componente para injetar nosso UserRepository

![[Pasted image 20250328160450.png]]

então podemos criar uma instancia de objeto

![[Pasted image 20250328160854.png]]

lembrando de salvar no BD

podemos testar agora: 
![[Pasted image 20250328161313.png]]


