const { Router } = require("express");
const { getAllDriversHandler, getDriverByIdHandler, getFirtsDriversHandler, postNewDriverHandler } = require("../handlers/driversHandlers");



const driversRouter = Router();


driversRouter.get("/", getAllDriversHandler);
driversRouter.get("/:id", getDriverByIdHandler);
driversRouter.post("/", postNewDriverHandler);



module.exports = driversRouter;

