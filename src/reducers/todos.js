import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from '../actions/index';

const initialState = [];

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
    case UPDATE_TODO:
      // Make a copy of state array
      const copyTodos = [...state];
      // Find index of item to be replaced
      const index = copyTodos.findIndex(
        (item) => item._id === action.payload._id
      );
      // Use splice to remove that index and add new item
      copyTodos.splice(index, 1, { ...action.payload });
      return copyTodos;
    case DELETE_TODO:
      return [...state].filter((item) => item._id !== action.payload);
    default:
      return state;
  }
}

export default todoReducer;
