const mysql = require('mysql')
require('dotenv').config();

console.log(process.env.DB_PASSWORD,);
class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '34.69.134.247',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'hackathon311'
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;