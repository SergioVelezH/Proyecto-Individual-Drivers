import { Link } from "react-router-dom";

import { useDispatch,useSelector } from "react-redux";
import './navbar.css'
import { filterDriverOrigin, filterDriverTeam, getAllTeams, orderDriversAlfa, orderDriversBorn } from "../../redux/actions";

function Navbar({handleChange, handleSubmit,allTeams}) {
const dispatch = useDispatch();
const allDrivers = useSelector(state => state.allDrivers)



  const handleFilterOrigin =  (event) => {
  dispatch(filterDriverOrigin(event.target.value))    
}

  const handleFilterTeam = (event) => {
    dispatch(filterDriverTeam(event.target.value))
  };

  const handleOrderAlfa = (event) => {
    dispatch(orderDriversAlfa(event.target.value))
  }

  const handleOrderAge = (event) => {
    dispatch(orderDriversBorn(event.target.value))
  }


  return (
    <div className='search-box'>
      <form className='search-form'  onChange={handleChange}>
        <input className='search-input' placeholder='Search...' type='search' />
        <button className="boton-search" type='submit' onClick={handleSubmit} >🔍</button>
        <Link to={"/create"}>
        <button className='boton-create'>Create Driver</button>
        </Link>
        <select className="option-filter" placeholder="Origin" onChange={handleFilterOrigin}>
        <option  disabled hidden >Origen</option>
          <option value={"BDD"}>BDD</option>
          <option value={"API"}>API</option>
        </select>
        <div>
            <select className="option-filter" placeholder="Team" onChange={handleFilterTeam}>
            {Array.isArray(allTeams) && allTeams.length > 0 ? 
             (allTeams.map((team) => (<option key={team.ID}>{team.name}</option>))
                ) : (
                      <option value="">No teams available</option>
    )}
            </select>
        </div>
        <select className="option-filter" placeholder="Alfa" onChange={handleOrderAlfa}>
        <option value="" disabled hidden >Alfa</option>
          <option value={"AZ"}>AZ</option>
          <option value={"ZA"}>ZA</option>
        </select>
        <select className="option-filter" placeholder="Age" onChange={handleOrderAge}>
        <option value="" disabled hidden >Age</option>
          <option value={"YOUNGEST"}>YOUNGEST</option>
          <option value={"OLDER"}>OLDER</option>
        </select>
        <button className="boton-search" onClick={() => window.location.reload()}>🔄</button>
      </form>
    </div>
  )
}

export default Navbar;