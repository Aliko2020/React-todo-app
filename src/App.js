import './App.css';
import { Header } from './Header';
import { Todos } from './Todos';
import { ButtomNav } from './ButtomNav';
import { useState } from 'react';
import { Form } from './Form';

function App() {
const [todos, setTodos] = useState([
  'Jog around the park 3x',
  '10 minutes meditation',
  'Complete Todo app'
])

function addTodo(formInput, setFormInput){
  if (formInput.trim() !== '') {
    setTodos([...todos, formInput]);
    setFormInput('');
  }
};
  return (
    <div className="App">
      <Header />
      <Form addTodo={addTodo} />
      <Todos todos={todos} />
      <ButtomNav />
    </div>
  );
}

export default App;
