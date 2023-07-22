class Animal {// the base class or parent is Animal
  constructor(name) {
    this.name = name;
  }
  shout() {
    console.log(`${this.name} is shouting`);
  }
  fight(){
    console.log(`${this.name} is fighting`);
  }
}
// child class have all property and method of parent class
// but parent class does not have property and method of child class
// child class dose not inherit from other child class
class Lion extends Animal {// the derived class or child is Lion
    roar(){
        console.log(`${this.name} is roaring`);
    }
}
class monkey extends Animal {
    constructor(name,behavior){
        // Call the constructor of the parent class (Animal) using 'super'
        super(name);
        this.behavior = behavior;
    }
    jump(){
        console.log(`${this.name} is jumping`);
    }
    behavior2(){
        console.log(`${this.name} is ${this.name}`);
    }
}
let king = new Lion('King');
// king.shout();
king.fight();
king.roar();
let white = new monkey('white','naughty');
white.shout();
white.jump();
white.behavior2();
// console.log(white.behavior);
// white.roar();// TypeError: white.roar is not a function
// Animal.fight();// TypeError: Animal.fight is not a function

// example 2 by chatGpt
// Parent class
class Animal2 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    makeSound() {
      console.log("Some generic animal sound!");
    }
  }
  
  // Child class
  class Dog extends Animal2 {
    constructor(name, age, breed) {
      // Call the constructor of the parent class (Animal) using 'super'
      super(name, age);
  
      // Additional property specific to the Dog class
      this.breed = breed;
    }
  
    makeSound() {
      console.log("Woof! Woof!");
    }
  
    fetch() {
      console.log(`${this.name} is fetching the ball.`);
    }
  }
  
  // Create an instance of the Dog class
  const myDog = new Dog("Buddy", 3, "Golden Retriever");
  
  // Access properties and methods of the instance
  console.log(myDog.name); // Output: "Buddy"
  console.log(myDog.age); // Output: 3
  console.log(myDog.breed); // Output: "Golden Retriever"
  
  myDog.makeSound(); // Output: "Woof! Woof!"
  myDog.fetch(); // Output: "Buddy is fetching the ball."
  
