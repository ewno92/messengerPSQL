const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();
const path = require("path");

//db connection
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("messenger", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

const test = async () => {
  try {
    await sequelize.authenticate();
    return console.log("Connection has been established successfully.");
  } catch (error) {
    return console.error("Unable to connect to the database:", error);
  }
};
test();

app.get("/", (req, res) => res.send("index"));
const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
