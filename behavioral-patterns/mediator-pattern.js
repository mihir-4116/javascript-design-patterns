/*
It is a behavioral pattern that allows a mediator (a central authority) to act as the coordinator between different objects; 
instead of the objects referring to each other directly. 
A mediator as the name implies, is a central authority through which various components can communicate; 
hence, it allows the loose coupling of objects.

A real-life example is that of a chat application. 
Here the chat box acts as the mediator through which various users interact with each other.

It can be used:
If your system has multiple parts that need to communicate.
To avoid tight coupling of objects in a system with a lot of objects.
To improve code readability.
To make code easier to maintain.
If communication between objects becomes complex and hinders the reusability of code.
*/

class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.chatbox = null;
  }

  sendMessage(message, sendTo) {
    this.chatbox.send(message, this, sendTo);
  }

  recieverMessage(message, recieveFrom) {
    console.log(`${recieveFrom.name} sent the message: ${message}`);
  }
}

class ChatBox {
  constructor() {
    this.users = [];
  }

  register(user) {
    this.users[user.id] = user;
    user.chatbox = this;
  }

  send(message, recieveFrom, sendTo) {
    sendTo.recieverMessage(message, recieveFrom);
  }
}

const chatbox = new ChatBox();
const joey = new User("Joey", 1);
const phoebe = new User("Phoebe", 2);
chatbox.register(joey);
chatbox.register(phoebe);
joey.sendMessage("Hey, how you doing?", phoebe);
phoebe.sendMessage("Smelly Cat, Smelly Cat..", joey);
joey.sendMessage("I love this song!", phoebe);
