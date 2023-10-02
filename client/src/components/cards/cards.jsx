import { useState } from 'react'
import './cards.css'
import Card from '../card/card';

function Cards({allDrivers}) {
  
  const driverList = allDrivers;

  return (
    <div className='card-list'>
      {driverList?.map((driver) => (<Card driver={driver} />) )}
    </div>
  )
}

export default Cards;