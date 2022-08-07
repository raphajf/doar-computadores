const Device = require('../models/devices.model.js');
const Donation = require('../models/donations.model.js');

async function createDevice(device) {
    try {
        return await Device.create(device);
    } catch(err) {
        throw err;
    }
}

module.exports = {
    createDevice
};
