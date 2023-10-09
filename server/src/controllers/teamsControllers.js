const axios = require("axios");
const { Escuderia } = require("../db");



const teamsSet = new Set(); 
module.exports = getTeams = async () => {
    

    const response = (await axios.get("http://localhost:5000/drivers")).data;

for (const driver of response) {
  if (driver.teams) {
    const teams = driver.teams.split(',');
    
    
    for (const team of teams) {
      
      const teamTrimmed = team.trim();
      
      if (!teamsSet.has(teamTrimmed)) {
        
        await Escuderia.create({ name: teamTrimmed });
        teamsSet.add(teamTrimmed); 
      }
    }
  }
}
const arr = await Escuderia.findAll();


return arr;




};


