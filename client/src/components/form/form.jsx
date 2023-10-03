import { useState } from 'react';
import { useDispatch } from "react-redux";

import { validar } from '../../helpers/validations';
import './form.css'
import { createNewDriver } from '../../redux/actions';

function Form() {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
       name:"",
       lastName:"",
       description:"",
       image:"",
       nationality:"",
       birthDate: "",
    })

    const [errors, setErrors] = useState({
        name:"",
        lastName:"",
        description:"",
        image:"",
        nationality:"",
        birthDate: "",
     })


function handleChange(event) {
    setInput({
        ...input,
        [event.target.name]: event.target.value,
        });
    setErrors(validar({...input, [event.target.name]: event.target.value}))
    };

function handleSubmit(event){
    event.preventDefault();
    dispatch(createNewDriver(input));
}    



  return (
    <div className='form-container'>
      <form>
        <div>
            <label>Name</label>
            <input type="name" name='name' placeholder='Name' value={input.value} onChange={handleChange} />
            <span>{errors.name}</span>
        </div>
        <div>
            <label>Last Name</label>
            <input type="lastName" name='lastName' placeholder='Last Name' value={input.value} onChange={handleChange} />
            <span>{errors.lastName}</span>
        </div>
        <div>
            <label>Description</label>
            <input type="description" name='description' placeholder='Description' value={input.value} onChange={handleChange} />
            <span>{errors.description}</span>
        </div>
        <div>
            <label>Image</label>
            <input type="text" name='image' placeholder='URL' value={input.value} onChange={handleChange} />
            <span>{errors.image}</span>
        </div>
        <div>
            <label>Nationality</label>
            <input type="nationality" name='nationality' placeholder='Nationality' value={input.value} onChange={handleChange} />
            <span>{errors.nationality}</span>
        </div>
        <div>
            <label>Birth Date</label>
            <input type="birthDate" name='birthDate' placeholder='Birth Date' value={input.value} onChange={handleChange}/>
            <span>{errors.birthDate}</span>
        </div>

        {errors.name||errors.lastName||errors.description||errors.image||errors.nationality||errors.birthDate 
        ? 
        null :
        <button type='submit' onClick={handleSubmit}>Submit</button> }

      </form>
    </div>
  )
}

export default Form;