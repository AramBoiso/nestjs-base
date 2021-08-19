import * as Joi from '@hapi/joi';

export const mysqlEnvironmentSchema = {
    HOST: Joi.string().required(),
    PORT: Joi.number().required(),
    USERNAME: Joi.string().required(),
    PASSWORD: Joi.string().required(),
    DATABASE_NAME: Joi.string().required(),
    ENTITIES: Joi.string().required(),
    AUTO_LOAD_ENTITIES: Joi.number().required(),
    MIGRATIONS: Joi.string().required(),
    MIGRATIONS_TABLE_NAME: Joi.string().required(),
    MIGRATIONS_RUN: Joi.number().required(),
    LOGGING: Joi.number().required(),
    SYNCHRONIZE: Joi.number().required(),
    MIGRATIONS_DIR: Joi.string().required()
};