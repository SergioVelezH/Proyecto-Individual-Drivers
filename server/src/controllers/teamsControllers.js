const axios = require("axios");
const { Escuderia } = require("../db");
const { where } = require("sequelize");


module.exports = getTeams = async () => {
    

    const response = (await axios.get("http://localhost:5000/drivers/")).data;
    const infoApi = response.flatMap((driver) => driver.teams ? driver.teams.split(',') : []);



    // const infoApi = response.filter((driver) => {if(driver.teams){return driver.teams }});

    // const teams = infoApi.map((elem) => elem.split(","));

    // const arr = teams.map((elem) => {if(!allTeams.includes(elem))allTeams.push(elem)} )

    // const dataBase = infoApi.map((elem) => Escuderia.create({name:elem}))


    // const name = "HOLA"

    // const dataBase = Escuderia.create({name});

    const dataBase = Escuderia.bulkCreate(infoApi.map((team) => ({ name: team })));

    return dataBase;
    

};


