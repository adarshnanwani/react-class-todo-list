import { ADD_TODO } from '../actions/index';

const initialState = [];

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default todoReducer;
