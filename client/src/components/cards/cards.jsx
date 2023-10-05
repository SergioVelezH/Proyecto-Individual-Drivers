import { useState } from 'react'
import './cards.css'

import Card from '../card/card';
import Paginacion from '../paginacion/paginacion';

function Cards({allDrivers}) {
  const driverList = allDrivers;
  
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(9);
  const maxPag = driverList.length / porPagina;

  console.log(maxPag);
  

  return (
    <div className='card-list'>
      {driverList?.slice((pagina - 1) * porPagina,(pagina - 1) * porPagina + porPagina)
      .map((driver) => (<Card driver={driver} />) )}
      <Paginacion pagina ={pagina} setPagina = {setPagina} maxPag = {maxPag} />
    </div>
  )
}

export default Cards;