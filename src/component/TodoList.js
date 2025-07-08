import React, { Component } from "react";
// import Todo from "./Todo";
import TodoCard from "./TodoCard";
import { fetchTodos, postTodo } from "../actions";
import { connect } from "react-redux";

class TodoList extends Component {
  state = {
    newTask: "",
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newTask.trim()) {
      this.props.postTodo(this.state.newTask.trim());
      this.setState({ newTask: "" });
    }
  };

  render() {
    const { todos } = this.props.data;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="todo-form">
          <input
            type="text"
            value={this.state.newTask}
            onChange={this.handleChange}
            placeholder="Enter new task"
            className="todo-input"
          />
          <button type="submit" className="todo-button">
            Submit task
          </button>
        </form>
        <ul className="todo-list">
          {todos && todos.length
            ? todos.map((todo, index) => {
                return <TodoCard key={`todo-${index}`} todo={todo} />;
              })
            : "No todos, yay!"}
        </ul>
      </>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData,
});
export default connect(mapStateToProps, {
  fetchTodos,
  postTodo,
})(TodoList);
