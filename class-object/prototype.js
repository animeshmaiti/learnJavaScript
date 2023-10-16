let a ={
    name:"sachin",
    age:45,
}
console.log(a);
let b={
    run: ()=>{
        console.log("run");
    }
}
b.__proto__ ={
    name2:"Jackie",
}
a.__proto__=b;
a.run()
console.log(a.name2);