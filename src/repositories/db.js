const Sequelize = require('sequelize');
require('dotenv').config();

const postgresUri = process.env.POSTGRES_URI;

const sequelize = new Sequelize(
    postgresUri,
    {
        dialect: 'postgres',
        define: {
            timestamps: false
        }
    }
);

module.exports = sequelize;
