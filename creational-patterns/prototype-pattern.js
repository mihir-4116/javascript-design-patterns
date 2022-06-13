/*
The prototype pattern is a useful way to share properties among many objects of the same type. 
It clones the object and provides the existing properties to the cloned object using prototypal inheritance.
In prototypal inheritance, a prototype object acts as a blueprint from which other objects inherit when the constructor instantiates them.
Hence, any properties defined on the prototype of a constructor function will also be present in the cloned object it creates.
*/

/*
The prototypal pattern has native support in JavaScript. It involves cloning an already configured object; 
hence, the cloned objects are created by reference instead of having their own separate copies. 
This boosts the performance and efficiency of code.

It can be used to eliminate the overhead of initializing an object.

It can be used when you want the system to be independent of how the products in it are created.

It can be used when creating objects from a database, whose values are copied to the cloned object.
*/

// Example
let car = {
  drive() {
    console.log("driving the car");
  },
  brake() {
    console.log("stopping the car");
  },
  numOfWheels: 4,
};

const canFly = () => {
  console.log("no, it can't");
};

const car1 = Object.create(car);
const car2 = Object.create(car);
const car3 = Object.create(car, canFly);
console.log(car.__proto__);
console.log(car1.__proto__ == car);
console.log(car2.__proto__);
console.log(car3.__proto__);
