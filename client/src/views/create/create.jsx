import { Link } from "react-router-dom";
import './create.css'
import Form from '../../components/form/form';

function Create() {
 

  return (
    <div>
      <Link to={"/home"}>
       <button className="button-back">Home</button>
       </Link>
      <h1 className='title'>CREATE    YOUR     DRIVER!</h1>
      <Form/>
    </div>
  )
}

export default Create;