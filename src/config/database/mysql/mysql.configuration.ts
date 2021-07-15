import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { MODULE_NAME } from "./constants/mysql.constants";
import { MySQLConfigInterface } from "./interfaces/mysql.config.interface";
    
export default registerAs( MODULE_NAME, ():MySQLConfigInterface => ({
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_PORT: parseInt(process.env.MYSQL_PORT, 10),
    MYSQL_USERNAME: process.env.MYSQL_USERNAME,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE_NAME: process.env.MYSQL_DATABASE_NAME,
    MYSQL_ENTITIES: process.env.MYSQL_ENTITIES,
    MYSQL_MIGRATIONS: process.env.MYSQL_MIGRATIONS,
    MYSQL_MIGRATIONS_TABLE_NAME: process.env.MYSQL_MIGRATIONS_TABLE_NAME,
    MYSQL_AUTO_LOAD_ENTITIES: Boolean(process.env.MYSQL_AUTO_LOAD_ENTITIES),
    MYSQL_MIGRATIONS_RUN: Boolean(process.env.MYSQL_MIGRATIONS_RUN),
    MYSQL_LOGGING: Boolean(process.env.MYSQL_LOGGING),
    MYSQL_SYNCHRONIZE: Boolean(process.env.MYSQL_SYNCHRONIZE),
    MYSQL_MIGRATIONS_DIR: process.env.MYSQL_MIGRATIONS_DIR
 
}))