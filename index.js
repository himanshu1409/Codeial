const express = require("express");
const db = require("./config/mongoose");
const info = require("./models/todoinfo");
const app = express();
const port = 8000;

//use express router
app.use("/", require("./routes"));
app.use(express.static("assets"));

//set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server ${err}`);
  }
  console.log(`Server is running on port ${port}`);
});
