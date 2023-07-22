class railwayForm {// railwayForm is a class
    fillForm(name, trainNo) {// these are the properties of class
        this.name = name;
        this.trainNo = trainNo;
    }
    submitForm() {// these are the methods of class
        console.log(`Name is ${this.name} and train no is ${this.trainNo} has been submitted`);
    }
    cancelForm() {
        console.log(`Name is ${this.name} and train no is ${this.trainNo} has been cancelled`);
    }
}
let rahulForm = new railwayForm();
rahulForm.fillForm('Rahul', 12345);
rahulForm.submitForm();
rahulForm.cancelForm();
let rohitForm = new railwayForm();
rohitForm.fillForm('Rohit', 67890);
rohitForm.submitForm();

// The constructor method is a special method of a class for creating and
// initializing an object instance of that class 
// constructor method is called automatically when a class is initiated
// one class can have only one constructor
const Rectangle = class {// class is anonymous but assigned to a variable
    constructor(height, width) {// constructor is a method
        this.height = height;
        this.width = width;
    }
};
const square = new Rectangle(10, 10);
console.log(square.height);
console.log(square.width);

// Expression; the class has its own name
const Rectangle2 = class Rectangle3 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
const square2 = new Rectangle2(20, 20);
console.log(square2.height);
console.log(square2.width);

const square3 = new Rectangle3(30, 30);// ReferenceError: Rectangle3 is not defined


