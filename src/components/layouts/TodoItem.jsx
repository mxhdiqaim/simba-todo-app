import React, { useContext, useState } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import TodoContext from '../../context/todos/todoContext';

import PropTypes from 'prop-types';
const TodoItem = ({ todo }) => {
  const { toggleComplete, onDelete } = useContext(TodoContext);

  const { isCompleted, setIsCompleted } = useState(todo.isCompleted);

  return (
    <div
      className={`todo ${todo.important && 'important'}`}
      onDoubleClick={() => toggleComplete(todo.id)}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}>
        {todo.isCompleted ? (
          <AiFillCheckCircle style={{ color: 'green', cursor: 'pointer' }} />
        ) : (
          <input
            type='checkbox'
            name='todo'
            checked={isCompleted}
            style={{ cursor: 'pointer' }}
            onChange={e => setIsCompleted(e.currentTarget.checked)}
          />
        )}
        <h3 style={{ width: '100%' }}>
          {todo.title}{' '}
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
