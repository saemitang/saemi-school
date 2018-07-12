/**
 * Sequelize Teacher model 
 */

module.exports = (sequelize, type) => {
    return sequelize.define('teacher', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        email: {
        	type: type.STRING,
        	allowNull: false,
        	unique: true
        }
    })
}