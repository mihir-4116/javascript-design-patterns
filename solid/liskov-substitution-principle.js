/*
The Liskov substitution principle states that any class should be substitutable for its parent class without unexpected consequences. 
In others words, if the classes Cat and Dog extend the class Animal, 
then we would expect all of the functionality held within the Animal class to behave normally for a Cat and Dog object.
*/

// Example :

class Bird {
  fly() {
    console.log("can fly");
  }
}

class Eagle extends Bird {
  dive() {
    console.log("can dive");
  }
}

class Penguin extends Bird() {
  // Problem: Can't fly!
}

// Solution //

class Bird {
  layEgg() {}
}

class FlyingBird {
  fly() {
    console.log("can fly");
  }
}

class SwimmingBird extends Bird {
  swim() {
    console.log("can swim");
  }
}

class Eagle extends FlyingBird {}

class Penguin extends SwimmingBird {}
