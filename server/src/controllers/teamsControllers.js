const axios = require("axios");
const { Escuderia } = require("../db");



const teamsSet = new Set(); // Conjunto para llevar un registro de equipos agregados
module.exports = getTeams = async () => {
    
    // const response = (await axios.get("http://localhost:5000/drivers/")).data;
    // const infoApi = response.flatMap((driver) => driver.teams ? driver.teams.split(',') : []);

    // const dataBase = Escuderia.bulkCreate(infoApi.map((team) => ({ name: team })));

    // return dataBase;



    // const response = (await axios.get("http://localhost:5000/drivers")).data;
    // const teamsSet = new Set(); // Conjunto para llevar un registro de equipos agregados
    
    // for (const driver of response) {
    //   if (driver.teams) {
    //     const teams = driver.teams.split(',');
        
    //     // Recorre los equipos del conductor
    //     for (const team of teams) {
    //       // Verifica si el equipo ya se ha agregado a la BD
    //       if (!teamsSet.has(team)) {
    //         // Agrega el equipo a la BD
    //         await Escuderia.create({ name: team });
    //         teamsSet.add(team); // Agrega el equipo al conjunto
    //       }
    //     }
    //   }
    // }

    // console.log('Equipos agregados con éxito.');
    // return 'Proceso completado';

    const response = (await axios.get("http://localhost:5000/drivers")).data;

for (const driver of response) {
  if (driver.teams) {
    const teams = driver.teams.split(',');
    
    // Recorre los equipos del conductor
    for (const team of teams) {
      // Elimina los espacios en blanco del equipo
      const teamTrimmed = team.trim();
      // Verifica si el equipo ya se ha agregado a la BD
      if (!teamsSet.has(teamTrimmed)) {
        // Agrega el equipo a la BD
        await Escuderia.create({ name: teamTrimmed });
        teamsSet.add(teamTrimmed); // Agrega el equipo al conjunto
      }
    }
  }
}
const arr = await Escuderia.findAll();


return arr;

// return arr = [...teamsSet]


};


