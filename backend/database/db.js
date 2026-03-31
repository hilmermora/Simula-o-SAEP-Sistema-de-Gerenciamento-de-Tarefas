const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', // ou seu usuário do pgAdmin
    host: 'localhost',
    database: 'saep',
    password: 'root',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};