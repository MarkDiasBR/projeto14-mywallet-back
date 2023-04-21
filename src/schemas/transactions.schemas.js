import joi from 'joi';

export const transactionSchema = joi.object({
    title: joi.string().required(),
    value: joi.number().precision(2).strict().required()
});

export const transactionParamsSchema = joi.object({
    type: joi.string().valid('in', 'out').required()
});