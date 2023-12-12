import React from 'react'
import { Form } from './Form'
import modeImage from '../src/images/icon-sun.svg'
import modeImage2 from '../src/images/icon-moon.svg'
import checkB from '../src/images/icon-check.svg'

export const Header = () => {
  return (
    <header className=''>
      <div className='top-box'>
        <h1>TODO</h1>
        <button className=''>
          <img src={modeImage2} alt='moon svg' />
        </button>
      </div>
      <Form />
    </header>
  )
}
