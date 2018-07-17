/**
 * Sequelize stuffs that references our Sequelize model files
 */

const Sequelize = require('sequelize');
const TeacherModel = require('./models/teacher');
const StudentModel = require('./models/student');

const env = process.env.NODE_ENV || 'development';

let host = 'localhost'

if (env == 'local') {
	host = 'mysql'
}

const sequelize = new Sequelize('school', 'admin', 'yDb.435rT', {
	host: host,
    dialect: 'mysql',
    pool: {
    	max: 10,
    	min: 0,
    	acquire: 30000,
    	idle: 10000
    },
    logging: false,
    operatorsAliases: false
});

const Teacher = TeacherModel(sequelize, Sequelize);
const Student = StudentModel(sequelize, Sequelize);
const TeacherStudent = sequelize.define('teacher_student', {});

Teacher.belongsToMany(Student, { through: TeacherStudent, unique: true });
Student.belongsToMany(Teacher, { through: TeacherStudent, unique: true });

sequelize.sync({
	force: false
})
.then(() => {
	console.log(`Database & tables created!`)
});

module.exports = { Teacher, Student };