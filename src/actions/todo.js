import { v4 } from 'uuid';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO } from './index';

//NOTE  - Only this file needs to be modified

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

export const updateTodo = (id, text) => (dispatch, getState) => {
  const todos = getState().todos;
  const todo = todos.find((todo) => todo._id === id);
  todo.text = text;
  dispatch({
    type: UPDATE_TODO,
    payload: todo,
  });
};
