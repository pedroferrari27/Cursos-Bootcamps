---
aliases: 
tags:
  - AWS-S3
  - AWS-SECURITY
---
Creation : 13th May 2025
Last Modified : 13th May 2025
___
temos 4 formas de criptografar objetos em buckets S3

do lado do servidor:

1- criptografia com chaves S3 manejadas pela AWS (SSE-S3)---- essa opção é ativa por padrão

2- criptografia por chaves KMS (SSE-KMS)

3-criptografia por chaves fornecidas pelo usuário(SSE-C)

e alem disso temos criptografia por lado do cliente

quando usamos cada opção:

[[SSE-S3]]

[[SSE-KMS]]

[[SSE-C]]

[[S3 Client-side encryption]]

também temos o uso do [[TSL Certificates]] para criptografia em transito



