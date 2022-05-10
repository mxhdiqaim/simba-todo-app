import { useReducer } from 'react';
import TodoReducer from './todoReducer';
import TodoContext from './todoContext';

import { GET_TODOS, TODO_ERROR } from '../types';

const TodoState = props => {
  const initialState = {
    todos: null,
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const getTodos = () => {
    try {
      dispatch({ type: GET_TODOS, payload: 'todos' });
    } catch (err) {
      dispatch({ type: TODO_ERROR, payload: 'error message' });
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        getTodos,
      }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
