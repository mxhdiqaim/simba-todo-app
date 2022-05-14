import './App.css';
// Context imports
import TodoState from './context/todos/TodoState';

import Home from './components/pages/Home';

const App = () => {
  return (
    <TodoState>
      <Home />
    </TodoState>
  );
};

export default App;
