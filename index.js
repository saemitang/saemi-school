/**
 * Index
 */

const express = require('express')
const bodyParser = require('body-parser')

const teachers = require('./routes/teachers')
const students = require('./routes/students')
const school = require('./routes/school')

const app = express()
app.use(bodyParser.json())
app.use(logErrors)
app.use(errorHandler)

module.exports = app

// Endpoints

app.get('/teachers', teachers.list)
app.post('/teachers', teachers.create)
app.delete('/teachers', teachers.delete)

app.get('/students', students.list)
app.post('/students', students.create)
app.delete('/students', students.delete)

app.post('/register', school.register)
app.get('/commonstudents', school.commonstudents)
app.post('/suspend', school.suspend)
app.post('/retrievefornotifications', school.retrievefornotifications)

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})

// Errors

function logErrors (err, req, res, next) {
	console.error(err.stack)
	next(err)
}

function errorHandler (err, req, res, next) {
	res.status(500)
	res.render('error', { error: err })
}