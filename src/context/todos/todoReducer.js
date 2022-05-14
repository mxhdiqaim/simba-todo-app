// TYPES imports
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
      /**
       * from todos array in global state, I loop through it and filter out the one which it id didn't match the action.payload.id and then add the current updated todo from action.payload
       */
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
      /**
       * to set the important, first map the todos global state i.e (state.todos) get the id of the current iteration === action.payload (id), spread the todo, then change the important to it opposite, else return the todo
       */
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
      /**
       * Same thing as TOGGLE_IMPORTANT, just instead of { ...todo, important: !todo.important }, we have  { ...todo, isCompleted: !todo.isCompleted }
       */
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo,
        ),
      };
    case SET_CORRENT:
      // SET_CORRENT is glabal state take care of the edit func, it holds the editable todo for some time and update it after .
      return {
        ...state,
        current: action.payload,
        modalOpen: true,
        isLoading: false,
      };

    // DELETE TODO
    case DELETE_TODO:
      // spread the state first.
      // Then filter out the one it ID matches and return the remainin todo.
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
