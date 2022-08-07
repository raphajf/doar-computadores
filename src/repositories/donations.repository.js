// const Device = require('../models/devices.model.js');
const Donation = require('../models/donations.model.js');
const { QueryTypes } = require('sequelize');
const sequelize = require('./db.js');

async function createDonation(donation) {
    try {
        donation.createdAt = Date.now();
        return await Donation.create(donation);
    } catch(err) {
        throw err;
    }
}

async function getDonations() {
    try {
        
        /*
        Esta Query comentada não retorna o nome do doador (e não consegui implementar isso no findAll()) levando em consideração a proposta do projeto achei mais interessante a Raw Query abaixo.

        const donations = await Donation.findAll({ 
            order: [['donationId', 'DESC']],
            attributes: ['donationId', 'deviceCount'],
            include: [{
                model: Device,
                required: true,
                attributes: ['type', 'condition']
            }]
        });
        */

        const donations = await sequelize.query("SELECT donations.donation_id, d.name as donor_name, devices.type, devices.condition FROM donors as d LEFT JOIN donations ON d.donor_id = donations.donor_id INNER JOIN devices ON devices.donation_id = donations.donation_id ORDER BY donations.donation_id DESC;", { type: QueryTypes.SELECT});

        return donations;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createDonation,
    getDonations
};
