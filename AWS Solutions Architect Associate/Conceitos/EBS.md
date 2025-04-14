---
aliases:
  - Elastic Block Store
tags:
  - AWS-EC2
---
---
Creation : 10th April 2025
Last Modified : 10th April 2025
___

É o armazenamento de dados de uma instancia EC2. ,funciona com USB, que podemos ligar a sua instancia enquanto rodam para guardar dados

conhecida também como elastic block store (EBS)

Permite persistência de dados mesmo depois da terminação de uma instancia.

Temos que especificar o tamanho e espaço na criação, mas podemos aumentar também durante o uso

![[Pasted image 20250410180736.png]]

Ela é na pratica um network drive, ou seja, uma memoria virtual que requer uso da rede para ser utilizada, ou seja, n é um drive físico.
com isso temos essas características.

![[Pasted image 20250410180947.png]]

![[Pasted image 20250410181047.png]]

temos também a Opção delete on termination, que permite deletar os dados da EBS quando finalizamos uma instancia.

