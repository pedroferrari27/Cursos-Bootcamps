---
tags: []
---
---
Creation : 9th May 2025
Last Modified : 9th May 2025
___
![[Pasted image 20250509165741.png]]


para acelerar a criação de novas instancias da nossa aplicação, podemos utilizar algum padrões para facilitar a configuração e o deploy de novas instancias da aplicação.

![[Pasted image 20250509165935.png]]

para instancias EC2, podemos configurar uma imagem com tudo o que precisamos já instalado e preparado no AMI(amazon image), assim quando criamos uma nova instancia já temos as dependências prontas e instaladas.

podemos também passar User data na criação da imagem para setar o que precisamos.

como o Elastic Beanstalk podemos realizar os dois juntos.

para databases RDS , podemos criar um snapshot dela e utilizar na criação de uma nova instancia, assim os schemas e dados já estarão prontos.

para volumes EBS , podemos usar snapshots também para passar dados .
