import axios from "axios";
import { FETCH_TODOS } from "./types";

export function fetchTodos() {
  return function (dispatch) {
    return axios
      .get(`${import.meta.env.BACK_END_URL}/api/todo`)
      .then(({ data }) => {
        dispatch(setTodos(data));
      });
  };
}

export function postTodo(task) {
  return function (dispatch) {
    return axios
      .post(`${import.meta.env.BACK_END_URL}/api/todo`, { task })
      .then(() => {
        dispatch(setTodos(data));
      });
  };
}

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data,
  };
}
