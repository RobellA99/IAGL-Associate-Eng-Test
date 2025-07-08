import React from "react";
import "../styles.css";

const TodoCard = ({ todo }) => (
  <li className="todo-card">
    <span className="todo-card-name">{todo.task}</span>
  </li>
);

export default TodoCard;
