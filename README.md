# DSCatalog

# Sobre o projeto

É um ecommerce que gerencia produtos pelos usuários logado no sistema.

## Layouts da aplicação

#
![Web_1](https://github.com/LuisPaulo1/assets/blob/master/dscatalog/01.jpeg)
#
![Web_2](https://github.com/LuisPaulo1/assets/blob/master/dscatalog/02.jpeg)
#
![Web_3](https://github.com/LuisPaulo1/assets/blob/master/dscatalog/03.jpeg)
#
![Web_4](https://github.com/LuisPaulo1/assets/blob/master/dscatalog/04.jpeg)

## Collection do Postman
Importar o link no Postman: https://www.getpostman.com/collections/71ae93ba5eb05bad81a3

## Variáveis de ambiente utilizadas no postman
![Postman](https://github.com/LuisPaulo1/assets/blob/master/dscatalog/variaveis-ambiente.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/LuisPaulo1/assets/blob/master/dscatalog/diagrama-classes.png)

## Arquitetura da aplicação
![Arquitetura](https://github.com/LuisPaulo1/assets/blob/master/dscatalog/arquitetura.png)

## Usuários para Login
- Email: maria@gmail.com - Senha: 123456 - Perfil: ADMIN
- Email: alex@gmail.com - Senha: 123456 - Perfil: OPERATOR

# Tecnologias utilizadas
## Backend
- Java
- Spring (boot, web, data, Validation, security)
- JPA / Hibernate
- Maven
- Banco de dados Postgres e H2
- JUnit 5

## Frontend
- HTML / CSS / JS / TypeScript
- ReactJS
- React Router DOM
- Axios
- React Hook Form
- QS (Query String)
- JWT Decode
- React Paginate
- React Select
- React Toastify

# Como executar o projeto

## Clonar o repositório
```bash
git clone https://github.com/LuisPaulo1/dscatalog.git
```

## Para executar o backend
Pré-requisitos: Java 11, Python (No windows)

```bash
# entrar na pasta do projeto backend
cd dscatalog/backend

# executar o projeto
./mvnw spring-boot:run (windows) ou mvn spring-boot:run (linux)
```

## Para executar o frontend
Pré-requisitos: yarn

```bash
# entrar na pasta do projeto frontend
cd dscatalog/frontend

# instalar dependências
yarn

# executar o projeto
yarn start
```

# Autor

Luis Paulo

https://www.linkedin.com/in/luis-paulo-souza-a54358134/
