/**
 * Sequelize Student model 
 */

module.exports = (sequelize, type) => {
    return sequelize.define('student', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        email: {
        	type: type.STRING,
        	allowNull: false,
        	unique: true
        },
        active: {
        	type: type.BOOLEAN,
        	allowNull: false,
        	defaultValue: true
        }
    })
};