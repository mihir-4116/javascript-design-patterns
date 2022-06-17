/*
The chain of responsibility pattern allows a request sent by a client to be received by more than one object. 
It creates a chain of loosely coupled objects that, upon receiving the request, either handle it or pass it to the next handler object.

A common example of this pattern is event bubbling in DOM. 
An event propagates through different nested elements of the DOM until one of them handles it.

You can use it if your program is to handle various requests in different ways without knowing the sequence and type of requests beforehand. 
It allows you to chain several handlers, thus, allowing all of them a chance to process the request.
*/

class EmployeeChain {
  setNext(nextInChain) {}
  assignWork(req) {}
}

class Employee {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  getName() {
    return this.name;
  }
  getLevel() {
    return this.level;
  }
}

class EasyLevelWorkHandler extends EmployeeChain {
  constructor() {
    super();
    this.nextInChain = new EmployeeChain();
  }

  setNext(nextObj) {
    this.nextInChain = nextObj;
  }

  assignWork(req) {
    if (req.getLevel() == "Easy") {
      console.log("Easy work assigned to: " + req.getName());
    } else {
      this.nextInChain.assignWork(req);
    }
  }
}

class MediumLevelWorkHandler extends EmployeeChain {
  constructor() {
    super();
    this.nextInChain = new EmployeeChain();
  }

  setNext(nextObj) {
    this.nextInChain = nextObj;
  }

  assignWork(req) {
    if (req.getLevel() == "Medium") {
      console.log("Easy work assigned to: " + req.getName());
    } else {
      this.nextInChain.assignWork(req);
    }
  }
}

class HardLevelWorkHandler extends EmployeeChain {
  constructor() {
    super();
    this.nextInChain = new EmployeeChain();
  }

  setNext(nextObj) {
    this.nextInChain = nextObj;
  }

  assignWork(req) {
    if (req.getLevel() == "Hard") {
      console.log("Easy work assigned to: " + req.getName());
    } else {
      this.nextInChain.assignWork(req);
    }
  }
}

var w1 = new EasyLevelWorkHandler();
var w2 = new MediumLevelWorkHandler();
var w3 = new HardLevelWorkHandler();
w1.setNext(w2);
w2.setNext(w3);

const emp1 = new Employee("Joe", "Easy");
const emp2 = new Employee("Anne", "Medium");
const emp3 = new Employee("Shawn", "Hard");

w1.assignWork(emp1);
w1.assignWork(emp2);
w1.assignWork(emp3);
