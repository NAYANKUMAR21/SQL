import mysql from 'mysql2/promise';
// import util from 'util';

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'nayankumar',
  database: 'BOOK_SHOP',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Promisify query method to use async/await
// pool.query = util.promisify(pool.query);

export default pool;
