import { Link } from "react-router-dom"
import './landing.css'

function Landing() {
  

  return (
    <div className="landing-container">
      <div className="global">
      <h1 className="text">Welcome to Drivers Web Page!</h1>
      <Link  to={"/home"}>
        <button className="boton">Click to continue</button>
      </Link>
      </div>
    </div>
  )
}

export default Landing;