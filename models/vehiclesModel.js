class Vehicle {
    constructor(id, make, model, km, color, location, value) {
        this.id = id;
        this.make = make;
        this.model = model;
        this.km = km;
        this.color = color;
        this.location = location;
        this.value = value;
    }
}

// Exporting vehicleShema to server.js.
module.exports = Vehicle;