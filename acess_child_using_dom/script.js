console.log(document.body.firstChild);//#text
console.log(document.body.lastChild);//#script
console.log(document.body.childNodes);/* NodeList(4) [text, div, text, script]
0:text
1:div
2:text
3:script
4:text
5:comment
6:text
7:script
8:text
length:9
[[Prototype]]:NodeList; 
this is node list not array if you want array then you need to convert into array like below=>*/
let arr =Array.from(document.body.childNodes);
console.log(arr);/*When you convert a NodeList into an array, the length of the array changes 
because the NodeList is a live collection of nodes and the array is not. The length of the array
will be equal to the number of elements in the NodeList at the time of conversion. If you add or 
remove elements from the NodeList after converting it to an array, the length of the array will 
not change accordingly*/

