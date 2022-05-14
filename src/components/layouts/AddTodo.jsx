import { useState, useContext } from 'react';

import TodoContext from '../../context/todos/todoContext';

const AddTodo = () => {
  // Context destructuring
  const { current, onUpdate, addTodo } = useContext(TodoContext);

  // Todo Local State
  const [todo, setTodo] = useState({
    id: current && current.id,
    title: current ? current.title : '',
    description: current ? current.description : '',
    important: current ? current.important : false,
    isCompleted: false,
  });

  // onChange for input
  const onChange = e => setTodo({ ...todo, [e.target.name]: e.target.value });

  // Destructure from todo state above
  const { id, title, description, important, isCompleted } = todo;

  // Get the todoData base on current or not current
  const todoData = current
    ? { id, title, description, important, isCompleted }
    : { title, description, important, isCompleted };

  // onSubmit func for addTodo ot upDate todo
  const onSubmit = e => {
    e.preventDefault();

    // Check if current is available
    /**
     * current is a global state that hold the todo that is about to be updated, when you click an edit icon, it will push the todo to current
     */
    if (current === null) {
      // addTodo func call
      addTodo(todoData);
    } else {
      //upDate func call
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
