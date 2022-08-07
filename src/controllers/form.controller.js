const { validationResult } = require('express-validator');
const FormService = require('../services/form.service.js');

function sendObject (req, res, next) {
    res.status(200).send({ alive: true });
}

async function receiveForm (req, res, next) {
    try { 
        const form = req.body;
        const { errors } = validationResult(req);

        if(errors.length > 0) {
            let requiredFields = [];
            let invalidMail = false;
            let invalidDevice = false;
            let invalidPhone = false;
            let missingFields = [];
        
            for(let i = 0; i < errors.length; i++) {
                if(errors[i].msg === 'Campo faltante') {
                    requiredFields.push(errors[i].param);
                } else if (errors[i].msg === 'Email inválido') {
                    invalidMail = true;
                } else if (errors[i].msg === 'Tipo inválido') {
                    invalidDevice = true;
                } else if (errors[i].msg === 'Telefone inválido') {
                    invalidPhone = true;
                } else {
                    missingFields.push(errors[i].msg);
                }
            }
            
            if(requiredFields.length > 0) {
                res.status(400).send({error: true, requiredFields, errorMessage: 'Todos os campos obrigatórios devem ser informados'});
            } else if(invalidMail) {
                res.status(400).send({error: true, errorMessage: 'Email inválido'});
            } else if(invalidDevice) {
                res.status(400).send({error: true, errorMessage: 'Tipo inválido de equipamento'});
            } else if(invalidPhone) {
                res.status(400).send({error: true, errorMessage: 'Telefone inválido'});
            } else {
                res.status(400).send({error: true, missingFields, errorMessage: 'Estes campos estão em branco'});
            }

        }   else if(form.deviceCount !== form.devices.length) {
                res.status(400).send({error:true, errorMessage: `A quantidade de equipamentos (${form.deviceCount}) não está de acordo com as informações de equipamentos enviados (${form.devices.length})`});
        }   else {
            const resForm = await FormService.create(form);

            // Estou retornando um array com todos os dados persistidos no banco de dados para conferência nesta fase de desenvolvimento.
            res.status(200).send(resForm);
        }
    } catch (err) {
        res.status(500).send(err);
    }
}

async function listDonations (req, res, next) {
    try {
        const donations = await FormService.getDonations();
        res.status(200).send(donations);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    sendObject,
    receiveForm,
    listDonations
}