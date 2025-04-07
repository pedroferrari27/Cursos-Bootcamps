---
aliases: 
tags:
---
---
Creation : 27th March 2025
Last Modified : 27th March 2025
___


inicializados com @Component


aqui esta uma demonstração de como usar/injetar uma dependência do do componente Calculadora para a aplicação., usamos o  [[CommandLineRunner]] para fazer a instanciação e o @autowired para injetar a dependência de um componente ao outro
![[Pasted image 20250327165619.png]]

assim, o container quando for inicializado, ele reconhece o conponente calculadora, e que o componente Myapp prescisou atravez do @autowired fazer a injeção de dependencias. assim , esperamos ter uma instancia do objeto calculadora ao rodar o container como dependencia do Myapp 
