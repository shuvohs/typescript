import Counter from './components/Counter';
import './App.css';
import { useState } from 'react';
import {todosData} from './components/TodosData'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState (todosData)
  return (
    <div className="App">
     <Counter />
     <Todos todos = {todos}/>
    </div>
  );
}

export default App;
