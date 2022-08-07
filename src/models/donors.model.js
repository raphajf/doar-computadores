const Sequelize = require('sequelize');
const db = require('../repositories/db.js');
const Donation = require('./donations.model.js');

const Donor = db.define('donors', {
    donorId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zip: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    streetAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    complement: {
        type: Sequelize.STRING,
        allowNull: true
    },
    neighborhood: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, { underscored: true });

Donor.hasMany(Donation, { foreignKey: 'donorId'});

module.exports = Donor;
