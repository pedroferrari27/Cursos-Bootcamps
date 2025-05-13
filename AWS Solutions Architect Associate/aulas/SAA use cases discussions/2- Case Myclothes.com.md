---
tags:
  - AWS
---
---
Creation : 9th May 2025
Last Modified : 9th May 2025
___
![[Pasted image 20250509161251.png]]

já é uma aplicação que precisamos de salvar estados e que devemos utilizar um banco de dados.

com uma architetura igual ao caso anterior:
![[Pasted image 20250509161449.png]]
usuarios tem bom acesso ao site, mas podem acabar redirecionados de uma instancia a outra com todo acesso, o que pode resultar na perca dos dados da sessão do cliente , como no caso, um carrinho de compras. então:

temos duas opçôes : 
![[Pasted image 20250509161827.png]]
usar stickiness, que tenta preservar a sessão do usuário logado em, e tenta redirecionar o usuário na mesma instancia quando logar, ou:

![[Pasted image 20250509162059.png]]
usar cookies, assim, o cliente guarda os dados da sessão, como o carrinho de compras, e assim nossas instancias não precisam guardar informações da sessão,tornando elas stateless. no entanto temos algumas limitações: como as requisições HTTP ficarem mais pesadas, necessidade de tratamento de segurança dos cookies feito na instancia EC2, e que cookies não podem guardar muita informação.

podemos utilizar outro conceito também:

![[Pasted image 20250509162630.png]]
sessões de usuário em no servidor, nesse formato temos : o usuário mantem o cookie com o id de sessão dele , que é passado para as instacias. quando as instancias recebem , ela olha na sua cache, que armazena os dados da sessão do usuario de acordo com o id dele, e com isso consegue manter a sessão dele. assim usando o elasticahe podemos fazer sessões mais consistentes.


a partir disso, notamos que a maior parte dos usuários apenas visitam o site e vem suas informações, e isso causa grande carga na base de dados afetando performance, então necessitamos ampliar a capacidade de leitura de informações, e escalara a leitura, para isso:

![[Pasted image 20250509163228.png]]

podemos usar read replicas para auxiliar as operações no BD.

temos uma alternativa também:
![[Pasted image 20250509163432.png]]
Lazy loading, onde podemos colocar algumas informações pesquisadas na cache, e se não estiver la , utilizar o BD para Read/Write normalmente

para assegurar contra disastres, podemos colocar todas nossos serviçps em multi-AZ

![[Pasted image 20250509163647.png]]
os grupos de segurança
![[Pasted image 20250509163725.png]]

![[Pasted image 20250509163750.png]]


