import React from 'react'

export const Form = () => {
  return (
    <form>
        <div className='form-container'>
            <div className='rounded-box'></div>
            <input type='text' placeholder='Create a new todo...' />
            <button><span className=''>+</span></button>
        </div>
    </form>
  )
}
