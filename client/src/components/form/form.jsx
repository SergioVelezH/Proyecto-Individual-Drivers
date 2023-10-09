import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";


import { validar } from '../../helpers/validations';
import './form.css'
import { createNewDriver,getAllTeams } from '../../redux/actions';

function Form() {
    const dispatch = useDispatch();
    const allTeams = useSelector((state) => state.allEscuderias);
    const [input, setInput] = useState({
        teamId:"",
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

     const [msg, setMsg] = useState({
        name:false,
        msg:''
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
    const response = dispatch(createNewDriver(input));
        if(response){
            setMsg({
                name:true,
                msg:'El driver ha sido creado con éxito'
            })
        }
    };

useEffect(() => {
    dispatch(getAllTeams())
},[dispatch])


console.log(allTeams)

  return (
    <div className='form-container'>
      <form className='form-form'>
        <div className='all-div'>
        <div>
            <label className='only-label'>Name</label>
            <input className='only-input' type="name" name='name' placeholder='Name' value={input.value} onChange={handleChange} />
            <span className='only-span'>{errors.name}</span>
        </div>
        <div>
            <label className='only-label'>Last Name</label>
            <input className='only-input' type="lastName" name='lastName' placeholder='Last Name' value={input.value} onChange={handleChange} />
            <span className='only-span'>{errors.lastName}</span>
        </div>
        <div>
            <label className='only-label'>Description</label>
            <input className='only-input' type="description" name='description' placeholder='Description' value={input.value} onChange={handleChange} />
            <span className='only-span'>{errors.description}</span>
        </div>
        <div>
            <label className='only-label'>Image</label>
            <input className='only-input' type="text" name='image' placeholder='URL' value={input.value} onChange={handleChange} />
            <span className='only-span'>{errors.image}</span>
        </div>
        <div>
            <label className='only-label'>Nationality</label>
            <input className='only-input' type="nationality" name='nationality' placeholder='Nationality' value={input.value} onChange={handleChange} />
            <span className='only-span'>{errors.nationality}</span>
        </div>
        <div>
            <label className='only-label'>Birth Date</label>
            <input className='only-input' type="birthDate" name='birthDate' placeholder='Birth Date' value={input.value} onChange={handleChange}/>
            <span className='only-span'>{errors.birthDate}</span>
        </div>
        <div>
            <select name='teamId' value={input.teamId} onChange={handleChange} id="">
            {/* {allTeams?.map((team) => <option value={team?.ID} >{team?.name}</option>)} */}
            {Array.isArray(allTeams) && allTeams.length > 0 ? 
            (allTeams.map((team) => (<option key={team.ID} value={team.ID}>{team.name}</option>))
    ) : (
      <option value="">No teams available</option>
    )}
            </select>
        </div>
        </div>

        {errors.name||errors.lastName||errors.description||errors.image||errors.nationality||errors.birthDate 
        ? 
        null :
        <button className = "boton-form" type='submit' onClick={handleSubmit}>Submit</button> }
        {msg.name && <span className='good-span'>{msg.msg}</span>}
      </form>
    </div>
  )
}

export default Form;