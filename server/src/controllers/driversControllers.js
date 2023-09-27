const axios = require("axios");
const { Driver } = require("../db");
const { infoCleaner } = require("../utils");
const { Op,sequelize } = require("sequelize");



const getAllDrivers = async () => {
    const infoApi = (await axios.get("http://localhost:5000/drivers/")).data 
    
    const driverDb = await Driver.findAll();
    const driverApi = infoCleaner(infoApi);

    return[...driverDb, ...driverApi];
    
};


const getDriverByName = async (name) => {
    const keyWord = name.toLowerCase();

    const infoApi = (await axios.get("http://localhost:5000/drivers/")).data;
    const driverApi = infoCleaner(infoApi);
    const driverFiltered = driverApi.filter((user) => user.name.toLowerCase() === keyWord);

    const driverDb = await Driver.findAll ({where: {name: name}});
    // const driverDb = await Driver.findAll({
    //     where: sequelize.where(
    //       sequelize.fn("LOWER", sequelize.col("name")),
    //       { [Op.like]: keyWord }
    //     )
    //   });

    const results = [...driverDb,...driverFiltered];


    if(results.length === 0){
        throw new Error ("No hay ningún driver con este nombre")
    }else{
        return results.slice(0,15);
    }

};



const getDriverById = async(id,source) => {
    const driver = 
        source === "api"
            ? (await axios.get(`http://localhost:5000/drivers/${id}`)).data 
            : await Driver.findByPk(id);
    return driver;         
};



const postNewDriver = async (name,lastName,description,image,nationality,birthDate) => {

    return await Driver.create({name,lastName,description,image,nationality,birthDate})
    
};


module.exports = {
    getAllDrivers,
    getDriverById,
    postNewDriver,
    getDriverByName
}