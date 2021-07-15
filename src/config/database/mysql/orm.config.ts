import { ConnectionOptions } from "typeorm";
import * as dotenv  from 'dotenv';
import { EnvironmentsEnum } from "../../app/enums/";
import { join } from "path";

dotenv.config({path: `${ join( __dirname, "..", "..", "..", "..", `.${ process.env.NODE_ENV || EnvironmentsEnum.DEFAULT }.env` )}`});

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
    migrationsRun: Boolean(process.env.MYSQL_MIGRATIONS_RUN),
    synchronize: Boolean(process.env.MYSQL_SYNCHRONIZE),
    logging: Boolean(process.env.MYSQL_LOGGING),
    logger: 'file',
    cli:{
        migrationsDir: process.env.MYSQL_MIGRATIONS_DIR,
    }, 
}

export = connectionOptions;