import * as Joi from '@hapi/joi';
import { EnvironmentsEnum } from '../enums/app.enums';
import { PORT_DEFAULT } from '../constants/app.constants';

export const environmentSchema = {
    NODE_ENV: Joi.string()
                .valid(EnvironmentsEnum.DEVELOPMENT, EnvironmentsEnum.PRODUCTION)
                .default(EnvironmentsEnum.DEFAULT),
    APP_PORT: Joi.number().required().default(PORT_DEFAULT),
};