const repository = require("../../src/repository/todo");

describe("TODO repository", () => {
  it("should return the todo list", async () => {
    const expected = {
      todos: [
        {
          task: "This is a todo example",
        },
      ],
    };

    it("should add a new todo to the list", async () => {
      const newTask = "Learn testing";
      await repository.createTodo(newTask);

      const updatedTodos = await repository.getTodos();
      expect(updatedTodos.todos).toContainEqual({ task: newTask });
    });

    const actual = await repository.getTodos();
    expect(actual).toEqual(expected);
  });
});
