import React, { useContext } from 'react';
import TodoContext from '../../context/todos/todoContext';
import TodoItem from './TodoItem';

const Todos = () => {
  const { todos } = useContext(TodoContext);
  return todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
};

export default Todos;
