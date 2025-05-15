---
aliases: 
tags:
  - AWS-S3
---
Creation : 13th May 2025
Last Modified : 13th May 2025
___



![[Pasted image 20250513161717.png]]

Podemos usar uma configuração para alterar a dinâmica de pagamentos no uso do S3.

por  padrão, o proprietário de arquivo paga pelo custo de armazenamento no S3 e pelos custos de transmissão na rede para o cliente/requisitador.

porem, para arquivos muito grandes, isso pode ser muito custoso , então temos a opção de fazer o cliente/requisitador pagar os custos de rede para acessar o arquivo. assim o dono do arquivo só paga o armazenamento.

o cliente deve ser um usuário da AWS cadastrado para que possa ser cobrado dele os custos de rede.

