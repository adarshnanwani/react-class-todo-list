import { v4 } from 'uuid';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO } from './index';

//NOTE  -  files  to be modified
// i) actions/index.js -- Add new actions types
// ii) actions/todo.js -- Add new action dispatchers and modify existing
// iii) reducers/todo.js -- Add new cases for new action types
// iv) App.js -- Get data on page load (Hint: useEffect and an action dispatcher)

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
