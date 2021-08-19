export interface MySQLConfigInterface{

    HOST:string;
    PORT:number;
    USERNAME:string;
    PASSWORD:string;
    DATABASE_NAME:string;
    ENTITIES:string;
    AUTO_LOAD_ENTITIES:boolean;
    MIGRATIONS:string;
    MIGRATIONS_TABLE_NAME:string;
    MIGRATIONS_RUN:boolean;
    LOGGING:boolean;
    SYNCHRONIZE:boolean;
    MIGRATIONS_DIR:string;

}
