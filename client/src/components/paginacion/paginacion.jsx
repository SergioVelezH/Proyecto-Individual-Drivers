import { useState } from 'react'
import './paginacion.css'


function Paginacion({pagina, setPagina,maxPag}) {
    const nextPage = () => {
    setPagina(pagina + 1);
  }
    const previousPage = () => {
    setPagina(pagina - 1);
  }
  return (
    <div className='pag-container' >
      <button className ='pag-button' disabled={pagina === 1 || pagina < 1} onClick={previousPage}> ◀ </button>
      <button className ='pag-button' disabled={pagina === Math.ceil(maxPag) || pagina >  Math.ceil(maxPag)} onClick={nextPage} > ▶ </button>
    </div>
  )
}

export default Paginacion;