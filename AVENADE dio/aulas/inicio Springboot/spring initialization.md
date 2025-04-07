---
tags:
  - SPRINGBOOT
---
---
Creation : 27th March 2025
Last Modified : 27th March 2025
___
para criar um ambiente spring , é necessário acessar https://start.spring.io/

e criar um pacote. lembrando de verificar a instalar a versão do jdk certo.

as dependências são os starters, que podem ser usados

ao abrir, o primeiro passo é setar o jdk para o correto, então acessar o .aplication, que esta em src/main/java/(nome da pasta do projeto/)/nomedoprojeto.aplication

podemos ler no pom.xml a inicialização do springboot, que deve estar como:

(parent>  
    <groupId>org.springframework.boot</groupId>  
    <artifactId>spring-boot-starter-parent</artifactId>  
    <version>3.4.4</version>  
    <relativePath/> <!-- lookup parent from repository -->  
</parent>

que é o starter do springboot com as dependências também no XML

também temos a classe de testes na pasta testes já setada, poem para fazer testes mais funcionais sera necessário alterar depois 

também é criado o arquivo [[aplication.properties]] ,na pasta resources, que armazena as propriedades e configurações que fazemos no projeto

importante observar que dentro do contexto de springboot, não podemos apenas criar instancias de objetos, usando o new, devemos inicia-los como Beans, o que podemos fazer com o auxilio do [[CommandLineRunner]] em um [[Componentes]]