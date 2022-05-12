import PropTypes from 'prop-types';
const TodoItem = ({ todo }) => {
  return (
    <div className={`todo ${todo.important && 'important'}`}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <input
          type='checkbox'
          name='todo'
          checked={todo.isCompleted}
          style={{ cursor: 'pointer' }}
        />
        <h3>{todo.title} </h3>
      </div>
      <p>{todo.description}</p>
    </div>
  );
};

TodoItem.prototype = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
