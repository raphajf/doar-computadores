const { body } = require('express-validator');

const routeValidation = 
    [
        body('name').exists().withMessage('Campo faltante'),
        body('email').isEmail().optional().withMessage('Email inválido'),
        body('phone').exists().withMessage('Campo faltante'),
        body('zip').exists().withMessage('Campo faltante'),
        body('city').exists().withMessage('Campo faltante'),
        body('state').exists().withMessage('Campo faltante'),
        body('streetAddress').exists().withMessage('Campo faltante'),
        body('number').exists().withMessage('Campo faltante'),
        body('complement').optional(),
        body('neighborhood').exists().withMessage('Campo faltante'),
        body('deviceCount').exists().withMessage(),
        body('devices').exists().withMessage('Campo faltante').custom(value => {
            if(value == []) return Promise.reject('Campo faltante');
            
            const correctTypes = ['notebook', 'desktop', 'netbook', 'screen', 'printer', 'scanner'];
            for(let i in value) {
                if(correctTypes.indexOf(value[i].type) === -1) {
                    return Promise.reject('Tipo inválido');
                }
            }
            return true;
        })
    ]

module.exports = routeValidation;
