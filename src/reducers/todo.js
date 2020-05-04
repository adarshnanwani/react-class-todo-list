import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/index';

const initialState = [];

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      console.log('action.payload', action.payload);
      // Make a copy of state array
      const copyTodos = [...state];
      console.log('copyTodos', copyTodos);
      // Find index of item to be replaced
      const index = copyTodos.findIndex(
        (item) => item._id === action.payload._id
      );
      console.log('index', index);
      // Use splice to remove that index and add new item
      copyTodos.splice(index, 1, action.payload);
      console.log('copyTodos after splice', copyTodos);
      return copyTodos;
    case DELETE_TODO:
      return [...state].filter((item) => item._id !== action.payload);
    default:
      return state;
  }
}

export default todoReducer;
