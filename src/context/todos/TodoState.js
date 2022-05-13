import { useReducer } from 'react';
import TodoReducer from './todoReducer';
import TodoContext from './todoContext';

import {
  DELETE_TODO,
  UPDATE_TODO,
  GET_TODOS,
  SET_CORRENT,
  TODO_ERROR,
  TOGGLE_COMPLETE,
  TOGGLE_IMPORTANT,
  TOGGLE_LOADING,
  TOGGLE_MODAL,
} from '../types';

const TodoState = props => {
  const initialState = {
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

  const getTodos = () => {
    try {
      dispatch({ type: GET_TODOS, payload: 'todos' });
    } catch (err) {
      dispatch({ type: TODO_ERROR, payload: 'error message' });
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

  // UPDATE TODO
  const onUpdate = todo => {
    dispatch({ type: UPDATE_TODO, payload: todo });
  };
  // DELETE TODO
  const onDelete = id => {
    dispatch({ type: DELETE_TODO, payload: id });
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
        getTodos,
        toggleLoading,
        toggleImportant,
        toggleComplete,
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
