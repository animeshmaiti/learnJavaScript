class Animal{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}
class Rabbit extends Animal{
    constructor(name){
        super(name);
    }
    eat(){
        super.eat();
        console.log(`${this.name} is eating carrot`);
    }
}
let animal = new Animal('tiger');
animal.eat();
animal.name = 'lion';//setter
console.log(animal.name)//getter
animal.eat();
c=78;
let rabbit = new Rabbit('bunny');
console.log(animal instanceof Animal);
console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(c instanceof Number);