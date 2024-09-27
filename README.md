# Projeto de Automação com Cypress

## :page_with_curl: Visão Geral

Este projeto tem como objetivo automatizar testes para o site [Automation Exercise](https://automationexercise.com/), utilizando os casos de teste disponíveis [aqui](https://automationexercise.com/test_cases). A automação é implementada com Cypress, uma ferramenta para testes de front-end.

## :round_pushpin:  Sumário
1. [Visão Geral](#page_with_curl-visão-geral)
2. [Tecnologias Utilizadas](#computer-tecnologias-utilizadas)
3. [Estrutura do Projeto](#clipboard-estrutura-do-projeto)
4. [Casos de Teste](#memo-casos-de-teste)
5. [Configuração](#hammer-configuração)
   - [Pré-requisitos](#pré-requisitos)
   - [Instalação](#instalação)
6. [Executar os Testes](#arrows_counterclockwise-executar-os-testes)
7. [Contato](#telephone_receiver-contato)

## :computer: Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/)**: Framework de teste end-to-end para automação de aplicativos web.

## :clipboard: Estrutura do Projeto

- `cypress/`
  - `e2e/`: Contém os testes automatizados.
    - `login/`: Testes relacionados ao login do usuário.
    - `register/`: Testes relacionados ao registro de novos usuários.
  - `fixtures/`: Contém dados de teste utilizados nos testes automatizados.
  - `plugins/`: Configurações e scripts para plugins adicionais do Cypress.
  - `support/`: Arquivos de suporte e comandos personalizados.
    - `commands.js`: Comandos customizados para facilitar a escrita dos testes.
    - `e2e.js`: Configurações e hooks globais para os testes.
    - `utils/`: Funções auxiliares e utilitárias para os testes, se necessário.


## :memo: Casos de Teste

Os testes são baseados nos [casos de teste](https://automationexercise.com/test_cases) fornecidos pelo site Automation Exercise e estão relacionados ao:

1. **Cadastro de Usuário**
2. **Login de Usuário**
3. **Adicionar Produto ao Carrinho**
4. **Realizar Pedido**
5. **Validar Detalhes do Pedido**

## :hammer: Configuração

### Pré-requisitos

- Node.js 
- npm ou yarn

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/marjorymell/automation-project

2. Instale as dependências:

   ```bash
   npm install

## :arrows_counterclockwise: Executar os Testes

Para executar os testes automatizados no seu projeto, siga estes passos:

1. **Certifique-se de que todas as dependências estão instaladas**: Se ainda não tiver feito isso, execute o comando `npm install` para instalar todas as dependências do projeto.

2. **Execute os testes com Cypress**: Utilize o comando abaixo para iniciar os testes automatizados:
    ```bash
    npx cypress run
    ```

   Isso executará todos os testes configurados no Cypress. O Cypress também pode ser iniciado em modo interativo com:
    ```bash
    npx cypress open
    ```

   Isso abrirá a interface gráfica do Cypress, permitindo que você execute e depure os testes manualmente.

## :telephone_receiver: Contato

- **Nome**: Marjory Mel Ferreira Ferro Lemos
- **Email**: marjorymel48@gmail.com
- **LinkedIn**: [Marjory Lemos](www.linkedin.com/in/marjorymell)
