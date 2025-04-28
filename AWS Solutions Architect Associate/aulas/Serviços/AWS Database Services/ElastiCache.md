---
tags:
  - AWS
  - AWS-RDS
---
---
Creation : 14th April 2025
Last Modified : 14th April 2025
___
ElastiCache é um serviço manejado pela AWS , para manejar tecnologias de Cache de Bancos de dados , que são Redis ou Memcached

![[Pasted image 20250414182819.png]]

caches são memorias de alta performance e baixa latência, porem de tamanho limitado e caras. elas ajudam na performance de DB de com altas cargas de trabalho.

AWS faz o setup, configuração, monitoramento, backups e manuntenção

requer grande reestruturação da sua base de Código para utilizar

exemplo:
![[Pasted image 20250414183240.png]]


as caches podem ser utilizadas para armazenamento de Sessões de usuário também

![[Pasted image 20250414183418.png]]
tornando a aplicação Stateless

diferenças entre Redis e Memcached:

![[Pasted image 20250414183618.png]]

Redis utiliza replicas de leitura e tem alta disponibilidade, suporta Multi-AZ e durabilidade de dados, suporta Sets e Sorted sets.

Memcached é feito para particionamento de dados e Multi-threading , backups e restores são no modelo Serverless

não é nescessario conhecer as diferenças para a prova Solutions architect associate.

[[Conceitos Elasticache Solutions Arquitect level]]

