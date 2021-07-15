import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";

import { MysqlConfigModule } from "src/config/database/mysql/mysql.config.module";
import { MysqlConfigService } from "src/config/database/mysql/mysql.config.service";
import { EnvironmentsEnum } from "src/config/app/enums";
import { join } from "path";


@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            imports:[MysqlConfigModule],
            inject: [MysqlConfigService],
            useFactory: async (mysqlConfigService:MysqlConfigService):Promise<TypeOrmModuleOptions> => ({
                type: 'mysql',
                host: mysqlConfigService.HOST,
                port: mysqlConfigService.PORT,
                username: mysqlConfigService.USERNAME,
                password: mysqlConfigService.PASSWORD,
                database: mysqlConfigService.DATABASE_NAME,
                autoLoadEntities: mysqlConfigService.AUTO_LOAD_ENTITIES,
                entities: [ mysqlConfigService.ENTITIES],
                migrations: [mysqlConfigService.MIGRATIONS],
                migrationsTableName: mysqlConfigService.MIGRATIONS_TABLE_NAME,
                migrationsRun: mysqlConfigService.MIGRATIONS_RUN,
                synchronize: mysqlConfigService.SYNCHRONIZE,
                logging: mysqlConfigService.LOGGING,
                logger: 'file',
                cli:{
                    migrationsDir: mysqlConfigService.MIGRATIONS_DIR
                }, 
                // charset: 'utf8mb4',
                // timezone:"GTM-06:00"
            })
        } as TypeOrmModuleAsyncOptions) 
    ]
})
export class MysqlProviderModule{}







