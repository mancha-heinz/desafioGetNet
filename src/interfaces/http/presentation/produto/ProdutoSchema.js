const joi = require('@hapi/joi')
    .extend(require('@hapi/joi-date'));

module.exports = () => ({
    create: joi.object().keys({
        name: joi.string().required(),
        valueUnitary: joi.number().required(),
        amount: joi.number().required()
    })
});