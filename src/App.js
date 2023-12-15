import './App.css';
import { Header } from './Header';
import { Todos } from './Todos';
import { ButtomNav } from './ButtomNav';
import { useState, useEffect } from 'react';
import { Form } from './Form';

function App() {
  // State for controlling dark mode
  const [darkMode, setDarkMode] = useState(true);

  // State for managing the list of todos
  const [todos, setTodos] = useState(() => {
    // Retrieve todos from localStorage or use a default value if not present
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : ['Jog around the park 3x', '10 minutes meditation', 'Complete Todo app'];
  });

  // Effect hook to save todos to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Function to toggle dark mode
  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  // Function to update todos
  function updateTodos(newTodos) {
    setTodos(newTodos);
  }

  // Function to add a new todo
  function addTodo(formInput, setFormInput) {
    if (formInput.trim() !== '') {
      setTodos([formInput, ...todos]);
      setFormInput('');
    }
  }

  return (
    <div className="App">
      {/* Header Component */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="Main">
        {/* Form Component for adding new todos */}
        <Form addTodo={addTodo} darkMode={darkMode} />

        {/* Todos Component for displaying and managing todos */}
        <Todos todos={todos} darkMode={darkMode} setTodos={updateTodos} />

        {/* Bottom Navigation Component */}
        <ButtomNav darkMode={darkMode} />
      </div>

      {/* Attribution */}
      <p className='buttom-p'>Challenge by <a href="https://www.frontendmentor.io/">Frontend Mentor</a> Coded by <a href="https://www.linkedin.com/in/aliko-amos-0a7098246/">Aliko Amos</a></p>
    </div>
  );
}

export default App;
