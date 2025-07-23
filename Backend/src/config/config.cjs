// config/config.js
require('dotenv').config();

const shared = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME,
    host:     process.env.DB_HOST,
    dialect:  process.env.DB_DIALECT,
};

module.exports = {
    development: { ...shared },
    test:        { ...shared },
    production:  { ...shared },
};
