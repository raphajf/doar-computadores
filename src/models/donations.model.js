const Sequelize = require('sequelize');
const db = require('../repositories/db.js');
const Device = require('./devices.model.js');
const Donor = require('./donors.model.js');

const Donation = db.define('donations', {
    donationId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    deviceCount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    donorId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { underscored: true });

Donation.hasMany(Device, {foreignKey: 'donationId'});

module.exports = Donation;
