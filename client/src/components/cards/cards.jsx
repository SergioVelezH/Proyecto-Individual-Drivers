import { useState } from 'react'
import './cards.css'
import Card from '../card/card';

function Cards() {
  

  return (
    <div className='card-list'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Cards;