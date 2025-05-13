---
tags:
  - AWS
---
---
Creation : 9th May 2025
Last Modified : 9th May 2025
___
![[Pasted image 20250509164011.png]]

temos a camada do banco de dados, igual ao case 2:

![[Pasted image 20250509164146.png]]
no caso optamos usar o aurora ao invés do RDS por sua fácil escalabilidade,porem custa mais.

guardando imagens: ![[Pasted image 20250509164409.png]]
porem, quando usamos varias instancias, teremos as imagens em volumes EBS diferentes para cada instancia, podendo causar falhas:

![[Pasted image 20250509164524.png]]

então deveremos usar uma solução centralizada de armazenamento, para isso usamos o EFS(elastic file system)

![[Pasted image 20250509164715.png]]



![[Pasted image 20250509170642.png]]