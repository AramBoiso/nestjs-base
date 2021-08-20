import { registerAs } from "@nestjs/config";
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
    AUTO_LOAD_ENTITIES: parseInt(process.env.MYSQL_AUTO_LOAD_ENTITIES, 10) === 1,
    MIGRATIONS_RUN: parseInt(process.env.MYSQL_MIGRATIONS_RUN, 10) === 1,
    LOGGING: parseInt(process.env.MYSQL_LOGGING, 10) === 1,
    SYNCHRONIZE: parseInt(process.env.MYSQL_SYNCHRONIZE, 10) === 1,
    MIGRATIONS_DIR: process.env.MYSQL_MIGRATIONS_DIR
 
}))