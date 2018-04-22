//Car
//make
//model
//vin
//getDescription

class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return "Hi "+this.name;
    return `Hi, I am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += `Their major is ${this.major}`;
    }
    return description;
  }
}
class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasLocation()) {
      greeting += ` I am from ${this.location}`;
    }
    return greeting;  
  }
  hasLocation() {
    return !!this.location;
  }
}
const me = new Student("Ting Alex", 26, "Computer Science");
console.log(me.getDescription());
console.log(me);

const other = new Student();
console.log(other.getDescription());
console.log(other.hasMajor());

const toto = new Traveler("Toto", 21, "Los Angerlos");
console.log(toto);
console.log(toto.getGreeting());
const Lala = new Traveler();
console.log(Lala);
console.log(Lala.getGreeting());
