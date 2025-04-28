# Front-end - Event Management System

Este repositório contém o front-end do sistema de gerenciamento de eventos, desenvolvido com **Next.js**, **React**, **ShadcnUI**, e **TailwindCSS**. Ele se conecta ao back-end para permitir a gestão de usuários e eventos.

## Tecnologias

- **Next.js** - Framework React para renderização no lado do servidor e construção de sites modernos.
- **React** - Biblioteca JavaScript para construção de interfaces de usuário.
- **ShadcnUI** - Biblioteca de componentes UI com foco em acessibilidade e usabilidade.
- **TailwindCSS** - Framework CSS utilitário para construção rápida de interfaces responsivas e personalizadas.

## Funcionalidades já prontas

- **Login/Sign-in de usuários**: Permite que os usuários façam login ou criem uma conta.
- **Integração com o back-end**: O front-end está pronto para se conectar com o back-end para autenticação e gestão de eventos.

## Requisitos para rodar

- **Backend**: O back-end precisa estar rodando para que as funcionalidades de login e gestão de eventos funcionem corretamente. 
- **Node.js e NPM**: Certifique-se de ter o [Node.js](https://nodejs.org/) e o **NPM** instalados em sua máquina.

## Como rodar o projeto

1. Clone este repositório:

   ```bash
   git clone <URL-do-repositório>
   cd <diretório-do-repositório>
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode o projeto em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra o navegador e acesse a URL do front-end (geralmente `http://localhost:3000`).

## Tarefas do Front-end

- **Criar telas de cadastro de evento**: Permite aos usuários criar novos eventos.
- **Visualizar eventos**: Exibe todos os eventos disponíveis.
- **Filtrar eventos**: Usuários podem filtrar eventos com base em parâmetros como data ou categoria.
- **Inscrever-se em um evento**: Usuários podem se inscrever para eventos, garantindo sua participação.

## Estrutura do projeto

- **pages**: Contém as rotas da aplicação.
  - `index.tsx`: Página inicial.
  - `login.tsx`: Tela de login/sign-in.
  - `events.tsx`: Tela para visualizar e filtrar eventos.
  - `create-event.tsx`: Tela para criar um novo evento.
  
- **components**: Contém os componentes reutilizáveis da interface.
  - `Card`: Exibe informações sobre eventos.
  - `Button`: Botões personalizados.
  - `Input`: Campo de entrada para o formulário de login e cadastro.
  
- **lib**: Utilitários e funções auxiliares, como a função para conectar à API do back-end.

## Contribuindo

Se você gostaria de contribuir para o desenvolvimento deste projeto, por favor, siga os seguintes passos:

1. Faça um fork deste repositório.
2. Crie uma branch para suas mudanças (`git checkout -b minha-branch`).
3. Comite suas mudanças (`git commit -am 'Adicionando nova funcionalidade'`).
4. Envie para o repositório (`git push origin minha-branch`).
5. Abra um pull request.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
