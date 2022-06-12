/*
The Interface Segregation Principle states that a client should never be forced to implement an interface that it does not use, 
or clients shouldn't be forced to depend on methods they do not use.

The interface segregation principle states that an entity should never be forced to implement an interface 
that contains elements which it will never use
*/

class People {}

class Bird {}

const flyer = {
  fly: function () {
    console.log("can fly");
  },
};

Object.assign(Bird.prototype, flyer);

const sparrow = new Bird();
console.log(sparrow.fly());
