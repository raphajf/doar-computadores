const Donor = require('../models/donors.model.js');

async function createDonor(donor) {
    try {
        donor.createdAt = Date.now();
        donor.updatedAt = Date.now();
        return await Donor.create(donor);
    } catch(err) {
        throw err;
    }
}

async function getDonorByEmail(email) {
    try {
        return await Donor.findAll({ where: {
            email: email
        }});
    } catch(err) {
        throw err;
    }
}

async function getDonorByPhone(phone) {
    try {
        return await Donor.findAll({ where: {
            phone: phone
        }});
    } catch(err) {
        throw err;
    }
}

module.exports = {
    createDonor,
    getDonorByEmail,
    getDonorByPhone
};
