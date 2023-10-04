import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";


import './home.css'
import Navbar from '../../components/navbar/navbar';
import Cards from '../../components/cards/cards';
import { getAllDrivers, getByName } from '../../redux/actions';

function Home() {

  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers )
  const [searchString,setSearchString] = useState("");

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
  

  return (
    <div className='home'>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Cards allDrivers = {allDrivers}/>
    </div>
  )
}

export default Home;