import './point.css'


function Point({driver}) {
    const {id,name,lastName,nationality,image,description,dob,teams} = driver;

  return (
    <div className='point-container'>
      {/* {name && <><h2 className='name'>{name.forename}</h2><h2 className='name'>{name.surname}</h2></>} */}
      <h1 className='name'>|{`${name?.forename} ${name?.surname}`}|</h1>
      <h4 className='info'>NRO: {id}</h4>
      <h4 className='info'>NATIONALITY: {nationality}</h4>
      <h4 className='info'>DATE OF BORN: {dob}</h4>
      <h5 className='info'>TEAMS: {teams}</h5>
      <p className='description'>{description}</p>
      <img className='imagen' src={image?.url} alt="" />
    </div>
  )
}

export default Point;

