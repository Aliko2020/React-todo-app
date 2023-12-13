import React, { useState } from 'react';
import cross from '../src/images/icon-cross.svg';
import checkSvg from './images/icon-check.svg';

export const Todos = ({ todos }) => {
  const [checkedTodos, setCheckedTodos] = useState([]);

  const toggleTodo = (index) => {
    if (checkedTodos.includes(index)) {
      setCheckedTodos(checkedTodos.filter((i) => i !== index));
    } else {
      setCheckedTodos([...checkedTodos, index]);
    }
  };

  return (
    <div className='todos-container'>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`todo-item ${checkedTodos.includes(index) ? 'checked' : ''}`}
            onClick={() => toggleTodo(index)}
          >
            <div className='todo'>
              <div className='rounded-box'>
                <img src={checkSvg} alt='check svg' />
              </div>
              {todo}
            </div>
            <div onClick={removeTodo}>
              <img src={cross} alt='cross svg' />
            </div>
          </li>
        ))}
        <li className='todo-item'>
          <div className='todo-notification'>
            <p>{todos.length} Task left</p>
            <button>Clear Completed</button>
          </div>
        </li>
      </ul>
    </div>
  );
};
