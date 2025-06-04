---
aliases: 
tags:
  - AWS
created: 23-05-2025
---

Cloudfront:

used for CDN(Content delivery network)

melhora a experiencia de usuário colocando seu conteúdo na cache nas Edge locations, melhorando a performance em locai mais afastados na região

tambem provem uma proteção  a DDOs por tornar seu serviço global.

![[Pasted image 20250523172854.png]]

usaremos origens, que seria de onde origina seus dados, como se fosse um backend.

![[Pasted image 20250523173010.png]]

![[Pasted image 20250523173055.png]]

![[Pasted image 20250523173156.png]]

diferença entre cloudfront e disponibilização em multi-regiao
 ![[Pasted image 20250523173250.png]]

Podemos também usar origens VPC

[[Cloudfront VPC Origins]]

também podemos criar uma lista de restrição de geolocalização, para não disponibilizar seu conteúdo em certas localizações

notar que o preço da transferência  de dados muda conforme cada edge location, e cada edge location usada incorre custo.

quando atualizamos nosso back-end, ainda podemos ter erros de cache misses até o TTL expirar e os recursos atualizarem no cloudfront. porem podemos forçar um reset do cache se nescessario

![[Pasted image 20250523174055.png]]


Global accelerator:

![[Pasted image 20250523174217.png]]


para acessar um recurso a distancia pela internet publica, acabamos tendo que fazer varias conexões até chegar no destino, criando alta latencia, e queremos eliminar este problema.

![[Pasted image 20250523174437.png]]

de uso geral, usamos o Unicast IP. o Global accelerator tenta ajudar utilizando o Anycast IP.

![[Pasted image 20250523174633.png]]
direcionando o trafego para as edge location, que podem fazer uma conexão direta e privada,reduzindo latencia. assim teremos apenasque passar um ip para essas edge locations.

![[Pasted image 20250523174848.png]]

diferenças.

![[Pasted image 20250523175022.png]]

o cloudfront tenta servir conteudo na Cache diretamente da Edge location, enquanto o accelerator apenas melhora a transmissão, mas o serviço ainda é hosteado em outro lugar.

cloudfront é melhor para conteudo cacheavel, enquanto o accelerator é melhor para conteudos não HTTP , como jogos(UDP,TCP)