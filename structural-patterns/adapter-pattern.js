/*
The adapter pattern allows those classes to work together that couldn’t because of having different interfaces (properties/methods of an object). 
It translates the interface for a class to make it compatible with another class.

This pattern is useful if an API is modified or new implementations are added to it. In this case, 
if the other parts of a system are still using the old API, the adapter pattern will translate the interface such that the two can work together.
*/

/*
below example we are going to attach simpleearphones to typec phone using adapter pattern
*/

class SimpleEarphones {
  constructor() {
    this.attach = function () {
      console.log("Using Earphones with Type C phone");
    };
  }
}

class EarPhoneAdapter extends SimpleEarphones {
  constructor(typecphone) {
    super();
  }
}

class TypeCPhone {
  constructor() {
    this.attach = function () {
      console.log("Earphpnes attached to Type C phone");
    };
  }
}

const typeCphone = new TypeCPhone();
const adapter = new EarPhoneAdapter(typeCphone);
adapter.attach();
