---
aliases: 
tags:
  - AWS-S3
---
Creation : 13th May 2025
Last Modified : 13th May 2025
___

por padrão , o S3 escala para uma performance alta
![[Pasted image 20250513164355.png]]

então devemos otimizar a performance de acordo com como usarmos

para uploads, temos 2 formas de melhorar a performance:
![[Pasted image 20250513164656.png]]

upload multi-parte: onde dividimos um arquivo grande em varias partes para fazer o upload paralelamente para o bucket S3. assim melhoramos a performance.
deve ser usado para arquivos maiores de 5 GB.

S3 Transfer acceleration:
transmitimos nossos arquivos para um Edge Location primeiro pela internet publica, e a partir dai este irá enviar para o bucket destino por rede privada, tornando o upload mais rápido

para Downloads podemos fazer o que é chamado byte - range fetches.

a ideia é similar ao upload multiparte, mas para o download. nos fazemos o request por pequenas partes do arquivo, separados em bytes, e assim podemos fazer downloads mais rápido de pedaços pequenos , como headers e tails de arquivos, ou podemos usar para dividir o arquivo em pequenas partes e fazer requests em paralelo, assim baixando o arquivo inteiro utilizando do paralelismo e melhorando a performance de download

![[Pasted image 20250513165330.png]]
