//const joi = require('@hapi/joi');
const joi = require('joi');

module.exports = () => ({
    params: joi.object().keys({
        cep: joi.string().required()
    })
});