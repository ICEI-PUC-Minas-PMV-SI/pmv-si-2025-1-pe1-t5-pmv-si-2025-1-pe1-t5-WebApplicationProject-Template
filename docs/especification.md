# Especificações do Projeto

Esta seção aborda o problema e a ideia de solução a partir da perspectiva do usuário. Nela são apresentadas as personas, as histórias de usuários, os requisitos funcionais e não funcionais da aplicação, além das restrições do projeto.

## Personas

### Perfil 01: Cliente

**Descrição:** Maria é uma jovem adulta que mora sozinha, trabalha fora e não possui experiência na execução de tarefas domésticas ou de pequenos reparos em seu imóvel. Contudo, possui familiaridade no uso de aplicativos que oferecem serviços, é proativa e cordial na interação com os prestadores, e tem boa reputação entre aqueles que já contratou.

**Necessidades**
- Aplicação simples e intuitiva, com conteúdo em português;
- Múltiplas opções de serviços e prestadores;
- Possibilidade de consultar múltiplos orçamentos;
- Oferta de várias formas de pagamento;
- Disponibilidade de agendamento dos serviços;
- Autonomia para negociar os valores com os prestadores de serviços.

### Perfil 02: Prestador de serviço (Pessoa Física)

**Descrição:** José é um jovem adulto, prestador de serviços com alguns anos de experiência e com uma certificação profissional na sua área de atuação. É um profissional proativo e cordial, com boa reputação entre seus clientes. Possui familiaridade com aplicativos web e deseja ampliar sua carteira de clientes.

**Necessidades**
- Oferecer seus serviços;
- Ampliar sua carteira de clientes;
- Conhecer as necessidades dos clientes;
- Divulgar suas experiências e sua reputação;
- Ampliar seu faturamento. 

### Perfil 03: Prestador de serviço (Pessoa Jurídica)

**Descrição**: CSG Serviços é uma empresa com alguns anos de mercado, bem avaliada entre seus clientes. Possui uma atuação local e deseja ampliar sua carteira de clientes para toda a região onde está localizada. Está devidamente regularizada junto aos órgãos competentes e não está envolvida em atividades ilícitas.

**Necessidades**
- Oferecer seus serviços;
- Ampliar sua carteira de clientes;
- Conhecer as necessidades dos clientes;
- Divulgar seu histórico de atendimentos e sua reputação;
- Ampliar seu faturamento.

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`    | QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|------------------------|------------------------------------|----------------------------------------|
|Cliente   | Acessar uma plataforma que ofereça serviços gerais | Resolver problemas rotineiros em minha casa |
|Cliente   | Obter diferentes orçamentos  | Escolher o serviço com melhor custo x benefício  |
|Cliente   | Ter várias opções de pagamento | Escolher a forma que melhor me atenda  |
|Cliente   | Negociar os valores com os prestadores de serviços | Verificar a melhor opção financeira para mim  |
|Prestador de Serviços | Oferecer serviços gerais variados | Resolver os problemas dos clientes  |
|Prestador de Serviços | Ter um canal de comunicação com os clientes | Atender melhor às demandas dos clientes |
|Prestador de Serviços | Divulgar minhas qualificações e experiências na prestação de serviços | Para demonstrar minha credibilidade e boa reputação aos clientes. |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir cadastrar/excluir usuários | ALTA |  
|RF-002| A aplicação deve permitir consultar/alterar dados pessoais de usuários | ALTA |
|RF-003| A aplicação deve permitir cadastrar listas de serviços prestados | ALTA |
|RF-004| A aplicação deve permitir filtrar prestadores de serviços | ALTA |
|RF-005| A aplicação deve permitir solicitar orçamentos de serviços | ALTA |
|RF-006| A aplicação deve permitir calcular orçamento estimado para um serviço | MÉDIA |
|RF-007| A aplicação deve permitir agendar a prestação de serviços | MÉDIA |
|RF-008| A aplicação deve permitir avaliar o prestador de serviços | ALTA |
|RF-009| A aplicação deve permitir avaliar o cliente que contratou os serviços | ALTA |
|RF-010| A aplicação deve permitir emitir relatório de avaliação de prestadores e clientes | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser do tipo web front end | ALTA | 
|RNF-002| A aplicação deve ser desenvolvida em HTML, Javascript e CSS | ALTA |
|RNF-003| A aplicação deve ser disponibilizada em ambiente público na internet | ALTA |
|RNF-004| A aplicação deve ser compatível com os principais navegadores do mercado (ex.: Chrome, Edge, Firefox) | ALTA |
|RNF-005| A aplicação deve ser responsiva em diferentes dispositivos (ex.: computadores, tablets, smartphones) | MÉDIA |
|RNF-006| A aplicação deve apresentar interface simples e intuitiva | ALTA |
|RNF-007| A aplicação deve suportar aumentos do volume de requisições, mantendo um tempo de resposta aceitável | BAIXA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de back end       |

