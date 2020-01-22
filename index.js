'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicalClass = require('./vehicle-class.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());
const mazda = new VehicalClass.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());
const harley = new VehicalClass.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());
// Implement a car and motorcycle using a Class


