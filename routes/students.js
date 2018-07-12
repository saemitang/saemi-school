/**
 * Students routes
 */

const { Teacher, Student } = require('../sequelize')

// Get all students
exports.list = function(req, res) {
    Student.findAll().then(students => res.json(students))
}

// create a student
exports.create = function(req, res) {
    console.log(req.body)
    Student.create(req.body)
    	.then(student => res.json(student))
    	.catch(err => res.status(400).json({ "message": "Error creating student" }))
}

//delete a student
exports.delete = function(req, res) {
    console.log(req.body)
    const student = req.body
    
    Student.destroy({
    	where: { email: student.email }
    })
    .then(deleted => {
    	if (deleted) {
    		res.json(student)
    	} else {
    		res.status(400).json({ "message": "Error deleting student" })
    	}
    })
}