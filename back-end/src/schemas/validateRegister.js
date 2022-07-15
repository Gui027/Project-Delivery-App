const Joi = require('joi');

const validRegister = Joi.object({
    name: Joi.string().min(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

module.exports = {
    validRegister,
};