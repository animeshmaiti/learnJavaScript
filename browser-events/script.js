/* Syntax
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
type:
A case-sensitive string representing the event type to listen for
*/
let btn = document.getElementById('btn');
btn.addEventListener('click',(e)=>{
    console.log(e);//this 'e' is event object contains information about the event
    console.log(e.clientX,e.clientY);// it giving the position where you clicked in btn
    console.log('hello world');
})
btn.addEventListener('click',()=>{
    console.log('hello world 2');
})

btn.removeEventListener('click',()=>{
    console.log('hello world 2');
})
//this way the both function will work in event listener if we try to remove event listener
// its not removing event listener because we create these function in locally so in remove 
// listener it is also deferent function from before so we need to create a function with reference 
// globally like bellow
let x =()=>{
    console.log('hello world');
}
let y =()=>{
    console.log('hello world 2');
}
btn.addEventListener('click',x);
btn.addEventListener('click',y);
// now if we remove event listener it will work
//when you entered '1' in prompt it will remove the 2nd event listener mean 'y'
// let a=prompt("enter a number?");
let a=1;
if(a=="1"){
    btn.removeEventListener('click',y);
}