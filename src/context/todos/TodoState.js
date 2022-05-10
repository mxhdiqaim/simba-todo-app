import { useReducer } from 'react';
import TodoReducer from './todoReducer';
import TodoContext from './todoContext';

import { GET_TODOS, TODO_ERROR, TOGGLE_LOADING } from '../types';

const TodoState = props => {
  const initialState = {
    todos: [
      {
        id: 1,
        title: 'todo one',
        isCompleted: false,
        description: 'this is todo one description',
        isImportant: true,
        createdAt: 'date now',
        updatedAt: 'date now',
      },
      {
        id: 2,
        title: 'todo two',
        isCompleted: true,
        description: 'this is todo two description',
        isImportant: true,
        createdAt: 'date now',
        updatedAt: 'date now',
      },
      {
        id: 3,
        title: 'todo three',
        isCompleted: true,
        description: 'this is todo three description',
        isImportant: false,
        createdAt: 'date now',
        updatedAt: 'date now',
      },
      {
        id: 4,
        title: 'todo four',
        isCompleted: false,
        description: 'this is todo four description',
        isImportant: true,
        createdAt: 'date now',
        updatedAt: 'date now',
      },
      {
        id: 5,
        title: 'todo five',
        isCompleted: false,
        description: 'this is todo five description',
        isImportant: true,
        createdAt: 'date now',
        updatedAt: 'date now',
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

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        isLoading: state.isLoading,
        getTodos,
        toggleLoading,
      }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
