console.log(document.body.firstChild);
let a= document.body.firstChild;
console.log(a.parentNode);
console.log(a.parentElement);
console.log(document.documentElement);//html
// html parent mode is #document but there have no element(head,body,div...) in parent so 
//parent element is null
console.log(document.documentElement.parentNode);// #document
console.log(document.documentElement.parentElement);// null