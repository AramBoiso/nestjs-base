import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/app.config.module';
import { MysqlProviderModule } from './providers/database/mysql/mysql.provider.module';

@Module({
  imports: [ 
    //Configura las variables de entorno.
    AppConfigModule,
    //Realiza la conexión a la base de datos.
    MysqlProviderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
