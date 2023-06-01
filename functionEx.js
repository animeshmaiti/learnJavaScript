// simple function
// function functionName(argument1,argument2,...){
//     operation
//     return value
// }
function avg(x,y){
    return (x+y)/2;
}
let a=56,b=34;
console.log("average of "+a+" "+b+" is ",avg(a,b));

// arrow function this is used widely in modern javascript
// with return value x+y it could be anything number,string,function
const sum = (x,y)=>{
    return x+y;
}
// with return value this function have value that can store in any variable like below
let d=sum(34,67);
console.log(d)
console.log("sum is ",sum(a,b));
//no return function not holding any value but all operation executed in code block
let c=null;
const noReturn =(x,y) =>{
    console.log("hello world");
    c=x+y;// this c is defined as global variable
}
noReturn(56,34);//you can revoke a function with arguments'34,45'
console.log(c);
noReturn();/*without argument also you can revoke this function although is created with argument
in other many language like c/c++ it will through an error that 'you create a function with argument and you 
revoke it without argument' in JS by default take those argument as undefined*/ 
console.log(c);
console.log(noReturn());/* this will print 'hello world' but this function it self no value is defined 
                         so it also so that undefined if any return value is given then it show the
                         return value instead of undefined*/