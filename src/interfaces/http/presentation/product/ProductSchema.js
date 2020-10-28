//const joi = require('src/interfaces/http/presentation/product/@hapi/joi')
//.extend(require('src/interfaces/http/presentation/product/@hapi/joi-date'));
const joi = require('joi');

module.exports = () => ({
    create: joi.object().keys({
        name: joi.string().required(),
        valueUnitary: joi.number().required(),
        amount: joi.number().required()
    })
});