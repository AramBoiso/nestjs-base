import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule } from './config/app/app.config.module';
import { MysqlProviderModule } from './providers/database/mysql/mysql.provider.module';
import { UsersModule } from './models/usr/users/users.module';
import { PasswordsModule } from './models/usr/passwords/passwords.module';


@Module({
  imports: [ 
    //Configura las variables de entorno.
    AppConfigModule,
    //Realiza la conexión a la base de datos.
    MysqlProviderModule,
    AuthModule,
    UsersModule,
    PasswordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
