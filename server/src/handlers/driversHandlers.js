const { getAllDrivers,getDriverById,postNewDriver, getDriverByName, makeRelationship } = require("../controllers/driversControllers")



const getAllDriversHandler = async (req, res) => {
    const {name} = req.query;

    try {
        if(name){
            const driverByName = await getDriverByName(name);
            res.status(200).json(driverByName);
        } else {
            const drivers = await getAllDrivers();
            res.status(200).json(drivers);
        }
    } catch (error) {
        res.status(400).json({error:error.message});
    }


};


const getDriverByIdHandler = async (req, res) => {
    const {id} = req.params;
    
    const source = isNaN(id) ? "bdd" : "api";

    try {
        const response = await getDriverById(id,source);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};



const postNewDriverHandler = async(req, res) => {

    const {teamId,name,lastName,description,image,nationality,birthDate} = req.body;

    try {
        const response = await postNewDriver(name,lastName,description,image,nationality,birthDate);
        const { ID } = response.dataValues;
        await makeRelationship(ID,teamId)
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})  
    }
};



module.exports = {
    getAllDriversHandler,
    getDriverByIdHandler,
    postNewDriverHandler
}