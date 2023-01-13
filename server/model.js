require('dotenv').config()
require('console-stamp')(console, '[HH:MM:ss.l]')
const { Pool } = require('pg')
const { PG_URI } = process.env

console.log(PG_URI)

const pool = new Pool({
  connectionString: PG_URI,
})

// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/assets/images/schema.png

// Export as query function that will log query information
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text)
    return pool.query(text, params, callback)
  },
}
