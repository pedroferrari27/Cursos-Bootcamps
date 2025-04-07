---
tags:
  - ANGULAR
  - "#TYPESCRIPT"
---
---
Creation : 3rd April 2025
Last Modified : 3rd April 2025
___
Typescript é um superset de javascript , ele permite tipar as coisas no js, ou seja , podemos declarar variaveis e objetos.

alem da possibilidade de criar interfaces e enums mais faceis. tambem permite visualizar erros em tempo de desenvolvimento.

todo código em typescript é compilado e transformado em um codigo javascript no final.
conhecido como transpilação

instalando-

npm install typescript

para compilar um arquivo tpescript, prescisamos fazer o seguinte

usar: npx tsc (nome do arquivo)

isso faz a tradução disso para javascript

é importante criar tambem um arquivo de configuração para o projeto com typescript:

usando npx tsc --intit

esse arquivo vai configurar todas as propiedades do typescript

temos os tipos primitivos number, null e undefined e void , any 
obs: n existe float em typescript

podemos fazer variaveis do tipo object, com varias propiedades,como uma struct
utilizando o Type object, conseguimos ter mais previsibilidade do que apenas com let object

assim se declara arrays 
![[Pasted image 20250403145344.png]]

podemos fazer tambem arrays de multiplos tipos
![[Pasted image 20250403145411.png]]

tambem temos tuplas

temos tambem os metodos de manipulação de arrays igual a js, como reduc,map e pop

podemos usar funções normalmente em typescript, porem temos tambem funções de multitipos:

![[Pasted image 20250403150150.png]]

podendo receber e retornar mais de um tipo

temos funções async tambem:
![[Pasted image 20250403150318.png]]

sempre q fazemos uma função async, temos que mandar tambem uma promise, e esta promisse tambem pode ser multitipo


podemos tambem fazer interfaces(ou interface)

![[Pasted image 20250403150527.png]]

funcionam igual ao type, porem usamos o type para tipar objetos e interface é mais utilizada com classes.

trabalhar com interfaces como se fossem contratos.


lembramos que temos os modificadores de acesso :public, private e protected

Generics:
![[Pasted image 20250403152806.png]]
aqui temos resultados variados por conta de typos diferentes que pode receber, então:

![[Pasted image 20250403153010.png]]

podemos deixar em Generico, com o T[], assim podemos definir o tipo que queremos usar na chamada de função (o <number[]> ou o <string[]> no caso)



para facilitar as coisas, podemos usar o npm install ts-node-dev , que é um servidor local de typescript, para n prescisarmos ficar compilando direto

assim, podemos usar apenas o npm run start:dev para rodar.
quando detectar alterações  , ele atualiza em tempo real




Decorators:

os decorators ainda são uma função experimental do ts, presccisamos habilitala nas configurações primeiro

quando vc decora uma função para ser usada em outro lugar.
![[Pasted image 20250403153738.png]]

![[Pasted image 20250403154136.png]]

podemos fazer decorators de atributos tambem

![[Pasted image 20250403154316.png]]

![[Pasted image 20250403154608.png]]

