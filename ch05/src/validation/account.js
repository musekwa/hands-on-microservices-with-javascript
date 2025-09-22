import Joi from 'joi'

const objectId = Joi.string().regex(/^[0-9a-fA-F]{24}$/);
const getAccountById = {
    params: Joi.object().keys({
        id: objectId.required()
    }),
};
const deleteAccountById = {
    params: Joi.object().keys({
        id: objectId.required()
    }),
}
const createAccount = {
    body: Joi.object().keys({
        name: Joi.string().min(3).max(30).required(),
        number: Joi.string().required(),
        type: Joi.string().valid('root', 'sub').optional(),
        status: Joi.string().valid('new', 'active', 'inactive', 'blocked').optional(),
    }),
};

const updateAccountById = {
    params: Joi.object().keys({
        id: objectId.required()
    }),
    body: Joi.object().keys({
        name: Joi.string().min(3).max(30).optional(),
        number: Joi.string().optional(),
        type: Joi.string().valid('root', 'sub').optional(),
        status: Joi.string().valid('new', 'active', 'inactive', 'blocked').optional(),
    }).min(1)
};

export default {
    getAccountById,
    deleteAccountById,
    createAccount,
    updateAccountById
};