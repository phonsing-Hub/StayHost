
const knex = require('knex');
const db = knex.default({
    client: 'mysql2',
    connection: {
        user: 'root',
        password: '99213221',
        host: 'localhost',
        port: 4082,
        database: 'stayhost'
    }
});


module.exports = db;