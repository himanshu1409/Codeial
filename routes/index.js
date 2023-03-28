const express = require("express");
const db = require("../config/mongoose");
const info = require("../models/todoinfo");

const router = express.Router();
const homeController = require("../controllers/home_controller");

console.log("Router loaded");

router.get("/", homeController.home);
router.get("/users", require("./users"));
router.post("/information", function (req, res) {
  //console.log(req.body);
  // console.log(req.body.description);
  // console.log(req.body.cat);
  // console.log(req.body.date);

  // homeController.todoList.push(req.body);
  //return res.redirect("back");

  info.create(
    {
      description: req.body.description,
      category: req.body.cat,
      date: req.body.date,
    },
    function (err, newTodoList) {
      if (err) {
        console.log("Error in creating a todo list!");
        return;
      }
      console.log("******", newTodoList);
      return res.redirect("back");
    }
  );
});

router.get("/delete-contact", function (req, res) {
  let id = req.query.id;
  info.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log("Error in deleting an object from database");
      return;
    }
    return res.redirect("back");
  });
});

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

module.exports = router;

// module.exports.deleteinfo = function(req,res){
//     // deleting the multiple data at the same time using the main delete button
//     let id = req.body;
//     console.log(req.body._id);
//     for(let i= 0; i< req.body._id.length; i++){
//         console.log(req.body._id[i]);
//     }
//     // for loop for iterating all the id and deleting the data from datbase
//     for(let i= 0; i< req.body._id.length; i++){
//     myschema.findByIdAndDelete({_id: req.body._id[i]}, function(err){
//         if(err){
//             console.log("error in deleting the data");
//             return;
//         }
//     });
// };
