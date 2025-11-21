# API de Produtos

Este projeto consiste em uma **API REST simples de Produtos** desenvolvida em **Node.js + Express**, como parte da disciplina **Tópicos Especiais** da faculdade.  
O objetivo é demonstrar a criação e hospedagem de uma API simples no **Azure App Service (for Students)**, incluindo testes via **Postman**.

---

## Funcionalidades

A API permite operações básicas de CRUD (Create, Read, Update, Delete) sobre produtos:

- **GET /produtos** → retorna todos os produtos cadastrados  
- **GET /produtos/:id** → retorna um produto específico pelo ID  
- **POST /produtos** → cadastra um novo produto (campos obrigatórios: `nome` e `preco`)  
- **PUT /produtos/:id** → atualiza os dados de um produto existente  
- **DELETE /produtos/:id** → remove um produto do cadastro  

---

## Tecnologias utilizadas

- **Node.js v20.19.5**  
- **Express v5.1.0**  
- **Docker** (opcional, para execução em container)  
- **Azure App Service** (deploy em nuvem)  
- **Postman** (testes dos endpoints)

---

## Estrutura do projeto

- `server.js` → arquivo principal da aplicação  
- `package.json` → dependências e scripts  
- `Dockerfile` → configuração para execução em container  
- `node_modules/` → dependências instaladas  

---

## Como executar localmente (sem Docker)

### Pré-requisitos
- Node.js instalado (versão 20.x ou superior)  
- NPM (gerenciador de pacotes do Node.js)  
- Postman (para testes)  

### Passos
1. Clone este repositório:  
   ```
   git clone https://github.com/marllon2004/api-produtos-azure.git
   cd api-produtos-azure
   ```

2. Instale as dependências:
    ```
    npm install
    ```

3. Inicie a aplicação:
    ```
    npm start ou node server.js
    ```

4. A API estará disponível em:
    ```
    http://localhost:3000/produtos
    ```

## Como executar com Docker

### Pré-requisitos
- Docker instalado na máquina

### Passos

1. Construa a imagem:
    ```
    docker build -t api-produtos 
    ```

2. Execute o container:
    ```
    docker run -p 3000:3000 api-produtos
    ```

3. A API estará disponível em:
    ```
    http://localhost:3000/produtos
    ```

## Hospedagem no Azure

Este projeto foi hospedado no Azure App Service (for Students).
O deploy foi realizado via upload de arquivo .zip contendo:

- server.js
- package.json
- package-lock.json
- node_modules/

Após o deploy, a API ficou acessível por meio da URL pública gerada pelo Azure.

## Documentação adicional

Mais detalhes sobre a execução e prints das etapas de deploy estão disponíveis no relatório entregue para a disciplina.