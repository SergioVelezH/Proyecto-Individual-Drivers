
import { Link } from "react-router-dom";
import './card.css'

function Card({driver}) {
  const {id,name,image,teams,lastName,escuderia} = driver;

  return (
    <div className='card-container'>
      <Link to={`/home/${id}`}>
      <img className='img'src={image} alt={name} />    
      </Link>
      <div className="all-carac">
      <h1 className="card-name">{name} {lastName? lastName:null}</h1>
      <h3 className="teams">{escuderia && escuderia.length > 0 ? escuderia[0].name : teams}</h3>
      </div>
    </div>
  )
}

export default Card;


