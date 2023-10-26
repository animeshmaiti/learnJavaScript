var a = 345;//var is used to declare a variable but it
            // is var can be redeclared and reinitialized it could be a problem
            // so we use let and const mostly
var a=67
{
    var a = "Hello World"; 
    console.log(a);
}
console.log(a);
// let is used to declare a variable but it can be reinitialized but not redeclared
let b = 45;
//let b=56; // it will give an error
b=45;//reinitialization is possible
console.log(b);
{// in block scope it will not give an error
    let b = "this is inside the block";// this b is different from the above b
    console.log(b);
}
console.log(b);
// const is used to declare a variable but it can neither be reinitialized nor redeclared
const c=45;
//c=45; // it will give an error
//const c=45; // it will give an error
let d=undefined;
console.log(d);
let e=null;
console.log(e);

