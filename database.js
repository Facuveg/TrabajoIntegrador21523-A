const { Sequelize, DataTypes } = require('sequelize');

// Instancia de conexión a la base de datos
const sequelize = new Sequelize('pruebadb_a', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


// sequelize.sync()

module.exports = {
    sequelize,
    Sequelize,
    DataTypes
}
