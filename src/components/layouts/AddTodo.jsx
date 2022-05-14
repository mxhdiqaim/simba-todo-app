import { useState, useContext } from 'react';

import TodoContext from '../../context/todos/todoContext';

const AddTodo = () => {
  const { current, onUpdate, addTodo } = useContext(TodoContext);

  const [id] = useState(current && current.id);
  const [title, setTitle] = useState(current ? current.title : '');
  const [description, setDescription] = useState(
    current ? current.description : '',
  );
  const [important, setImportant] = useState(
    current ? current.important : false,
  );
  const [isCompleted] = useState(false);

  const todoData = current
    ? { id, title, description, important, isCompleted }
    : { title, description, important, isCompleted };

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addTodo(todoData);
    } else {
      onUpdate(todoData);
    }
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Add Todo</label>
        <input
          type='text'
          placeholder='Add Todo'
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      <div className='form-control'>
        <label>Description</label>
        <input
          type='text'
          placeholder='Add Description'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Important</label>
        <input
          type='checkbox'
          checked={important}
          value={important}
          onChange={e => setImportant(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save' className='btn btn-block' />
    </form>
  );
};

export default AddTodo;
