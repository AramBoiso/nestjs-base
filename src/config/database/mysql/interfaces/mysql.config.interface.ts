export interface MySQLConfigInterface{

    MYSQL_HOST:string;
    MYSQL_PORT:number;
    MYSQL_USERNAME:string;
    MYSQL_PASSWORD:string;
    MYSQL_DATABASE_NAME:string;
    MYSQL_ENTITIES:string;
    MYSQL_AUTO_LOAD_ENTITIES:boolean;
    MYSQL_MIGRATIONS:string;
    MYSQL_MIGRATIONS_TABLE_NAME:string;
    MYSQL_MIGRATIONS_RUN:boolean;
    MYSQL_LOGGING:boolean;
    MYSQL_SYNCHRONIZE:boolean;
    MYSQL_MIGRATIONS_DIR:string;

}
