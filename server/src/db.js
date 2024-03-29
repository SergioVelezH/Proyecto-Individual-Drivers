require("dotenv").config();
const { Sequelize } = require("sequelize");

const DriverModel = require("./models/Driver");
const EscuderiaModel = require("./models/Escuderia");

const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/drivers`, {
  logging: false, 
  native: false, 
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);



DriverModel(sequelize);
EscuderiaModel(sequelize);


const { Driver, Escuderia } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Driver.belongsToMany(Escuderia, {as: 'escuderia', through:"driver_teams"});
Escuderia.belongsToMany(Driver, {as:'driver', through:"driver_teams"})

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};