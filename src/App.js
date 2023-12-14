import './App.css';
import { Header } from './Header';
import { Todos } from './Todos';
import { ButtomNav } from './ButtomNav';
import { useState } from 'react';
import { Form } from './Form';

function App() {
const [darkMode, setDarkMode] = useState(true)

function toggleDarkMode(){
    setDarkMode(!darkMode)
} 

const [todos, setTodos] = useState([
  'Jog around the park 3x',
  '10 minutes meditation',
  'Complete Todo app'
])

function addTodo(formInput, setFormInput){
  if (formInput.trim() !== '') {
    setTodos([formInput,...todos]);
    setFormInput('');
  }
};
  return (
    <div className="App">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Form addTodo={addTodo} darkMode={darkMode} />
      <Todos todos={todos} darkMode={darkMode} />
      <ButtomNav darkMode={darkMode} />
    </div>
  );
}

export default App;
