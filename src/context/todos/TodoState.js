import { useReducer } from 'react';
import TodoReducer from './todoReducer';
import TodoContext from './todoContext';

import {
  DELETE_TODO,
  GET_TODOS,
  TODO_ERROR,
  TOGGLE_IMPORTANT,
  TOGGLE_LOADING,
} from '../types';

const TodoState = props => {
  const initialState = {
    todos: [
      {
        id: 1,
        title: 'todo one',
        isCompleted: false,
        description: 'this is todo one description',
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
    isLoading: false,
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const getTodos = () => {
    try {
      dispatch({ type: GET_TODOS, payload: 'todos' });
    } catch (err) {
      dispatch({ type: TODO_ERROR, payload: 'error message' });
    }
  };

  const toggleLoading = loading =>
    dispatch({ type: TOGGLE_LOADING, payload: loading });

  // TOGGLE COMPLETE
  const toggleComplete = id => {
    dispatch({ type: TOGGLE_IMPORTANT, payload: id });
  };

  // DELETE TODO
  const onDelete = id => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        isLoading: state.isLoading,
        getTodos,
        toggleLoading,
        toggleComplete,
        onDelete,
      }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
