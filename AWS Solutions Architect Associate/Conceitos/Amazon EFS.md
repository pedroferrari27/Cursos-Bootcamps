---
aliases:
  - Elastic File System
tags:
  - AWS-EC2
  - AWS-STORAGE
---
---
Creation : 10th April 2025
Last Modified : 10th April 2025
___

EFS(Elastic File System) é um sistema de arquivos de rede (NFS) que podemos ligar a uma ou varias instancias EC2 , e tem o poder de ser utilizado em Múltiplas AZs , que é a grande vantagem em relação a EBS.

Tem alta disponibilidade e escalabilidade, porem custam bem caro, e so se paga o uso.

![[Pasted image 20250410190600.png]]
Caso de uso são : manejamento de conteúdo, serviços web, compartilhamento de dados, Wordpress.
![[Pasted image 20250410190748.png]]
apenas compatível com linux, necessita de um grupo de segurança.

o sistema de arquivos escala automaticamente.

tipos de EFS :  Performance:

![[Pasted image 20250410191121.png]]
proposito geral para usos sensitivo a latencia, como web servers.
max I/O- quando podemos ter maior latencia e througput , porem ALTAMENTE PARALELO, então é util para Big Data e processamento de media


e em armazenamento: 

![[Pasted image 20250410191746.png]]
one-zone limita o escopo para uma região só, ou seja , uma AZ só, se for o caso de uso, pode salvar bastante em custos

usar o one-zone em ambientes de desenvolvimento e Regional(multi AZ) para produção, para garantir disponibilidade.



para ligar uma instancia EC2 a uma file system.

na criação da instancia : ![[Pasted image 20250410192624.png]]
selecionar uma subnet, então:

![[Pasted image 20250410192727.png]]

![[Pasted image 20250410192738.png]]

![[Pasted image 20250410193023.png]]

lembrando que para acessar os arquivos armazenados, devemos utilizar(armazenar arquivos ou deletar) no mount point, assim como no print



