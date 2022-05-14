import { useReducer } from 'react';
import TodoReducer from './todoReducer';
import TodoContext from './todoContext';
import { v4 as uuidv4 } from 'uuid';

// TYPES imports
import {
  DELETE_TODO,
  UPDATE_TODO,
  SET_CORRENT,
  TODO_ERROR,
  TOGGLE_COMPLETE,
  TOGGLE_IMPORTANT,
  TOGGLE_LOADING,
  TOGGLE_MODAL,
  ADD_TODO,
} from '../types';

const TodoState = props => {
  /**
   * Initial Global State
   */
  const initialState = {
    //Todos state
    todos: [
      {
        id: 1,
        title: 'todo one',
        isCompleted: false,
        description: 'this is todo one description ',
        important: true,
      },
      {
        id: 2,
        title: 'todo two',
        isCompleted: true,
        description: 'this is todo two description',
        important: true,
      },
      {
        id: 3,
        title: 'todo three',
        isCompleted: true,
        description: 'this is todo three description',
        important: false,
      },
      {
        id: 4,
        title: 'todo four',
        isCompleted: false,
        description: 'this is todo four description',
        important: true,
      },
      {
        id: 5,
        title: 'todo five',
        isCompleted: false,
        description: 'this is todo five description',
        important: true,
      },
    ],
    current: null,
    todo: null,
    isLoading: false,
    modalOpen: false,
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // addTodo func
  const addTodo = todo => {
    try {
      // creating the id of todo
      const id = uuidv4();
      // merging it with created todo
      const newTodo = { id, ...todo };

      // Dispatching created todo to reducer
      dispatch({ type: ADD_TODO, payload: newTodo });
    } catch (err) {
      // error catching
      dispatch({ type: TODO_ERROR, payload: 'Something went wrong...' });
    }
  };

  // UPDATE TODO
  const onUpdate = todo => {
    try {
      // dispatching update todo to reducer
      dispatch({ type: UPDATE_TODO, payload: todo });
    } catch (err) {
      // error catching
      dispatch({ type: TODO_ERROR, payload: 'Something went wrong...' });
    }
  };

  // DELETE TODO
  const onDelete = id => {
    try {
      dispatch({ type: DELETE_TODO, payload: id });
    } catch (err) {
      // error catching
      dispatch({ type: TODO_ERROR, payload: 'Something went wrong...' });
    }
  };

  // TOGGLE LOADING
  const toggleLoading = loading =>
    dispatch({ type: TOGGLE_LOADING, payload: loading });

  // TOGGLE IMPORTANT
  const toggleImportant = id => {
    dispatch({ type: TOGGLE_IMPORTANT, payload: id });
  };

  // TOGGLE COMPLETE
  const toggleComplete = id => {
    dispatch({ type: TOGGLE_COMPLETE, payload: id });
  };

  // EDIT
  const setCurrent = current => {
    dispatch({ type: SET_CORRENT, payload: current });
  };

  // TOGGLE MODAL
  const toggleModal = () => {
    dispatch({ type: TOGGLE_MODAL });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        current: state.current,
        todo: state.todo,
        modalOpen: state.modalOpen,
        isLoading: state.isLoading,
        toggleLoading,
        toggleImportant,
        toggleComplete,
        addTodo,
        setCurrent,
        onUpdate,
        onDelete,
        toggleModal,
      }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
