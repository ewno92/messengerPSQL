require("dotenv").config();
const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.PSQL_USERNAME,
  process.env.PSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

module.exports = db;

// const Sequelize = require("sequelize");

// const db = new Sequelize(process.env.DATABASE_URL || "postgres://localhost:5432/messenger", {
//   logging: false
// });

// module.exports = db;
