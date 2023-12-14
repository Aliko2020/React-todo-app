import React from 'react'
import { Form } from './Form'
import moon from '../src/images/icon-sun.svg'
import sun from '../src/images/icon-moon.svg'
import checkB from '../src/images/icon-check.svg'

export const Header = ({darkMode, toggleDarkMode}) => {
  function handleClick(){
    toggleDarkMode()
  }

  return (
    <header className=''>
      <div className='top-box'>
        <h1 className="dark" >TODO</h1>
        <button onClick={handleClick} className=''>
          {darkMode ? <img src={moon} alt='moon svg' /> : <img src={sun} alt='sun svg' />}
        </button>
      </div>
      
    </header>
  )
}
