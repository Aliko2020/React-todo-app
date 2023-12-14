import React, { useState } from 'react';
import cross from '../src/images/icon-cross.svg';
import crossLight from './images/icon-crosslight.svg'
import checkSvg from './images/icon-check.svg';

export const Todos = ({ todos, darkMode }) => {
  const [checkedTodos, setCheckedTodos] = useState([]);

  const toggleTodo = (index) => {
    if (checkedTodos.includes(index)) {
      setCheckedTodos(checkedTodos.filter((i) => i !== index));
    } else {
      setCheckedTodos([...checkedTodos, index]);
    }
  };

  return (
    <div className={darkMode ? "todos-container-dark" : "todos-container-light"}>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`${darkMode ? "todo-item-dark" : "todo-item-light"} ${checkedTodos.includes(index) ? 'checked' : ''}`}
            onClick={() => toggleTodo(index)}
          >
            <div className='todo'>
              <div className={darkMode ? "rounded-box-dark" : "rounded-box-light"}>
                <img src={checkSvg} alt='check svg' />
              </div>
              {todo}
            </div>
            <div>
              {darkMode ? <img src={cross} alt='cross svg' /> : <img src={crossLight} alt='cross svg' />}
            </div>
          </li>
        ))}
        <li className='todo-item-dark'>
          <div className={darkMode ? "todo-notification-dark" : "todo-notification-light"}>
            <p className='notification'>{todos.length} Task left</p>
            <button >Clear Completed</button>
          </div>
        </li>
      </ul>
    </div>
  );
};
