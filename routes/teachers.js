/**
 * Teachers routes
 */

const { Teacher, Student } = require('../sequelize');

// Get all teachers
exports.list = function(req, res) {
    Teacher.findAll().then(teachers => res.json(teachers));
};

// create a teacher
exports.create = function(req, res) {
    Teacher.create(req.body)
    	.then(teacher => res.json(teacher))
    	.catch(err => res.status(400).json({ "message": "Error creating teacher" }));
}

// delete a teacher
exports.delete = function(req, res) {
    const teacher = req.body;
    
    Teacher.destroy({
    	where: { email: teacher.email }
    })
    .then(deleted => {
    	if (deleted) {
    		res.json(teacher);
    	} else {
    		res.status(400).json({ "message": "Error deleting teacher" });
    	}
    });
};