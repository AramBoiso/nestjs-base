import { ConnectionOptions } from "typeorm";
import * as dotenv  from 'dotenv';
import { Environments } from "../../app/enums/";
import { join } from "path";

dotenv.config({path: `${ join( __dirname, "..", "..", "..", "..", `.${ process.env.NODE_ENV || Environments.DEFAULT }.env` )}`});

const connectionOptions:ConnectionOptions = {

    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT, 10),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME,
    entities: [ process.env.MYSQL_ENTITIES],
    migrations: [process.env.MYSQL_MIGRATIONS],
    migrationsTableName: process.env.MYSQL_MIGRATIONS_TABLE_NAME,
    migrationsRun: parseInt(process.env.MYSQL_MIGRATIONS_RUN, 10) === 1,
    synchronize: parseInt(process.env.MYSQL_SYNCHRONIZE, 10) === 1,
    logging: parseInt(process.env.MYSQL_LOGGING, 10) === 1,
    logger: 'file',
    cli:{
        migrationsDir: process.env.MYSQL_MIGRATIONS_DIR,
    }, 
}

export = connectionOptions;