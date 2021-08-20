import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';

import { AppModule } from './app.module';
import { AppConfigService } from './config/app/app.config.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(helmet());
  app.use(morgan('tiny'))

  const appConfig:AppConfigService = app.get('AppConfigService');
  await app.listen(appConfig.PORT);
}
bootstrap();
