# CNAB

## Sistema báscio para autenticação e cadastro de arquivos cnab.

## Projeto finalizado! 🚀

### Features

- [x] Listagem das movimentações
- [x] Cadastro de movimentação
- [x] Login de usuáio

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [node](https://nodejs.org/pt-br/)
- [postgresSQL](https://www.postgresql.org/)

Crie um banco de dados para rodar os dados de produção e um para rodar os dados de teste,
os dados de nome, e nome teste do banco, usuário e senha, encontram-se no arquivo .env, que não 
adicionei no gitignore propositalmente para facilitar. 

```bash
# Endpoint disponível
http://localhost:3333/session - Login usuário
http://localhost:3333/cnab - Cadastra um arquivo
http://localhost:3333/cnabs - Recebe os dados dos arquivos cadastrados
```

### 🛠 Rodando o backend e/ou os testes

```bash
# Vá para a pasta do projeto
$ cd desafio_cnab

# Instale as dependências
$ npm i

# após criar o banco de dados conforme informado no pré requisito, rode os comandos do kenx
$ npx knex migrate:latest
$ npx knex seed:run

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# Execute a aplicação em modo de teste
$ npm run test

```

### 🛠 Tecnologias utilizadas

As seguintes tecnologias foram usadas na construção do projeto:

- [node](https://nodejs.org/pt-br/)
- [postgresSQL](https://www.postgresql.org/)
- [express](https://expressjs.com/pt-br/)

### Autor

---

# Marcos Santos

[GitHub](https://github.com/Marcos1710)
[linkedin](https://www.linkedin.com/public-profile/in/marcos-samuel-1710)
