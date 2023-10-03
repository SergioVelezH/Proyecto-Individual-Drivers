import './point.css'


function Point({driver}) {
    const {id,name,lastName,nationality,image,description,dob,teams} = driver;

  return (
    <div>
      <h2>{name.forename}</h2>
      <h2>{name.surname}</h2>
      <h4>{id}</h4>
      <h4>{nationality}</h4>
      <h4>{dob}</h4>
      <h4>{teams}</h4>
      <p>{description}</p>
      <img src={image.url} alt="" />
      
    </div>
  )
}

export default Point;