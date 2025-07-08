let todoList = {
  todos: [
    {
      task: "This is a todo example",
    },
  ],
};

module.exports = {
  getTodos: () => Promise.resolve(todoList),
  //Created a createTodo method to push new tasks to the array of task objects
  createTodo: () => {
    todoList.todos.push({ task: newTask });
    return Promise.resolve(todoList);
  },
};
