

const pg = require('pg');
const url = require('url');

// this pool configuration connects to DB pretslonboardingapptest
let config = {};


    config = {
      user: 'PretslMaster',
      password: 'pretslpassword',
      host: 'pretslonboardingapptest.cyechedd6xia.us-east-2.rds.amazonaws.com',
      port: 5432,
      database: 'postgres',
      max: 10, // max number of clients in the pool
      idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    };



// this creates the pool that will be shared by all other modules
const pool = new pg.Pool(config);

// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err) => {
  console.log('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;
