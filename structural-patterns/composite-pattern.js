/*
The composite pattern is used to structure objects in a tree-like hierarchy. 
Here, each node of the tree can be composed of either child node(s) or be a leaf (no children objects). 
This pattern allows the client to work with these components uniformly; 
that is, a single object can be treated exactly how a group of objects is treated.

This pattern allows the formation of deeply nested structures. 
If a leaf object receives the request sent by the client, it will handle it. 
However, if the recipient is composed of children, the request is forwarded to the child components.

Composite pattern is powerful as it allows us to treat an object as a composite. 
Since both single and composite objects share the same interface, 
it allows reusing objects without worrying about their compatibility.

You can use this pattern if you want to develop a scalable application that uses plenty of objects. 
It is particularly helpful in situations where you are dealing with a tree-like hierarchy of objects. 
An example of this pattern being used is by your operating system to create directories and sub-directories. 
Libraries like React and Vue also use this pattern to build reusable interfaces.
*/

// Example

//Component
class Employee {
  constructor(name, position, progress) {
    this.name = name;
    this.position = position;
    this.progress = progress;
  }
  getProgress() {}
}

//Leaf subclass
class Developers extends Employee {
  constructor(name, position, progress) {
    super(name, position, progress);
  }
  getProgress() {
    return this.progress;
  }
}

//Leaf subclass
class FreeLanceDev extends Employee {
  constructor(name, position, progress) {
    super(name, position, progress);
  }
  getProgress() {
    return this.progress();
  }
}

//Composite subclass
class DevTeamLead extends Employee {
  constructor(name, position) {
    super(name, position);
    this.teamMembers = [];
  }
  addMember(employee) {
    this.teamMembers.push(employee);
  }

  removeMember(employee) {
    for (var i = 0; i < this.teamMembers.length; i++) {
      if (this.teamMembers[i] == employee) {
        this.teamMembers.splice(i, 1);
      }
    }
    return this.teamMembers;
  }

  getProgress() {
    for (var i = 0; i < this.teamMembers.length; i++) {
      console.log(this.teamMembers[i].getProgress());
    }
  }

  showTeam() {
    for (var i = 0; i < this.teamMembers.length; i++) {
      console.log(this.teamMembers[i].name);
    }
  }
}

const seniorDev = new Developers("Rachel", "Senior Developer", "60%");
const juniorDev = new Developers("Joey", "Junior Developer", "50%");
const teamLead = new DevTeamLead("Regina", "Dev Team Lead", "90%");
teamLead.addMember(seniorDev);
teamLead.addMember(juniorDev);
console.log("Team members list:");
teamLead.showTeam();
console.log("Get Team members progress:");
teamLead.getProgress();
console.log("Removing Rachel from team:");
teamLead.removeMember(seniorDev);
console.log("Updated team members list:");
teamLead.showTeam();
const freelanceDev = new Developers("Ross", "Free Lancer", "80%");
console.log("Get freelance developer's progress:");
console.log(freelanceDev.getProgress());
