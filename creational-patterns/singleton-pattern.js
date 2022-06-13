/*
The singleton pattern is a type of creational pattern that restricts the instantiation of a class to a single object. 
This allows the class to create an instance of the class the first time it is instantiated; however, 
on the next try, the existing instance of the class is returned. No new instance is created.
*/

/*
The singleton pattern is mostly used in cases where you want a single object to coordinate actions across a system. Singletons are mostly used by:

Services: services can be singleton since they store the state, configuration and provide access to resources; hence, it makes sense to have a single instance of a service in an application.

Databases: when it comes to database connections, databases such as MongoDB utilize the singleton pattern.

Configurations: if there is an object with a specific configuration, you don’t need a new instance every time that configuration object is needed.
*/

class Logger {
  constructor() {
    if (Logger.loggerInstance == null) {
      this.logs = [];
      Logger.loggerInstance = this;
    }
    return Logger.loggerInstance;
  }

  log(message) {
    this.logs.push(message);
    console.log(message);
  }

  printNumberOfLogs() {
    console.log("number of logs", ":", this.logs.length);
  }
}

const log1 = new Logger();
const log2 = new Logger();

log1.log("Error no 1");
log2.log("Error no 2");
log2.log("Error no 3");
console.log(log1.printNumberOfLogs(), log2.printNumberOfLogs());
