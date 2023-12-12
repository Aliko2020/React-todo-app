import React from 'react'

export const Todos = ({todos}) => {
   
  return (
    <div className='todos-container'>
        <ul>
            {todos.map((todo, index) => (
            <li key={index} className='todo-item'>
                <div className='rounded-box'></div>{todo}
            </li>
            
            ))}
            <li className='todo-item'>
                <div className='todo-notification'>
                    <p>5 items left</p>
                    <button>Clear Completed</button>
                </div>
            </li>
      </ul>
    </div>
  )
}
