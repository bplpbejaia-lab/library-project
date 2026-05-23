const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'farid',
    host: 'localhost',
    port: 5432,
    database: 'Library'
});

module.exports = pool;
