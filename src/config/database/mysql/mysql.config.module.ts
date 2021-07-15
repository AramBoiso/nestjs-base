import { Module } from '@nestjs/common';
import { MysqlConfigService } from './mysql.config.service';

@Module({
  imports:[],
  providers: [MysqlConfigService],
  exports:[MysqlConfigService]
})
export class MysqlConfigModule {}
