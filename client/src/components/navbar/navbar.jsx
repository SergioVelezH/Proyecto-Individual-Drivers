import { useState } from 'react'
import './navbar.css'

function Navbar({handleChange, handleSubmit}) {
  

  return (
    <div className='search-box'>
      <form onChange={handleChange}>
        <input placeholder='Search...' type='search' />
        <button type='submit' onClick={handleSubmit} >
          Search
        </button>
      </form>
    </div>
  )
}

export default Navbar;