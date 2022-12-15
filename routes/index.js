const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home_controller");

console.log("Router loaded");

router.get("/", homeController.home);
router.get("/users", require("./users"));
router.post("/information", function (req, res) {
  //console.log(req.body);
  console.log("Hello");
  console.log(req.body.description);
  //console.log(req.body.category);
  console.log(req.body.date);
  // contactList.push({
  //   name: req.body.my_name,
  //   phone: req.body.my_phone,
  // });
  // console.log(req.body);
  // contactList.push(req.body);
  // return res.redirect("back"););
});

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

module.exports = router;
