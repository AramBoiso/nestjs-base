import * as Joi from '@hapi/joi';
import { Environments } from '../enums/app.enums';
import { PORT_DEFAULT } from '../constants/app.constants';

export const environmentSchema = {
    NODE_ENV: Joi.string()
                .valid(Environments.DEVELOPMENT, Environments.PRODUCTION)
                .default(Environments.DEFAULT),
    APP_PORT: Joi.number().required().default(PORT_DEFAULT),
};