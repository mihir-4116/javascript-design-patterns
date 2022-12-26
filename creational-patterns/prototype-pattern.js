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
// Example
const Cricketer = function(name) {
  this.name = name
  this.runs = 100
}

Cricketer.prototype.onFour = function(target) {
  target.runs += 4;
}

Cricketer.prototype.onSix = function(target) {
  target.hp += 6;
}

const sam = new Cricketer('Sam')
const brook = new Cricketer('Brook')

console.log(sam.onFour === brook.onSix) // false
