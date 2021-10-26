require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const { join } = require("path");
const logger = require("morgan");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./db");
const { User } = require("./db/models");
// create store for sessions to persist in database
const sessionStore = new SequelizeStore({ db });
const cors = require("cors");
const { json, urlencoded } = express;

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );

  next();
});
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "public")));

app.use(function (req, res, next) {
  const token = req.headers["x-access-token"];
  console.log(token);
  if (token) {
    console.log(token);
    console.log(token);
    jwt.verify(token, process.env.SESSION_SECRET, (err, decoded) => {
      if (err) {
        return next();
      }
      User.findOne({
        where: { id: decoded.id },
      }).then((user) => {
        req.user = user;
        console.log("User", req.user);
        return next();
      });
    });
  } else {
    return next();
  }
});

// require api routes here after I create them
app.use("/auth", require("./routes/auth"));
app.use("/api", require("./routes/api"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = { app, sessionStore };
