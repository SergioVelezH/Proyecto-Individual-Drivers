import './point.css'


function Point({driver}) {
    const {id,name,lastName,nationality,image,description,dob,teams} = driver;

  return (
    <div className='point-container'>
      {name && <><h2 className='name'>{name.forename}</h2><h2 className='name'>{name.surname}</h2></>}
      <h4 className='info'>{id}</h4>
      <h4 className='info'>{nationality}</h4>
      <h4 className='info'>{dob}</h4>
      <h4 className='info'>{teams}</h4>
      <p className='description'>{description}</p>
      <img className='imagen' src={image?.url} alt="" />
    </div>
  )
}

export default Point;

