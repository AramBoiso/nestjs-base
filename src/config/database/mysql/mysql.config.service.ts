import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MySQLEnvironmentsEnum } from './enums/mysql.environments.enum';

@Injectable()
export class MysqlConfigService {

    constructor(private readonly mysqlConfigService:ConfigService){}

    get HOST():string{
        return this.mysqlConfigService.get(MySQLEnvironmentsEnum.MYSQL_HOST);
    }

    get PORT():number{
        return this.mysqlConfigService.get(MySQLEnvironmentsEnum.MYSQL_PORT);
    }

    get USERNAME():string{
        return this.mysqlConfigService.get(MySQLEnvironmentsEnum.MYSQL_USERNAME);
    }

    get PASSWORD():string{
        return this.mysqlConfigService.get(MySQLEnvironmentsEnum.MYSQL_PASSWORD);
    }

    get DATABASE_NAME():string{
        return this.mysqlConfigService.get(MySQLEnvironmentsEnum.MYSQL_DATABASE_NAME);
    }

    get ENTITIES():string{
        return this.mysqlConfigService.get(MySQLEnvironmentsEnum.MYSQL_ENTITIES);    
    }

    get AUTO_LOAD_ENTITIES():boolean{
        return this.mysqlConfigService.get(MySQLEnvironmentsEnum.MYSQL_AUTO_LOAD_ENTITIES);
    }

    get MIGRATIONS():string{
        return this.mysqlConfigService.get(MySQLEnvironmentsEnum.MYSQL_MIGRATIONS);
    }

    get MIGRATIONS_TABLE_NAME():string{
        return this.mysqlConfigService.get(MySQLEnvironmentsEnum.MYSQL_MIGRATIONS_TABLE_NAME);
    }

    get MIGRATIONS_RUN():boolean{
        return this.mysqlConfigService.get(MySQLEnvironmentsEnum.MYSQL_MIGRATIONS_RUN);
    }

    get LOGGING():boolean{
        return this.mysqlConfigService.get(MySQLEnvironmentsEnum.MYSQL_LOGGING);
    }

    get SYNCHRONIZE():boolean{
        return this.mysqlConfigService.get(MySQLEnvironmentsEnum.MYSQL_SYNCHRONIZE);
    }

    get MIGRATIONS_DIR():string{
        return this.mysqlConfigService.get(MySQLEnvironmentsEnum.MYSQL_MIGRATIONS_DIR);
    }

}
