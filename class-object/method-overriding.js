class Employee{
    constructor(name){
        this.name = name;
        console.log(`${name} Employee constructor`);
    }
    login(){
        console.log(`employee ${this.name} login`);
    }
    logout(){
        console.log(`employee ${this.name} logout`);
    }
    requestLeave(leaves){
        console.log(`employee ${this.name} has requestLeave ${leaves} days`);
    }
}
class Programmer extends Employee{
    constructor(name){
        // this.name = name;// this will throw error you can't use this before super()
        super(name);//call parent class constructor else it will throw error
        this.name = name;
        console.log(`Programmer constructor ${name}`);
    }
    RequestCoffee(x){
        console.log(`programmer has requestCoffee ${x} times`);
    }
    requestLeave(leaves){
        // console.log(`programmer has requestLeave ${leaves + 1} days (One extra)`);
        super.requestLeave(leaves + 1);
        console.log(`One extra leave for programmer ${this.name}`);
    }
}

let emp = new Employee('Raj');
emp.login();
emp.requestLeave(2);
let pro = new Programmer('java');
pro.requestLeave(5);