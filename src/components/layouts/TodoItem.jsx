import React, { useContext } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import TodoContext from '../../context/todos/todoContext';

import PropTypes from 'prop-types';
const TodoItem = ({ todo }) => {
  // CONTEXT
  const { toggleImportant, onDelete, toggleComplete } = useContext(TodoContext);

  return (
    <div
      className={`todo ${todo.important && 'important'}`}
      onDoubleClick={() => toggleImportant(todo.id)}>
      <div className='flex-row'>
        {/* COMPLETE btn */}
        <AiFillCheckCircle
          className='pointer'
          style={todo.isCompleted ? { color: 'green' } : { color: 'gray' }}
          onClick={() => toggleComplete(todo.id)}
        />

        <h3 style={{ width: '100%' }}>
          {todo.title} {/* CLOSE btn below */}
          <AiFillCloseCircle
            style={{ color: '#b90000', cursor: 'pointer' }}
            onClick={() => onDelete(todo.id)}
          />{' '}
        </h3>
      </div>
      <p>{todo.description}</p>
    </div>
  );
};

TodoItem.prototype = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
