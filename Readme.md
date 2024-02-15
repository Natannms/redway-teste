# Projeto Redway Teste

Este é um projeto que consiste em uma aplicação Full Stack utilizando Node.js no backend, React no frontend, Nginx como servidor web e MySQL como banco de dados. O objetivo principal do projeto é permitir o cadastro e listagem de emails.

## Tecnologias Utilizadas

### Backend (Node.js)
- **Express:** Framework web utilizado para facilitar o desenvolvimento da API.
- **Cors:** Para controlar o acesso à API, permitindo ou bloqueando requisições de diferentes origens.
- **Dotenv:** Para gerenciar as variáveis de ambiente no projeto.
- **Mysql2:** Cliente MySQL para interação com o banco de dados MySQL.
- **Nodemon:** Dependência de desenvolvimento utilizada para reiniciar automaticamente o servidor durante o desenvolvimento.
- **Validator:** Utilizado para validação e segurança do projeto backend.

### Frontend (React)
- **Typescript:** Superset do JavaScript que adiciona tipagem estática ao código, trazendo mais segurança e facilidade na manutenção.
- **Tailwind CSS:** Framework CSS utilizado para estilização, proporcionando um desenvolvimento mais rápido e eficiente.
- **Formik:** Biblioteca para facilitar o controle de formulários no React.
- **Zod:** Utilizado para validação do campo de email no formulário.
- **React Toastify:** Biblioteca para exibir notificações na aplicação.

### Servidor (Nginx)
- **Nginx:** Utilizado como servidor web para servir a aplicação frontend.

### Banco de Dados (MySQL)
- **MySQL:** Banco de dados relacional utilizado para armazenar os emails cadastrados.

## Funcionalidades

### API
- **Cadastro de Emails:** Rota `/register` para cadastrar novos emails. Inclui um processo de validação para proteger o banco de dados.

- **Listagem de Emails:** Rota `/emails` para listar os emails cadastrados.

### Frontend
- **Formulário de Cadastro:** Utiliza Formik para controle do formulário e Zod para validação do campo de email.

- **Notificações:** Utiliza React Toastify para exibir notificações na aplicação.

## Rodando o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Natannms/redway-teste
 
 2. Execute o Docker Compose para iniciar a aplicação:
    ```bash
    docker-compose up -d
 3. Acesse a API em: http://localhost:4000
 4. Acesse o Frontend no navegador: http://localhost
 
## Observações

Certifique-se de ter o [Docker](https://www.docker.com/) e o [Docker Desktop](https://www.docker.com/products/docker-desktop) instalados para rodar o projeto de forma simplificada.

Este projeto foi desenvolvido como parte de um teste e pode ser modificado e expandido conforme necessário.

