import React from 'react'

export const ButtomNav = ({darkMode}) => {
  return (
    <div className='nav-container'>
        <div className={darkMode ? "bottom-nav-dark" : "bottom-nav-light"}>
            <span>All</span>
            <span>Active</span>
            <span>Completed</span>
        </div>
    </div>
  )
}
