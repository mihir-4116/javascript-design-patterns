/*
The bridge pattern allows separate components with separate interfaces to work together. 
It keeps an object’s interface separate from its implementation allowing the two to vary independently.

When to use the bridge pattern? 

if you want to extend a class in several independent dimensions
if you want to change the implementation at run time
if you want to share the implementation between objects
*/

// Example using 2 different applications and two different modes(lighr,dark)
class Applications {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  display() {}
  displayMode() {}
}

class Mode {
  constructor(app) {
    this.app = app;
    this.lightMode = function () {
      this.app.setLightMode();
    };
    this.darkMode = function () {
      this.app.setDarkMode();
    };
  }
}

class Facebook extends Applications {
  constructor(name, type) {
    super(name, type);
    this.mode = "light";
    this.setLightMode = function () {
      this.mode = "light";
    };
    this.setDarkMode = function () {
      this.mode = "dark";
    };
  }
  display() {
    console.log(`Welcome to Facebook for ${this.type}.`);
  }
  displayMode() {
    console.log(`You are using facebook in ${this.mode} mode.`);
  }
}

class WhatsApp extends Applications {
  constructor(name, type) {
    super(name, type);
    this.setLightMode = function () {
      this.mode = "light";
    };
    this.setDarkMode = function () {
      this.mode = "dark";
    };
  }
  display() {
    console.log(`Welcome to Whatsapp for ${this.type}.`);
  }
  displayMode() {
    console.log(`You are using whatsapp in ${this.mode} mode.`);
  }
}

const fb = new Facebook("Facebook", "Social Networking");
const mode = new Mode(fb);
mode.darkMode();
fb.displayMode();

const whatsapp = new WhatsApp("Whatsapp", "Chatting");
const mode2 = new Mode(whatsapp);
mode2.lightMode();
whatsapp.displayMode();
