// const prompt = require("prompt-sync")({ sigint: true });
const character = 'SWG';
let runAgain = true, i = 0, j = 0;
while (runAgain) {
    let num = Math.floor(Math.random() * 3);
    console.log(character[num]);
    let a = prompt('enter you choice S=snake W=water G=gun');
    a = a.toUpperCase();

    if (character[num] == a) {
        alert("Match draw");
        runAgain = confirm("do you want the prompt again");
    }
    else if (character[num] == 'S' && a == 'W') {
        alert('you lost the match');
        j++;
        runAgain = confirm("do you want the prompt again");
    }
    else if (character[num] == 'W' && a == 'G') {
        alert('you lost the match');
        j++;
        runAgain = confirm("do you want the prompt again");
    }
    else if (character[num] == 'G' && a == 'S') {
        alert('you lost the match');
        j++;
        runAgain = confirm("do you want the prompt again");
    }
    else if (character[num] == 'S' && a == 'G') {
        alert('you win the match');
        i++;
        runAgain = confirm("do you want the prompt again");
    }
    else if (character[num] == 'W' && a == 'S') {
        alert('you win the match');
        i++;
        runAgain = confirm("do you want the prompt again");
    }
    else if (character[num] == 'G' && a == 'W') {
        alert('you win the match');
        i++;
        runAgain = confirm("do you want the prompt again");
    }
    alert(`your score is ${i} and comp score is ${j}`)

}