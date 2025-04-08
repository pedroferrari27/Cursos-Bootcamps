---
tags:
  - "#AWS-EC2"
---
---
Creation : 7th April 2025
Last Modified : 7th April 2025
___
EC2-Ou Elastic Cloud Compute, e'a forma como podemos criar infraestrutura na AWS

permite alugar poder computacional para rodar seus programas e dados

![[Pasted image 20250407165219.png]]

podemos alugar uma maquina virtual com qualquer configuração pelo EC2

![[Pasted image 20250407165325.png]]
sobre os scripts de inicialização - bootstrap.
nesscessario o uso do sudo nestes
![[Pasted image 20250407165400.png]]

t2.micro faz parte do teste gratis,podemos usar até 750 horas por mes gratis deste

criando instancias no ec2

escolhemos o sistema operacional, então
![[Pasted image 20250407165823.png]]
key pair é nescessario para acesso por ssh
![[Pasted image 20250407170030.png]]

![[Pasted image 20250407170146.png]]

![[Pasted image 20250407170205.png]]

user data são argumentos e comandos que serão rodados apenaas na primeira  vez que for usado,na criação,e nunca mais no ciclo de vida da instancia
![[Pasted image 20250407170423.png]]
usamos o ipv4 publico para acessar nossa instancia

![[Pasted image 20250407170642.png]]

e usamos o ipv4 privado para acessar internamente na aws

o ip publico pode mudar quando reiniciamos a instancia.
tenhas certeza de usar http:/ ou https:/ antes de digitar o ip caso tenha optado pela opção

typos de instancias:

![[Pasted image 20250407171506.png]]

![[Pasted image 20250407171532.png]]

![[Pasted image 20250407171558.png]]

![[Pasted image 20250407171653.png]]

![[Pasted image 20250407171736.png]]

essas são as alternativas.

agora para o firewall, com os grupos de segurança

![[Pasted image 20250407172034.png]]
![[Pasted image 20250407172115.png]]
![[Pasted image 20250407172343.png]]

![[Pasted image 20250407172518.png]]

![[Pasted image 20250407172626.png]]

permissoes 0.0.0.0/0 querem dizer acesso de qualquer lugar

launch wizard 1 é o grupo de segurança padrao quando criamos uma instancia
timeouts sao sempre causados por erros nos grupos de segurança

![[Pasted image 20250407173258.png]]

instance connect works only on amazon linux2 instances, e ese conecta diretamente com o browser

para acessar com ssh, podemos baixar as chaves no manegement console. deve ser um arquivo .pem

verificar se o nome do arquivo .pem nao contem espaços.
então verificar se o acesso para a instancia está aberto na porta 22, geralmente na conf inicial deve estar marcado para 0.0.0.0/0 nas inbound rules.

entaõ podemos tentar usar o ssh no terminal.

![[Pasted image 20250407174106.png]]

ec2-user é o usuario padrão criado, @ip é o ip publico da instancia.

podemos receber um erro desta forma.

isso acontece porque temos que enviar a chave tbm. então devemos navegar o terminal até o local onde as chaves estão armazenadas, então fazer o comando
![[Pasted image 20250407174427.png]]
agora com a chave referenciada.

podemos encontrar um problema de chave desprotegida, para consertar, prescisamos mudae as permissoes desse arquivo
![[Pasted image 20250407174539.png]]

então, podemos tentar novamente o acesso

uma vez conectado, podemos realizar commandos.

para fechar a conexão, podemos usar Ctrl D, ou :![[Pasted image 20250407174802.png]]

com o EC2 instance connect , podemos fazer uma sessão direto do browser

![[Pasted image 20250407174938.png]]

a vantagem é que n é nescessario manejar chaves ssh.


![[Pasted image 20250407175811.png]]

![[Pasted image 20250407175915.png]]
![[Pasted image 20250407180003.png]]
![[Pasted image 20250407180045.png]]
![[Pasted image 20250407180146.png]]
![[Pasted image 20250407180205.png]]





temos tambem alguns custos adicionais

![[Pasted image 20250407180645.png]]


o que incorre tambem que cada instancia ec2 tambem paga um prço de ipv4.

![[Pasted image 20250407180754.png]]







