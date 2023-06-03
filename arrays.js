let marks=[78,68,89,88,null,'not present']
console.log(marks);
console.log(marks[4]);
console.log(marks[6]);//dose not exist so,undefined
marks[8]=45/*if you can add an item and here we skiped 6th and 7th item so,
            it will be 2 empty items not 0,null or something else*/
// marks[10]='gg'
console.log(marks);
console.log(typeof marks);//it will return object
console.log(typeof marks[0]);//number
// you can update item with their corresponding index
marks[6]=67;
console.log(marks);
console.log(marks.length);//return the length of array include empty items
/*=========Array methods========*/ 
let a = marks.toString();
console.log(a,typeof a);//not convert original array it return a new array or string or else 
a = marks.join('_');
console.log(a);
// effect the original arrays
marks.pop();//remove a item from last index
console.log(marks);
marks.push(35);// add a item at end of array 
console.log(marks);
marks.shift();//remove the 1st item
console.log(marks);
marks.unshift(78);//add a item at first
console.log(marks);