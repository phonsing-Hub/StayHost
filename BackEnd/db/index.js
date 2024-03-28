
const knex = require('knex');
const db = knex.default({
    client: 'mysql2',
    connection: {
        user: 'root',
        password: '99213221',
        host: 'localhost',
        port: 3306,
        database: 'CPE302'
    }
});


module.exports = db;