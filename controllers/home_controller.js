var todoList = [
  {
    description: "Wake up Early",
    category: "Personal",
    date: "15 - 12 - 2022",
  },
];

// app.post("/create-todolist", function (req, res) {
//   info.create(
//     {
//       description: req.body.description,
//       category: req.body.category,
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
  return res.render("home", {
    title: "Todo List",
    todo_list: todoList,
  });
};
