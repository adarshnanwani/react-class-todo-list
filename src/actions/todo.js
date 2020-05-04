import axios from 'axios';
import {
  GET_ALL_TODOS,
  SET_ALL_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from './index';

// Create an action dispatcher

export const getAllTodos = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_TODOS,
    });
    const res = await axios.get(
      'https://todo-list-ady.herokuapp.com/api/v1/todos'
    );
    const todos = res.data.data;
    dispatch({
      type: SET_ALL_TODOS,
      payload: todos,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addTodo = (value) => async (dispatch) => {
  try {
    const res = await axios.post(
      'https://todo-list-ady.herokuapp.com/api/v1/todos',
      {
        text: value,
        completed: false,
      }
    );
    console.log('addNewTodo response', res);
    const newTodo = res.data.data;
    dispatch({
      type: ADD_TODO,
      payload: newTodo,
    });
  } catch (err) {
    console.log(err);
  }
};

export const toggleTodo = (id) => async (dispatch, getState) => {
  try {
    const todos = getState().todos;
    const todo = todos.find((todo) => todo._id === id);
    const currentCompleted = todo.completed;
    // Call the API and send update data
    const res = await axios.put(
      `https://todo-list-ady.herokuapp.com/api/v1/todos/${id}`,
      {
        completed: !currentCompleted,
      }
    );
    console.log('toggleCompleted response', res);
    const updatedTodoItem = res.data.data;

    dispatch({
      type: TOGGLE_TODO,
      payload: updatedTodoItem,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateTodo = (id, text) => async (dispatch) => {
  try {
    const res = await axios.put(
      `https://todo-list-ady.herokuapp.com/api/v1/todos/${id}`,
      {
        text: text,
      }
    );
    console.log('updateTodo response', res);
    const updatedTodoItem = res.data.data;

    dispatch({
      type: UPDATE_TODO,
      payload: updatedTodoItem,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    // Call the API with _id of todoItem to be deleted
    const res = await axios.delete(
      `https://todo-list-ady.herokuapp.com/api/v1/todos/${id}`
    );

    console.log('deleteTodo res', res);
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};
