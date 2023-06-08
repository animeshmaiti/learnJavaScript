// console.log(console)
let runAgain = true;
const canDrive = (age) => {
    return age >= 18
}
while (runAgain) {
    let age = prompt('Enter your age');
    age = Number.parseInt(age);
    if(age<0){
        console.error('invalid age input')
        break;
    }
    if (canDrive(age))
        alert('you can drive');
    else
        alert('you cannot drive');
    runAgain = confirm("do you want the prompt again");// confirm is a type of alert if you cancel it return false 
}