import mysql from 'mysql2/promise';

// Crea el pool de conexiones usando promesas
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'peliculas_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;