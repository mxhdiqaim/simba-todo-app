import { useState, useContext } from 'react';

import TodoContext from '../../context/todos/todoContext';

const AddTodo = () => {
  const { current, onUpdate } = useContext(TodoContext);

  const [todo, setTodo] = useState(current?.title);
  const [description, setDescription] = useState(current?.description);
  const [important, setImportat] = useState(current?.important);

  const onSubmit = e => {
    e.preventDefault();

    onUpdate({ todo, description, important });
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Add Todo</label>
        <input
          type='text'
          placeholder='Add Todo'
          value={todo}
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
