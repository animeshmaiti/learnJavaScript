// change the card title color
// using class name
let title=document.getElementsByClassName('card-title')[0];
/*[0] is for first card-title class same class can use multiple
 times so we need to specify the class by the index other wise all
 same class name will effect otherwise you can use getElementById() */
 title.style.color='red';
 //using id
let text=document.getElementById('c-text');
text.style.color='blue';
let cTitles=document.querySelectorAll('.card-title');
cTitles[0].style.color='red';
cTitles[1].style.color='green';
cTitles[2].style.color='blue';
document.querySelector('.this').style.color='cyan';
console.log(document.getElementsByTagName('a'));
console.log(document.querySelector('.card').getElementsByTagName('a'));
console.log(document.getElementsByName('search'));