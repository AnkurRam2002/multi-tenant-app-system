import pg from 'pg';

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tenantdb',
  password: 'postgres',
  port: 5432,
});

pool.connect()
  .then(client => {
    console.log('✅ Connected to PostgreSQL database!');
    client.release();
  })
  .catch(err => {
    console.error('❌ Failed to connect to PostgreSQL:', err);
  });

export default pool;
