const express = require("express");
const router = express.Router();
const User = require('../model/Contact');


router.get('/', (req, res) => 
res.render("index")
)

// router.get("/l", (req, res) => {
//   res.render("login")
// });




module.exports = router;