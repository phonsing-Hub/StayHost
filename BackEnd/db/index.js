const mysql = require('mysql2/promise');

const initMySQL = async () => {
  let conn = null;
  try {
    conn = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '99213221',
      database: 'StayHost'
    });
    console.log('Connected to MySQL database');
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
  }
  return conn;
}
module.exports = {initMySQL};
