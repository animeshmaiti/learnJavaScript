let b=document.body;
console.log("first child of node is: ",b.firstChild);// #text
console.log("first child of element node is: ",b.firstElementChild);// nav
const changeBgColor= ()=>{//create function
    document.body.firstElementChild.style.background='red'
}
// changeBgColor();//revoke function