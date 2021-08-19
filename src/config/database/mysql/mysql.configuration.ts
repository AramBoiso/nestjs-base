import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { MODULE_NAME } from "./constants/mysql.constants";
import { MySQLConfigInterface } from "./interfaces/mysql.config.interface";
    
export default registerAs( MODULE_NAME, ():MySQLConfigInterface => ({
    HOST: process.env.MYSQL_HOST,
    PORT: parseInt(process.env.MYSQL_PORT, 10),
    USERNAME: process.env.MYSQL_USERNAME,
    PASSWORD: process.env.MYSQL_PASSWORD,
    DATABASE_NAME: process.env.MYSQL_DATABASE_NAME,
    ENTITIES: process.env.MYSQL_ENTITIES,
    MIGRATIONS: process.env.MYSQL_MIGRATIONS,
    MIGRATIONS_TABLE_NAME: process.env.MYSQL_MIGRATIONS_TABLE_NAME,
    AUTO_LOAD_ENTITIES: Boolean(process.env.MYSQL_AUTO_LOAD_ENTITIES),
    MIGRATIONS_RUN: Boolean(process.env.MYSQL_MIGRATIONS_RUN),
    LOGGING: Boolean(process.env.MYSQL_LOGGING),
    SYNCHRONIZE: Boolean(process.env.MYSQL_SYNCHRONIZE),
    MIGRATIONS_DIR: process.env.MYSQL_MIGRATIONS_DIR
 
}))