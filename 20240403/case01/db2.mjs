import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();


const connection = await mysql.createPool({
    host: process.env.HOST,
    port: process.env.PORT1,
    user: process.env.USER1,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0
});

export default connection;






