/**
 * School routes
 */

const { Teacher, Student } = require('../sequelize');

exports.register = function(req, res) {
	Teacher.findOrCreate({
		where: { email: req.body.teacher }
	})
	.spread((teacher, created) => teacher)
	.then(teacher => {
		for (const email of req.body.students) {
			Student.findOrCreate({
				where: { email: email }
			})
			.spread((student, created) => student)
			.then(student => {
				teacher.addStudent(student);
			})
		}
		
		return teacher;
	})
	.then(teacher => res.status(204).send())
	.catch(err => res.status(400).json({ "message": "Error registering" }));
};

exports.commonstudents = function(req, res) {
	Student.findAll({
		include: [
			{ model: Teacher, where: { email: req.query.teacher }}
		]
	})
	.then(students => {
		let filteredStudents = [];
		
		if (Array.isArray(req.query.teacher)) {
			let query = Array.from(req.query.teacher);
			
			for (const student of students) {
				let emails = student.teachers.map(teacher => teacher.email);
				
				if (query.every(item => emails.indexOf(item) != -1)) {
					filteredStudents.push(student);
				}
			}
		} else {
			for (const student of students) {
				filteredStudents.push(student);
			}
		}
		
		return filteredStudents.map(student => student.email);
	})
	.then(emails => res.json({ "students" : emails }));
};

exports.suspend = function(req, res) {
    Student.update({
    	active: false
    }, {
    	where: { email: req.body.student }
    })
    .spread((affectedRows) => {
    	if (affectedRows > 0) {
    		res.status(204).send();    		
    	} else {
    		throw new Error('No such student');
    	}
    })
    .catch(err => res.status(400).json({ "message": "Error suspending student" }));
};

exports.retrievefornotifications = function(req, res) {
    let emails = req.body.notification.split(" ").filter(item => item.startsWith("@")).map(mentioned => mentioned.substring(1));
    
    Teacher.findOne({
    	where: {
    		email: req.body.teacher
    	}, include: [
    		{ model: Student, where: { active: true } }
    	]
    })
    .then(teacher => {
    	for (const student of teacher.students) {
    		if (emails.indexOf(student.email) == -1) {
    			emails.push(student.email);
    		}
    	}
    	
    	return emails;
    })
    .then(emails => res.json({ recipients: emails }));
};