import React from 'react'
import { useState } from 'react'

export const Form = ({addTodo}) => {
  
  const [formInput, setFormInput] = useState('')

  function handleForm(event) {
    event.preventDefault()
    setFormInput(event.target.value);
  }
  
  function handleClick(event){
    event.preventDefault()
    addTodo(formInput,setFormInput)
    console.log('Buttom clicked');
  }
  return (
    <form>
        <div className='form-container'>
            <div className='rounded-box'></div>
            <input 
              type='text' 
              placeholder='Create a new todo...' 
              value={formInput}
              onChange={handleForm}
            />
            <button onClick={handleClick}>+</button>
        </div>
    </form>
  )
}
