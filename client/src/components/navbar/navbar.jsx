import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";
import './navbar.css'
import { filterDriverOrigin, filterDriverTeam, getAllTeams } from "../../redux/actions";

function Navbar({handleChange, handleSubmit,allTeams}) {
const dispatch = useDispatch();
const allDrivers = useSelector(state => state.allDrivers)

  const handleFilterOrigin =  (event) => {
  dispatch(filterDriverOrigin(event.target.value))    
}

  const handleFilterTeam = (event) => {
    dispatch(filterDriverTeam(event.target.value))
  };



  return (
    <div className='search-box'>
      <form className='search-form'  onChange={handleChange}>
        <input className='search-input' placeholder='Search...' type='search' />
        <button className="boton-search" type='submit' onClick={handleSubmit} >🔍</button>
        <Link to={"/create"}>
        <button className='boton-create'>Create Driver</button>
        </Link>
        <select placeholder="Origin" onChange={handleFilterOrigin}>
          <option value={"BDD"}>BDD</option>
          <option value={"API"}>API</option>
        </select>
        <div>
            <select name='teamId' id="">
            {Array.isArray(allTeams) && allTeams.length > 0 ? 
             (allTeams.map((team) => (<option key={team.ID}>{team.name}</option>))
                ) : (
                      <option value="">No teams available</option>
    )}
            </select>
        </div>
      </form>
    </div>
  )
}

export default Navbar;