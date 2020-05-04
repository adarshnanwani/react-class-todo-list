import { v4 } from 'uuid';
import { ADD_TODO } from './index';

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
