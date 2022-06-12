/*
The single responsibility principle says that a class or module should have only a single purpose. 
*/

// Example :

/*
Below is the example which violates the single responsibility principle because it's uses two methods insode one class
and both methods have different purposes
*/
class CalorieTracker {
  constructor(maxCalories) {
    this.calories = 0;
    this.maxCalories = maxCalories;
  }

  trackCalories(calorieCount) {
    this.calories += calorieCount;
    if (this.calories > calorieCount) {
      this.errorLog("maximum calories exceeded");
    }
  }

  errorLog(message) {
    console.warn(message);
  }
}

// const calorieTracker = new CalorieTracker(1500);
// calorieTracker.trackCalories(500);
// calorieTracker.trackCalories(1200);

// Solution

/*now both ErrorLog and CalorieTracker classes have different purposes*/
class ErrorLog {
  warn(message) {
    console.warn(message);
  }
}

class CalorieTracker {
  constructor(maxCalories) {
    this.calories = 0;
    this.maxCalories = maxCalories;
  }

  trackCalories(calorieCount) {
    this.calories += calorieCount;
    if (this.calories > calorieCount) {
      ErrorLog.warn("maximum calories exceeded");
    }
  }
}

const calorieTracker = new CalorieTracker(1500);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1200);
