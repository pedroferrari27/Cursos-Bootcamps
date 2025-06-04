---
tags: AWS-CONTAINERS, AWS-ECS
source: "[[ECS]]"
created: 23-05-2025
---
![[Pasted image 20250523151310.png]]

usando o EC2 Launch Type , nos deveremos provisionar e manter a infraestrutura, ou seja manter as instancias EC2.

neste modelo, cada instancia deve ter um agente ECS para registras no cluster ECS, então a AWS consegue iniciar e parar containers nestas instancias.

