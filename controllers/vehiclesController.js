const config = require("../config/dbconfig.js");
const sql = require("mssql");
const Vehicle = require('../models/vehiclesModel.js');

async function getVehicles() {
    try {
        let pool = await sql.connect(config);
        let vehicles = await pool.request().query("SELECT * from dbo.azuraVehicles");
        return vehicles.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getOneVehicle(vehicleId) {
    try {
        let pool = await sql.connect(config);
        let vehicle = await pool.request()
            .input('input_parameter', sql.Int, vehicleId)
            .query("SELECT * from dbo.azuraVehicles where id = @input_parameter");
        return vehicle.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function postVehicle(vehicle) {
    try {
        let pool = await sql.connect(config);
        let insertVehicle = await pool.request()
            .input('make', sql.VarChar(255), vehicle.make)
            .input('model', sql.VarChar(255), vehicle.model)
            .input('km', sql.Int, vehicle.km)
            .input('color', sql.VarChar(255), vehicle.color)
            .input('location', sql.VarChar(255), vehicle.location)
            .input('value', sql.VarChar(255), vehicle.value)
            .execute('InsertVehicles');
        return insertVehicle.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getVehicles: getVehicles,
    getOneVehicle: getOneVehicle,
    postVehicle: postVehicle
}