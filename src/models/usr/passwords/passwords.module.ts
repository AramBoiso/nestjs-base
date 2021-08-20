import { Module } from '@nestjs/common';
import { PasswordsController } from './passwords.controller';
import { PasswordsService } from './passwords.service';

@Module({
  controllers: [PasswordsController],
  providers: [PasswordsService],
  exports: [PasswordsService]
})
export class PasswordsModule {}
