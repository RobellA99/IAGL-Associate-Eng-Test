const express = require("express");
const cors = require("cors");
const repository = require("./repository/todo");
const todoService = require("./service/todo")(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get("/api/todo", async (req, res) => {
    res.json(await todoService.getTodos());
  });

  /**
  POST /api/todo
  {
   "task": "Some API"
  }

   {
    "todos": [
      {
        "task": "Some API"
      }
    ]
   }
  **/

  server.post("/api/todo", async (req, res) => {
    // Destructuring "task" json object that is inputted into body from submission of a new task
    const { task } = req.body;
    // Validation to make sure input is not empty and type of string
    if (!task || typeof task !== "string") {
      return res.status(400).json({ error: "Task must be a non-empty string" });
    }

    const updatedTodos = await todoService.createTodo(task);
    res.status(201).json(updatedTodos);
  });

  return server;
};
module.exports = server;
