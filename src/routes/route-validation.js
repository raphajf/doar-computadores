const { body } = require('express-validator');

const routeValidation = 
    [
        body('name').exists().withMessage('Campo faltante').trim().isLength({ min: 1 }).withMessage('Nome'),
        body('email').isEmail().optional().withMessage('Email inválido'),
        body('phone').exists().withMessage('Campo faltante').isMobilePhone('pt-BR').withMessage('Telefone inválido'),
        body('zip').exists().withMessage('Campo faltante').trim().isLength({ min: 1 }).withMessage('Cep'),
        body('city').exists().withMessage('Campo faltante').trim().isLength({ min: 1 }).withMessage('Cidade'),
        body('state').exists().withMessage('Campo faltante').trim().isLength({ min: 1 }).withMessage('Estado'),
        body('streetAddress').exists().withMessage('Campo faltante').trim().isLength({ min: 1 }).withMessage('Rua'),
        body('number').exists().withMessage('Campo faltante'),
        body('complement').optional().trim().isLength({ min: 1 }).withMessage('Complemento'), // Complemento não é obrigatório porem não deixo ele ser validado como string vazia
        body('neighborhood').exists().withMessage('Campo faltante').trim().isLength({ min: 1 }).withMessage('Bairro'),
        body('deviceCount').exists().withMessage('Campo faltante'),
        body('devices').exists().withMessage('Campo faltante').custom(value => {
            
            if(value == []) return Promise.reject('Campo faltante');
            
            const correctTypes = ['notebook', 'desktop', 'netbook', 'screen', 'printer', 'scanner'];
            for(let i in value) {
                if(correctTypes.indexOf(value[i].type) === -1) {
                    return Promise.reject('Tipo inválido');
                } else if (value[i].condition === '') {
                    return Promise.reject('Condição');
                }
            }
            return true;
        })
    ]

module.exports = routeValidation;
