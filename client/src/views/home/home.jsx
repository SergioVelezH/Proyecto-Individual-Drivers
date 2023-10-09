import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";


import './home.css'
import Navbar from '../../components/navbar/navbar';
import Cards from '../../components/cards/cards';
import { getAllDrivers, getAllTeams, getByName } from '../../redux/actions';

function Home() {

  const dispatch = useDispatch();
  const allTeams = useSelector((state) => state.allEscuderias);
  const allDrivers = useSelector((state) => state.allDrivers);
  const [searchString,setSearchString] = useState("");
  const [err,setErr] = useState({
    good:false,
    msg:""
  })


  function handleChange(e){
    e.preventDefault();
    setSearchString(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(getByName(searchString));
      
  }

  useEffect(() => {
    dispatch(getAllDrivers())
  },[dispatch])

  useEffect(() => {
    dispatch(getAllTeams())
  },[dispatch])

  
return(
!allDrivers.length ? (<div><h1>CARGANDO</h1></div>) : (
    <div className='home'>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} allTeams = {allTeams}/>
      <Cards allDrivers = {allDrivers}/>
    </div>
    )
  )
}
export default Home;