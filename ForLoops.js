const prompt = require("prompt-sync")({ sigint: true });
for(let i=0; i<10;i++){/* i<10 is condition this loop will continue till the condition 
                        false i++ is i=i+1*/
    console.log(i);
    // i++ //you can write this in the loop also
}

// sum of n natural numbers and factorial

let sum=0;
let factorial=1;
// let n =prompt("enter a number: ");
let n=4;
// n= parseInt(n)
for(let i=1; i<=n;i++){//in for loop semicolon is needed
    sum += i
    factorial *= i;
}
console.log("first "+n+" natural number's sum is "+sum );
console.log("factorial of "+n+" number is "+factorial);
console.log(i);/*this will through a error i is not defined
                in for loop we using let i this is Limited to block level scope 
                outer this block it is not defined but if you use var than it will declare 
                as global variable the it will not throw any error*/

// for in loop
let object={
    harry:100,
    am:70,
    kd:68,
    pm:89,
    sm:88,
}
for(let a in object){//here a is key of our object this loop will continue till end of keys
    // console.log(a)
    console.log("name "+a+"'s mark is "+object[a])
}
for (const iterator of "animesh") {
    console.log(iterator);
}