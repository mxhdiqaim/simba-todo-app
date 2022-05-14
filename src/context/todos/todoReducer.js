import {
  DELETE_TODO,
  GET_TODOS,
  TOGGLE_IMPORTANT,
  TOGGLE_LOADING,
  TOGGLE_COMPLETE,
  SET_CORRENT,
  TOGGLE_MODAL,
  UPDATE_TODO,
  ADD_TODO,
} from '../types';

const todoReducer = (state, action) => {
  switch (action.type) {
    // GET TODOS
    case GET_TODOS:
      return {
        todos: [state.todos, ...action.payload],
      };
    // ADD TODO
    case ADD_TODO:
      // console.log(action.payload);
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        modalOpen: false,
      };

    // UPDATE TODO
    case UPDATE_TODO:
      return {
        ...state,
        todos: [
          action.payload,
          ...state.todos.filter(todo => todo.id !== action.payload.id),
        ],
        modalOpen: false,
      };

    // LOADING
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    // TOGGLE IMPORTANT
    case TOGGLE_IMPORTANT:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, important: !todo.important }
            : todo,
        ),
      };
    // TOGGLE COMPLETE
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo,
        ),
      };
    case SET_CORRENT:
      return {
        ...state,
        current: action.payload,
        modalOpen: true,
        isLoading: false,
      };

    // DELETE TODO
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    // TOGGLE MODAL
    case TOGGLE_MODAL:
      return {
        ...state,
        modalOpen: !state.modalOpen,
        current: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default todoReducer;
