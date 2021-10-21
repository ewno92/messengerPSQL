const express = require("express");
const router = express.Router();
const db = require("../db");
const User = require("../db/models/User");
// const User = require("../models/Gig");

router.get("/", (req, res) =>
  User.findAll()
    .then((users) => {
      console.log(users);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);
async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const thomas = await User.create({
    username: "thomas",
    email: "thomas@email.com",
    password: "123456",
    photoUrl:
      "https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914467/messenger/thomas_kwzerk.png",
  });
}
router.post("/add", (req, res) => {
  seed();
  // const { title, technology, description } = req.body;
  // const data = {
  //   title: "simple",
  //   technology: "react, java",
  //   description: "lorem",
  // };
  // let { title, technology, description } = data;
  // User.create({
  //   title: title,
  //   technology: technology,
  //   description: description,
  // })
  //   .then((users) => res.redirect("/auth"))
  //   .catch((err) => console.log(err));
});
module.exports = router;
// router.get("/", (req, res) =>
//   Gig.findAll()
//     .then((gigs) => {
//       console.log(gigs);
//       res.sendStatus(200);
//     })
//     .catch((err) => console.log(err))
// );

// router.post("/add", (req, res) => {
//   const { username, email, photoUrl, password } = req.body;

//   // const data = {
//   //   title: "simple",
//   //   technology: "react, java",
//   //   description: "lorem",
//   // };
//   // let { title, technology, description } = data;
//   User.create({
//     username: username,
//     email: email,
//     photoUrl: photoUrl,
//     password: password,
//   })
//     .then((user) => res.redirect("/auth"))
//     .catch((err) => console.log(err));
// });
