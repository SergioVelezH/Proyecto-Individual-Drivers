
import { Link } from "react-router-dom";
import './card.css'

function Card({driver}) {
  const {id,name,image,teams} = driver;

  return (
    <div className='card-container'>
      <h2>{name}</h2>
      <p>{teams}</p>
      <Link to={`/home/${id}`}>
      <img className='img'src={image} alt={name} />    
      </Link>
    </div>
  )
}

export default Card;