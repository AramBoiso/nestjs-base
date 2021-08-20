import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';

import configuration  from './app.configuration';
import { AppConfigService } from './app.config.service';
import { ConfigModule } from '@nestjs/config';
import { Environments } from './enums/app.enums';
import { environmentSchema } from './schemas/app.environment.schema';
import { mysqlEnvironmentSchema } from '../database/mysql/schemas';
import mysqlConfiguration from '../database/mysql/mysql.configuration';
import { JwtSchema } from '../jwt/schemas';
import jwtConfiguration from '../jwt/jwt.configuration';


@Module({
  imports:[
    ConfigModule.forRoot({
      //registra variables de entonro decalradas en configuration
      load: [ 
        configuration,
        mysqlConfiguration,
        jwtConfiguration
      ], 
      //Realiza una validación de las varables de enotrno ingresadas
      validationSchema: Joi.object({
        ...environmentSchema,
        ...mysqlEnvironmentSchema,
        ...JwtSchema,
      }),
      envFilePath: `.${process.env.NODE_ENV || Environments.DEFAULT }.env`,
      isGlobal: true
    }),
  ],
  providers: [AppConfigService]
})
export class AppConfigModule {}
