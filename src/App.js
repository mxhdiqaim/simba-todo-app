import './App.css';
import TodoState from './context/todos/TodoState';

import Home from './components/pages/Home';

const App = () => {
  console.log('Hello from App.js');
  return (
    <TodoState>
      <Home />
    </TodoState>
  );
};

export default App;
