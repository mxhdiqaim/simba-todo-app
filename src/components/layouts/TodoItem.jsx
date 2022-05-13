import React, { useContext } from 'react';
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiTwotoneEdit,
} from 'react-icons/ai';
import TodoContext from '../../context/todos/todoContext';

import PropTypes from 'prop-types';
const TodoItem = ({ todo }) => {
  // CONTEXT
  const { toggleImportant, onDelete, toggleComplete, setCurrent } =
    useContext(TodoContext);

  return (
    <div
      className={`todo ${todo.important && 'important'}`}
      onDoubleClick={() => toggleImportant(todo.id)}>
      <div className='flex-row'>
        {/* COMPLETE btn */}
        <AiFillCheckCircle
          className='pointer'
          size={20}
          style={todo.isCompleted ? { color: 'green' } : { color: 'gray' }}
          onClick={() => toggleComplete(todo.id)}
        />
        <h3 style={{ width: '100%' }}>
          {todo.title}{' '}
          {/**
           *  CLOSE btn
           * below */}
          <div className='btn-action'>
            <AiTwotoneEdit
              size={20}
              className='btn-edit'
              onClick={() => setCurrent(todo)}
            />
            {/* EDIT btn */}
            <AiFillCloseCircle
              className='btn-close'
              onClick={() => onDelete(todo.id)}
            />{' '}
          </div>
        </h3>
      </div>
      <div style={{ display: 'flex' }}>
        <p>{todo.description}</p>
      </div>
    </div>
  );
};

TodoItem.prototype = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
