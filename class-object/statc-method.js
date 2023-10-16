class Animal{
    constructor(name){
        this.name = Animal.capitalizeName(name);
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    static capitalizeName(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length);
    }
}
let animal = new Animal('tiger');
animal.eat();