/**
 * Index
 */

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');

const teachers = require('./routes/teachers');
const students = require('./routes/students');
const school = require('./routes/school');

const app = express();
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('combined'));
app.use(logErrors);
app.use(errorHandler);

module.exports = app;

// Endpoints

app.get('/api/teachers', teachers.list);
app.post('/api/teachers', teachers.create);
app.delete('/api/teachers', teachers.delete);

app.get('/api/students', students.list);
app.post('/api/students', students.create);
app.delete('/api/students', students.delete);

app.post('/api/register', school.register);
app.get('/api/commonstudents', school.commonstudents);
app.post('/api/suspend', school.suspend);
app.post('/api/retrievefornotifications', school.retrievefornotifications);

const port = 3000;

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
});

// Errors

function logErrors (err, req, res, next) {
	console.error(err.stack);
	next(err);
};

function errorHandler (err, req, res, next) {
	res.status(500);
	res.render('error', { error: err });
};