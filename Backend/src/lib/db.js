// src/lib/db.js
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config(); // טוען את הערכים מ־.env

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || null,
    {
        host:     process.env.DB_HOST || '127.0.0.1',
        port:     process.env.DB_PORT   || 3306,
        dialect:  process.env.DB_DIALECT || 'mysql',
        logging: false,  // true אם רוצים לראות את ה־SQL בלוג
    }
);

export default sequelize;
