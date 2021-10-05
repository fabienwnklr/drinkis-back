import { createConnection } from 'mysql2/promise';

export async function createDB() {
    try {
        const connection = await createConnection({
            host: process.env.DB_HOST,
            password: process.env.DB_PASS,
            user: process.env.DB_USER
        });
        const dbName = process.env.DB_NAME || 'drinkis';
        const queryCreateDB = `CREATE DATABASE IF NOT EXISTS ${dbName}`;

        await connection.query(queryCreateDB);
    } catch (err) {
        console.error(err);
    }
}
