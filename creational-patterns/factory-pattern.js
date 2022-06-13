/*
The factory pattern is a creational design pattern that provides a generic interface for creating objects. 
In the factory pattern, we can specify the type of object being created and we do not need to explicitly require a constructor.
*/
/*
When to use the factory pattern? #
=>When the type of objects required cannot be anticipated beforehand.
=>When multiple objects that share similar characteristics need to be created.
=>When you want to generalize the object instantiation process since the object set up is complex in nature.
*/

// Example
class Computer {
  constructor() {
    this.branch = "computer";
    this.message = function () {
      return `Congratulations! You Choose ${this.branch}`;
    };
  }
}
class Mechanical {
  constructor() {
    this.branch = "mechanical";
    this.message = function () {
      return `Congratulations! You Choose ${this.branch}`;
    };
  }
}
class Civil {
  constructor() {
    this.branch = "civil";
    this.message = function () {
      return `Congratulations! You Choose ${this.branch}`;
    };
  }
}

class StudentFactory {
  constructor() {
    this.createStudent = function (branch) {
      switch (branch) {
        case "computer":
          return new Computer();
        case "mechanical":
          return new Mechanical();
        case "civil":
          return new Civil();
        default:
          break;
      }
    };
  }
}

const studentFactory = new StudentFactory();
const computerStudent = studentFactory.createStudent("computer");
const mechanicalStudent = studentFactory.createStudent("mechanical");
const civilStudent = studentFactory.createStudent("civil");
console.log(computerStudent.message());
console.log(mechanicalStudent.message());
console.log(civilStudent.message());
