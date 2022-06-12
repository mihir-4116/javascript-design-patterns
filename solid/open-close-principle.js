/*
The open-closed principle says that code should be open for extension, 
but closed for modification. 
What this means is that if we want to add additional functionality, 
we should be able to do so simply by extending the original functionality, 
without the need to modify it.
*/

// Example :
/*
Below is the example which violates the open-closed principle because in order to make below example work 
we are modifying original class.
*/

class Vehicle {
  constructor(fuelCapacity, fuelEfficiency) {
    this.fuelCapacity = fuelCapacity;
    this.fuelEfficiency = fuelEfficiency;
  }

  getRange() {
    let range = this.fuelCapacity * this.fuelEfficiency;

    if (this instanceof HybridVehicle) {
      range += this.electricRange;
    }
    return range;
  }
}

class HybridVehicle extends Vehicle {
  constructor(fuelCapacity, fuelEfficiency, electricRange) {
    super(fuelCapacity, fuelEfficiency);
    this.electricRange = electricRange;
  }
}

// const standardVehicle = new Vehicle(25, 50);
// const hybridVehicle = new HybridVehicle(30, 40, 50);

// console.log(standardVehicle.getRange(), hybridVehicle.getRange());

// Solution //

class Vehicle {
  constructor(fuelCapacity, fuelEfficiency) {
    this.fuelCapacity = fuelCapacity;
    this.fuelEfficiency = fuelEfficiency;
  }

  getRange() {
    return this.fuelCapacity * this.fuelEfficiency;
  }
}

class HybridVehicle extends Vehicle {
  constructor(fuelCapacity, fuelEfficiency, electricRange) {
    super(fuelCapacity, fuelEfficiency);
    this.electricRange = electricRange;
  }

  getRange() {
    return this.fuelCapacity * this.fuelEfficiency + this.electricRange;
  }
}

const standardVehicle = new Vehicle(25, 50);
const hybridVehicle = new HybridVehicle(30, 40, 50);

console.log(standardVehicle.getRange(), hybridVehicle.getRange());
