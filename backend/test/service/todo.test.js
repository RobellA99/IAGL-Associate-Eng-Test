describe("TODO Service", () => {
  it("should be able to get todos from repository", async () => {
    const expected = {
      todos: [
        {
          task: "This is a task to be done",
        },
      ],
    };
    const todoRepository = {
      getTodos: async () => Promise.resolve(expected),
    };

    it("should create a new todo through the repository", async () => {
      const task = "Write service tests";

      const mockRepository = {
        createTodo: jest.fn(async (task) => ({
          todos: [{ task }],
        })),
      };

      const todoService = require("../../src/service/todo")(mockRepository);
      const result = await todoService.createTodo(task);

      expect(mockRepository.createTodo).toHaveBeenCalledWith(task);
      expect(result.todos).toContainEqual({ task });
    });

    const todoService = require("../../src/service/todo")(todoRepository);
    const actual = await todoService.getTodos();
    expect(actual).toEqual(expected);
  });
});
