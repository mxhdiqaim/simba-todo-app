import { useState, useContext } from 'react';

import TodoContext from '../../context/todos/todoContext';

const AddTodo = () => {
  const { current, onUpdate, addTodo } = useContext(TodoContext);

  const [todo, setTodo] = useState({
    id: current && current.id,
    title: current ? current.title : '',
    description: current ? current.description : '',
    important: current ? current.important : false,
    isCompleted: false,
  });

  const onChange = e => setTodo({ ...todo, [e.target.name]: e.target.value });

  const { id, title, description, important, isCompleted } = todo;

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
          name='title'
          onChange={onChange}
          required
        />
      </div>
      <div className='form-control'>
        <label>Description</label>
        <input
          type='text'
          placeholder='Add Description'
          value={description}
          name='description'
          onChange={onChange}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Important</label>
        <input
          type='checkbox'
          checked={important}
          value={important}
          name='important'
          onChange={onChange}
        />
      </div>

      <input type='submit' value='Save' className='btn btn-block' />
    </form>
  );
};

export default AddTodo;
