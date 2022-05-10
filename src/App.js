import './App.css';
import TodoState from './context/todos/TodoState';
import Todos from './components/Todos';

const App = () => {
  console.log('Hello from App.js');
  return (
    <TodoState>
      <Todos />
    </TodoState>
  );
};

export default App;
