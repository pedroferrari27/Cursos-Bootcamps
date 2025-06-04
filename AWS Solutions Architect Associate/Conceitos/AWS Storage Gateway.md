---
tags: AWS-STORAGE
source: "[[other storage solutions]]"
created: 19-05-2025
---
é uma solução para sistemas de armazenamento híbridos, ou seja, usando dados on premises, ou seja na empresa, e na nuvem aws, integrando os dois

![[Pasted image 20250519152830.png]]

este serviço é uma ponte entre os dados locais e os dados na nuvem

![[Pasted image 20250519153114.png]]

![[Pasted image 20250519153442.png]]
Gateway S3:

podemos organizar os arquivos no S3 para serem acessados como pastas compartilhadas no servidor on premisses atravez do S3 Gateway.

o servidor om premises se comunica com o gateway usando protocolo SMB ou NFS, e este se comunica com o amazon S3 por https, dando acesso aos arquivos lá

suporta todos os tipos de bucket menos glacier, mas podemos trasferir para glacier depois com o lifecycle policy

os arquivos mais recentes são armazenados em cache para resposta rapida

é nescessário configurar roles IAM para o S3 Gateaway, tambem podemos usar autorização de Active Directory para o protocolo SMB

![[Pasted image 20250519153912.png]]

fsX gateway:

já temos acesso nativo em Windows file servers, mas este gateaway é util para o usa da cache para arquivos recentemente vistos

![[Pasted image 20250519154340.png]]

Util para fazer Backups dos dados on premisses

funciona como armazenamento de blocos, roda da mesma forma que o gateway s3 porem com o protocolo iSCSI.

são criados snapshots EBS com o armazenamento , aassim o tornando muito util para restaurar os dados on premisses.

2 tipos, cached: para baixa latencia 

e stored volumes, para backups grandes e agendados para o S3

![[Pasted image 20250519154822.png]]

feito para empresas que tem armazenamento em midias fisicas(como cds,disquetes,pen drives) ou tapes, e transferir para a cloud atravez do VTL(virtual tape library)


![[Pasted image 20250519155156.png]]
são dispositivos fisicos que podem ser comprados para fazer a função de gateaway para on premises

resumo:

![[Pasted image 20250519155507.png]]
