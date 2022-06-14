/*
The decorator pattern focuses on adding properties, functionalities, and behavior to existing classes dynamically. 
The additional decoration functionalities aren’t considered essential enough to be a part of the original class definition as they can cause clutter. 
Hence, the decorator pattern allows modifying the code without changing the original class.

Unlike the creational patterns, the decorator pattern is a structural pattern that does not focus on object creation rather decoration. 
Hence, it doesn’t rely on prototypal inheritance alone; it takes the object and keeps adding decoration to it. 
This makes the process more streamlined.
*/

// Example - 1

class BasicMaths {
  constructor() {}

  addition(a, b) {
    console.log(a + b);
  }

  substraction(a, b) {
    console.log(a - b);
  }
}

function addMethodsTOObjects(obj) {
  obj.multiply = function (a, b) {
    console.log(a * b);
  };

  obj.division = function (a, b) {
    console.log(a / b);
  };

  return obj;
}

const obj = new BasicMaths();
const newObjWithExtendedMethods = addMethodsTOObjects(obj);
console.log(obj.addition(10, 5));
console.log(obj.substraction(10, 5));
console.log(newObjWithExtendedMethods.multiply(10, 5));
console.log(newObjWithExtendedMethods.division(10, 5));

// Example - 2
// by extending the obj and add new properties to it

class SuperHero {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
}

function SuperHeroWithSword(superhero) {
  superhero.sword = true;
  superhero.hasSword = function () {
    return `${this.name}'s power is ${this.power}, and he also has a sword now.`;
  };
  return superhero;
}

function SuperHeroWithSuperSpeed(superhero) {
  superhero.superSpeed = true;
  superhero.hasSuperSpeed = function () {
    return `${this.name}'s power is ${this.power}, and he also has the super speed now.`;
  };
  return superhero;
}

function SuperHeroWithSpeedandSword(superhero) {
  superhero.speedAndSword = true;

  superhero.hasSpeedAndSword = function () {
    return `${this.name}'s power is ${this.power}, and he also has both super speed and a sword now.`;
  };
  return superhero;
}
