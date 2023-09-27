

const infoCleaner = (arr) => {
    return arr.map((user) => {
        return{
            id:user.id,
            name:user.name.forename,
            lastName:user.name.surname,
            description:user.description,
            image:user.image.url,
            nationality:user.nationality,
            birthDate:user.dob,
        }
    })
};


module.exports = {infoCleaner};