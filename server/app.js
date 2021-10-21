require("dotenv").config();
const express = require("express");
const { join } = require("path");
const logger = require("morgan");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const { User } = require("./db/models/User");

const { json, urlencoded } = express;

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "public")));

app.use(function (req, res, next) {
  const token = req.headers["x-access-token"];
  if (token) {
    jwt.verify(token, process.env.SESSION_SECRET, (err, decoded) => {
      if (err) {
        return next();
      }
      User.findOne({
        where: { id: decoded.id },
      }).then((user) => {
        req.user = user;
        return next();
      });
    });
  } else {
    return next();
  }
});

//database
const db = require("./db/db");
const { application } = require("express");
//db connection test
db.authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.log("Error: ", err));

// require api routes here after I create them
//routes
app.use("/gigs", require("./routes/gigs"));
app.use("/auth", require("./routes/auth"));

// app.use("/auth", require("./routes/jwtAuth"));

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

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
