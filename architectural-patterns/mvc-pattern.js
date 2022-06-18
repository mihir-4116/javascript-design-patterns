/*
The MVC pattern stands for Model-View-Controller pattern. 
It is an architectural pattern that is used to organize the code of your application. 
It consists of three components:

Model:
The model component manages the data that the application may require.

View:
The view is used for the visual representation of the current model. It renders data on the user’s side.

Controller:
The controller connects the model and the view components.

The model is independent of the view; meaning, it is not concerned with the user interface and how the information is displayed on the user side. 
The view, on the other hand, is an observer of the model. 
Whenever the model gets modified (data is updated) it notifies its observer (the view) which then reacts accordingly.

As mentioned view is the visual representation of the model. 
Whenever it is notified of a change in the model, the view updates accordingly. 
As the view layer is what the users get to see, this is also the layer they get to interact with such as editing or updating attribute values.

The controller is the connection between the model and the view. 
The two do not interact with each other directly. 
The controller takes input from the user such as a click or keypress which updates the view side and then updates the model accordingly. 
It can sometimes update the view directly as well.

You can use this pattern:
If you want improved application organization in your application.
If you want faster development as developers can work on different components of the application simultaneously.
If you want to develop an application that loads fast as MVC supports asynchronous technique.
If you want multiple views for the model.
If you want to increase the scalability of the application as modification in separate components is easier.
*/

class ShoppingCartModel {
  constructor(itemNumber, itemName, itemQuantity, itemPrice) {
    this.itemName = itemName;
    this.itemQuantity = itemQuantity;
    this.itemPrice = itemPrice;
    this.itemNumber = itemNumber;
  }

  getItemName() {
    return this.itemName;
  }

  getItemQuantity() {
    return this.itemQuantity;
  }

  getItemPrice() {
    return this.itemPrice;
  }

  getItemNumber() {
    return this.itemNumber;
  }
}

class ShoppingCartView {
  constructor() {
    this.controller = null;
  }
  registerWith(controller) {
    this.controller = controller;
    this.controller.addView(this);
  }

  displayItem(itemNumber, itemName, itemQuantity, itemPrice) {
    console.log(
      `Item Number: ${itemNumber}\nItem: ${itemName}\nQuantity: ${itemQuantity}\nPrice: ${itemPrice}`
    );
  }

  buyItem(itemNumber, itemName, itemQuantity, itemPrice) {
    this.controller.buyItem(itemNumber, itemName, itemQuantity, itemPrice);
  }

  changeItemQuantity(itemNumber, newQuantity) {
    this.controller.setItemQuantity(itemNumber, newQuantity);
  }
}

class ShoppingCartController {
  constructor() {
    this.model = null;
    this.view = null;
    this.itemList = [];
  }

  addView(view) {
    this.view = view;
  }
  addModel(model) {
    this.model = model;
  }
  setItemQuantity(itemNumber, newQuantity) {
    if (this.itemList[itemNumber]) {
      this.itemList[itemNumber].itemQuantity = newQuantity;
      this.updateView();
    }
  }

  updateView() {
    for (let i in this.itemList)
      this.view.displayItem(
        this.itemList[i].getItemNumber(),
        this.itemList[i].getItemName(),
        this.itemList[i].getItemQuantity(),
        this.itemList[i].getItemPrice()
      );
  }
  buyItem(itemName, itemQuantity, itemPrice) {
    this.itemList.push(
      new ShoppingCartModel(
        this.itemList.length,
        itemName,
        itemQuantity,
        itemPrice
      )
    );
    this.updateView();
  }
}

var view = new ShoppingCartView();
var controller = new ShoppingCartController();
view.registerWith(controller);
view.buyItem("Popcorn", 3, 2.5);
console.log("\n");
view.buyItem("Soap", 5, 10.0);
console.log("\n");
view.changeItemQuantity(0, 6);
