var todoList = [
  {
    description: "Wake up Early",
    cat: "Personal",
    date: "2022-12-15",
  },
];

const db = require("../config/mongoose");
const info = require("../models/todoinfo");

// app.post("/create-todolist", function (req, res) {
//   info.create(
//     {
//       description: req.body.description,
//       category: req.body.cat,
//       date: req.body.date,
//     },
//     function (err, newTodoList) {
//       if (err) {
//         console.log("Error in creating a todo list!");
//         return;
//       }
//       console.log("******", newTodoList);
//       return res.redirect("back");
//     }
//   );
// });

module.exports.home = function (req, res) {
  //return res.end("<h1>Express is up for Codial!</h1>");
  // return res.render("home", {
  //   title: "Todo List",
  //   todo_list: todoList,
  // });

  info.find({}, function (err, todoList) {
    if (err) {
      console.log("Error in fetchong contacts from db");
      return;
    }
    return res.render("home", {
      title: "Todo List",
      todo_list: todoList,
    });
  });
};

module.exports.todoList = todoList;
