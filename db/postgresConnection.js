const { Pool } = require("pg");
// const password = process.env.PASSWORD;
// console.log(password);
const pool = new Pool({
  // user: process.env.USER,
  // host: process.env.HOST,
  // database: process.env.DATABASE,
  // password: process.env.PASSWORD,
  connectionString: process.env.DATABASE_URL,
  // port: process.env.PORTT,
});

module.exports = { pool };
