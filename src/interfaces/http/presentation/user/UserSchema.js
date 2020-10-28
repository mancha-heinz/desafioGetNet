//const joi = require('@hapi/joi')
//.extend(require('src/interfaces/http/presentation/product/@hapi/joi-date'));
const joi = require('joi');

module.exports = () => ({
    create: joi.object().keys({
        name: joi.string().required(),
        email: joi.string().email().required(),
        //birth_date: joi.date().format('YYYY-MM-DD').options({ convert: true }).raw().required()
    })
});