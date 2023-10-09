import { Link } from "react-router-dom"
import './landing.css'

function Landing() {
  const containerStyle = {
    backgroundImage: 'url("https://wallpaperaccess.com/full/6122397.png")', // Reemplaza con la URL de tu imagen de fondo
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="landing-container">
      <div className="global">
      <h1 className="text">🏁Welcome to Drivers Web Page!🏁</h1>
      <Link  to={"/home"}>
        <button className="boton">Click to home</button>
      </Link>
      </div>
    </div>
  )
}

export default Landing;