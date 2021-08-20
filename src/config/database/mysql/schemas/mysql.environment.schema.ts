import * as Joi from '@hapi/joi';

export const mysqlEnvironmentSchema = {
    MYSQL_HOST: Joi.string().required(),
    MYSQL_PORT: Joi.number().required(),
    MYSQL_USERNAME: Joi.string().required(),
    MYSQL_PASSWORD: Joi.string().required(),
    MYSQL_DATABASE_NAME: Joi.string().required(),
    MYSQL_ENTITIES: Joi.string().required(),
    MYSQL_AUTO_LOAD_ENTITIES: Joi.number().required(),
    MYSQL_MIGRATIONS: Joi.string().required(),
    MYSQL_MIGRATIONS_TABLE_NAME: Joi.string().required(),
    MYSQL_MIGRATIONS_RUN: Joi.number().required(),
    MYSQL_LOGGING: Joi.number().required(),
    MYSQL_SYNCHRONIZE: Joi.number().required(),
    MYSQL_MIGRATIONS_DIR: Joi.string().required()
};