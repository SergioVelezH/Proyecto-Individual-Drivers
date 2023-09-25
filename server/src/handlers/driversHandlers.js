



const getAllDriversHandler = (req, res) => {

res.status(200).send("Aqui estan todos los drivers");

};


const getDriverByIdHandler = (req, res) => {

    res.status(200).send("Detalle del driver");
};

const getFirtsDriversHandler = (req, res) => {

    res.status(200).send("Primeros 15 drivers");
};

const postNewDriverHandler = (req, res) => {

    res.status(200).send("Agregado el nuevo driver")

};



module.exports = {
    getAllDriversHandler,
    getDriverByIdHandler,
    getFirtsDriversHandler,
    postNewDriverHandler
}