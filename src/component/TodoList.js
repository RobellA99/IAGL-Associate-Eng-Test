// import React, { Component} from "react";
// import Todo from "./Todo";
// import { fetchTodos } from "../actions";
// import { connect } from "react-redux";

// class TodoList extends Component {
//   state = {
//     newTask: "",
//   };

//   componentDidMount() {
//     this.props.fetchTodos();
//   }

//   handleChange = (e) => {
//     this.setState({ newTask: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.newTask.trim()) {
//       this.props.postTodo(this.state.newTask.trim());
//       this.setState({ newTask: "" });
//     }
//   };

//   render() {
//     const { todos } = this.props.data;
//     return (
//       <>
//         <form onSubmit={this.handleSubmit} className="todo-form">
//           <input
//             type="text"
//             value={this.state.newTask}
//             onChange={this.handleChange}
//             placeholder="Enter new task"
//             className="todo-input"
//           />
//           <button type="submit" className="todo-button">
//             Submit task
//           </button>
//         </form>
//         <ul className="todo-list">
//           {todos && todos.length
//             ? todos.map((todo, index) => {
//                 return <Todo key={`todo-${index}`} todo={todo.task} />;
//               })
//             : "No todos, yay!"}
//         </ul>
//       </>
//     );
//   }
// }

// const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
//   data,
//   isLoadingData,
// });
// export default connect(mapStateToProps, {
//   fetchTodos,
// })(TodoList);

import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { fetchTodos } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const TodoList = ({ postTodo }) => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.data.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      postTodo(newTask.trim());
      setNewTask("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Enter new task"
          className="todo-input"
        />
        <button type="submit" className="todo-button">
          Submit task
        </button>
      </form>
      <ul className="todo-list">
        {todos && todos.length
          ? todos.map((todo, index) => (
              <Todo key={`todo-${index}`} todo={todo.task} />
            ))
          : "No todos, yay!"}
      </ul>
    </>
  );
};

export default TodoList;
