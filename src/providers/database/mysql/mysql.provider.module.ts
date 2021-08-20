import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";

import { MysqlConfigModule } from "src/config/database/mysql/mysql.config.module";
import { MysqlConfigService } from "src/config/database/mysql/mysql.config.service";

import { join } from "path";


@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            imports:[MysqlConfigModule],
            inject: [MysqlConfigService],
            useFactory: async (mysqlConfigService:MysqlConfigService):Promise<TypeOrmModuleOptions> => {
 
                return {
                    type: 'mysql',
                    host: mysqlConfigService.HOST,
                    port: mysqlConfigService.PORT,
                    username: mysqlConfigService.USERNAME,
                    password: mysqlConfigService.PASSWORD,
                    database: mysqlConfigService.DATABASE_NAME,
                    autoLoadEntities: mysqlConfigService.AUTO_LOAD_ENTITIES,
                    entities: [ join(__dirname, '../../../models/**/**/entities/*entity{.js,.ts}')],
                    migrations: [join(__dirname, '../../../database/migrations/*{.js,.ts}')],
                    migrationsTableName: mysqlConfigService.MIGRATIONS_TABLE_NAME,
                    migrationsRun: mysqlConfigService.MIGRATIONS_RUN,
                    synchronize: mysqlConfigService.SYNCHRONIZE,
                    logging: mysqlConfigService.LOGGING,
                    logger: 'file',
                    cli:{
                        migrationsDir: '../../../database/migrations'
                    }, 
                }
        }
        } as TypeOrmModuleAsyncOptions) 
    ]
})
export class MysqlProviderModule{}







