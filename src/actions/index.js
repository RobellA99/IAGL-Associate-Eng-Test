import axios from "axios";
import { FETCH_TODOS } from "./types";

export function fetchTodos() {
  return function (dispatch) {
    return axios
      .get(`${process.env.REACT_APP_BACK_END_URL}/api/todo`)
      .then(({ data }) => {
        dispatch(setTodos(data));
      });
  };
}
// Add POST api call to create new todo item and update todo list
export function postTodo(task) {
  return function (dispatch) {
    return axios
      .post(`${process.env.REACT_APP_BACK_END_URL}/api/todo`, { task })
      .then(({ data }) => {
        dispatch(setTodos(data));
      })
      .catch((error) => {
        console.error("Error posting todo:", error.message);
      });
  };
}

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data,
  };
}
