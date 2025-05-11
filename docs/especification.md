# Especificações do Projeto

## Personas

Nosso usuário fictício se chama João, um estudante de Sistemas de Informação na PUC Minas de 25 anos, que precisa de uma aplicação web para organizar suas tarefas diárias. Ele quer uma ferramenta simples e segura que o ajude a não esquecer dos prazos importantes, como entregas de projetos, estudos para provas e compromissos do trabalho. Com essa aplicação web, o usuário espera aumentar sua produtividade e reduzir o estresse de ter que lidar com tantas responsabilidades - e lembrar de todas elas - ao mesmo tempo.

O usuário busca uma aplicação com uma tela de login (para que suas informações não sejam compartilhadas) com e-mail e senha, além de permitir a criação de novas tarefas com título, descrição e data de vencimento. Além disso, seria interessante para o usuário marcar a tarefa como concluída. O usuário busca uma aplicação de interface limpa, intuitiva e que seja responsiva, funcionando bem tanto no computador quanto no celular.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Usuário | ter uma listagem do meu dia-a-dia | não me esquecer de nada importante |
| Usuário | uma forma de categorizar minhas tarefas | ter menos estresse |
| Usuário | saber quando uma tarefa foi marcada como concluída | ter uma melhor noção do decorrer dos meus dias |
| Usuário | ter um acesso rápido e fácil aos meus afazeres do trabalho | aumentar minha produtividade |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais (RF)
 Requisitos funcionais são os requisitos que falam **o que o sistema deve fazer**. Descreve as funcionalidades, comportamentos e interações do sistema com o usuário. Tabela de requisitos funcionais para o Gerenciador de Tarefas:

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----|  
| RF-001 |	O sistema deve permitir ao usuário adicionar tarefas a serem cumpridas	| Alta |
| RF-002 |	O sistema deve permitir que as tarefas tenham título, descrição, data e hora |	Alta |
| RF-003 |	O sistema deve permitir ao usuário editar e excluir uma tarefa depois de adicionada |	Alta |
| RF-004 |	O sistema deve permitir ao usuário mudar o status da tarefa usando um checkbox, assim transferindo a tarefa de “Pendente” para “Concluída” | Alta |
| RF-005 |	O sistema deverá ter os seguintes menus: Tarefas, Arquivo, Lixeira	| Média |
| RF-006 |	O sistema deverá ter um sistema de “Lembretes”, que irá avisar o usuário sobre o momento de fazer a tarefa | Baixa |
| RF-007 |	O sistema deve permitir ao usuário definir a prioridade das tarefas | Média |
| RF-008 |	O sistema deve permitir ao usuário criar etiquetas para organizar suas tarefas | Baixa |
| RF-009 |	O sistema deve disponibilizar um calendário para o usuário navegar e adicionar tarefas | Baixa |
| RF-010 |	O sistema deve disponibilizar filtros para buscar tarefas de diferentes formas |	Alta |
| RF-011 |	O sistema deverá contar com ordenamento de tarefas | Baixa |


### Requisitos não Funcionais (RNF)
 Definem **como** o sistema deve operar, **suas qualidades, restrições e características técnicas**. Eles descrevem aspectos como desempenho, segurança, usabilidade, escalabilidade e compatibilidade. Tabela de requisitos não funcionais para o Gerenciador de Tarefas:

|ID     | Descrição do Requisito  | Prioridade |
|-------|-------------------------|----|
| RNF-001 |	O sistema deve carregar a página em menos de 3 segundos	| Média |
| RNF-002	| O sistema deve adicionar, editar ou excluir tarefas em menos de 2 segundos	| Média |
| RNF-003	| O sistema deve funcionar em todos os navegadores	| Alta |
| RNF-004	| O sistema deve estar disponível 24 horas por dia, 7 dias por semana	| Baixa |
| RNF-005	| O sistema deve salvar automaticamente o que o usuário fizer durante a utilização do sistema	| Alta |
| RNF-006	| O sistema deve ser responsivo e se adaptar a todos os tamanhos e telas	| Média |
| RNF-007	| O sistema deve ter uma interface intuitiva.		| Alta |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
