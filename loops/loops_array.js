let num =[3,5,7,8,9];
// classic for loop
for(let i=0;i<num.length;i++){
    // console.log(num[i]);
}
/*============for each=============*/
/* syntax https://www.w3schools.com/jsref/jsref_forEach.asp
array.forEach(function(currentValue, index, arr), thisValue)
function()	Required.
            A function to run for each array element.

currentValue    Required.
                The value of the current element.

index	Optional.
        The index of the current element
        
arr	Optional.
    The array of the current element.

thisValue	Optional. Default undefined.
            A value passed to the function as its this value.
*/
// ex-1
/* if you wondering how this is working it is actually function without name 
just 1 argument (element) we don't need this function name because this function is 
directly working in foreach so we don't need to call their name. you can do separately also like
const anyFunction=(element)=>{
    console.log(element*element);
}
num.forEach(anyFunction);
 */
num.forEach((element)=>{
    console.log(element*element);//9 25 49 64 81
})
// ex-2
const fruits = ["apple", "orange", "cherry"];
const myFunction=(item,index)=>{
    console.log(index+':'+item);
}
fruits.forEach(myFunction);
// ex-3
const numbers = [65, 44, 12, 4];
function myFunction2(item, index, arr) {
    arr[index] = item * 10;
    console.log(arr[index]);
}
numbers.forEach(myFunction2);

// Array.from this is very important method
// https://www.w3schools.com/jsref/jsref_from.asp

// syntax: Array.from(object, mapFunction, thisValue)
/*
object	Required.
        The object to convert to an array.

mapFunction	Optional.
            A map function to call on each item.
thisValue	Optional.
            A value to use as this for the mapFunction
*/
// it used to create an array from any other object
// it very use full in dom manipulation we will see in future
let string ='hello world'
console.log(Array.from(string));
// use case by dom manipulation
/* go any random web page in inspect at element section copy any class the do in console section
a=document.getElementsByClassName('copied class name')
console.log(a,typeof a);//give you a html collection,object
a.forEach((element)=>{console.log(element)})// if you try to run for each 
                                            //uncaught TypeError: a.forEach is not a function 
b=Array.form(a);//it return an array and it did not effect the original source
b.forEach((element)=>{console.log(element)})// it will return array perfectly
*/

// for...of loop
for (const i of num) {
    console.log(i);
}
// for...in
for (const index in num) {
    console.log(index,num[index]);
}