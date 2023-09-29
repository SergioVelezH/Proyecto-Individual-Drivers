import { useState } from 'react'
import './home.css'
import Navbar from '../../components/navbar/navbar';
import Cards from '../../components/cards/cards';

function Home() {
  

  return (
    <div className='home'>
      <h2 className='home-title'>Home</h2>
      <Navbar/>
      <Cards/>
    </div>
  )
}

export default Home;