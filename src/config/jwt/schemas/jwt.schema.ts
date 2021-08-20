import * as Joi from '@hapi/joi';

export const JwtSchema = {
    JWT_SECRET_KEY: Joi.string().required(),
    JWT_EXPIRE_IN: Joi.string().required(),
};