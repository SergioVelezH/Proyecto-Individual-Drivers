
import { Link } from "react-router-dom";
import './card.css'

function Card({driver}) {
  // const {id,name,image,teams} = driver;

  return (
    <div className='card-container'>
      <h1>{driver?.name}</h1>
      <p className="teams">{driver?.teams}</p>
      <Link to={`/home/${driver?.id}`}>
      <img className='img'src={driver?.image} alt={driver?.name} />    
      </Link>
    </div>
  )
}

export default Card;