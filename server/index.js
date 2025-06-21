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
  const task = req.body.todo;
  console.log(task);

  TodoModel.create({
    task: task,
  })
    .then((resu) => res.json(resu))
    .catch((err) => console.log(err));
});

app.get("/get", (req, res) => {
  TodoModel.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

app.put("/checkboxuncheck/", (req, res) => {
  const id = req.body.todo._id;
  console.log(req.body.todo);
  TodoModel.findByIdAndUpdate({ _id: id }, { done: req.body.todo.done })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// app.put("/checkboxcheck/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   TodoModel.findByIdAndUpdate({ _id: id }, { done: false })
//     .then((data) => res.json(data))
//     .catch((err) => console.log(err));
// });

app.listen(3001, () => {
  console.log("server is running");
});
