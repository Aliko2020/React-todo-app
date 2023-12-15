import React, { useState } from 'react';
import cross from '../src/images/icon-cross.svg';
import crossLight from './images/icon-crosslight.svg';
import checkSvg from './images/icon-check.svg';

export const Todos = ({ todos, darkMode, setTodos }) => {
  // State to manage checked todos
  const [checkedTodos, setCheckedTodos] = useState([]);

  // Function to toggle the completion status of a todo
  const toggleTodo = (index) => {
    if (checkedTodos.includes(index)) {
      // If the todo is already checked, remove it from the list
      setCheckedTodos(checkedTodos.filter((i) => i !== index));
    } else {
      // If the todo is not checked, add it to the list
      setCheckedTodos([...checkedTodos, index]);
    }
  };

  // Function to remove a todo
  const removeTodo = (index) => {
    // Remove the todo from the todos list
    setTodos(todos.filter((_, i) => i !== index));
    // Optionally, you can also update the checkedTodos state if needed
    setCheckedTodos(checkedTodos.filter((i) => i !== index));
  };

  return (
    <div className={darkMode ? 'todos-container-dark' : 'todos-container-light'}>
      <ul>
        {/* Map through todos and create list items */}
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`${darkMode ? 'todo-item-dark' : 'todo-item-light'} ${
              checkedTodos.includes(index) ? 'checked' : ''
            }`}
            onClick={() => toggleTodo(index)}
          >
            <div className="todo">
              {/* Display checkbox */}
              <div className={darkMode ? 'rounded-box-dark' : 'rounded-box-light'}>
                <img src={checkSvg} alt="check svg" />
              </div>
              {/* Display todo text */}
              {todo}
            </div>
            {/* Display remove icon */}
            <div onClick={() => removeTodo(index)}>
              {darkMode ? <img src={cross} alt="cross svg" /> : <img src={crossLight} alt="cross svg" />}
            </div>
          </li>
        ))}
        {/* Display the task count and Clear Completed button */}
        <li className="todo-item-dark">
          <div className={darkMode ? 'todo-notification-dark' : 'todo-notification-light'}>
            <p className="notification">{todos.length} Task{todos.length > 1 ? 's' : ''} left</p>
            <button>Clear Completed</button>
          </div>
        </li>
      </ul>
    </div>
  );
};
