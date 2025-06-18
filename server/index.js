const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./Models/todo");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log())
  .catch((err) => console.log(err));

app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({
    task: task,
  })
    .then((resu) => console.log(resu))
    .catch((err) => console.log(err));
});
app.get("/get", (req, res) => {
  TodoModel.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
