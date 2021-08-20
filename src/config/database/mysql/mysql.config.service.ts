import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MySQLEnvironments } from './enums/mysql.environments.enum';

@Injectable()
export class MysqlConfigService {

    constructor(private readonly mysqlConfigService:ConfigService){}

    get HOST():string{      
        return this.mysqlConfigService.get(MySQLEnvironments.HOST);
    }

    get PORT():number{
        return this.mysqlConfigService.get(MySQLEnvironments.PORT);
    }

    get USERNAME():string{
        return this.mysqlConfigService.get(MySQLEnvironments.USERNAME);
    }

    get PASSWORD():string{
        return this.mysqlConfigService.get(MySQLEnvironments.PASSWORD);
    }

    get DATABASE_NAME():string{
        return this.mysqlConfigService.get(MySQLEnvironments.DATABASE_NAME);
    }

    get ENTITIES():string{
        return this.mysqlConfigService.get(MySQLEnvironments.ENTITIES);    
    }

    get AUTO_LOAD_ENTITIES():boolean{
        return this.mysqlConfigService.get(MySQLEnvironments.AUTO_LOAD_ENTITIES);
    }

    get MIGRATIONS():string{
        return this.mysqlConfigService.get(MySQLEnvironments.MIGRATIONS);
    }

    get MIGRATIONS_TABLE_NAME():string{
        return this.mysqlConfigService.get(MySQLEnvironments.MIGRATIONS_TABLE_NAME);
    }

    get MIGRATIONS_RUN():boolean{
        return this.mysqlConfigService.get(MySQLEnvironments.MIGRATIONS_RUN);
    }

    get LOGGING():boolean{
        return this.mysqlConfigService.get(MySQLEnvironments.LOGGING);
    }

    get SYNCHRONIZE():boolean{
        return this.mysqlConfigService.get(MySQLEnvironments.SYNCHRONIZE);
    }

    get MIGRATIONS_DIR():string{
        return this.mysqlConfigService.get(MySQLEnvironments.MIGRATIONS_DIR);
    }

}
