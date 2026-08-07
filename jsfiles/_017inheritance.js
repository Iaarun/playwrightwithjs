// inheritance in javascript
class Vehicle{
    brandName = "Toyota";
    engineType = "V6";
    maxspeed = 200;

    enginestart(){
          console.log("Engine started");
    }

    enginestop(){
          console.log("Engine stopped");
    }
    
}
// inheritance
class Car extends Vehicle{
    carmodal = "Camry";
    cartype = "Sedan";
     speed = 0;

    acelerate(amount){
        this.speed += amount
        console.log(`The car is accelerating. Current speed: ${this.speed} km/h`)
    }

    brake(amount){
        this.speed -= amount
        if(this.speed < 0){
            this.speed = 0
        }
        console.log(`The car is braking. Current speed: ${this.speed} km/h`)
    }
}

const myCar = new Car();
console.log(`Brand: ${myCar.brandName}, Engine: ${myCar.engineType}, Max Speed: ${myCar.maxspeed} km/h, Modal: ${myCar.carmodal}, Type: ${myCar.cartype}`);
myCar.enginestart();
myCar.acelerate(50);
myCar.acelerate(30);
myCar.brake(20);
myCar.enginestop();


class Employee{
    constructor(){ 
     console.log("Employee constructor called");   
    }
}

class Developer extends Employee{
  constructor(){
    super();
    console.log("Developer constructor called");
  }
} 

const dev = new Developer(); // Output: "Developer constructor called"
      