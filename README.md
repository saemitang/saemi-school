# Saemi School
An API example implementation using Node.js, Express.js, Sequelize

## Running
The project uses Docker Compose to run the following Docker containers,
1. school-api (Node.js)
2. school-mysql (MySQL)

Run both school-api and school-mysql containers together  
`docker-compose -f docker-compose.mysql.yml -f docker-compose.node.yml up`

The API is accessible on http://localhost:8080 when running on Docker.

Sometimes you might want to run only school-mysql container for development or testing.

Run *only* school-mysql container  
`docker-compose -f docker-compose.mysql.yml up`

## Project
### Development Environment
Setup the development environment by installing the following,

NPM & Node.js - https://nodejs.org/en/download/  
Docker - https://www.docker.com/community-edition

### Setup
Setup the project using the following commands,

Initialize project  
`npm init -y`

Install Body Parser, Express.js, Sequelize, MySQL, Helmet, Morgan  
`npm install body-parser express sequelize mysql2 helmet morgan`

Install Mocha command line  
`npm install -g mocha`

Install Chai and SuperTest  
`npm install chai supertest -D`

### Unit Tests
Unit tests requires school-mysql container to be up before executing.

## Node.js Stuffs
The project uses the following packages,
* Body Parser - https://www.npmjs.com/package/body-parser
* Express.js - https://expressjs.com
* Sequelize - http://docs.sequelizejs.com
* Helmet - https://www.npmjs.com/package/helmet

## Docker Stuffs
### Images
* node - https://hub.docker.com/r/_/node/
* mysql - https://hub.docker.com/_/mysql/

### References
* docker-compose - https://docs.docker.com/compose/compose-file/