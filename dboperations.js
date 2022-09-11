// var config = require('./config/dbconfig');
// const sql = require('mssql');

// async function getVehicles() {
//     try {
//         let pool = await sql.connect(config);
//         let vehicles = await pool.request().query("SELECT * from dbo.azuraVehicles");
//         return vehicles.recordsets;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// async function addVehicle(vehicle) {
//     try {
//         let pool = await sql.connect(config);
//         let insertVehicle = await pool.request()
//             .input('make', sql.NVarChar, vehicle.make)
//             .input('model', sql.Int, vehicle.model)
//             .input('km', sql.NVarChar, vehicle.km)
//             .input('color', sql.NVarChar, vehicle.color)
//             .input('location', sql.NVarChar, vehicle.location)
//             .input('value', sql.NVarChar, vehicle.value)
//             .execute('InsertVehicles');
//         return insertVehicle.recordsets;
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// module.exports = {
    // getVehicles: getVehicles,
    // addVehicle: addVehicle
// }