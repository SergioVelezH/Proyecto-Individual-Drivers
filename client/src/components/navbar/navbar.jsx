import { Link } from "react-router-dom";
import './navbar.css'

function Navbar({handleChange, handleSubmit}) {
  

  return (
    <div className='search-box'>
      <form className='search-form'  onChange={handleChange}>
        <input className='search-input' placeholder='Search...' type='search' />
        <button className="boton-search" type='submit' onClick={handleSubmit} >
          Search
        </button>
        <Link to={"/create"}>
        <button className='boton-create'>Create</button>
        </Link>
      </form>
    </div>
  )
}

export default Navbar;