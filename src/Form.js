import React from 'react'
import { useState } from 'react'

export const Form = ({addTodo, darkMode}) => {
  
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
        <div className={darkMode ? "form-container-dark" : "form-container-light"}>
            <div className={darkMode ? "rounded-box-dark" : "rounded-box-light"}></div>
            <input 
              className={darkMode ? "input-dark" : "input-light"}
              type='text' 
              placeholder='Create a new todo...' 
              value={formInput}
              onChange={handleForm}
            />
            <button 
              className={darkMode ? "add-dark" : "add-light"}
              onClick={handleClick}>+

            </button>
        </div>
    </form>
  )
}
