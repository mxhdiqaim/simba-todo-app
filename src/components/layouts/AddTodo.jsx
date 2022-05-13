import { useState, useContext } from 'react';

import TodoContext from '../../context/todos/todoContext';

const AddTodo = () => {
  const { current, onUpdate, addTodo } = useContext(TodoContext);

  const [title, setTodo] = useState(current?.title);
  const [description, setDescription] = useState(current?.description);
  const [important, setImportat] = useState(
    current ? current.important : false,
  );
  const [isCompleted] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (current) {
      console.log(current);
      onUpdate(current);
    } else {
      addTodo({ title, description, important, isCompleted });
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
          onChange={e => setTodo(e.target.value)}
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
          onChange={e => setImportat(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save' className='btn btn-block' />
    </form>
  );
};

export default AddTodo;
