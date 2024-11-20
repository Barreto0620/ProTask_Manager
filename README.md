# ProTask Manager - Projeto React

## Descrição:
O "ProTask Manager" é uma aplicação desenvolvida com React, focada no gerenciamento de tarefas e projetos. O objetivo principal do projeto é aplicar os conceitos fundamentais do React, como a criação de componentes reutilizáveis, navegação entre páginas utilizando React Router, integração com uma API simulada (JSON Server), e uso de hooks como `useState` e `useEffect` para gerenciar o estado da aplicação e realizar requisições assíncronas.

A aplicação permite aos usuários:
- Criar, visualizar e excluir tarefas e projetos.
- Interagir com formulários para envio de dados.
- Navegar entre diferentes páginas relacionadas ao gerenciamento de tarefas e informações.

## Funcionalidades:
- **Componentes Reutilizáveis**:
  - Cabeçalho (Header)
  - Rodapé (Footer)
  - Cartões de informações (Card)
  - Formulários de envio de dados

- **Rotas com React Router**:
  - Página inicial
  - Página de tarefas
  - Página de contato
  - Página sobre

- **Formulários**:
  - Formulário de contato para enviar informações para a API.
  - Validação de campos para garantir dados corretos antes do envio.

- **Integração com JSON Server**:
  - Operações CRUD:
    - **GET**: Buscar tarefas e projetos.
    - **POST**: Enviar dados do formulário para a API.
    - **DELETE**: Excluir tarefas ou projetos.

- **Uso de Hooks**:
  - `useState`: Gerencia o estado da aplicação, como dados de formulários e lista de tarefas.
  - `useEffect`: Realiza requisições assíncronas para buscar dados da API ao inicializar as páginas.

## Tecnologias Utilizadas:
- React
- React Router
- JSON Server (para simulação de API)
- HTML5
- CSS3 (ou SASS para estilo, caso implementado)
- Hooks: `useState`, `useEffect`

## Como Executar o Projeto:
1. Clone este repositório em sua máquina local.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o JSON Server com o comando:
   ```bash
   npx json-server --watch db.json --port 5000
   ```
4. Inicie o projeto React:
   ```bash
   npm start
   ```
5. Abra a aplicação no navegador em [http://localhost:3000](http://localhost:3000).

## Demonstração do Código:
1. **Componentes Reutilizáveis**:
   - O código está organizado em componentes modulares e reutilizáveis como `Header`, `Footer`, e `Card`, facilitando a manutenção e expansão do projeto.
   
2. **Rotas com React Router**:
   - O React Router define as páginas principais do projeto, permitindo uma navegação fluida entre as seções:
     - Página inicial
     - Página de tarefas
     - Página de contato
     - Página sobre
   
3. **Formulários**:
   - O formulário de contato realiza a validação dos campos antes de enviar os dados para a API. Esse processo garante que apenas dados válidos sejam enviados.

4. **Integração com a API (JSON Server)**:
   - O JSON Server simula um backend para o projeto, realizando operações CRUD (Create, Read, Update, Delete) com os dados de tarefas e projetos.
   
5. **Uso de Hooks (useState e useEffect)**:
   - `useState`: Gerencia os estados dos dados de tarefas e do formulário.
   - `useEffect`: Faz as requisições assíncronas para buscar os dados da API quando a página é carregada.

## Conclusão:
O "ProTask Manager" é um projeto funcional que atende aos requisitos do trabalho, como a criação de componentes reutilizáveis, integração com uma API simulada, uso de React Router para navegação e a implementação de hooks. A aplicação oferece uma maneira eficiente de gerenciar tarefas e projetos de forma intuitiva e responsiva.

## Código-fonte:
- Repositório no GitHub: [Link para o repositório](https://github.com/Barreto0620/ProTask_Manager)

## Licença:
Este projeto está licenciado sob a Licença MIT - sinta-se à vontade para usar, modificar e distribuir de acordo com os termos da licença.

## Contribuições:
Contribuições e feedbacks são bem-vindos! Se você quiser contribuir para o projeto ou reportar problemas, fique à vontade para abrir uma issue ou enviar um pull request.

## Contato:
- LinkedIn: [www.linkedin.com/in/gabriel-barreto-oliveira](https://www.linkedin.com/in/gabriel-barreto-oliveira)
- E-mail: gabrielprozds@email.com

Obrigado por visitar meu repositório e por seu interesse no "ProTask Manager"!
```
