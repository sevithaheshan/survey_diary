export const DB_CONFIG = {
    DB_CONFIG_MSSQL: {
        HOST: 'SANAPCROG',
        DATABASE: 'FootballLeague_EFCore',
        USERNAME: 'sa',
        PASSWORD: 'sa',
        OPTION: {
            ENABLE_ARITHABORT: true
        },
        CONNECTION_TIMEOUT: 150000,
        POOL:{
           MAX: 10,
           MIN: 0,
           IDLE_TIMEOUT_MILISEC: 30000 
        }
    },
    DB_CONFIG_MYSQL: {
        HOST: 'localhost',
        DATABASE: 'surveydiary',
        USERNAME: 'root',
        PASSWORD: '1994@Rasika'
    }
}