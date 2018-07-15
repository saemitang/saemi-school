# Saemi School
An API implementation example using Node.js, MySQL and Docker

## Running
The project uses Docker Compose to run the following Docker containers,
1. **school-api** (Node.js)
2. **school-mysql** (MySQL)

Run _both_ **school-api** and **school-mysql** containers together

`docker-compose -f docker-compose.mysql.yml -f docker-compose.node.yml up`

The API is accessible on http://localhost:8080 when running on Docker.

Sometimes you might want to run only **school-mysql** container for development or testing.

Run _only_ **school-mysql** container

`docker-compose -f docker-compose.mysql.yml up`

## Project
### Development Environment
Setup the development environment by installing the following,

[NPM & Node.js](https://nodejs.org/en/download/)  
[Docker](https://www.docker.com/community-edition)

### Setup
Setup the project using the following commands,

Initialize project

`npm init -y`

Install Body Parser, Express, Sequelize, MySQL, Helmet, Morgan

`npm install body-parser express sequelize mysql2 helmet morgan`

Install Mocha command line

`npm install -g mocha`

Install Chai and SuperTest

`npm install chai supertest -D`

### Run

Run the app for development or testing

`node app.js`

### Unit Tests
Unit tests requires **school-mysql** container to be up before executing.

Run all unit tests

`npm test`

Run a _single_ unit test

`mocha tests/test-school.js`  
`mocha tests/test-teachers.js`  
`mocha tests/test-students.js`

## Node.js Stuffs
The project uses the following packages,
* [Body Parser](https://www.npmjs.com/package/body-parser)
* [Express](https://www.npmjs.com/package/express)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Helmet](https://www.npmjs.com/package/helmet)
* [Morgan](https://www.npmjs.com/package/morgan)

### References
* [Security best practices for production Express apps](https://expressjs.com/en/advanced/best-practice-security.html)

## Docker Stuffs
### Images
* [node](https://hub.docker.com/r/_/node/)
* [mysql](https://hub.docker.com/_/mysql/)

### References
* [docker-compose](https://docs.docker.com/compose/compose-file/)
