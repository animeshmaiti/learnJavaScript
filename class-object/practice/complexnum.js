class Complex {
    constructor(real=0,imaginary=0){
        this.real=real;
        this.imaginary=imaginary;
    }
    add(num){
        this.real=this.real+num.real;
        this.imaginary=this.imaginary+num.imaginary;
    }
    get real(){
        return this._real;
    }
    get imaginary(){
        return this._imaginary;
    }
    set real(newReal){
        this._real=newReal;
    }
    set imaginary(newImaginary){
        this._imaginary=newImaginary;
    }
}

let a = new Complex(2,3);
let b = new Complex;
// b.real=3;
// b.imaginary=4;
a.add(b);
console.log(`${a.real} + ${a.imaginary}i`);