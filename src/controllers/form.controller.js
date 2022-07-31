const { validationResult } = require('express-validator');

function sendObject (req, res, next) {
    res.status(200).send({ alive: true });
}

function receiveForm (req, res, next) {
    const form = req.body;
    const { errors } = validationResult(req);

    if(errors.length > 0) {
        let requiredFields = [];
        let invalidMail = false;
        let invalidDevice = false;
    
        for(let i = 0; i < errors.length; i++) {
            if(errors[i].msg === 'Campo faltante') {
                requiredFields.push(errors[i].param);
            }
        }

        if (requiredFields.length === 0) {
            for(obj in errors) {
                if(errors[obj].msg === 'Email inválido') {
                    invalidMail = true;
                } else {
                    invalidDevice = true;
                }
            }
        }

        if(requiredFields.length > 0) {
        res.status(400).send({error: true, requiredFields, errorMessage: 'Todos os campos obrigatórios devem ser informados'});
        } else if(invalidMail) {
        res.status(400).send({error: true, errorMessage: 'Email inválido'});
        } else if(invalidDevice) {
        res.status(400).send({error: true, errorMessage: 'Tipo inválido de equipamento'});
        }

    } else if(parseInt(form.deviceCount) !== form.devices.length){
        res.status(400).send({error:true, errorMessage: `A quantidade de equipamentos (${form.deviceCount}) não está de acordo com as informações de equipamentos enviados (${form.devices.length})`});
    } else {
        res.status(200).json({ success:true });
    }
}

module.exports = {
    sendObject,
    receiveForm
}
