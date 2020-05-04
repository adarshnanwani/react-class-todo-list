import { v4 } from 'uuid';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './index';

// Create an action dispatcher
export const addTodo = (value) => (dispatch) => {
  const newTodo = {
    text: value,
    completed: false,
    _id: v4(),
  };
  dispatch({
    type: ADD_TODO,
    payload: newTodo,
  });
};

export const toggleTodo = (id) => (dispatch, getState) => {
  const todos = getState().todos;
  const todo = todos.find((todo) => todo._id === id);
  todo.completed = !todo.completed;
  dispatch({
    type: TOGGLE_TODO,
    payload: todo,
  });
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
};
