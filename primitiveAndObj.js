// nn bb ss u --> primitive data types
//if we do not assign any value to a variable then it will be undefined
let a=45;//number
let b=null;//object
let c=true;//boolean
//this 'n' means end of the bigInt number
let d=BigInt(123456734567890n)+BigInt(6790077n);//big int
let h=BigInt("45648")+BigInt("5778858")//we can also use string to convert it into bigInt
let e="this is a string";//string
let f=Symbol("this is a symbol");//symbol
let g=undefined;//undefined

// console.log(d);
// console.log(typeof d,typeof a,typeof b,typeof c,typeof e,typeof f,typeof g);
console.log(h);
//objects in js
//objects are key value pairs
// non primitive data types
const item={
    name:"Biscuit",
    price:20,
    isStock:true,
    quantity:undefined,
}
const item2={
    "name":"Banana",
    "price":20,
    "isStock":true,
    "quantity":undefined,
}
console.log(item);
console.log(item.name);
// console.log(item.["name"]);throw an error because it is not a valid syntax
console.log(item2);
console.log(item2["name"]);//this is a valid syntax
console.log(item2.name);//this is also a valid syntax