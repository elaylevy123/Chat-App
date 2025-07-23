import { Sequelize } from "sequelize";
const configFile = require("../config/config.js");

const env = process.env.NODE_ENV || "development";
const config = configFile[env];

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        logging: false,
    }
);

export default sequelize;
