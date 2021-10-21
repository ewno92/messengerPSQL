const { Sequelize } = require("sequelize");
require("dotenv").config();
//db connection
module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.PSQL_USERNAME,
  process.env.PSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);
