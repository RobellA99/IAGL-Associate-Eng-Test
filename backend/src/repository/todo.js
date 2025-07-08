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
  createTodo: (task) => {
    todoList.todos.push({ task });
    return Promise.resolve(todoList);
  },
};
