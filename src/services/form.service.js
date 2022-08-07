const DonorRepository = require('../repositories/donors.repository.js');
const DonationRepository = require('../repositories/donations.repository.js');
const DeviceRepository = require('../repositories/devices.repository.js');

async function create(form) {
        const deviceCount = form.deviceCount;
        const devices = form.devices;
    
        let donor = deleteKeys(form, ["deviceCount", "devices"]);
        
        donor = await createDonor(donor);
    
        let donation = {
            deviceCount,
            donorId: donor.donorId
        }
    
        donation = await createDonation(donation);
    
        let devicesRes = [];
        const donationId = donation.donationId;
    
        for(let i in devices) {
            let type = devices[i].type;
            let condition = devices[i].condition;
            devicesRes.push(await createDevice({
                type,
                condition,
                donationId
            }));
        }
    
        return [{success: true}, donor, donation, devicesRes];
}

async function createDonor(donor) {
    try {
        let savedDonorByEmail = [];
        if(donor.email !== undefined) {
            savedDonorByEmail = await DonorRepository.getDonorByEmail(donor.email);
        }
        
        const savedDonorByPhone = await DonorRepository.getDonorByPhone(donor.phone);

        if(savedDonorByEmail.length !== 0) {
            return savedDonorByEmail[0].dataValues;
        } else if(savedDonorByPhone.length !== 0) {
            return savedDonorByPhone[0].dataValues;
        }

        return await DonorRepository.createDonor(donor);

    } catch (err) {
        throw err;
}
}

async function createDonation(donation) {
    return await DonationRepository.createDonation(donation);
}

async function createDevice(device) {
    return await DeviceRepository.createDevice(device);
}

async function getDonations() {
    return await DonationRepository.getDonations();
}

function deleteKeys(myObj, array) {
    for (let index = 0; index < array.length; index++) {
        delete myObj[array[index]];
    }
    return myObj;
}

module.exports = {
    create,
    getDonations
}
