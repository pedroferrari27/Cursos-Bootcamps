---
tags: AWS-STORAGE
source: "[[other storage solutions]]"
created: 19-05-2025
---
é um serviço que permite utilizar sistemas de arquivos de terceiros no sistema AWS 

![[Pasted image 20250519150715.png]]

as principais opções são para Lustre, Windows file servers, netapp ontap e open zfs

![[Pasted image 20250519150937.png]]
os seerviços windows podem ser montados em instancias EC2 linux

e suportam o Microsoft Distributed file system (DFS)

![[Pasted image 20250519151243.png]]

O Lustre é um sistema de arquivos altamente paralelo, usado para computação de larga escala, usado para tasks de machine learning,processamento de videos,modelamento financeiro,HPC(High performance computing)

TEM INTEGRAÇÃO DIRETA COM O S3, podemos escrever e ler as computações facilmente com o S3 através do FSx

temos 2 tipos possíveis de deploy desse sistema de arquivo :scratch e persistent

![[Pasted image 20250519151754.png]]

scratch: um sistema temporario , onde não temos backups para salvar dados, então é perdido em caso de falhas. porem tem maior processamento em bursts

persistente: esse tem backups, onde os dados são replicado no mesmo AZ.

![[Pasted image 20250519152135.png]]
compativel com protocolo NFS,SMB e iSCSI , usado para mover cargas de trabalho existentes do modelo ONTAP e NAS para a AWS

é possivel fazer clonagem do sistema do arquivo instantaneamente

![[Pasted image 20250519152434.png]]
COMPATÍVEL APENAS COM NFS , util para mover cargas de trabalho ZFS já existente para a AWS.

boa performance com baixos custo

é possivel fazer clonagem do sistema do arquivo instantaneamente


