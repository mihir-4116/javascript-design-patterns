/*
The Interface Segregation Principle states that a client should never be forced to implement an interface that it does not use, 
or clients shouldn't be forced to depend on methods they do not use.

The interface segregation principle states that an entity should never be forced to implement an interface 
that contains elements which it will never use
*/

/*
Imagine we have a streaming platform that has two types of users, a FreeUser and a PremiumUser, both extending from User
*/

// Example
class User {
  constructor(username) {
    this.username = username;
  }

  skipAd() {
    console.log(`I'm going to skip if I'm premium`);
  }

  startParty() {
    console.log(`I'm going to start a party if I'm premium`);
  }
}

class FreeUser extends User {
  constructor(username) {
    super(username);
  }

  skipAd() {
    return null;
  }

  startParty() {
    return null;
  }
}

class PremiumUser extends User {
  constructor(username) {
    super(username);
  }

  skipAd() {
    console.log(`Ad was skipped.`);
  }

  startParty() {
    console.log("Party started, invite your friends!");
  }
}

// The following code will execute
// and print the message
// const premium = new PremiumUser("premium_username");
// premium.skipAd();
// premium.startParty();

// The following code will execute
// but return null
// const free = new FreeUser("free_username");
// free.skipAd();
// free.startParty();

/*
Taking into consideration that only a PremiumUser is able to skip ads and start parties, we are violating the Interface Segregation Prinicple by forcing both User and FreeUser to implement these actions. To apply the principle, we may use composition to only give these functionalities to PremiumUser. After applying the principle, the code would be the following
*/

class User {
  constructor(username) {
    this.username = username;
  }
}

class FreeUser extends User {
  constructor(username) {
    super(username);
  }
}

class PremiumUser extends User {
  constructor(username) {
    super(username);
  }
}

const premiumBenefits = {
  skipAd() {
    console.log('Ad was skipped.');
  },
  startParty() {
    console.log('Party started, invite your friends!');
  },
};

Object.assign(PremiumUser.prototype, premiumBenefits);

// The following code will execute
// and print the message
const premium = new PremiumUser('premium_username');
premium.skipAd();
premium.startParty();

// The following code will throw an exception
// because a FreeUser does not implement these methods
const free = new FreeUser('free_username');
free.skipAd();
free.startParty();
