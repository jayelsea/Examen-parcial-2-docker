const { Pool } = require('pg');

const pool = new Pool({
  host: 'db',
  user: 'user',
  password: 'pass',
  database: 'salud',
  port: 5432,
});

module.exports = pool;