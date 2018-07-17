# Saemi School
An API implementation example using Node.js, MySQL and Docker

## Running
The project uses Docker Compose to run the following Docker containers,
1. **school-api** (Node.js)
2. **school-mysql** (MySQL)

Run _both_ **school-api** and **school-mysql** containers together

`docker-compose -f docker-compose.mysql.yml -f docker-compose.node.yml up`

The API is accessible on `http://localhost:3000` when running on Docker.

Sometimes you might want to run only **school-mysql** container for development or testing.

Run _only_ **school-mysql** container

`docker-compose -f docker-compose.mysql.yml up`

### API Endpoints
The API endpoints can be accessed via the following urls,

Register - `http://localhost:3000/api/register`  
Common Students - `http://localhost:3000/api/commonstudents`  
Suspend - `http://localhost:3000/api/suspend`  
Retrieve for Notifications - `http://localhost:3000/api/retrievefornotifications`  

## Project
The following are the steps taken to create the project.

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
Before running the app, make sure the **school-mysql** container is up and running

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

## Work-in-progress
Under the `ecs` branch, there are files related to deployment to AWS ECS.

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
* [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

## Docker Stuffs
The project uses [wait-for](https://github.com/Eficode/wait-for) script to start the **school-api** container after **school-mysql** container is up and running.

### Images
The project uses the following Docker images,
* [node](https://hub.docker.com/r/_/node/)
* [mysql](https://hub.docker.com/_/mysql/)

### References
* [docker-compose](https://docs.docker.com/compose/compose-file/)
