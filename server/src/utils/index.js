

const infoCleaner = (arr) => {
    return arr.map((user) => {
        return{
            id:user.id,
            name:`${user.name.forename} ${user.name.surname}`,
            // lastName:user.name.surname,
            description:user.description,
            image:user.image.url,
            nationality:user.nationality,
            birthDate:user.dob,
            teams:user.teams,
        }
    })
};

// name:`${user.name.forename} ${user.name.surname}`



const addImg = (arr) => {
    const response = arr.map((driver) => {
        if(!driver.image){
            return {
                ...driver,
                image:"https://cnnespanol.cnn.com/wp-content/uploads/2023/03/f1-formula-1-checo-perez-GettyImages-1247675782-e1677885322904.jpg?quality=100&strip=info"
            };
        } else {
            return driver;
        }
    });
    return response;

}

module.exports = {
    infoCleaner,
    addImg
};