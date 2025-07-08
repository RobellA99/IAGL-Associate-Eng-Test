const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos();
    },
    //Add service layer for createTodo
    createTodo: async (task) => {
      return await repository.createTodo(task);
    },
  };
};

module.exports = todoService;
