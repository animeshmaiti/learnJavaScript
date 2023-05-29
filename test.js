const prompt = require("prompt-sync")({ sigint: true });

let age = prompt("What's your age? ");
age = Number.parseInt(age);
console.log(age);
// conditional statement (if else)
if (age >= 18) {
        console.log("You are eligible")
} else if (age < 9) {
    console.log("you are kid")
}
else {
    console.log("you are not eligible")
}