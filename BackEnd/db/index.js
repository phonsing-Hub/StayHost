
const knex = require('knex');
const db = knex.default({
    client: 'mysql2',
    connection: {
        user: 'root',
        password: '99213221',
        host: 'localhost',
        port: 3306,
        database: 'stayhost'
    }
});

db.raw('SELECT 1')
    .then(() => {
        console.log('Connected to MySQL database');
    })
    .catch((err) => {
        console.error('Failed to connect to MySQL database:', err);
    });

module.exports = db;
