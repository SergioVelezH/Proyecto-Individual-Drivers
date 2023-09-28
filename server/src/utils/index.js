

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



const addImg = (arr) => {
    const response = arr.map((driver) => {
        if(!driver.image){
            return {
                ...driver,
                image:{
                    url: "https://www.infobae.com/new-resizer/9G9YlEFIZ6lvWJFGu__bbQx6vF0=/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/EEJV2KB2V2VGNQ3XUG66AP6HBM.jpg"
                },
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