/*
In English, the word facade means a deceptive front or appearance. 
Following this definition, a facade structural pattern provides a simpler interface that hides the complex functionalities of a system.

The facade pattern is used to simplify a client’s interaction with a system. 
So it can be used when an application has a large and complex underlying code that the client does not need to see.

It can also be used when you want to interact with the methods present in a library without knowing the processing that happens in the background. 
An example can be of the JavaScript libraries such as jQuery.

What problems can the Facade design pattern solve? 

To make a complex subsystem easier to use, a simple interface should be provided for a set of interfaces in the subsystem.
The dependencies on a subsystem should be minimized.
Clients that access a complex subsystem directly refer to (depend on) many different objects having different interfaces (tight coupling), 
which makes the clients hard to implement, change, test, and reuse.
*/

/* 
Example : here we are hiding the process of complex
food ordering. customer, will only see result, he/she will not be able 
to or need to understand the complex food making process
*/

let orderNumber = 0;

class PlaceFoodOrder {
  placeOrder(orderDetails) {
    const orderId = PlaceFoodOrder.generateId();
    let chef;
    if (orderDetails.foodType === "Main Course") {
      chef = new MainCourseChef();
    } else if (orderDetails.foodType == "Dessert") {
      chef = new DessertChef();
    }
    return chef.addFoodOrder({ orderId, orderDetails });
  }

  static generateId() {
    return ++orderNumber;
  }
}

class FoodOrders {
  constructor() {
    this.orders = [];
  }

  addFoodOrder(order) {
    this.orders.push(order);
    return this.conveyOrder(order);
  }

  timeToMakeOrder() {}
  conveyOrder(order) {}
}

class MainCourseChef extends FoodOrders {
  constructor() {
    super();
    this.assigned = true;
    return this;
  }

  timeToMakeOrder() {
    return Math.floor(Math.random() * 50) + 10;
  }

  conveyOrder({ orderId, orderDetails }) {
    const time = this.timeToMakeOrder();
    console.log(
      `Order number ${orderId}: ${orderDetails.foodDetails} will be served in ${time} minutes.`
    );
  }
}

class DessertChef extends FoodOrders {
  constructor() {
    super();
    this.assigned = true;
    return this;
  }

  timeToMakeOrder() {
    return Math.floor(Math.random() * 30) + 10;
  }

  conveyOrder({ orderId, orderDetails }) {
    const time = this.timeToMakeOrder();
    console.log(
      `Order number ${orderId}: ${orderDetails.foodDetails} will be served in ${time} minutes.`
    );
  }
}

const customer = new PlaceFoodOrder();
const order1 = customer.placeOrder({
  foodType: "Main Course",
  foodDetails: "Pasta with Shrimps",
});
const order2 = customer.placeOrder({
  foodType: "Dessert",
  foodDetails: "Molten Lava Cake",
});
