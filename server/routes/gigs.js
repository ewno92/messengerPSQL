const express = require("express");
const router = express.Router();
const db = require("../db/db");
const Gig = require("../db/models/Gig");

router.get("/", (req, res) =>
  Gig.findAll()
    .then((gigs) => {
      console.log(gigs);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

//Add data
router.post("/add", (req, res) => {
  const { title, technology, description } = req.body;

  // const data = {
  //   title: "simple",
  //   technology: "react, java",
  //   description: "lorem",
  // };
  // let { title, technology, description } = data;
  Gig.create({
    title: title,
    technology: technology,
    description: description,
  })
    .then((gig) => res.redirect("/gigs"))
    .catch((err) => console.log(err));
});

module.exports = router;
