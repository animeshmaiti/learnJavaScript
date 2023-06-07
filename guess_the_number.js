const prompt = require("prompt-sync")({ sigint: true });
let num=Math.floor(Math.random() * 101);
// console.log(num);
let inputVal=null,points=100,numberOfGuess=0;
while (num!=inputVal) {
    numberOfGuess++
    inputVal=prompt('enter your guess: ');
    parseInt(inputVal);// prompt taking input as string so typecast into a int
    if(inputVal>num){
        console.log('your guessed number is higher then the original number');
        points--
    } else if(inputVal<num){
        console.log('your guessed number is lower then the original number');
        points--
    }
}
console.log(`you guessed ${inputVal} it right in ${numberOfGuess} guess and your point is ${points}`);
