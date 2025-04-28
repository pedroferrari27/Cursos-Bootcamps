---
aliases: 
tags:
  - AWS
  - AWS-RDS
---
Creation : 14th April 2025
Last Modified : 14th April 2025
___

![[Pasted image 20250414174307.png]]

se temos um uso muito grande de reads, serão criados novas instancias com o auto scaling, então o Endpoint pode ser estendido também para acomodar o maior numero de instancias

![[Pasted image 20250414174556.png]]

podemos também criar  Endpoints customizados, geralmente usados quando temos algumas replicas mais potentes ou largas que queremos usar para um proposito especifico, assim podemos acessá-las por um endpoint separado

![[Pasted image 20250414174811.png]]

Aurora pode ser usado no modelo Serverless da AWS , assim n precisamos provisionar os servidores, estes sendo manejados pela AWS.

![[Pasted image 20250414175338.png]]

O Aurora pode ser usado no modo global, com replicas em outras região, ou no modelo global database: com uma região principal (read/write) e 5 regiões secundarias com replicas(apenas leitura, 16 replicas cada)

isso ajuda com a latência, e a replicação através de regiões será de menos de um segundo

![[Pasted image 20250414175439.png]]

a aurora também permite uso de predições SQL baseada em machine learning, usando os serviços de ML da AWS

