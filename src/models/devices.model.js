const Sequelize = require('sequelize');
const db = require('../repositories/db.js');
const Donation = require('./donations.model.js');

const Device = db.define('devices', {
    deviceId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    condition: {
        type: Sequelize.STRING,
        allowNull: false
    },
    donationId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { underscored: true });

module.exports = Device;
