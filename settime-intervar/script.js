/* syntax
setTimeout(code)
setTimeout(code, delay)

setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2)
setTimeout(functionRef, delay, param1, param2,...,paramN)
*/
let divObj=document.getElementById('container');
// let a =setTimeout(()=>{
//     alert('this is in timeout');
// },5000);
// let b = prompt('do you want to run the set time out');
// if(b=='n'){
//     clearTimeout(a);
// }
// console.log(a);
const sum = (a, b) => {
    console.log('this is ' + (a + b));
}
setTimeout(sum, 5000, 6, 7);

// running the function every 2 secs 
let i = 0;
let b = setInterval(() => {
    divObj.innerHTML+=` hello ${i++} `;
}, 2000)

const stopInterval = () => {
    clearInterval(b);
    divObj.innerHTML+='interval stopped'
}