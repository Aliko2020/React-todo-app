import React from 'react'
import cross from '../src/images/icon-cross.svg'


export const Todos = ({todos}) => {
   console.log('todos recieved');
  return (
    <div className='todos-container'>
        <ul>
            {todos.map((todo, index) => (
            <li key={index} className='todo-item'>
               <div className='todo'><div className='rounded-box'></div>{todo}</div>  <div><img src={cross} alt='cross svg' /></div>
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
  )
}
