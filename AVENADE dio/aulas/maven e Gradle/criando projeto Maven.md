---
tags:
  - JAVA
---
---
Creation : 31st March 2025
Last Modified : 31st March 2025
___

[[Maven]]

para iniciar um projeto, navegamos no cmd para o diretório que queremos criar, então usaremos o comando:

> mvn archetype:generate -DgroupId=Aprendendomaven -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false

com esas flags definimos o groupid(que seria o nome do package),o nome do app(DartifactD), a versão e o interactive mode.

então conseguimos abrir na IDE

a partir disso, podemos adicionar a nossas dependencias no [[pom.xml]]

nessa aula, colocaremos o mapestruct e mapstruct-processor

![[Pasted image 20250331150938.png]]
lembrando de dar sync no maven para salvar e baixar as dependencias
![[Pasted image 20250331152244.png]]

podemos usar o projectlombok para ajustar as versoes tbm

![[Pasted image 20250331152622.png]]

com todas as dependencias : ![[Pasted image 20250331155811.png]]

para o mapstruct e o lombok, prescisamos instalar os plugins correspondentes, e adicionar essas configuraçoes na build

![[Pasted image 20250331163856.png]]


com isso, ja podemos começar com o projeto, criando os packages e um DTO base usando lombok
![[Pasted image 20250331163654.png]]

depois criaremos a main 

dica, podemos escrever psvm no intellij para fazer o metodo main automatico

com isso, podemos usar o lombok para facilitar o uso
![[Pasted image 20250331164515.png]]

e com isso, o lombok criou os @getters,@setters,@tostring,@equalsandhashcode,@noargsconstructors, e preparou tudo aquilo com o @data

![[Pasted image 20250331164943.png]]

e agora criamos um model tbm

![[Pasted image 20250331165149.png]]

e depois adicionamos o @Data a este.


então
instanciamos esse model na main
![[Pasted image 20250331171610.png]]

