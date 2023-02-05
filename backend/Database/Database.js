import mssql from 'mssql/msnodesqlv8.js';
import mysql from 'mysql2';
import { GLOBAL_CONFIG } from '../Configuration/Global.js';
import { DB_CONFIG } from '../Configuration/DatabaseConfig.js';

export const GetConnection = async () => {

    var connection;

    if (GLOBAL_CONFIG.DB_MYSQL_ENABLE) {

        let config = {
            host: DB_CONFIG.DB_CONFIG_MYSQL.HOST,
            user: DB_CONFIG.DB_CONFIG_MYSQL.USERNAME,
            password: DB_CONFIG.DB_CONFIG_MYSQL.PASSWORD,
            database: DB_CONFIG.DB_CONFIG_MYSQL.DATABASE
        };

        connection = mysql.createConnection({ config });

        connection.connect(err => {
            if (err) {
                console.log(err)
                throw err;
            }
            console.log("Database connected!")
        });

    } else {

        let config = {
            user: DB_CONFIG.DB_CONFIG_MSSQL.USERNAME,
            password: DB_CONFIG.DB_CONFIG_MSSQL.PASSWORD,
            server: DB_CONFIG.DB_CONFIG_MSSQL.HOST,
            driver: 'tedious',
            database: DB_CONFIG.DB_CONFIG_MSSQL.DATABASE,
            options: {
                instanceName: 'MSSQLSERVER',
                trustServerCertificate: true
            }
        };

        try {
            let connectionPool = new mssql.ConnectionPool(config);
            let connection = await connectionPool.connect();
            return connection;
        }
        catch (err) {
            console.log(err)
            throw err;
        }
    }
}
