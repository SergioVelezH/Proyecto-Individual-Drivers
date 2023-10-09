import './point.css'


function Point({driver}) {
    const {id,name,lastName,nationality,image,description,birthDate,teams,escuderia} = driver;
    console.log(driver);


  return (
    <div className='point-container'>
      {/* <h1 className='name'>|{`${name?.forename} ${name?.surname}`}|</h1> */}
      <h1>{name} {lastName?lastName:null}</h1>
      <h4 className='info'>ID:{id}</h4>
      <h4 className='info'>NATIONALITY: {nationality}</h4>
      <h4 className='info'>DATE OF BORN: {birthDate}</h4>
      <h5 className='info'>TEAMS: { escuderia && escuderia.length > 0 ? escuderia[0].name : teams}</h5>
      <p className='description'>{description}</p>
      <img className='imagen' src={image} alt="" />
    </div>
  )
}

export default Point;


{/* {name && <><h2 className='name'>{name.forename}</h2><h2 className='name'>{name.surname}</h2></>} */}