const axios = require("axios");
const { Driver,Escuderia } = require("../db");
const { infoCleaner, addImg } = require("../utils");
const { Op,Sequelize } = require("sequelize");



const getAllDrivers = async () => {
    const response = (await axios.get("http://localhost:5000/drivers/")).data 
    
    const infoApi = infoCleaner(response);
    const driverApi = addImg(infoApi);
    
    
    const driverDb = await Driver.findAll({
        include: 'escuderia', 
      });

    return[...driverDb, ...driverApi];
    
};


const getDriverByName = async (name) => {
   

    const info = (await axios.get("http://localhost:5000/drivers/")).data;
    const response = infoCleaner(info);

    const filteredDrivers = response.filter((driver) => driver.name.toLowerCase().includes(name.toLowerCase()));

    const filteredDb = await Driver.findAll({
        where: {
          name: {
            [Sequelize.Op.iLike]: `%${name}%`, 
          },
        },
      });
    if(filteredDrivers.length === 0 && filteredDb.length === 0){
        throw Error ("No hay ningún driver con este nombre");
    }

    const driversFil = addImg(filteredDrivers);

    return [...driversFil.slice(0, 15), ...filteredDb];

};


const getDriverById = async(id,source) => {
    let array = [];
    let driver;

    if (source === "api") {
      const response = (await axios.get(`http://localhost:5000/drivers/${id}`)).data;
      array.push(response);
      driver = infoCleaner(array);
    } else {
    
    driver = await Driver.findByPk(id, {
        include: 'escuderia',
      });
    }

    
    return driver;         
};

const makeRelationship = async (driverId, teamId) => {
    const driver = await Driver.findByPk(driverId);
    const team = await Escuderia.findByPk(teamId);
    return driver.addEscuderia(team);
};

const postNewDriver = async (name,lastName,description,image,nationality,birthDate) => {

    

    return await Driver.create({name,lastName,description,image,nationality,birthDate});
   
};


module.exports = {
    getAllDrivers,
    getDriverById,
    postNewDriver,
    getDriverByName,
    makeRelationship
}