---
aliases: 
tags:
  - AWS-S3
---
Creation : 13th May 2025
Last Modified : 13th May 2025
___
![[Pasted image 20250513163015.png]]

cria-se notificações quando realizamos uma ações no S3, como criar objetos, replicar objetos,etc. podemos usar essas notificações para acionar ações de outros serviços que usam esses arquivos no bucket.

![[Pasted image 20250513163235.png]]
para poder utilizar os recursos, precisamos dar permissões de ACESSO AO RECURSO S3 para esses serviços, assim eles podem agir com a notificações.

os eventos passam para o novo serviço Amazon Event Bridge, onde são armazenados todos os eventos, e podemos criar ações em vários serviços e manusear essas notificações

![[Pasted image 20250513163616.png]]