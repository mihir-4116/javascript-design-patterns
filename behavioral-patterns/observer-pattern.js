/*
The observer pattern is a major behavioral design pattern. 
It allows objects (observers) that have subscribed to an event to wait for input and react to it when notified; 
meaning, they don’t have to continuously keep on checking whether the input has been provided or not. 
The main subject maintains a list of all the observers, and whenever the event occurs, 
it notifies the observers so they can update their states accordingly.

Let’s look at a real-life example that we can map to this pattern. 
Consider a website that posts interesting articles. 
Every day you visit the site to check for new articles and if there is none you revisit after some time/days. 
What if you get a subscription to the website instead? Once you have the subscription, 
you’ll get notified every time a new article is posted. 
So now, instead of checking the site every few hours, you just wait for the notification for the new article.
*/

class Subject {
  constructor() {
    this.observerList = [];
    this.articlenames = [];
  }

  subscribe(observer) {
    this.observerList.push(observer);
  }

  unsubscribe(observer) {
    this.observerList = this.observerList.filter((obs) => obs != observer);
  }

  notify() {
    this.observerList.forEach((observer) => observer.update());
  }

  publishArticle(articlename) {
    this.articlenames.push(articlename);
    this.notify();
  }
}

class Observer {
  setSubject(subject) {
    this.subject = subject;
  }

  update() {
    console.log("new article published, check it out");
  }
}

const subject = new Subject();
const observer = new Observer();
observer.setSubject(subject);
subject.subscribe(observer);
subject.publishArticle("mission mars");
