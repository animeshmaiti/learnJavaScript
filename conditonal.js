const prompt = require("prompt-sync")({ sigint: true });// prompt is work on browser without this line
//here we are using node js it not support usual prompt so run this command on terminal >npm install prompt-sync
// and add this line as prompt

let age = prompt("What's your age? ");
// console.log(age)// by default its a string print string
age = Number.parseInt(age);// change the data type any to integer
console.log(age)// if you give input any int or float it will print that integer part not float part
// if you give any string or not a number(NaN) it will print NaN 
console.log(typeof age);
// conditional statement (if else)
if (age >= 18) {
    if (age > 20 && age < 35)
        console.log("you are suitable for anything")
    else
        console.log("You are eligible")
    /* if you write multiple line in else or 
    if you need to give curly braces'{}' in one line 
    it is optional */
} else if (age < 9) {
    console.log("you are kid")
}
else {
    console.log("you are not eligible")
}

// switch case
switch (age) {
    case 20:
        console.log('go for work');
        break;
    case age > 20: // condition is not work in switch case
        console.log('study hard');

    default:

        break;
}
console.log("You can", (age < 18 ? "not drive" : "drive" ));//ternary operator