'use strict';

class Vehical{
    constructor(name , wheels){
        this.name = name;
        this.wheels = wheels;
    }
  /// the vehical is drive so we need func 
  drive(){
    //   console.log('this type of vehical is moving');
 return 'Moving Forward';
  }
  stop(){
      return 'Stopping';
  }
}
///// we have two type of vehical cars (4 weels)and motorcycle (2 weels)
class Car extends Vehical{
    /// we need just the name as argument 
    constructor(name){
        ///By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods
        super(name , 4);
    }
}
class Motorcycle extends Vehical{
    constructor(name){
        super(name , 2);
    }
    wheelie(){
        return 'Wheee!';
    }
}
//// we extend the car and motorcycle on Vehical so we need exports them 
module.exports = {Car , Motorcycle};