import {
  DELETE_TODO,
  GET_TODOS,
  TOGGLE_IMPORTANT,
  TOGGLE_LOADING,
  TOGGLE_COMPLETE,
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return;
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case TOGGLE_IMPORTANT:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, important: !todo.important }
            : todo,
        ),
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo,
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
