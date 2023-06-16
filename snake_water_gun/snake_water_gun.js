/*
use javascript to create a game of snake water gun, the game should 
ask you to enter S,W,G. The computer should be able to randomly generate
S, W or G and declare win or loss using alert use confirm and prompt
whenever required
*/
// const prompt = require("prompt-sync")({ sigint: true });
const character = 'SWG';
let runAgain = true, i = 0, j = 0;
const win='you win the match',lost='you lost the match';
let divObj=document.getElementById('result');
const documentWrite=(massage)=>{
    divObj.innerHTML=`
    <div class='result'>${massage}</div>
    <div class='score'>comp score is: ${j}</div>
    <div class='score'>your score is: ${i}</div>
    `
}
const playAgain=()=>{
    let num = Math.floor(Math.random() * 3);
    console.log(character[num]);
    let user = prompt('enter your choice S=snake W=water G=gun');
    user = user.toUpperCase();

    if (character[num] == user) {
        documentWrite('draw');
    }
    else if (character[num] == 'S' && user == 'W') {
        j++;
        documentWrite(lost);
    }
    else if (character[num] == 'S' && user == 'G') {
        i++;
        documentWrite(win);
    }
    else if (character[num] == 'W' && user == 'G') {
        // alert('you lost the match');
        j++;
        documentWrite(lost);
    }
    else if (character[num] == 'W' && user == 'S') {
        // alert('you win the match');
        i++;
        documentWrite(win);
    }
    else if (character[num] == 'G' && user == 'S') {
        // alert('you lost the match');
        j++;
        documentWrite(lost);
    }
    else if (character[num] == 'G' && user == 'W') {
        // alert('you win the match');
        i++;
        documentWrite(win);
    }
}