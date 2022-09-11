// // Requiring Express.
const express = require("express");
// // Requiring Router from Express.
const router = express.Router();
// // Requiring controllers from vehicleController.js.
const Db = require("../controllers/vehiclesController.js");

router.route('/get').get((request, response) => {
  Db.getVehicles().then((data) => {
    response.json(data[0]);
  })
})

router.route('/get/:id').get((request, response) => {
  Db.getOneVehicle(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/post').post((request, response) => {
  let order = { ...request.body }
  Db.postVehicle(order).then(data => {
    response.status(201).json(data);
  })
})

// // Exporting vehicleRouter.js to server.js.
module.exports = router;