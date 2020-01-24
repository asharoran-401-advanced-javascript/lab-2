// eslint-disable-next-line strict
'use strict';

const VehicleConstructor = require('./lib/vehicle-constructor.js');


// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());


const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class

const VehicalClass = require('./lib/vehicle-class.js');

const mazdaClass = new VehicalClass.Car('Mazda 3');
console.log(mazdaClass.name, mazdaClass.drive(), mazdaClass.stop());

const harleyClass = new VehicalClass.Motorcycle('Harley');
console.log(harleyClass.name, harleyClass.wheelie(), harleyClass.stop());