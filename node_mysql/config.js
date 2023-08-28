const mysql = require('mysql2/promise');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.LOCAL_SYS_PASS,
  database: 'BOOK_SHOP',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database from config file');

  // Release the connection
  connection.release();
});
module.exports = pool;
